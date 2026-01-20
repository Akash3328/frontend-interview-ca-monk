import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
      <Card className="hover:shadow-sm transition cursor-pointer">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <div className="flex gap-1 flex-wrap">
              {category?.map((cat: string) => (
                <Badge variant="secondary" key={cat}>
                  {cat}
                </Badge>
              ))}
            </div>
            <span className="text-xs text-muted-foreground">{formattedDate}</span>
          </div>
        </CardHeader>

        <CardContent>
          <CardTitle className="text-lg">
            {title}
          </CardTitle>

          <p className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
