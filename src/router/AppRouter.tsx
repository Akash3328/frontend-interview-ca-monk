import { BrowserRouter, Routes, Route } from "react-router-dom";
// import BlogList from "../pages/BlogList";
// import BlogDetail from "../pages/BlogDetail";
import BlogCreate from "../Pages/BlogCreate";
import BlogLayout from "../Layout/BlogLayout";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<BlogLayout />} />
      <Route path="/blogs/:id" element={<BlogLayout />} />
      <Route path="/create" element={<BlogCreate />} />
      </Routes>
    </BrowserRouter>
  );
}
