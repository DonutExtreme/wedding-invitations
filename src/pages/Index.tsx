import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import InvitationSection from "@/components/InvitationSection";
import EventDetails from "@/components/EventDetails";
import DressCode from "@/components/DressCode";
import VenueMap from "@/components/VenueMap";
import RSVPSection from "@/components/RSVPSection";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import MusicToggle from "@/components/MusicToggle";
import EnvelopeOpener from "@/components/EnvelopeOpener";

const Index = () => {
  const [opened, setOpened] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <AnimatePresence>
        {!opened && <EnvelopeOpener onOpen={() => setOpened(true)} />}
      </AnimatePresence>

      {opened && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Navigation />
          <HeroSection />
          <InvitationSection />
          <EventDetails />
          <DressCode />
          <VenueMap />
          <RSVPSection />
          <Footer />
          <MusicToggle />
        </motion.div>
      )}
    </div>
  );
};

export default Index;
