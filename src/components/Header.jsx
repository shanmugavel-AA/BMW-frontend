import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";

const megaMenu = [
  {
    label: "Digital Marketing Services",
    link: "/digital-marketing-services-in-dubai",
    items: [
      {
        label: "Search Engine Optimization",
        link: "/seo-company-in-dubai",
      },
      {
        label: "Social Media Marketing",
        link: "/social-media-marketing-in-dubai",
      },
      {
        label: "Search Engine Marketing",
        link: "/search-engine-marketing-in-dubai",
      },
      {
        label: "Content Marketing",
        link: "/content-marketing-in-dubai",
      },
      { label: "Email Marketing", link: "/email-marketing-in-dubai" },
      {
        label: "Influencer Marketing",
        link: "/influencer-marketing-in-dubai",
      },
      { label: "Video Production", link: "/video-production-in-dubai" },
      { label: "Brand Strategy", link: "/brand-strategy-in-dubai" },
    ],
  },
  {
    label: "Graphic Design Services",
    link: "/graphic-design-services-in-dubai",
    items: [
      { label: "Logo Design", link: "/logo-design-in-dubai" },
      { label: "Banner Design", link: "/banner-design-in-dubai" },
      {
        label: "Brochure Design",
        link: "/brochure-design-in-dubai",
      },
      {
        label: "Flyer Design",
        link: "/flyer-design-in-dubai",
      },
      {
        label: "Package Design",
        link: "/package-design-in-dubai",
      },
      {
        label: "Business Card Design",
        link: "/business-card-design-in-dubai",
      },
      // add a divider if you want
      { type: "divider" }, // for a visual break
      {
        label: "Web Design Services",
        link: "/web-design-services-in-dubai",
        items: [
          { label: "UI UX Design", link: "/ui-ux-design-in-dubai" },
          { label: "Website Redesign", link: "/website-redesign-in-dubai" },
        ],
      },
    ],
  },
  {
    label: "Website Development",
    link: "/website-development-services-in-dubai",
  },
];

const businessSolutions = [
  "Real Estate",
  "Healthcare",
  "Education",
  "Retail",
  "FMCG",
  "Automobile",
  "Banking",
  "IT/Tech",
  "Jewelry",
];

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return width;
}

export default function Header() {
  const width = useWindowWidth();
  return width >= 768 ? <DesktopHeader /> : <MobileHeader />;
}

