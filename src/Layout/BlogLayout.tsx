import BlogList from "../Pages/BlogList";
import BlogDetail from "../Pages/BlogDetail";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchBlogs } from "../API/blogApi";
import { useEffect } from "react";

export default function BlogLayout() {
  const { id } = useParams();
  const navigate = useNavigate();

  const isDesktop = window.innerWidth >= 1024;

  const { data: blogs } = useQuery({
    // queryKey: ["blogs"],
    // queryFn: fetchBlogs,
  });

  // Auto-select first blog on desktop
  useEffect(() => {
    if (isDesktop && blogs && blogs.length > 0 && !id) {
      navigate(`/blogs/${blogs[0].id}`, { replace: true });
    }
  }, [blogs, id, navigate, isDesktop]);

  return (
    <div className='flex flex-col lg:grid lg:grid-cols-3 h-screen'>
      {/* Left Panel */}
      <div className='border-r overflow-y-auto p-4 lg:col-span-1'>
        <BlogList />
      </div>

      {/* Right Panel */}
      <div className='overflow-y-auto p-6 lg:col-span-2 hidden lg:block'>
        {id ? <BlogDetail /> : <div>Select a blog to read</div>}
      </div>
    </div>
  );
}
