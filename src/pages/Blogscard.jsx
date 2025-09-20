// BlogCard.jsx
import { Link } from "react-router-dom";
import slugify from "../data/utils";

function BlogCard({ title, img, date }) {
  return (
    <Link to={`/${slugify(title)}`} className="block">
      <div className="w-100 bg-white overflow-hidden hover:shadow-lg transition">
        {/* Image Section */}
        <div className="h-40 w-full">
          <img
            src={img}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="p-3">
          <h2 className="text-base font-semibold text-gray-800 line-clamp-2">
            {title}
          </h2>
          <p className="text-sm text-gray-500 mt-1">{date}</p>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
