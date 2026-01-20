import { useState } from "react";
import { useCreateBlog } from "../hooks/useCreateBlog";
import { useNavigate } from "react-router-dom";

export default function CreateBlog() {
  const navigate = useNavigate();
  const mutation = useCreateBlog();

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const payload = {
      title,
      description: desc,
      category: category.split(",").map(c => c.trim()),
      coverImage,
      content,
      tags: tags ? tags.split(",").map(t => t.trim()) : [],
      date: new Date().toISOString(), // auto date
    };

    mutation.mutate(payload, {
      onSuccess: () => navigate("/"),
    });
  }

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h1 className="text-2xl font-semibold mb-4">Create New Blog</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        
        <input
          className="w-full border p-2 rounded"
          placeholder="Blog title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <textarea
          className="w-full border p-2 rounded"
          placeholder="Short description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          required
        />

        <input
          className="w-full border p-2 rounded"
          placeholder="Categories (comma separated)"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <input
          className="w-full border p-2 rounded"
          placeholder="Cover image URL"
          value={coverImage}
          onChange={(e) => setCoverImage(e.target.value)}
        />

        <textarea
          className="w-full border p-2 rounded"
          placeholder="Blog content..."
          rows={6}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />

        <input
          className="w-full border p-2 rounded"
          placeholder="Tags (comma separated)"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />

        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded disabled:opacity-50"
          disabled={mutation.isPending}
        >
          {mutation.isPending ? "Creating..." : "Create"}
        </button>

        {mutation.isError && (
          <p className="text-red-500 text-sm">Error creating blog</p>
        )}

      </form>
    </div>
  );
}
