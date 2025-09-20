import blogData from "../data/BlogData";

// Pass the category as prop from the page
const Blogs = ({ category }) => {
  // Filter blogs by category and sort by date descending
  const filteredBlogs = blogData
    .filter((blog) => blog.category === category)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div>
      {/* Blog Section */}
      <section className="relative h-[110vh] flex flex-col items-center justify-center px-4 py-6 bg-white">
        <h2 className="text-3xl font-semibold text-gray-900 mb-16 text-left">
          Explore Our{" "}
          <span className="text-4xl text-accent font-semibold">BLOGS</span>
        </h2>

        <div className="grid grid-cols-2 gap-12 max-w-4xl w-full">
          {filteredBlogs.map((blog) => (
            <div key={blog.id} className="flex flex-col">
              <img
                src={blog.img}
                alt={blog.title}
                className="w-full md:h-60 object-cover"
              />
              <div className="md:-ml-4">
                <h3 className="md:text-xl font-extrabold tracking-widest mb-2">
                  {blog.title}
                </h3>
                <p className="text-gray-700 text-base">{blog.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 mr-10">
          <a href="../Blogs.jsx">
            <span className="font-bold text-1xl hover:text-accent">
              Explore more
              <span className="inline-block transform scale-x-300">→</span>
            </span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
