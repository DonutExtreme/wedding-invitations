import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, CalendarDays } from "lucide-react";
import { wedding } from "@/config/wedding";

const WeddingTimeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="timeline" className="section-padding bg-card" ref={ref}>
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <p className="font-script text-3xl text-primary mb-2">Aturcara Majlis</p>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-2">
          Wedding Schedule
        </h2>

        <div className="flex items-center justify-center gap-2 font-sans text-sm text-muted-foreground mb-2">
          <CalendarDays className="w-4 h-4 text-primary" />
          <span>{wedding.dateLong}</span>
        </div>
        <div className="flex items-center justify-center gap-2 font-sans text-sm text-muted-foreground">
          <Clock className="w-4 h-4 text-primary" />
          <span>{wedding.time}</span>
        </div>

        <div className="gold-divider" />

        <div className="max-w-2xl mx-auto mt-12 text-left">
          <div className="relative border-l-2 border-primary/40 ml-4">
            {wedding.timeline.map((item, i) => (
              <motion.div
                key={item.time}
                className="relative pb-10 last:pb-0"
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 * (i + 1) }}
              >
                {/* dot on the line */}
                <span className="absolute -left-[27px] top-1 w-3.5 h-3.5 rounded-full bg-primary border-4 border-background" />

                <div className="pl-6">
                  <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary mb-1">
                    {item.time}
                  </p>
                  <h3 className="font-serif text-lg text-foreground">{item.title}</h3>
                  <p className="font-sans text-sm text-muted-foreground mt-1">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default WeddingTimeline;
