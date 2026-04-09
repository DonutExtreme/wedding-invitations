import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const colors = [
  { name: "Ivory", color: "hsl(40, 33%, 97%)" },
  { name: "Dusty Rose", color: "hsl(350, 30%, 80%)" },
  { name: "Sage", color: "hsl(140, 15%, 70%)" },
  { name: "Gold", color: "hsl(38, 60%, 55%)" },
  { name: "Champagne", color: "hsl(38, 40%, 80%)" },
];

const DressCode = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="dresscode" className="section-padding bg-card" ref={ref}>
      <motion.div
        className="max-w-2xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <p className="font-script text-2xl text-primary mb-2">What to Wear</p>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Dress Code</h2>
        <div className="gold-divider" />

        <p className="font-sans text-sm text-muted-foreground mb-10">
          We kindly request our guests to dress in soft, elegant tones to complement our colour palette.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          {colors.map((c, i) => (
            <motion.div
              key={c.name}
              className="flex flex-col items-center gap-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
            >
              <div
                className="w-14 h-14 rounded-full border-2 border-border shadow-sm"
                style={{ backgroundColor: c.color }}
              />
              <span className="font-sans text-xs text-muted-foreground">{c.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default DressCode;
