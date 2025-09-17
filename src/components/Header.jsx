import React from "react";
import Navbar from "./Navbar";

function Header({ setSidebarOpen }) {
  return (
    <header className="p-3 bg-gray-800 text-white">
      <Navbar setSidebarOpen={setSidebarOpen} />
    </header>
  );
}

export default Header;
