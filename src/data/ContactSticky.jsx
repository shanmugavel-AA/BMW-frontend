import React from "react";
import { useNavigate } from "react-router-dom"; // if using React Router

const ContactSticky = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact"); // adjust route as per your React Router setup
  };

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
      <button
        onClick={handleClick}
        className="bg-accent text-white font-semibold px-3 py-2 rounded-l-md shadow-lg hover:bg-accent/90 transition-transform duration-200 hover:scale-105"
        style={{
          writingMode: "vertical-rl",
          textOrientation: "mixed",
        }}
      >
        Contact Us
      </button>
    </div>
  );
};

export default ContactSticky;
