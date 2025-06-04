import React, { useRef } from "react";
import "../body/body.css";
import { motion } from "framer-motion";
import blogs from "../../assets/blogs.json";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Blog = () => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400; // Width of one card
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const newScroll =
        direction === "left"
          ? currentScroll - scrollAmount
          : currentScroll + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScroll,
        behavior: "smooth",
      });
    }
  };

  // Create a reversed copy of the blogs array
  const reversedBlogs = [...blogs].reverse();

  return (
    <div
      id="blog"
      className="mx-auto mt-6 max-w-7xl px-2 lg:px-8 flex flex-col sm:items-center relative"
    >
      <motion.h2
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false }}
        className="text-4xl md:text-6xl font-serif font-bold tracking-tight pb-2 sm:pb-6 text-amber-200/[.98]"
      >
        My Blogs
      </motion.h2>

      {/* Navigation Arrows */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-slate-800/80 hover:bg-slate-700 p-3 rounded-full text-amber-200 hover:text-amber-100 transition-all duration-300 shadow-lg"
        aria-label="Previous blogs"
      >
        <FaChevronLeft size={24} />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-slate-800/80 hover:bg-slate-700 p-3 rounded-full text-amber-200 hover:text-amber-100 transition-all duration-300 shadow-lg"
        aria-label="Next blogs"
      >
        <FaChevronRight size={24} />
      </button>

      {/* Horizontal Scrollable Blog Container */}
      <div
        className="w-full overflow-x-auto pb-4 scrollbar-hide"
        ref={scrollContainerRef}
      >
        <div className="flex gap-5 min-w-max px-4">
          {reversedBlogs.map((blog) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeIn" }}
              viewport={{ once: false }}
              className="w-[400px] bg-slate-800 shadow sm:p-10 p-5 rounded-lg hover:shadow-lg transition-shadow duration-300 flex-shrink-0"
            >
              <div className="flex flex-col gap-4">
                {/* Thumbnail Image with Clickable Link */}
                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-full h-48 overflow-hidden rounded-lg group cursor-pointer"
                >
                  <img
                    src={blog.thumbnail}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-slate-800/90 text-amber-200 px-4 py-2 rounded-full text-sm font-medium">
                      Click to read blog
                    </span>
                  </div>
                </a>

                <div className="flex justify-between items-center">
                  <span className="text-blue-500 text-sm">{blog.date}</span>
                  <span className="text-slate-400 text-sm">
                    {blog.readTime}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-amber-200 hover:text-amber-100 transition-colors duration-300">
                  <a href={blog.link} target="_blank" rel="noopener noreferrer">
                    {blog.title}
                  </a>
                </h3>

                <p className="text-slate-200 line-clamp-3">
                  {blog.description}
                </p>

                <div className="flex gap-2 flex-wrap">
                  {blog.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-rose-900 text-slate-50 text-xs py-1 px-2 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-400 transition-colors duration-300 text-sm font-medium"
                >
                  Read more →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="text-slate-400 text-sm mt-4">
        ← Scroll to see more blogs →
      </div>
    </div>
  );
};

export default Blog;
