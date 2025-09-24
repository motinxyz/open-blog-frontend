import React from "react";
import { use } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../../auth/context/AuthContext";
import { GrRefresh } from "react-icons/gr";
import { PostsContext } from "../context/PostsContext";

function Dock() {
  const location = useLocation();
  // The "Posts" link should be active for both the root path and /posts,
  // but not for sub-paths like /posts/write.
  const isPostsLinkActive =
    location.pathname === "/" || location.pathname === "/posts";
  const isRefreshVisible =
    location.pathname === "/posts" || location.pathname === "/";

  const { refreshPosts } = use(PostsContext);
  const { authState } = use(AuthContext);

  const linkBaseClasses =
    "flex h-7 w-max items-center justify-center px-2 font-semibold transition-all md:h-9 md:w-15 lg:h-10 lg:w-17 lg:px-4 xl:h-12 xl:w-20";
  const activeLinkClasses = "scale-115 bg-gray-800 text-white";
  const inactiveLinkClasses =
    "bg-white text-black hover:bg-gray-600 hover:text-white";

  return (
    <>
      {authState.isAuthenticated && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 transition-all">
          <ul className="flex items-center overflow-hidden rounded-xl border border-gray-700 bg-white/30 shadow-lg backdrop-blur-md">
            <li className="border-r border-gray-400">
              <NavLink
                to="/posts"
                className={`${linkBaseClasses} rounded-l-xl ${isPostsLinkActive ? activeLinkClasses : inactiveLinkClasses}`}
              >
                Read
              </NavLink>
            </li>

            <li
              className={`self-stretch overflow-hidden transition-all duration-300 ease-in-out ${isRefreshVisible ? "w-12 shadow-lg md:w-16" : "w-0"}`}
            >
              <button
                onClick={refreshPosts}
                disabled={!isRefreshVisible}
                className="flex h-full w-full cursor-pointer items-center justify-center bg-white font-semibold text-black transition-colors hover:bg-gray-600 hover:text-white disabled:pointer-events-none"
              >
                <GrRefresh />
              </button>
            </li>

            <li className="border-l border-gray-400">
              <NavLink
                to="/posts/write"
                className={({ isActive }) =>
                  `${linkBaseClasses} rounded-r-xl ${isActive ? activeLinkClasses : inactiveLinkClasses}`
                }
              >
                Write
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Dock;
