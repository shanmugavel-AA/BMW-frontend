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

//Digital Marketing Services
import DigitalMarketingServices from "./pages/services/Digital-Marketing-Services/DigitalMarketingServices";
import SocialMediaMarketing from "./pages/services/Digital-Marketing-Services/SocialMediaMarketing";
import SearchEngineOptimization from "./pages/services/Digital-Marketing-Services/SearchEngineOptimization";
import SearchEngineMarketing from "./pages/services/Digital-Marketing-Services/SearchEngineMarketing";
import VideoProduction from "./pages/services/Digital-Marketing-Services/VideoProduction";
import ContentMarketing from "./pages/services/Digital-Marketing-Services/ContentMarketing";
import EmailMarketing from "./pages/services/Digital-Marketing-Services/EmailMarketing";
import InfluencerMarketing from "./pages/services/Digital-Marketing-Services/InfluencerMarketing";
import BrandStrategy from "./pages/services/Digital-Marketing-Services/BrandStrategy";

//Graphic Design Services
import GraphicDesignServices from "./pages/services/GraphicDesignServices/GraphicDesignServices";
import LogoDesign from "./pages/services/GraphicDesignServices/LogoDesign";
import BannerDesign from "./pages/services/GraphicDesignServices/BannerDesign";
import BrochureDesign from "./pages/services/GraphicDesignServices/BrochureDesign";
import BusinessCardDesign from "./pages/services/GraphicDesignServices/BusinessCardDesign";
import FlyerDesign from "./pages/services/GraphicDesignServices/FlyerDesign";
import PackageDesign from "./pages/services/GraphicDesignServices/PackageDesign";


//Web Design Services
import WebDesignServices from "./pages/services/Web-Design-Services/WebDesignServices";
import UIUXDesign from "./pages/services/Web-Design-Services/UIUXDesign";
import WebsiteRedesign from "./pages/services/Web-Design-Services/WebsiteRedesign";

//Website Development Services
import WebsiteDevelopment from "./pages/services/Website-Development/WebsiteDevelopment";

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

          {/* Digital Marketing Services */}
          <Route path="/digital-marketing-services-in-dubai" element={<DigitalMarketingServices />} />
          <Route path="/social-media-marketing-in-dubai" element={<SocialMediaMarketing />} />
          <Route path="/seo-company-in-dubai" element={<SearchEngineOptimization />} />
          <Route path="/search-engine-marketing-in-dubai" element={<SearchEngineMarketing />} />
          <Route path="/video-production-in-dubai" element={<VideoProduction />} />
          <Route path="/content-marketing-in-dubai" element={<ContentMarketing />} />
          <Route path="/email-marketing-in-dubai" element={<EmailMarketing />} />
          <Route path="/influencer-marketing-in-dubai" element={<InfluencerMarketing />} />
          <Route path="/brand-strategy-in-dubai" element={<BrandStrategy />} />

          {/* Graphic Design Services */}
          <Route path="/graphic-design-services-in-dubai" element={<GraphicDesignServices />} />
          <Route path="/logo-design-in-dubai" element={<LogoDesign />} />
          <Route path="/banner-design-in-dubai" element={<BannerDesign />} />
          <Route path="/brochure-design-in-dubai" element={<BrochureDesign />} />
          <Route path="/business-card-design-in-dubai" element={<BusinessCardDesign />} />
          <Route path="/flyer-design-in-dubai" element={<FlyerDesign />} />
          <Route path="/package-design-in-dubai" element={<PackageDesign />} />

          {/* Web Design Services */}
          <Route path="/web-design-services-in-dubai" element={<WebDesignServices />} />
          <Route path="/ui-ux-design-in-dubai" element={<UIUXDesign />} />
          <Route path="/website-redesign-in-dubai" element={<WebsiteRedesign />} />

          {/* Website Development Services */}
          <Route path="/website-development-services-in-dubai" element={<WebsiteDevelopment />} />

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
