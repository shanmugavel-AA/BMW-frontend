import LogoLoop from "./LogoLoop";

const ClientCarousel = ({ logos, bgColor }) => {
  const bgClass = bgColor || "bg-white";
  return (
    <section className={`w-full py-10 ${bgClass}`}>
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Row 1: Left to Right */}
        <LogoLoop
          logos={logos}
          speed={60} // adjust speed
          direction="left"
          logoHeight={80}
          gap={40}
          pauseOnHover={true}
          scaleOnHover={true}
          ariaLabel="Client Logos Row 1"
        />

        {/* Row 2: Right to Left */}
        <LogoLoop
          logos={logos}
          speed={60} // adjust speed
          direction="right"
          logoHeight={80}
          gap={40}
          pauseOnHover={true}
          scaleOnHover={true}
          ariaLabel="Client Logos Row 2"
        />
      </div>
    </section>
  );
};

export default ClientCarousel;
