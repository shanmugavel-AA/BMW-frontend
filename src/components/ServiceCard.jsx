const ServiceCard = ({ title, desc }) => (
  <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition duration-300">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{desc}</p>
  </div>
);

export default ServiceCard;
