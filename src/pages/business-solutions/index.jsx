const BusinessSolutionsOverview = () => (
  <div className="max-w-6xl mx-auto py-16 px-4">
    <h1 className="text-4xl font-bold mb-6">Business Solutions</h1>
    <ul className="list-disc list-inside space-y-3 text-lg text-gray-700">
      <li><Link to="/business-solutions/ecommerce">E-Commerce & D2C</Link></li>
      <li><Link to="/business-solutions/retail">FMCG & Retail</Link></li>
      <li><Link to="/business-solutions/finance">Banking & Financial</Link></li>
      <li><Link to="/business-solutions/startups">Growth Startups</Link></li>
      <li><Link to="/business-solutions/healthcare">Healthcare</Link></li>
      <li><Link to="/business-solutions/education">Education</Link></li>
      <li><Link to="/business-solutions/real-estate">Real Estate</Link></li>
    </ul>
  </div>
);

export default BusinessSolutionsOverview;
