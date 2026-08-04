DROP POLICY IF EXISTS "Users can view their own roles" ON public.user_roles;

REVOKE ALL ON public.user_roles FROM anon;
REVOKE ALL ON public.user_roles FROM authenticated;
GRANT ALL ON public.user_roles TO service_role;

REVOKE ALL ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.has_role(uuid, public.app_role) FROM anon;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO authenticated, service_role;

REVOKE ALL ON FUNCTION public.get_rsvp_responses() FROM PUBLIC;
REVOKE ALL ON FUNCTION public.get_rsvp_responses() FROM anon;
GRANT EXECUTE ON FUNCTION public.get_rsvp_responses() TO authenticated, service_role;