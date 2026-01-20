import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-black text-gray-300 mt-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 py-12 px-4">
        
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src="/public/CAlogo.svg" alt="Logo" className="h-10 w-10" />
            <span className="text-white font-semibold">CA Monk</span>
          </div>
          <p className="text-sm leading-5 opacity-80">
            Empowering the next generation of financial & accounting professionals with knowledge & tools.
          </p>
        </div>

        <div>
          <h4 className="font-medium text-white text-sm mb-3">Resources</h4>
          <div className="flex flex-col gap-1 text-sm">
            <a href="#" className="hover:text-white">Blog</a>
            <a href="#" className="hover:text-white">Webinars</a>
            <a href="#" className="hover:text-white">Guides</a>
            <a href="#" className="hover:text-white">Case Studies</a>
          </div>
        </div>

        <div>
          <h4 className="font-medium text-white text-sm mb-3">Platform</h4>
          <div className="flex flex-col gap-1 text-sm">
            <a href="#" className="hover:text-white">Job Board</a>
            <a href="#" className="hover:text-white">Practice Tests</a>
            <a href="#" className="hover:text-white">Mentorship</a>
          </div>
        </div>

        <div>
          <h4 className="font-medium text-white text-sm mb-3">Connect</h4>
          <div className="flex flex-col gap-1 text-sm">
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">Instagram</a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 py-1 flex flex-col md:flex-row justify-between text-xs px-4 max-w-6xl mx-auto ">
        <span>© 2026 CA Monk. All rights reserved.</span>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
