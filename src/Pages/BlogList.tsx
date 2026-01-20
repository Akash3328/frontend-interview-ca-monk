import { useQuery } from '@tanstack/react-query';
import { fetchBlogs } from '../API/blogApi';
import {BlogCard} from '../components/BlogCard';

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
