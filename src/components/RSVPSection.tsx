import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const RSVPSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", attendance: "", guests: "1", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.attendance) {
      toast.error("Please fill in your name and attendance.");
      return;
    }
    if (form.name.trim().length > 200) {
      toast.error("Name is too long.");
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.from("rsvp_responses").insert({
        name: form.name.trim(),
        attendance: form.attendance,
        guests: parseInt(form.guests),
        message: form.message.trim() || null,
      });

      if (error) throw error;

      setSubmitted(true);
      toast.success("Thank you for your RSVP! We look forward to celebrating with you.");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="rsvp" className="section-padding bg-card" ref={ref}>
      <motion.div
        className="max-w-xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <p className="font-script text-2xl text-primary mb-2">Kindly Respond</p>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">RSVP</h2>
        <div className="gold-divider" />

        <p className="font-sans text-sm text-muted-foreground mb-10">
          Please let us know if you can make it by 1st November 2025
        </p>

        {submitted ? (
          <motion.div
            className="py-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <p className="font-script text-4xl text-primary mb-4">Thank You!</p>
            <p className="font-sans text-sm text-muted-foreground">
              Your response has been recorded. We can't wait to celebrate with you!
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            <div>
              <label className="font-sans text-xs tracking-wider uppercase text-muted-foreground mb-2 block">
                Full Name
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border border-border bg-background px-4 py-3 font-sans text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                placeholder="Your full name"
                maxLength={200}
              />
            </div>

            <div>
              <label className="font-sans text-xs tracking-wider uppercase text-muted-foreground mb-2 block">
                Attendance
              </label>
              <div className="flex gap-4">
                {["Joyfully Accept", "Regretfully Decline"].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setForm({ ...form, attendance: option })}
                    className={`flex-1 border px-4 py-3 font-sans text-sm transition-colors duration-200 ${
                      form.attendance === option
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border text-muted-foreground hover:border-primary"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {form.attendance === "Joyfully Accept" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
              >
                <label className="font-sans text-xs tracking-wider uppercase text-muted-foreground mb-2 block">
                  Number of Guests
                </label>
                <select
                  value={form.guests}
                  onChange={(e) => setForm({ ...form, guests: e.target.value })}
                  className="w-full border border-border bg-background px-4 py-3 font-sans text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                >
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n}>{n} {n === 1 ? "Guest" : "Guests"}</option>
                  ))}
                </select>
              </motion.div>
            )}

            <div>
              <label className="font-sans text-xs tracking-wider uppercase text-muted-foreground mb-2 block">
                Message for the Couple
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                maxLength={1000}
                className="w-full border border-border bg-background px-4 py-3 font-sans text-sm text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Share your wishes..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full font-sans text-xs tracking-[0.3em] uppercase bg-primary text-primary-foreground py-4 hover:bg-primary/90 transition-colors duration-300 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send RSVP"}
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
};

export default RSVPSection;
