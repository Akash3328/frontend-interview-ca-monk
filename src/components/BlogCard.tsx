import { Link } from "react-router-dom";

type BlogCardProps = {
  id: string | number;
  title: string;
  category: string[];
  description: string;
  date: string;
};

export function BlogCard({
  id,
  title,
  category,
  description,
  date,
}: BlogCardProps) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Link to={`/blogs/${id}`}>
      <div className="border rounded-lg p-4 hover:bg-gray-50 transition">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-blue-600 font-semibold">
            {category.join(", ")}
          </span>
          <span className="text-xs text-gray-500">{formattedDate}</span>
        </div>

        <h3 className="font-semibold text-lg mb-1">{title}</h3>

        <p className="text-sm text-gray-600 line-clamp-2">
          {description}
        </p>
      </div>
    </Link>
  );
}
