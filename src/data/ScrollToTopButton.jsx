import { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    show && (
      <a
        href="#top"
        className="fixed bottom-10 right-10 bg-accent text-white px-4 py-2 rounded-full z-50"
      >
        ↑ Top
      </a>
    )
  );
};

export default ScrollToTopButton;
