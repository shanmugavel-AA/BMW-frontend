import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";
import slugify from "../data/utils";
import SEO from "../ReuseComponents/SEO";

function parseContentBlocks(htmlString) {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = htmlString;
  const blocks = [];
  tempDiv.childNodes.forEach((node) => {
    if (node.nodeType === 1) { // Element
      if (node.tagName === "H2") {
        blocks.push({ type: "heading", text: node.innerText });
      } else if (node.tagName === "P") {
        blocks.push({ type: "paragraph", text: node.innerText });
      } else if (node.tagName === "IMG") {
        blocks.push({ type: "image", src: node.src, alt: node.alt || "" });
      } else if (node.tagName === "UL") {
        // Collect list items
        const items = Array.from(node.querySelectorAll("li")).map(li => li.innerText);
        blocks.push({ type: "ul", items });
      } // Extend for other tags if needed
    }
  });
  return blocks;
}

function BlogDetail() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/blogs")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((b) => slugify(b.title) === slug);
        if (found) {
          // Parse the blocks from raw HTML content
          const contentBlocks = parseContentBlocks(found.content);
          setBlog({
            ...found,
            contentBlocks,
          });
        }
      })
      .catch((err) => console.error("Error fetching blog:", err));
  }, [slug]);

  if (!blog) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-gray-700">Blog Not Found</h1>
      </div>
    );
  }

  return (
    <>
    {blog && (
  <SEO
    title={blog.metaTitle || blog.title}
    description={blog.metaDescription || blog.description}
    image={blog.bannerImg || blog.img}
    type="article"
     canonicalUrl={`http://localhost:5173/${slugify(blog.title)}`}
  />
)}

    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-500 mb-6">{blog.localDateTime}</p>
      <img
        src={blog.img}
        alt={blog.title}
        className="w-full h-80 object-cover rounded-lg mb-6"
      />

      {/* Render content blocks with custom JSX */}
      <div className="mb-8 space-y-4">
        {blog.contentBlocks.map((block, idx) => {
          if (block.type === "heading") {
            return (
              <h2 key={idx} className="text-2xl font-bold mt-6">{block.text}</h2>
            );
          }
          if (block.type === "paragraph") {
            return (
              <p key={idx} className="text-base text-gray-800">{block.text}</p>
            );
          }
          if (block.type === "ul") {
            return (
              <ul key={idx} className="list-disc ml-8 space-y-1">
                {block.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            );
          }
          if (block.type === "image") {
            return (
              <img key={idx} src={block.src} alt={block.alt} className="w-full rounded-lg my-6" />
            );
          }
          return null;
        })}
      </div>

      {/* FAQ Section */}
      {blog.faqs && blog.faqs.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {blog.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border rounded-lg p-4 hover:shadow-lg transition"
              >
                <div className="flex items-center gap-2 mb-2 text-gray-800 font-medium">
                  <FaQuestionCircle className="text-blue-600" />
                  {faq.question}
                </div>
                <p className="text-gray-600 pl-6">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
    </>
  );
}

export default BlogDetail;
