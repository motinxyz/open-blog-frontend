import React, { use } from "react";
import { TbPencilMinus } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../features/auth/context/AuthContext";
import Logout from "./Logout";

function Navbar() {
  const { authState } = use(AuthContext);

  return (
    <nav className="h-16 w-full bg-gray-800 text-white">
      <div className="container mx-auto grid h-full grid-cols-[1fr_auto_1fr] items-center px-3">
        <div className="flex justify-start">
          <NavLink
            to="/posts"
            className="flex items-center justify-center text-white no-underline"
          >
            <span className="rounded-md border border-gray-100 text-2xl">
              <TbPencilMinus />
            </span>
          </NavLink>
        </div>

        <ul className="flex h-full items-center justify-center gap-2">
          <li className="h-full">
            <NavLink
              to={"/posts"}
              className={({ isActive }) =>
                `flex h-full items-center px-5 font-medium transition-colors ${
                  isActive
                    ? "rounded-t-md bg-gray-100 text-gray-900" // The flat bottom and matching bg create the continuous flow
                    : "hover: text-gray-300 hover:rounded-md hover:bg-gray-700"
                }`
              }
            >
              Stream
            </NavLink>
          </li>
          <li className="h-full">
            <NavLink
              to="#"
              className="flex h-full cursor-not-allowed items-center px-5 font-medium text-gray-300 transition-colors hover:bg-gray-700"
            >
              Features
            </NavLink>
          </li>
          <li className="h-full">
            <NavLink
              to="#"
              className="flex h-full items-center px-5 font-medium text-gray-300 transition-colors hover:bg-gray-700"
            >
              Pricing
            </NavLink>
          </li>
          <li className="h-full">
            <NavLink
              to="#"
              className="flex h-full items-center px-5 font-medium text-gray-300 transition-colors hover:bg-gray-700"
            >
              FAQs
            </NavLink>
          </li>
        </ul>

        <div className="flex h-full items-center justify-end">
          {authState.isAuthenticated ? (
            <ul className="flex h-full items-center justify-end">
              <li className="group relative flex h-full cursor-pointer items-center px-3 hover:rounded-md hover:bg-gray-700">
                {authState.user.firstName} {authState.user.lastName}
                <ul className="absolute top-full right-0 z-10 hidden w-48 origin-top-right overflow-hidden rounded-md shadow-lg ring-1 group-hover:block [&>*]:block [&>*]:border-t [&>*]:border-gray-100 [&>*]:bg-gray-800 [&>*]:px-4 [&>*]:py-2 [&>*]:text-right [&>*]:text-sm [&>*]:text-gray-300 [&>*]:hover:bg-gray-700">
                  <li className="">
                    <NavLink to="#" className="">
                      Profile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#" className="">
                      Settings
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/logout"} className="">
                      Logout
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          ) : (
            <NavLink
              to={"/login"}
              className={({ isActive }) =>
                `flex h-full items-center px-5 font-medium transition-colors ${
                  isActive
                    ? "rounded-t-md border-gray-100 bg-gray-100 text-gray-900"
                    : "border-gray-600 text-gray-300 hover:rounded-md hover:bg-gray-700"
                }`
              }
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
