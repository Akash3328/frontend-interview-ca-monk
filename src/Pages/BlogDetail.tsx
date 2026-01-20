import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchBlogById } from "../API/blogApi";
import { motion } from "framer-motion";

const BlogDetail = () => {
  const { id } = useParams();

  const { data: blog, isLoading, isError } = useQuery({
    queryKey: ["blog", id],
    queryFn: () => fetchBlogById(id),
  });

  const isMobile = window.innerWidth < 1024;

  if (isLoading) return <div className="p-6">Loading blog...</div>;
  if (isError) return <div className="p-6">Error loading blog.</div>;
  if (!blog) return <div className="p-6">No blog found.</div>;

  const formattedDate = new Date(blog.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <motion.div
      initial={{ opacity: 0, x: isMobile ? 50 : 0 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: isMobile ? 50 : 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="p-5 md:p-8 max-w-3xl mx-auto space-y-6"
    >
      {/* Mobile Back Button */}
      {isMobile && (
        <Link
          to="/"
          className="text-blue-600 text-sm underline underline-offset-2 block"
        >
          ← Back to Blogs
        </Link>
      )}

      {/* Cover Image */}
      {blog.coverImage && (
        <img
          src={blog.coverImage}
          alt={blog.title}
          className="w-full rounded-lg object-cover max-h-80"
        />
      )}

      {/* Title */}
      <h1 className="text-3xl font-semibold leading-snug">
        {blog.title}
      </h1>

      {/* Category + Date */}
      <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
        <div className="flex gap-2 flex-wrap">
          {blog.category?.map((tag: string) => (
            <span
              key={tag}
              className="px-2 py-1 rounded-md bg-blue-100 text-blue-700 text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <span className="text-gray-400">•</span>

        <span className="text-gray-500 text-xs">{formattedDate}</span>
      </div>

      {/* Description */}
      {blog.description && (
        <p className="text-gray-700 italic">
          {blog.description}
        </p>
      )}

      {/* Content */}
      <div className="text-gray-800 leading-relaxed tracking-wide whitespace-pre-line">
        {blog.content}
      </div>

      {/* Footer Tags */}
      {blog.tags?.length > 0 && (
        <div className="pt-4 flex gap-2 flex-wrap">
          {blog.tags.map((t: string) => (
            <span
              key={t}
              className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default BlogDetail;
