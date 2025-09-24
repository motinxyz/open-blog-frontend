import React from "react";
import { NavLink } from "react-router-dom";

function AuthSection({ authState, onLinkClick }) {
  if (authState.isAuthenticated) {
    return (
      <>
        {/* Desktop Dropdown */}
        <li className="group relative hidden h-full cursor-pointer items-center  px-3 hover:rounded-md hover:bg-gray-700 md:flex">
          {authState.user.firstName} {authState.user.lastName}
          <ul className="ring-opacity-5 absolute top-full right-0 z-10 hidden w-48 origin-top-right overflow-hidden rounded-md bg-gray-800 shadow-lg ring-1 ring-black group-hover:block">
            <li className="border-b border-gray-700">
              <NavLink
                to="#"
                onClick={onLinkClick}
                className="block px-4 py-2 text-right text-sm text-gray-300 hover:bg-gray-700"
              >
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/logout"}
                onClick={onLinkClick}
                className="block px-4 py-2 text-right text-sm text-gray-300 hover:bg-gray-700"
              >
                Logout
              </NavLink>
            </li>
          </ul>
        </li>
        {/* Mobile Links */}
        <li className="w-full border-b border-gray-700 md:hidden">
          <NavLink
            to="#"
            onClick={onLinkClick}
            className="flex h-10 w-full items-center justify-center text-gray-300 hover:bg-gray-700"
          >
            Profile
          </NavLink>
        </li>
        <li className="w-full md:hidden">
          <NavLink
            to="/logout"
            onClick={onLinkClick}
            className="flex h-10 w-full items-center justify-center text-gray-300 hover:bg-gray-700"
          >
            Logout ({authState.user.firstName})
          </NavLink>
        </li>
      </>
    );
  }

  // If not authenticated
  return (
    <li className="w-full md:h-full">
      <NavLink
        to={"/login"}
        className={({ isActive }) =>
          `flex h-12 w-full items-center justify-center px-5 font-medium transition-colors md:h-full ${
            isActive
              ? "bg-gray-600 text-white md:rounded-t-md md:border-gray-100 md:bg-gray-100 md:text-gray-900"
              : "text-gray-300 hover:bg-gray-700 md:border-gray-600 md:hover:rounded-md"
          }`
        }
        onClick={onLinkClick}
      >
        Login
      </NavLink>
    </li>
  );
}

export default AuthSection;
