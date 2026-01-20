import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogList from "../Pages/BlogList";
import BlogDetail from "../Pages/BlogDetail";
import BlogCreate from "../Pages/BlogCreate";
import BlogLayout from "../Layout/BlogLayout";

export default function AppRouter() {
  
  const isDesktop = window.innerWidth >= 1024;
  return (
    <BrowserRouter>
      <Routes>
        {/* Desktop */}
        {isDesktop && (
          <>
            <Route path="/" element={<BlogLayout />} />
            <Route path="/blogs/:id" element={<BlogLayout />} />
          </>
        )}

        {/* Mobile */}
        {!isDesktop && (
          <>
            <Route path="/" element={<BlogList />} />
            <Route path="/blogs/:id" element={<BlogDetail />} />
          </>
        )}

        <Route path="/create" element={<BlogCreate />} />
      </Routes>

    </BrowserRouter>
  );
}
