import React, { useEffect } from "react";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const aboutItems = [
  {
    subtitle: "Our Vision",
    title: "Innovating for Tomorrow",
    description:
      "We strive to push the boundaries of technology and creativity to craft solutions that shape the future. Our team is dedicated to continuous innovation, ensuring your business stays ahead of the curve. We believe in the power of ideas and the impact they can have on the world. We are committed to delivering exceptional value through our innovative solutions.",
    color: "text-primary",
  },
];

const AboutSection = () => {
  const navigate = useNavigate();

  const handleAboutClick = () => {
    navigate("/about");
  };

  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.init({ duration: 1000, once: true });
    });
  }, []);

  return (
    <section className="py-4 relative text-accent">
      {/* Overlay for a proper blend effect */}
      <div className="absolute inset-0"></div>

      {/* Content container */}
      <div className="relative max-w-7xl mx-auto md:p-8 z-10">
        <h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-secondary"
          data-aos="fade-up"
        >
          About Us
        </h2>

        {aboutItems.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center mb-12 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <div className="w-full md:w-1/2 p-6 text-secondary">
              <h3
                className={`text-accent uppercase mb-2 tracking-wide font-bold`}
              >
                {item.subtitle}
              </h3>
              <h4 className="text-3xl font-bold mb-4 text-secondary">
                {item.title}
              </h4>
              <p className="mb-4 tracking-wider halcom-normal">
                {item.description}
              </p>
              <br />
              <br />
              <button
                onClick={handleAboutClick}
                className={`bg-secondary text-white rounded-full shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 
                          hover:text-primary hover:bg-accent hover:text-bold px-8 py-4 text-sm`}
              >
                Learn More
              </button>
              {/* GIF added below the button */}
              <div>
                <img
                  src="https://1.bp.blogspot.com/-XgILiMe3Zaw/WrFpEh-R-GI/AAAAAAAACxI/0aaobVxi6ugxZBnE7rDTBj5sDDPeZT5rQCLcBGAs/s1600/click-here-gif-4.gif"
                  alt="Click Here GIF"
                  className="w-50 h-50 object-contain"
                />
              </div>
            </div>

            <div className="w-full md:w-1/2 flex justify-center p-6">
              <img
                src="/assets/Logo/BMW-logo.png" 
                alt="Logo"
                className="opacity-80 w-[50vh] h-32" 
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
