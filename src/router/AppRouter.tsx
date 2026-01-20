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
        <Route path="/" element={<BlogLayout />}>
          <Route path="blogs/:id" element={<BlogDetail />} />
        </Route>

        {/* Mobile */}
        <Route path="/" element={<BlogList />} />
        <Route path="/blogs/:id" element={<BlogDetail />} />
      </Routes>


    </BrowserRouter>
  );
}
