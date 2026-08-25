import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Navigation } from "lucide-react";
import { wedding, mapEmbedUrl, mapDirectionsUrl } from "@/config/wedding";

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

        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
          Venue Location
        </h2>

        <div className="gold-divider" />

        <p className="font-sans text-sm text-muted-foreground mb-8">
          {wedding.venueAddress}
        </p>

        <motion.div
          className="rounded-lg overflow-hidden border border-border shadow-sm"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <iframe
            src={mapEmbedUrl}
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
          href={mapDirectionsUrl}
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
