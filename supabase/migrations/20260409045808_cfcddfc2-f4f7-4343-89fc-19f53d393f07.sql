
-- Create RSVP responses table
CREATE TABLE public.rsvp_responses (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  attendance TEXT NOT NULL,
  guests INTEGER NOT NULL DEFAULT 1,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.rsvp_responses ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public wedding invitation)
CREATE POLICY "Anyone can submit RSVP"
  ON public.rsvp_responses
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Only authenticated users can view RSVPs (for admin page)
CREATE POLICY "Authenticated users can view RSVPs"
  ON public.rsvp_responses
  FOR SELECT
  TO authenticated
  USING (true);
