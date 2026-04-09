import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Invitation", href: "#invitation" },
  { label: "Details", href: "#details" },
  { label: "Dress Code", href: "#dresscode" },
  { label: "Venue", href: "#venue" },
  { label: "RSVP", href: "#rsvp" },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {scrolled && (
        <motion.nav
          className="fixed top-0 left-0 right-0 z-40 bg-background/90 backdrop-blur-md border-b border-border"
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -60, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="max-w-4xl mx-auto flex items-center justify-center gap-8 py-4 px-4 overflow-x-auto">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navigation;