function DesktopHeader() {
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [showBusinessDropdown, setShowBusinessDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  const menuRef = useRef(null);
  const businessDropdownRef = useRef(null);
  const businessCloseTimerRef = useRef(null);
  const closeTimerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target))
        setShowMegaMenu(false);
      if (
        businessDropdownRef.current &&
        !businessDropdownRef.current.contains(e.target)
      )
        setShowBusinessDropdown(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setShowMegaMenu(true);
  };

  const handleMouseLeave = () => {
    closeTimerRef.current = setTimeout(() => setShowMegaMenu(false), 250);
  };

  const handleBusinessMouseEnter = () => {
    if (businessCloseTimerRef.current) {
      clearTimeout(businessCloseTimerRef.current);
      businessCloseTimerRef.current = null;
    }
    setShowBusinessDropdown(true);
  };

  const handleBusinessMouseLeave = () => {
    businessCloseTimerRef.current = setTimeout(
      () => setShowBusinessDropdown(false),
      250
    );
  };

  const handleLinkClick = () => {
    setShowMegaMenu(false);
    setShowBusinessDropdown(false);
  };

  return (
    <>
    <header
      className={`fixed top-8 z-50 md:left-auto md:right-auto sm:left-[30vh] sm:right-[30vh] lg:left-[30vh] lg:right-[30vh]`}
      style={{
        maxWidth: "calc(100% - 64px)",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <div className="flex justify-center items-center relative md:space-x-12">
        <nav
  className={`hidden md:flex items-center space-x-12 px-4 py-4 shadow-md rounded-md transition-all duration-300 ${
    scrolled ? "bg-primary bg-opacity-95 text-secondary" : "bg-white bg-opacity-40 text-primary"
  }`}
>

          <NavLink
            to="/"
            className={`flex items-center cursor-pointer ${
              scrolled ? "text-secondary" : "text-primary"
            }`}
          >
            <img
              src="/assets/Logo/BMW-logo.png" // put your logo path here (public folder or import)
              alt="Brand Logo"
              className="h-10 w-40 flex-shrink-0" // adjust size
            />
          </NavLink>

          <NavLink
            to="/"
            className="group font-medium text-sm sm:text-base md:text-lg hover:text-accent"
            exact
            onClick={handleLinkClick}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className="group font-medium text-sm sm:text-base md:text-lg hover:text-accent"
            onClick={handleLinkClick}
          >
            About Us
          </NavLink>

          <div
            className="relative"
            ref={menuRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="group font-medium text-sm sm:text-base md:text-lg hover:text-accent">Services</button>

            {showMegaMenu && (
              <div className="absolute top-10 left-1/2 -translate-x-1/4 mt-2 w-[900px] bg-white shadow-lg rounded-2xl py-10 px-14 flex gap-10 z-50 border border-gray-100">
                {megaMenu.map((section, idx) => {
                  const items = section.items || [];
                  const isActiveSection =
                    items.some((item) => item.link === currentPath) ||
                    section.link === currentPath;

                  return (
                    <div key={idx} className="flex-1 min-w-[140px]">
                      <NavLink
                        to={section.link || "#"}
                        className={`block font-semibold mb-4 text-base tracking-wide ${
                          isActiveSection
                            ? "text-accent font-bold"
                            : "text-gray-900"
                        } hover:text-accent transition`}
                        onClick={handleLinkClick}
                      >
                        {section.label}
                      </NavLink>

                      {items.length > 0 && (
                        <ul className="flex flex-col gap-2">
                          {items.map((item, i) => {
                            if (item.type === "divider") {
                              return (
                                <hr key={i} className="my-1 border-gray-200" />
                              );
                            }
                            if (item.items) {
                              return (
                                <div key={i} className="mt-3">
                                  <NavLink
                                    to={item.link || "#"}
                                    className={`font-semibold mb-2 text-base block hover:text-accent transition ${
                                      item.link === currentPath
                                        ? "text-accent font-bold"
                                        : "text-gray-900"
                                    }`}
                                    onClick={handleLinkClick}
                                  >
                                    {item.label}
                                  </NavLink>
                                  <ul className="flex flex-col gap-2">
                                    {item.items.map((subitem, j) => (
                                      <li key={j}>
                                        <NavLink
                                          to={subitem.link}
                                          className="block px-2 py-1 rounded-lg text-sm text-gray-700 hover:text-accent hover:bg-gray-50"
                                          onClick={handleLinkClick}
                                        >
                                          {subitem.label}
                                        </NavLink>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              );
                            }
                            return (
                              <li key={i}>
                                <NavLink
                                  to={item.link}
                                  className="block px-2 py-1 rounded-lg text-sm text-gray-700 hover:text-accent hover:bg-gray-50"
                                  onClick={handleLinkClick}
                                >
                                  {item.label}
                                </NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      )}

                      {items.length === 0 && (
                        <div className="mt-6 text-gray-400 text-sm italic px-2"></div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div
            className="relative"
            ref={businessDropdownRef}
            onMouseEnter={handleBusinessMouseEnter}
            onMouseLeave={handleBusinessMouseLeave}
          >
            <button className="group font-medium text-sm sm:text-base md:text-lg hover:text-accent">
              Business Solutions
            </button>

            {showBusinessDropdown && (
              <ul className="absolute top-10 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                {businessSolutions.map((solution, idx) => (
                  <li key={idx}>
                    <NavLink
                      to={`/${solution.toLowerCase().replace(/\s/g, "-")}`}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-accent transition"
                      onClick={handleLinkClick}
                    >
                      {solution}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <NavLink
            to="/blogs-listing"
            className="group font-medium text-sm sm:text-base md:text-lg hover:text-accent"
            onClick={handleLinkClick}
          >
            Blog
          </NavLink>

          <NavLink
            to="/contact"
            className="group font-medium text-sm sm:text-base md:text-lg hover:text-accent"
            onClick={handleLinkClick}
          >
            Contact Us
          </NavLink>
        </nav>
      </div>
    </header>
    
    </>
  );
}

function MobileHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 bg-white shadow-md rounded-lg ml-4 mr-4 p-4">
      <div className="flex justify-between items-center max-w-[480px] mx-auto">
        <NavLink to="/" className="text-2xl font-bold text-secondary">
          <img
              src="/assets/Logo/BMW-logo.png" // put your logo path here (public folder or import)
              alt="Brand Logo"
              className="h-10 w-40 flex-shrink-0" // adjust size
            />
        </NavLink>
        <button
          aria-label="Toggle menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="focus:outline-none"
        >
          {mobileMenuOpen ? (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <nav className="max-w-[480px] mx-auto mt-4 space-y-4">
          <NavLink
            to="/"
            className="block font-medium hover:text-accent"
            onClick={handleLinkClick}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="block font-medium hover:text-accent"
            onClick={handleLinkClick}
          >
            About Us
          </NavLink>

          <MobileDropdown
            title="Services"
            items={megaMenu}
            currentPath={currentPath}
            onClick={handleLinkClick}
          />
          <MobileDropdown
            title="Business Solutions"
            items={businessSolutions.map((solution) => ({
              label: solution,
              link: `/${solution.toLowerCase().replace(/\s/g, "-")}`,
            }))}
            currentPath={currentPath}
            onClick={handleLinkClick}
          />
          <NavLink
            to="/blog"
            className="block font-medium hover:text-accent"
            onClick={handleLinkClick}
          >
            Blog
          </NavLink>
          <NavLink
            to="/contact"
            className="block font-medium hover:text-accent"
            onClick={handleLinkClick}
          >
            Contact Us
          </NavLink>
        </nav>
      )}
    </header>
  );
}

function MobileDropdown({ title, items, currentPath, onClick }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {title && (
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex justify-between items-center font-medium text-left py-3 border-b border-gray-200"
          aria-expanded={open}
        >
          {title}
          <svg
            className={`w-4 h-4 transition-transform ${
              open ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      )}

      {open && (
        <ul className="pl-4 mt-2 space-y-1 max-h-[48vh] overflow-auto">
          {items.map((section, idx) =>
            section.items ? (
              <li key={idx}>
                {/* Recursive call for deeper nesting */}
                <MobileDropdown
                  title={section.label}
                  items={section.items}
                  currentPath={currentPath}
                  onClick={onClick}
                />
              </li>
            ) : (
              <li key={idx}>
                <NavLink
                  to={section.link || "#"}
                  className={`block py-3 hover:text-accent ${
                    section.link === currentPath
                      ? "text-accent font-bold"
                      : "text-gray-700"
                  }`}
                  onClick={onClick}
                >
                  {section.label}
                </NavLink>
              </li>
            )
          )}
        </ul>
      )}
    </div>
  );
}
