import { useEffect, useRef, useState } from "react";

export default function FadeOnScroll({ children, type = "up" }) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${getAnimationClass(type)} ${visible ? "visible" : ""}`}
    >
      {children}
    </div>
  );
}

function getAnimationClass(type) {
  switch (type) {
    case "up":
      return "fade-up";
    case "down":
      return "fade-down";
    case "left":
      return "fade-left";
    case "right":
      return "fade-right";
    default:
      return "fade-up";
  }
}
