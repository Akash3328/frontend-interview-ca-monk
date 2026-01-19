import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogList from "../pages/BlogList";
import BlogDetail from "../pages/BlogDetail";
import BlogCreate from "../pages/BlogCreate";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BlogList />} />
        <Route path='/blogs/:id' element={<BlogDetail />} />
        <Route path='/create' element={<BlogCreate />} />
      </Routes>
    </BrowserRouter>
  );
}
