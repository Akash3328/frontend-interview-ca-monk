import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchBlogById } from "../API/blogApi";

const BlogDetail = () => {
  const { id } = useParams();

  const { data: blog, isLoading, isError } = useQuery({
    queryKey: ["blog", id],
    queryFn: () => fetchBlogById(id),
  });

  if (isLoading) return <div>Loading blog...</div>;
  if (isError) return <div>Error loading blog</div>;
  if (!blog) return <div>No blog found</div>;

  const formattedDate = new Date(blog.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      
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

      {/* Categories + Date */}
      <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
        {/* Categories as tags */}
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

        {/* Divider (•) */}
        <span className="text-gray-400">•</span>

        {/* Date */}
        <span className="text-gray-500 text-xs">
          {formattedDate}
        </span>
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
    </div>
  );
};

export default BlogDetail;
