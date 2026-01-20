import { useParams, useNavigate, Outlet } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchBlogs } from "../API/blogApi";
import BlogList from "../pages/BlogList";
import BlogDetail from "../pages/BlogDetail";
import { useEffect } from "react";

export default function BlogLayout() {
  const { id } = useParams();
  const navigate = useNavigate();

  const isDesktop = window.innerWidth >= 1024;

  const { data: blogs, isSuccess } = useQuery({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
  });

  // Auto-select first blog on desktop
  useEffect(() => {
    if (isDesktop && isSuccess && blogs?.length > 0 && !id) {
      navigate(`/blogs/${blogs[0].id}`, { replace: true });
    }
  }, [blogs, id, navigate, isDesktop, isSuccess]);

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-3 h-screen">
      
      {/* Left Panel */}
      <div className="border-r overflow-y-auto p-4 lg:col-span-1">
        <BlogList />
      </div>

      {/* Right Panel (Only desktop) */}
      <div className="overflow-y-auto p-6 lg:col-span-2 hidden lg:block">
        {id ? <BlogDetail /> : <div>Select a blog…</div>}
      </div>
    </div>
  );
}
