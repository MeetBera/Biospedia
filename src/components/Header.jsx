import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const navItems = [
  { path: "/", label: "Home" },
  { path: "/creatures", label: "Classification" }, // Moved after Home
  { path: "/qa", label: "Q&A" },
  { path: "/compare", label: "Compare" },
];


  return (
    <header className="bg-green-700 text-white shadow-md">
      <div className="max-w-3xl md:max-w-7xl mx-auto md:px-4 md:py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <h1 className="text-xl md:text-2xl font-bold tracking-wide">Biospedia</h1>
          <img
            src="https://res.cloudinary.com/davy75aew/image/upload/v1747929656/book-with-paw_wt9h9c.png"
            className="w-12"
            alt="Biospedia Logo"
          />
        </div>

        <nav className="flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`hover:text-yellow-200 text-xs md:text-lg transition-colors ${
                location.pathname === item.path
                  ? "font-semibold underline"
                  : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
