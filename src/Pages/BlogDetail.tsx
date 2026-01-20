import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchBlogById } from "../API/blogApi";

const BlogDetail = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["blog", id],
    queryFn: () => fetchBlogById(id),
  });

  if (isLoading) return <div>Loading blog...</div>;
  if (isError) return <div>Error loading blog</div>;
  if (!data) return <div>No blog found</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">{data.title}</h1>
      <p className="text-gray-500 text-sm mb-4">{data.date}</p>
      <p className="text-lg">{data.content}</p>
    </div>
  );
};

export default BlogDetail;
