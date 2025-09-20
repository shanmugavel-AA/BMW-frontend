import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import {useRef, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import gsap from "gsap";
import CaseStudies from "../CaseStudies/HomeMain.jsx"; 
import ThreeCoreValues from "./Whyus.jsx";
import Core from "./Core.jsx";
import About from "./about.jsx";
import Notice from "./Notice.jsx";
import BlogSection from "./BlogSection.jsx";
import TestimonialHero from "./Testimonial.jsx"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ClientCarousel from "../../ReuseComponents/ClientsCarousel.jsx"

const logos = [
  { src: "https://webboombaa.org/wp-content/uploads/2025/04/Phoenix.png", alt: "Google" },
  { src: "https://webboombaa.org/wp-content/uploads/2025/04/Mercedes.png", alt: "Meta" },
  { src: "https://webboombaa.org/wp-content/uploads/2025/04/Casagrand.png", alt: "Amazon" },
  { src: "https://webboombaa.org/wp-content/uploads/2025/04/PVR.png", alt: "Microsoft" },
  { src: "https://webboombaa.org/wp-content/uploads/2025/04/Palmshore.png", alt: "Apple" },
];


const heroSlides = [
  {
    title: "Accelerate Your Digital Growth",
    desc: "Result-driven digital marketing services for global impact.",
    cta: "Get a Quote",
    link: "/contact",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Unlock Your Brand's Potential",
    desc: "Innovative strategies for measurable results.",
    cta: "Start Now",
    link: "/contact",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Grow With Data-Driven Marketing",
    desc: "Transform your business with our expertise.",
    cta: "Contact Us",
    link: "/contact",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
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
  return (
    <div className="bg-primary text-secondary">
      {/* Hero Section with Animated Slider */}
      <section className="relative max-w-9xl mx-auto h-[100vh] flex items-center justify-center overflow-hidden">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className} w-2 h-2 rounded-full mx-1 bg-white opacity-50 hover:bg-accent hover:opacity-90 transition-all duration-300"></span>`;
            },
          }}
          className="absolute inset-0 w-full h-full"
        >
          {heroSlides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative w-full h-screen">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1000 scale-100"
                  style={{ zIndex: 1 }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />
                <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
                  <h1 className="text-5xl md:text-6xl font-bold mb-4 text-primary drop-shadow-lg animate-fade-in-up">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-primary mb-8 animate-fade-in-up delay-150">
                    {slide.desc}
                  </p>
                  <a
                    href={slide.link}
                    className="inline-block bg-accent hover:bg-secondary text-primary font-semibold px-10 py-4 rounded-lg transition-all duration-300 shadow-xl animate-fade-in-up delay-300 hover:scale-105 hover:shadow-2xl"
                  >
                    {slide.cta}
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <style>
        {`
    .swiper-pagination-bullet-active {
      background-color: #000000ff !important; /* Tailwind red-600 */
      opacity: 1 !important;
    }
    .swiper-pagination {
      @apply absolute bottom-8 left-0 w-full text-center z-30;
    }
  `}
      </style>

      <section>
      <ClientCarousel logos={logos} />
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
      
      <TestimonialHero/>
      <Notice />
    </div>
  );
};

export default Home;
