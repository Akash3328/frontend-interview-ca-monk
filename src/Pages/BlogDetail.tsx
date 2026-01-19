import { useParams } from "react-router-dom";

export default function BlogDetail() {
  const { id } = useParams();
  return <div>Blog Detail Page - ID: {id}</div>
}
