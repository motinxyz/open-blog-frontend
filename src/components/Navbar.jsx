import React from "react";
import { Link } from "react-router-dom";

function Navbar({ setSidebarOpen }) {
  return (
    <nav className="container mx-auto">
      <div className="flex flex-wrap items-center justify-center lg:justify-start">
        {/* Hamburger button for mobile */}
        <button className="lg:hidden mr-3" onClick={() => setSidebarOpen(true)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        <ul className="flex items-center space-x-4 lg:space-x-6 flex-1 justify-center lg:justify-start">
          <li>
            <Link to="#" className="text-gray-400 hover:text-white px-2">
              Home
            </Link>
          </li>
          <li>
            <Link to="#" className="text-white hover:text-gray-300 px-2">
              Features
            </Link>
          </li>
          <li>
            <Link to="#" className="text-white hover:text-gray-300 px-2">
              Pricing
            </Link>
          </li>
          <li>
            <Link to="#" className="text-white hover:text-gray-300 px-2">
              FAQs
            </Link>
          </li>
          <li>
            <Link to="#" className="text-white hover:text-gray-300 px-2">
              About
            </Link>
          </li>
        </ul>

        <form className="w-full lg:w-auto my-3 lg:my-0 lg:mr-3" role="search">
          <input type="search" className="w-full bg-gray-700 border-gray-600 text-white placeholder-gray-400 rounded-md py-2 px-3 focus:ring-blue-500 focus:border-blue-500" placeholder="Search..." aria-label="Search" />
        </form>

        <div className="text-right">
          <button type="button" className="py-2 px-4 mr-2 border border-gray-300 text-gray-300 rounded-md hover:bg-gray-300 hover:text-black transition-colors">
            Login
          </button>
          <button type="button" className="py-2 px-4 bg-yellow-500 text-black rounded-md hover:bg-yellow-600 transition-colors">
            Sign-up
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
