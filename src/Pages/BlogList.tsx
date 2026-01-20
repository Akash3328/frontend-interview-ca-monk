import { useQuery } from "@tanstack/react-query";
import { fetchBlogs } from "../API/blogApi";
import { BlogCard } from "../components/BlogCard";
import { useNavigate } from "react-router-dom";
import { BlogCardSkeleton } from "../components/BlogCardSkeleton";

const BlogList = () => {
  const navigate = useNavigate();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
  });

  if (isLoading) return <BlogCardSkeleton count={3} />;
  if (isError) return <div>Error loading blogs</div>;
  if (!data || data.length === 0) return <div>No blogs yet — create your first blog</div>;

  return (
    <div className="space-y-4">

      <div className="flex justify-end">
        <button
          onClick={() => navigate("/create")}
          className="px-3 py-2 bg-blue-600 text-white rounded"
        >
          New Blog
        </button>
      </div>

      {data.map((blog: any) => (
        <BlogCard
          key={blog.id}
          id={blog.id}
          title={blog.title}
          category={blog.category}
          description={blog.description}
          date={blog.date}
        />
      ))}
    </div>
  );
};

export default BlogList;
