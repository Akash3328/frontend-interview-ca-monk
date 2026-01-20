export async function createBlog(data: any) {
  const res = await fetch("http://localhost:3001/blogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to create blog");
  }

  return res.json();
}
