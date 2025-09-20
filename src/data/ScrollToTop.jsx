import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll the main page to top
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    // Wait a tick and refresh all GSAP ScrollTriggers
    requestAnimationFrame(() => {
      ScrollTrigger.getAll().forEach((st) => st.refresh());
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
