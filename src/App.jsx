import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/footer";

import Home from "./pages/Homes/Home";
import BusinessSolutions from "./pages/BusinessSolutions";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Services from "./pages/Service";
import BlogListing from "./pages/BlogListing";
import BlogDetail from "./pages/BlogDetailing";
import Faq from "./pages/FAQ";
import Testimonials from "./pages/Testimonials";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import CaseStudy from "./pages/CaseStudy";

import "aos/dist/aos.css";
import ScrollToTop from "./data/ScrollToTop";
import ScrollToTopButton from "./data/ScrollToTopButton"
import ContactSticky from "./data/ContactSticky"

import SEO from "./pages/services/Seo";
import SocialMedia from "./pages/services/SocialMedia";
import Performance from "./pages/services/Performance";
import Influencer from "./pages/services/Influencer";
import Multilingual from "./pages/services/Multilingual";
import WebDevelopment from "./pages/services/WebDevelopment";
import Branding from "./pages/services/Branding";
import Video from "./pages/services/Video";
import Automation from "./pages/services/Automation";

import Ecommerce from "./pages/business-solutions/Ecommerce";
import Retail from "./pages/business-solutions/Retail";
import Finance from "./pages/business-solutions/Finance";
import Startups from "./pages/business-solutions/Startups";
import Healthcare from "./pages/business-solutions/Healthcare";
import Education from "./pages/business-solutions/Education";
import RealEstate from "./pages/business-solutions/RealEstate";


function App() {
  return (
    <div className="bg-white text-gray-900">
      <div className="max-w-screen-2xl mx-auto">
    <Router>
      <Header />
      <ScrollToTop />

      <main>
        <Routes>
          {/* Main pages */}
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/business-solutions" element={<BusinessSolutions />} />
          <Route path="/blogs-listing" element={<BlogListing />} />
          <Route path="/:slug" element={<BlogDetail />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/case-study" element={<CaseStudy />} />
          <Route path="/case-studies/:id" element={<CaseStudyDetail />} />

          {/* Services subpages */}
          <Route path="/services/seo" element={<SEO />} />
          <Route path="/services/social-media" element={<SocialMedia />} />
          <Route path="/services/web-designing" element={<Performance />} />
          <Route path="/services/influencer" element={<Influencer />} />
          <Route path="/services/multilingual" element={<Multilingual />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/branding" element={<Branding />} />
          <Route path="/services/video" element={<Video />} />
          <Route path="/services/automation" element={<Automation />} />

          {/* Business Solutions subpages */}
          <Route path="/business-solutions/ecommerce" element={<Ecommerce />} />
          <Route path="/business-solutions/retail" element={<Retail />} />
          <Route path="/business-solutions/finance" element={<Finance />} />
          <Route path="/business-solutions/startups" element={<Startups />} />
          <Route path="/business-solutions/healthcare" element={<Healthcare />} />
          <Route path="/business-solutions/education" element={<Education />} />
          <Route path="/business-solutions/real-estate" element={<RealEstate />} />
        </Routes>
      </main>
      <ContactSticky />
      <ScrollToTopButton/>
      <Footer />
    </Router>
    </div>
    </div>
  );
}

export default App;
