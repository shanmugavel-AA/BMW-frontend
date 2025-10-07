import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { useRef, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import gsap from "gsap";
import CaseStudies from "../CaseStudies/HomeMain.jsx";
import ThreeCoreValues from "./Whyus.jsx";
import Core from "./Core.jsx";
import About from "./about.jsx";
import Notice from "./Notice.jsx";
import BlogSection from "./BlogSection.jsx";
import TestimonialHero from "./Testimonial.jsx";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SEO from "../../ReuseComponents/SEO.jsx";
import ClientCarousel from "../../ReuseComponents/ClientCarouselHome.jsx";
import BlurText from "../../ReuseComponents/Blurtext.jsx";

const logos = [
  {
    src: "https://webboombaa.org/wp-content/uploads/2025/04/Phoenix.png",
    alt: "Google",
  },
  {
    src: "https://webboombaa.org/wp-content/uploads/2025/04/Mercedes.png",
    alt: "Meta",
  },
  {
    src: "https://webboombaa.org/wp-content/uploads/2025/04/Casagrand.png",
    alt: "Amazon",
  },
  {
    src: "https://webboombaa.org/wp-content/uploads/2025/04/PVR.png",
    alt: "Microsoft",
  },
  {
    src: "https://webboombaa.org/wp-content/uploads/2025/04/Palmshore.png",
    alt: "Apple",
  },
];

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // GSAP fade-in effect here stays as is
    gsap.fromTo(
      ".fade-in",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.3 }
    );
  }, []);

  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, []);

  // New: ScrollTrigger refresh after all images load inside containerRef
  useEffect(() => {
    if (!containerRef.current) return;

    const images = containerRef.current.querySelectorAll("img");
    if (images.length === 0) {
      ScrollTrigger.refresh();
      return;
    }

    let loadedCount = 0;
    const onLoad = () => {
      loadedCount++;
      if (loadedCount === images.length) {
        ScrollTrigger.refresh();
      }
    };

    images.forEach((img) => {
      if (img.complete) {
        loadedCount++;
      } else {
        img.addEventListener("load", onLoad);
        img.addEventListener("error", onLoad);
      }
    });

    // In case all were already loaded
    if (loadedCount === images.length) {
      ScrollTrigger.refresh();
    }

    return () => {
      images.forEach((img) => {
        img.removeEventListener("load", onLoad);
        img.removeEventListener("error", onLoad);
      });
    };
  }, []);

  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);
  useEffect(() => {
    AOS.refresh();
  }, []);
  return (
    <div className="bg-primary text-secondary">
      <>
        <SEO
          title="Home page | Shanmugavel Portfolio"
          description="Learn about Shanmugavel A, Frontend Developer and React expert."
          image="https://www.yourdomain.com/images/static-about.jpg" // static image
          canonicalUrl="https://www.brandandmediaworks.com/about"
        />
      </>
      {/* Hero Section with Animated Slider */}
      <section className="relative flex items-center hero-gradient min-h-screen">
        <div className="max-w-7xl mx-auto flex items-start px-6 relative z-10 w-full">
          <div className="flex flex-wrap items-end leading-none">
            {/* Heading with BlurText */}
            <div className="flex flex-col">
              <BlurText
                text="Digital agency"
                delay={450}
                animateBy="words"
                direction="top"
                className="text-7xl md:text-9xl font-extrabold mb-0 text-primary tracking-widest text-start"
                onAnimationComplete={() =>
                  console.log("First heading animation complete")
                }
              />
              <BlurText
                text="Studio"
                delay={400}
                animateBy="words"
                direction="top"
                className="text-7xl md:text-9xl font-extrabold mb-0 text-primary tracking-widest text-start"
              />
            </div>

            {/* Paragraph with BlurText */}
            <BlurText
              text="With every single one of our clients, we bring forth deep passion for creative problem solving which is what we deliver."
              delay={100}
              animateBy="words"
              direction="top"
              className="absolute top-50 md:top-40 md:right-60 text-lg text-gray-400 ml-6 mt-6 md:mt-12 md:w-[60vh]"
            />
          </div>
        </div>
      </section>

      <section>
        <ClientCarousel logos={logos} bgColor={"bg-foggy-black-white"} />
      </section>

      {/* About Section */}
      <About />

      {/* Case Studies Section */}
      <CaseStudies />

      {/* core */}
      <Core />

      {/* Three Core Values Section */}
      <ThreeCoreValues />

      <BlogSection />

      {/* testimonial*/}

      <TestimonialHero />
      <Notice />
    </div>
  );
};

export default Home;
