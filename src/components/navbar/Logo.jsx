import React from "react";
import { NavLink } from "react-router-dom";
import { TbPencilMinus } from "react-icons/tb";

function Logo({ onClick }) {
  return (
    <NavLink
      to="/posts"
      className="flex items-center justify-center px-3 text-white no-underline"
      onClick={onClick}
    >
      <span className="rounded-md border border-gray-100 p-1 text-2xl">
        <TbPencilMinus />
      </span>
    </NavLink>
  );
}

export default Logo;
