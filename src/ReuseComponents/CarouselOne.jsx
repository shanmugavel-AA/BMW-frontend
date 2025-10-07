import LogoLoop from "./LogoLoop";

const ClientCarousel = ({ logos, bgColor }) => {
  const bgClass = bgColor || "bg-white";
  return (
    <section className={`w-full py-10 ${bgClass}`}>
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Row 1: Left to Right */}
        <LogoLoop
          logos={logos}
          speed={50} // adjust speed
          direction="right"
          logoHeight={120}
          gap={40}
          pauseOnHover={true}
          fadeOut={true}
          fadeOutColor="#fff"
          scaleOnHover={true}
          ariaLabel="Client Logos Row 1"
        />
      </div>
    </section>
  );
};

export default ClientCarousel;
