import { useQuery } from '@tanstack/react-query';
import { fetchBlogs } from '../API/blogApi';

const BlogList = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['blogs'],
    queryFn: fetchBlogs,
  });

  if (isLoading) return <div>Loading blogs...</div>;
  if (isError) return <div>Error loading blogs</div>;
  if (!data || data.length === 0) return <div>No blogs found</div>;

  return (
    <div className="space-y-4">
      {data.map((blog: any) => (
        <div key={blog.id} className="p-4 border rounded">
          <div className="text-sm text-blue-600 font-semibold">
            {blog.category?.join(', ')}
          </div>
          <h2 className="text-lg font-bold">{blog.title}</h2>
          <p className="text-gray-600">{blog.description}</p>
          <div className="text-xs text-gray-400">{blog.date}</div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
