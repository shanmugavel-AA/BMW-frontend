import React from "react";
import { useNavigate } from "react-router-dom";
import blogData from "../../data/BlogData";

const BlogSection = () => {
  const navigate = useNavigate();

  // Sort blogs by date descending (recent first)
  const recentBlogs = blogData
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 4); // Optional: show only top 4 recent blogs

  // Map them to your template layout
  const blocks = [
    { blog: recentBlogs[0], className: "col-span-1 row-span-2" },
    { blog: recentBlogs[1], className: "col-span-1 row-span-1" },
    { blog: recentBlogs[2], className: "col-span-1 row-span-1" },
    { blog: recentBlogs[3], className: "col-span-2 row-span-1" },
  ];

  const renderBlogBlock = (blog, className) => {
    if (!blog) return null;
    return (
      <div
        key={blog.id}
        className={`${className} cursor-pointer overflow-hidden relative rounded-lg group`}
        onClick={() => navigate(`/blog/${blog.id}`)}
      >
        <img
          src={blog.img}
          alt={blog.title}
          className="object-cover h-full w-full"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

        {/* Title always visible */}
        <div className="absolute bottom-0 left-0 w-full p-4 pointer-events-none">
          <h3 className="text-white font-semibold text-lg">{blog.title}</h3>
        </div>

        {/* Description: hidden by default, shows on hover */}
        <div className="absolute bottom-0 left-0 w-full p-4 bg-gray-800 bg-opacity-80 text-white text-sm opacity-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-100">
          {blog.desc}
        </div>
      </div>
    );
  };

  return (
    <section className="py-12 px-4 sm:px-6 md:px-8 bg-white">
      {/* Heading */}
      <div className="text-center mb-8 px-2">
        <h2 className="text-3xl font-bold text-gray-900 border-b-4 border-red-600 inline-block pb-2">
          Our Blogs
        </h2>
      </div>

      {/* Blog Grid */}
      <div className="max-w-[1200px] mx-auto">
        <div
          className="
            grid
            grid-cols-1
            gap-4
            auto-rows-auto
            h-auto
            sm:grid-cols-3 sm:grid-rows-2 sm:h-[450px]
          "
        >
          {blocks.map(({ blog, className }) =>
            renderBlogBlock(blog, className)
          )}
        </div>

        <br />

        {/* Button Centered Below Grid */}
        <div className="flex justify-center">
          <button
            onClick={() => navigate("/blog")}
            className="bg-secondary hover:bg-accent text-white font-semibold py-3 px-8 rounded-full shadow-lg transition"
          >
            View All Blogs
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
