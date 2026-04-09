import floralBottom from "@/assets/floral-bottom.png";

const Footer = () => {
  return (
    <section className="relative section-padding text-center overflow-hidden">
      <img
        src={floralBottom}
        alt=""
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] max-w-lg opacity-60 pointer-events-none rotate-180"
      />
      <div className="relative z-10">
        <p className="font-script text-4xl text-primary mb-4">Alya & Daniel</p>
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">
          15 · 11 · 2025
        </p>
        <div className="gold-divider" />
        <p className="font-sans text-xs text-muted-foreground">
          We can't wait to celebrate with you
        </p>
      </div>
    </section>
  );
};

export default Footer;
