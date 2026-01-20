import { Outlet, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchBlogs } from "../API/blogApi";
import BlogList from "../pages/BlogList";

export default function BlogLayout() {
  const navigate = useNavigate();
  const { id } = useParams();

  const isDesktop = window.innerWidth >= 1024;

  const { data: blogs, isSuccess } = useQuery({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
  });

  // Auto select first blog for desktop
  useEffect(() => {
    if (isDesktop && isSuccess && blogs?.length > 0 && !id) {
      navigate(`/blogs/${blogs[0].id}`, { replace: true });
    }
  }, [blogs, id, isSuccess, isDesktop]);

  if (!isDesktop) return null; // mobile excluded

  return (
    <div className="flex h-screen">
      <div className="border-r w-1/3 overflow-y-auto p-4">
        <BlogList />
      </div>

      <div className="w-2/3 overflow-y-auto p-0">
        <Outlet />
      </div>
    </div>
  );
}
