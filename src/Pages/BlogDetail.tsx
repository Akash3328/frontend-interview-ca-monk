import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchBlogById } from "../API/blogApi";
import { motion } from "framer-motion";
import { ShareMenu } from "../components/ShareMenu";
import { BlogDetailSkeleton } from "../components/BlogDetailSkeleton";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";

const BlogDetail = () => {
  const { id } = useParams();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const { data: blog, isLoading, isError } = useQuery({
    queryKey: ["blog", id],
    queryFn: () => fetchBlogById(id),
  });

  if (isLoading) return <BlogDetailSkeleton />;
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
      transition={{ duration: 0.25 }}
      className="p-5 md:p-8 max-w-3xl mx-auto space-y-6 pt-15"
    >
      {/* Mobile Back */}
      {isMobile && (
        <Link to="/" className="text-blue-600 text-sm underline">
          ← Back to Blogs
        </Link>
      )}

      {/* Share button */}
      <div className="flex justify-end">
        <ShareMenu id={id!} title={blog.title} />
      </div>

      {blog.coverImage && (
        <img
          src={blog.coverImage}
          alt={blog.title}
          className="w-full rounded-lg object-cover max-h-80"
        />
      )}

      <h1 className="text-3xl font-semibold">{blog.title}</h1>

      <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 pt-10">
        {blog.category?.map((cat: string) => (
          <span
            key={cat}
            className="px-2 py-1 rounded-md bg-blue-100 text-blue-700 text-xs font-medium"
          >
            {cat}
          </span>
        ))}
        <span className="text-gray-400">•</span>
        <span className="text-gray-500 text-xs">{formattedDate}</span>
      </div>

      {blog.description && (
        <p className="text-gray-700 italic">{blog.description}</p>
      )}

      <div className="text-gray-800 leading-relaxed whitespace-pre-line">
        {blog.content}
      </div>

      {blog.tags && blog.tags.length > 0 && (
        <div className="pt-4 border-t">
          <h3 className="text-sm font-semibold mb-2 text-gray-500">Tags:</h3>
          <div className="flex flex-wrap gap-2">
            {blog.tags.map((tag: string) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default BlogDetail;
