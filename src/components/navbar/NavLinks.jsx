import React from "react";
import { NavLink } from "react-router-dom";

function NavLinks({ onLinkClick }) {
  const linkClassName = ({ isActive }) =>
    `flex h-full w-full items-center justify-center px-4 font-medium transition-colors md:h-full md:px-5 ${
      isActive
        ? "bg-gray-600 text-white md:rounded-t-lg md:bg-gray-100 md:text-gray-900"
        : "text-gray-300 hover:bg-gray-700 md:hover:rounded-md"
    }`;

  return (
    <>
      <li className="h-full w-full border-b border-gray-700 md:w-auto md:border-none">
        <NavLink to={"/posts"} className={linkClassName} onClick={onLinkClick}>
          Posts
        </NavLink>
      </li>
      <li className="h-full w-full border-b border-gray-700 md:w-auto md:border-none">
        <NavLink to={"/about"} className={linkClassName} onClick={onLinkClick}>
          About
        </NavLink>
      </li>
      <li className="h-full w-full border-b border-gray-700 md:w-auto md:border-none">
        <NavLink
          to={"/contact"}
          className={linkClassName}
          onClick={onLinkClick}
        >
          Contact
        </NavLink>
      </li>
    </>
  );
}

export default NavLinks;
