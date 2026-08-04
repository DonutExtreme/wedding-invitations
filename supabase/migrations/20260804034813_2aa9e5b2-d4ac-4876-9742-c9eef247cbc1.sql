-- Roles infrastructure
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  role public.app_role NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role
  );
$$;

CREATE POLICY "Users can view their own roles"
ON public.user_roles FOR SELECT TO authenticated
USING (user_id = auth.uid());

-- Lock down rsvp_responses
DROP POLICY IF EXISTS "Authenticated users can view RSVPs" ON public.rsvp_responses;
DROP POLICY IF EXISTS "Anyone can submit RSVP" ON public.rsvp_responses;

REVOKE ALL ON public.rsvp_responses FROM anon;
REVOKE ALL ON public.rsvp_responses FROM authenticated;
GRANT INSERT ON public.rsvp_responses TO anon, authenticated;
GRANT ALL ON public.rsvp_responses TO service_role;

CREATE POLICY "Guests can submit a valid RSVP"
ON public.rsvp_responses FOR INSERT TO anon, authenticated
WITH CHECK (
  length(btrim(name)) BETWEEN 1 AND 200
  AND attendance IN ('Joyfully Accept', 'Regretfully Decline')
  AND guests BETWEEN 1 AND 5
  AND (message IS NULL OR length(message) <= 1000)
);

CREATE POLICY "Admins can view RSVPs"
ON public.rsvp_responses FOR SELECT TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Admin-only read access through a controlled function
CREATE OR REPLACE FUNCTION public.get_rsvp_responses()
RETURNS TABLE (
  id uuid,
  name text,
  attendance text,
  guests integer,
  message text,
  created_at timestamptz
)
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF NOT public.has_role(auth.uid(), 'admin') THEN
    RAISE EXCEPTION 'Not authorized';
  END IF;

  RETURN QUERY
  SELECT r.id, r.name, r.attendance, r.guests, r.message, r.created_at
  FROM public.rsvp_responses r
  ORDER BY r.created_at DESC;
END;
$$;

REVOKE ALL ON FUNCTION public.get_rsvp_responses() FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.get_rsvp_responses() TO authenticated, service_role;