import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Clock, MapPin } from "lucide-react";

const EventDetails = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const details = [
    {
      icon: Calendar,
      title: "Date",
      info: "Saturday, 15th November 2025",
    },
    {
      icon: Clock,
      title: "Time",
      info: "11:00 AM – 4:00 PM",
    },
    {
      icon: MapPin,
      title: "Venue",
      info: "Dewan Seri Endon, Shah Alam, Selangor, Malaysia",
    },
  ];

  return (
    <section id="details" className="section-padding" ref={ref}>
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <p className="font-script text-2xl text-primary mb-2">Save the Date</p>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Event Details</h2>
        <div className="gold-divider" />

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {details.map((detail, i) => (
            <motion.div
              key={detail.title}
              className="flex flex-col items-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 * (i + 1) }}
            >
              <div className="w-14 h-14 rounded-full border border-primary flex items-center justify-center">
                <detail.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-lg text-foreground">{detail.title}</h3>
              <p className="font-sans text-sm text-muted-foreground">{detail.info}</p>
            </motion.div>
          ))}
        </div>

        {/* Reception info */}
        <motion.div
          className="mt-16 p-8 bg-card rounded-lg border border-border"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="font-script text-2xl text-primary mb-4">Reception</p>
          <p className="font-sans text-sm text-muted-foreground leading-relaxed">
            The reception will begin at <span className="text-foreground font-medium">12:00 PM</span> with a traditional Malay feast. 
            Entertainment and festivities will follow.
          </p>
          <div className="gold-divider" />
          <p className="font-serif text-sm text-foreground italic">
            "And among His signs is that He created for you mates from among yourselves, 
            that you may dwell in tranquility with them." — Ar-Rum 30:21
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default EventDetails;
