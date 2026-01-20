import React from "react";

const Header: React.FC = () => {
  return (
    <header className="w-full border-b bg-white text-black fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-4">
        <div className="flex items-center gap-2">
          <img
            src="/public/CAlogo.svg"
            alt="Brand Logo"
            className="h-10 w-10"
          />
          <span className="font-semibold text-lg tracking-tight">
            CA Monk
          </span>
        </div>

        <nav className="hidden md:flex gap-6 text-sm text-gray-700">
          <a href="#" className="hover:text-black transition">Tools</a>
          <a href="#" className="hover:text-black transition">Practice</a>
          <a href="#" className="hover:text-black transition">Events</a>
          <a href="#" className="hover:text-black transition">Blog</a>
          <a href="#" className="hover:text-black transition">Job Board</a>
        </nav>

        <button className="px-4 py-1.5 text-sm bg-teal-950 text-white rounded-md hover:bg-teal-700 transition-colors hover:cursor-pointer">
          Profile
        </button>
      </div>
    </header>
  );
};

export default Header;

