import floralBottom from "@/assets/floral-bottom.png";
import { wedding } from "@/config/wedding";

const Footer = () => {
  return (
    <section className="relative section-padding text-center overflow-hidden">
      <img
        src={floralBottom}
        alt=""
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] max-w-lg opacity-60 pointer-events-none rotate-180"
      />
      <div className="relative z-10">
        <p className="font-script text-4xl text-primary mb-4">{wedding.brideName} & {wedding.groomName}</p>
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">
          {wedding.dateShort}
        </p>
        <div className="gold-divider" />
        <p className="font-sans text-xs text-muted-foreground">
          {wedding.footerNote}
        </p>
      </div>
    </section>
  );
};

export default Footer;
