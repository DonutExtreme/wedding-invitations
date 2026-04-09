import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Navigation } from "lucide-react";

const VenueMap = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="venue" className="section-padding" ref={ref}>
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <p className="font-script text-2xl text-primary mb-2">Find Us</p>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Venue Location</h2>
        <div className="gold-divider" />

        <p className="font-sans text-sm text-muted-foreground mb-8">
          Dewan Seri Endon, Persiaran Sultan, Seksyen 14, 40000 Shah Alam, Selangor
        </p>

        <motion.div
          className="rounded-lg overflow-hidden border border-border shadow-sm"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.0!2d101.5!3d3.07!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMDQnMTIuMCJOIDEwMcKwMzAnMDAuMCJF!5e0!3m2!1sen!2smy!4v1"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Wedding Venue Location"
          />
        </motion.div>

        <motion.a
          href="https://www.google.com/maps/dir/?api=1&destination=3.07,101.5"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 font-sans text-xs tracking-[0.2em] uppercase text-primary border border-primary px-6 py-3 hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Navigation className="w-4 h-4" />
          Get Directions
        </motion.a>
      </motion.div>
    </section>
  );
};

export default VenueMap;
