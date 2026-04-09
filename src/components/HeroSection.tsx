import { motion } from "framer-motion";
import floralTop from "@/assets/floral-top.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center section-padding overflow-hidden">
      {/* Floral decoration */}
      <motion.img
        src={floralTop}
        alt=""
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-lg opacity-80 pointer-events-none"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 0.8, y: 0 }}
        transition={{ duration: 1.5 }}
      />

      <motion.div
        className="text-center z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <motion.p
          className="font-sans text-xs tracking-[0.4em] uppercase text-muted-foreground mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          We're Getting Married
        </motion.p>

        <motion.h1
          className="font-script text-6xl sm:text-7xl md:text-8xl text-foreground leading-tight"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
        >
          Alya
        </motion.h1>

        <motion.div
          className="flex items-center justify-center gap-4 my-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <span className="w-16 h-px bg-primary" />
          <span className="font-serif text-primary text-2xl italic">&</span>
          <span className="w-16 h-px bg-primary" />
        </motion.div>

        <motion.h1
          className="font-script text-6xl sm:text-7xl md:text-8xl text-foreground leading-tight"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
        >
          Daniel
        </motion.h1>

        <motion.p
          className="font-sans text-sm tracking-[0.3em] uppercase text-muted-foreground mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          15 · 11 · 2025
        </motion.p>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <a
            href="#invitation"
            className="inline-block font-sans text-xs tracking-[0.3em] uppercase text-primary border border-primary px-8 py-3 hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
          >
            View Invitation
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ duration: 2, delay: 2.2, repeat: Infinity }}
      >
        <div className="w-5 h-8 border border-primary/40 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-primary/60 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
