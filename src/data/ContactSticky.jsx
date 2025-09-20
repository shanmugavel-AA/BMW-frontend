import React from "react";
import { useNavigate } from "react-router-dom"; // if using React Router

const ContactSticky = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact"); // adjust route as per your React Router setup
  };

  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50">
      <button
        onClick={handleClick}
        className="bg-accent text-white font-bold px-4 py-3 hover:border-2 hover:border-black hover:bg-accent transition-transform transform hover:scale-105 flex flex-col items-center justify-center"
        style={{ writingMode: "vertical-rl", textOrientation: "sideways" }} // makes text vertical
      >
        Contact Us
      </button>
    </div>
  );
};

export default ContactSticky;


// ContactSticky.jsx
// import React from "react";

// const ContactSticky = () => {
//   return (
//     <div
//       className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50"
//       style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
//     >
//       <a
//         href="#contact"
//         className="bg-blue-800 text-white px-4 py-2 rounded-l-lg font-semibold hover:bg-blue-700 transition-colors"
//       >
//         GET IN TOUCH
//       </a>
//     </div>
//   );
// };

// export default ContactSticky;
