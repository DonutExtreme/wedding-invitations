import HeroSection from "@/components/HeroSection";
import InvitationSection from "@/components/InvitationSection";
import EventDetails from "@/components/EventDetails";
import DressCode from "@/components/DressCode";
import VenueMap from "@/components/VenueMap";
import RSVPSection from "@/components/RSVPSection";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import MusicToggle from "@/components/MusicToggle";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <InvitationSection />
      <EventDetails />
      <DressCode />
      <VenueMap />
      <RSVPSection />
      <Footer />
      <MusicToggle />
    </div>
  );
};

export default Index;
