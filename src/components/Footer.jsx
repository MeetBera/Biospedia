import React from "react";

function Footer() {
  return (
    <footer className="bg-green-800 text-white text-sm py-4 mt-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Biospedia. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;