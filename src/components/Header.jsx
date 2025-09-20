import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  {
    label: "Services",
    to: "/services",
    submenu: [
      { label: "SEO & Content Strategy", to: "/services/seo" },
      { label: "Social Media Marketing", to: "/services/social-media" },
      { label: "Web Designing", to: "/services/web-designing" },
      { label: "Influencer Marketing", to: "/services/influencer" },
      { label: "Web Development", to: "/services/web-development" },
      { label: "Branding & Identity", to: "/services/branding" },
      { label: "Video Marketing", to: "/services/video" },
      { label: "Marketing Automation", to: "/services/automation" },
    ],
  },
  {
    label: "Business Solutions",
    submenu: [
      { label: "E-Commerce & D2C", to: "/business-solutions/ecommerce" },
      { label: "FMCG & Retail", to: "/business-solutions/retail" },
      { label: "Banking & Financial", to: "/business-solutions/finance" },
      { label: "Growth Startups", to: "/business-solutions/startups" },
      { label: "Healthcare", to: "/business-solutions/healthcare" },
      { label: "Education", to: "/business-solutions/education" },
      { label: "Real Estate", to: "/business-solutions/real-estate" },
    ],
  },
  {
    label: "Company",
    submenu: [
      { label: "FAQ", to: "/faq" },
      { label: "About Us", to: "/about" },
      { label: "Testimonials", to: "/testimonials" },
      { label: "Case Study", to: "/case-study" },
    ],
  },
  { label: "Careers", to: "/careers" },
  { label: "Blog", to: "/blogs-listing" },
  { label: "Contact", to: "/contact" },
];

export default function FloatingHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedIdx, setExpandedIdx] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Handle resize
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-4 inset-x-0 mx-auto w-[90%] sm:w-[95%] md:max-w-6xl px-4 py-3 rounded-2xl transition-colors duration-100 z-50 shadow-lg
      ${scrolled ? "bg-black/90 text-white" : "bg-white/40 text-black"}`}
      style={{
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <nav
        className="flex items-center justify-between"
        aria-label="Main Navigation"
      >
        {/* Logo */}
        <img
    src="https://www.brandandmediaworks.com/wp-content/uploads/2025/04/Layer_1.png"
    alt="YourCompany Logo"
    className="h-12 w-auto"
  />

        {/* Desktop Nav */}
        {!isMobile && (
          <ul className="flex items-center space-x-6 font-medium text-sm lg:text-base">
            {navItems.map((item, idx) => {
              const hasSubmenu = !!item.submenu;
              const isOpen = expandedIdx === idx;

              return (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => hasSubmenu && setExpandedIdx(idx)}
                  onMouseLeave={() => hasSubmenu && setExpandedIdx(null)}
                >
                  {hasSubmenu ? (
                    <>
                      <Link
                        to={item.to}
                        className="flex items-center gap-1 font-semibold hover:text-accent transition px-2 py-1"
                        onClick={() => setExpandedIdx(isOpen ? null : idx)}
                      >
                        {item.label}
                        <svg
                          className={`w-3 h-3 transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </Link>
                      <ul
                        className={`absolute left-0 top-full mt-2 w-52 bg-black text-white rounded-md shadow-lg py-2 text-sm transition-all duration-200
                        ${
                          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                        }`}
                      >
                        {item.submenu.map((subitem) => (
                          <li key={subitem.label}>
                            <Link
                              to={subitem.to}
                              className="block px-4 py-2 hover:bg-accent transition"
                            >
                              {subitem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      to={item.to}
                      className="font-semibold px-2 py-1 hover:text-accent transition"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        )}
        {/* Mobile Hamburger */}
        {isMobile && !mobileMenuOpen && (
          <button
            className="text-3xl focus:outline-none z-50 relative"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            ☰
          </button>
        )}
      </nav>

      {/* Mobile Slide-in Menu */}
      {isMobile && (
        <>
          {/* Overlay */}
          <div
            className={`fixed inset-0 z-40 transition-opacity duration-300 ${
              mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Slide-in drawer */}
          <div
            className={`fixed top-0 right-0 h-full w-full bg-black text-white rounded-2xl transform transition-transform duration-300 z-50 shadow-xl
        ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
          >
            {/* Close button */}
            <button
              className="absolute top-3 right-5 text-3xl text-white z-50 focus:outline-none"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close Menu"
            >
              ✕
            </button>

            {/* Menu items */}
            <ul className="flex flex-col rounded-2xl mt-20 bg-black space-y-2 px-4 font-semibold text-lg">
              {navItems.map((item, idx) => {
                const hasSubmenu = !!item.submenu;
                const isOpen = expandedIdx === idx;
                return (
                  <li key={item.label}>
                    {hasSubmenu ? (
                      <>
                        <button
                          className="flex w-full justify-between items-center px-3 py-2 rounded hover:bg-gray-800 transition"
                          onClick={() => setExpandedIdx(isOpen ? null : idx)}
                        >
                          {item.label} <span>{isOpen ? "▲" : "▼"}</span>
                        </button>
                        {isOpen && (
                          <ul className="ml-3 mt-1 flex flex-col space-y-1">
                            {item.submenu.map((subitem) => (
                              <li key={subitem.label}>
                                <Link
                                  to={subitem.to}
                                  className="block px-3 py-2 rounded hover:bg-yellow-600 transition"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {subitem.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    ) : (
                      <Link
                        to={item.to}
                        className="block px-3 py-2 rounded hover:bg-yellow-600 transition"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      )}

      {/* Mobile Slide-in Menu */}
    </header>
  );
}
