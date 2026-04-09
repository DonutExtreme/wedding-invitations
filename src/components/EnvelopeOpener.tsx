import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import floralTop from "@/assets/floral-top.png";

const EnvelopeOpener = ({ onOpen }: { onOpen: () => void }) => {
  const [stage, setStage] = useState<"closed" | "opening" | "done">("closed");

  const handleClick = () => {
    if (stage === "closed") {
      setStage("opening");
      setTimeout(() => setStage("done"), 1800);
      setTimeout(() => onOpen(), 2400);
    }
  };

  return (
    <AnimatePresence>
      {stage !== "done" ? null : undefined}
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }} />

        <div className="relative flex flex-col items-center cursor-pointer" onClick={handleClick}>
          {/* Envelope container */}
          <div className="relative w-[320px] h-[220px] sm:w-[380px] sm:h-[260px]">
            {/* Envelope body */}
            <motion.div
              className="absolute inset-0 rounded-b-md border border-primary/30 overflow-hidden"
              style={{ backgroundColor: "hsl(35, 30%, 92%)" }}
            >
              {/* Envelope texture lines */}
              <div className="absolute bottom-4 left-4 right-4 space-y-2 opacity-10">
                <div className="h-px bg-primary" />
                <div className="h-px bg-primary w-3/4" />
                <div className="h-px bg-primary w-1/2" />
              </div>
            </motion.div>

            {/* Letter that slides up */}
            <motion.div
              className="absolute left-3 right-3 bg-background border border-primary/20 rounded-t-sm shadow-md flex flex-col items-center justify-center px-6 py-4"
              style={{ bottom: "10px", height: "180px" }}
              animate={
                stage === "opening"
                  ? { y: -120, height: 220 }
                  : { y: 0 }
              }
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            >
              <img
                src={floralTop}
                alt=""
                className="w-24 opacity-60 mb-2"
              />
              <p className="font-script text-2xl sm:text-3xl text-primary">Alya & Daniel</p>
              <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-muted-foreground mt-2">
                Wedding Invitation
              </p>
            </motion.div>

            {/* Envelope flap (triangle) */}
            <motion.div
              className="absolute top-0 left-0 right-0 origin-top"
              style={{
                height: "50%",
                clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                backgroundColor: "hsl(35, 28%, 88%)",
                borderBottom: "1px solid hsl(var(--primary) / 0.2)",
              }}
              animate={
                stage === "opening"
                  ? { rotateX: 180, opacity: 0 }
                  : { rotateX: 0, opacity: 1 }
              }
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />

            {/* Seal */}
            <AnimatePresence>
              {stage === "closed" && (
                <motion.div
                  className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg z-10"
                  style={{ top: "35%" }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="font-serif text-primary-foreground text-xs font-bold">A&D</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Call to action */}
          <motion.p
            className="mt-10 font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {stage === "closed" ? "Tap to Open" : ""}
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default EnvelopeOpener;
