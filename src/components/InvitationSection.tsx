import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const InvitationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="invitation" className="section-padding bg-card" ref={ref}>
      <motion.div
        className="max-w-2xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <p className="font-script text-3xl text-primary mb-6">Bismillahirrahmanirrahim</p>

        <div className="gold-divider" />

        <p className="font-sans text-sm leading-relaxed text-muted-foreground mb-8">
          With the blessing of Allah SWT, we cordially invite you to celebrate 
          the union of our beloved
        </p>

        <div className="space-y-2 mb-8">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">Name</h2>
          <p className="font-serif text-primary text-xl italic">&</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">Name</h2>
        </div>

        <div className="gold-divider" />

        <p className="font-sans text-sm leading-relaxed text-muted-foreground">
          We would be honoured by your presence as we begin this beautiful 
          journey together. Your prayers and blessings mean the world to us.
        </p>
      </motion.div>
    </section>
  );
};

export default InvitationSection;
