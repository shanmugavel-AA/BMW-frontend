import { useState, useEffect } from "react";
import BlogCard from "./Blogscard";
import slugify from "../data/utils";
import { FaRegFileAlt, FaRegStar } from "react-icons/fa";

function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    fetch("http://localhost:8080/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error("Error fetching blogs:", err));
  }, []);

  // Featured blogs
  const featuredBlogs = blogs.filter((blog) => blog.featured);

  // Categories dynamically
  const categories = ["all", ...new Set(blogs.map((b) => b.category))];

  // Filter blogs
  const filteredBlogs =
    selectedCategory === "all"
      ? blogs.filter((b) => !b.featured)
      : blogs.filter((b) => b.category === selectedCategory && !b.featured);

  const visibleBlogs = filteredBlogs.slice(0, visibleCount);

  const loadMore = () => setVisibleCount((prev) => prev + 6);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Featured Blogs */}
      <div className="mt-20 mb-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Featured <span className="text-accent">Blogs</span>
          </h1>
          <p className="text-gray-600 mt-2">
            Hand-picked articles with the latest insights and strategies.
          </p>
        </div>

        <div className="grid grid-cols-5 gap-1">
          {featuredBlogs.length > 0 ? (
            featuredBlogs.map((blog, index) => (
              <a
                key={blog.id}
                href={`/${slugify(blog.title)}`}
                className={`relative group overflow-hidden 
                  ${index === 0 ? "col-span-3 h-74" : ""}
                  ${index === 1 ? "col-span-2 h-74" : ""}
                  ${index === 2 ? "col-span-2 h-74" : ""}
                  ${index === 3 ? "col-span-3 h-74" : ""}
                `}
              >
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div
                  className="absolute bottom-0 left-0 w-full h-40"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.5), transparent)",
                  }}
                ></div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-sm rounded-xl bg-white text-black px-2 py-1">
                    {blog.category}
                  </span>
                  <h2 className="text-lg font-semibold mt-1">{blog.title}</h2>
                  <p className="text-xs opacity-70 mt-2">
                    {blog.localDateTime}
                  </p>
                </div>
              </a>
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center py-10 text-gray-500">
              <FaRegStar className="text-4xl mb-2" />
              <p className="text-lg">No featured blogs found</p>
            </div>
          )}
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              setVisibleCount(6);
            }}
            className={`px-4 py-2 rounded-full border transition ${
              selectedCategory === cat
                ? "bg-accent text-white"
                : "border-accent text-accent hover:bg-accent hover:text-white"
            }`}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Blog Cards Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibleBlogs.length > 0 ? (
          visibleBlogs.map((blog) => (
            <BlogCard
              key={blog.id}
              id={blog.id}
              title={blog.title}
              img={blog.img}
              date={blog.localDateTime}
            />
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center py-10 text-gray-500">
            <FaRegFileAlt className="text-4xl mb-2" />
            <p className="text-lg">No blogs found</p>
          </div>
        )}
      </div>

      {/* Load More Button */}
      {visibleCount < filteredBlogs.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={loadMore}
            className="px-6 py-2 bg-accent text-white rounded-full hover:bg-accent-dark transition"
          >
            Read More
          </button>
        </div>
      )}
    </div>
  );
}

export default BlogList;
