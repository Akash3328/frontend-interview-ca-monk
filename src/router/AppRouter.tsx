import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import BlogList from "../Pages/BlogList";
import BlogDetail from "../Pages/BlogDetail";
import BlogCreate from "../Pages/BlogCreate";
import BlogLayout from "../Layout/BlogLayout";

export default function AppRouter() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* Create Route */}
        <Route path="/create" element={<BlogCreate />} />

        {isDesktop ? (
          /* Desktop Layout */
          <Route path="/" element={<BlogLayout />}>
            <Route path="blogs/:id" element={<BlogDetail />} />
          </Route>
        ) : (
          /* Mobile Layout */
          <>
            <Route path="/" element={<BlogList />} />
            <Route path="/blogs/:id" element={<BlogDetail />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}