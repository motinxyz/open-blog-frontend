import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { TbPencilMinus } from "react-icons/tb";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current || !trigger.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, [dropdownOpen]);

  const activeLinkClasses = "bg-blue-600 text-white";
  const inactiveLinkClasses =
    "text-gray-300 hover:bg-gray-700 hover:text-white";

  const sidebarContent = (
    <div className="flex h-full flex-col p-3">
      <Link
        to="/posts"
        className="mb-3 flex items-center justify-center text-white no-underline"
      >
        <span className="mr-2 text-center text-2xl">
          <TbPencilMinus />
        </span>
      </Link>
      {/* <hr className="my-3 border-gray-700" /> */}
      <ul className="flex flex-grow flex-col space-y-1">
        <li>
          <NavLink
            to="/posts"
            prefetch="intent"
            className={({ isActive }) =>
              `mt-3 flex items-center rounded-md px-3 py-3 text-sm font-medium ${
                isActive ? activeLinkClasses : inactiveLinkClasses
              }`
            }
            end
          >
            Streams
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/posts/new"
            prefetch="intent"
            className={({ isActive }) =>
              `flex items-center rounded-md px-3 py-3 text-sm font-medium ${
                isActive ? activeLinkClasses : inactiveLinkClasses
              }`
            }
          >
            Create New Post
          </NavLink>
        </li>
      </ul>
      <hr className="my-3 border-gray-700" />
      <div className="relative">
        <button
          ref={trigger}
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex w-full items-center rounded-md p-2 text-left hover:bg-gray-700 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-none"
        >
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="32"
            height="32"
            className="mr-2 rounded-full"
          />
          <strong>mdo</strong>
        </button>
        {dropdownOpen && (
          <div
            ref={dropdown}
            className="absolute right-0 bottom-full z-10 mb-2 w-48 origin-bottom-right rounded-md bg-gray-900 text-sm shadow-lg"
          >
            <div className="py-1">
              <Link
                to={"/posts/new"}
                className="block px-4 py-2 text-gray-300 hover:bg-gray-800"
                prefetch="intent"
              >
                Create New Post...
              </Link>
              <a
                href="#"
                className="block px-4 py-2 text-gray-300 hover:bg-gray-800"
              >
                Settings
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-300 hover:bg-gray-800"
              >
                Profile
              </a>
              <hr className="my-1 border-gray-700" />
              <a
                href="#"
                className="block px-4 py-2 text-gray-300 hover:bg-gray-800"
              >
                Sign out
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile sidebar */}
      <div
        className={`fixed inset-0 z-40 flex transition-opacity duration-200 lg:hidden ${
          sidebarOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
        onClick={() => setSidebarOpen(false)}
      ></div>
      <div
        id="sidebar"
        className={`absolute top-0 left-0 z-40 flex h-screen w-64 flex-shrink-0 transform flex-col overflow-y-auto bg-gray-800 transition-transform duration-200 ease-in-out lg:static lg:top-auto lg:left-auto lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-64"
        }`}
      >
        {sidebarContent}
      </div>
    </>
  );
}

export default Sidebar;
