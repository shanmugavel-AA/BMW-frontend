import { Link } from "react-router-dom";
const ServicesOverview = () => (
  <div className="max-w-6xl mx-auto py-16 px-4">
    <h1 className="text-4xl font-bold mb-6">Our Services</h1>
    <ul className="list-disc list-inside space-y-3 text-lg text-gray-700">
      <li><Link to="/services/seo">SEO & Content Strategy</Link></li>
      <li><Link to="/services/social-media">Social Media Marketing</Link></li>
      <li><Link to="/services/performance">Performance Marketing</Link></li>
      <li><Link to="/services/influencer">Influencer Marketing</Link></li>
      <li><Link to="/services/web-development">Web Development</Link></li>
      <li><Link to="/services/branding">Branding & Identity</Link></li>
      <li><Link to="/services/video">Video Marketing</Link></li>
      <li><Link to="/services/automation">Marketing Automation</Link></li>
    </ul>
  </div>
);

export default ServicesOverview;
