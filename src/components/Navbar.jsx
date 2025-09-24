import React, { use } from "react";
import { AuthContext } from "../features/auth/context/AuthContext";
import Logo from "./navbar/Logo";
import NavLinks from "./navbar/NavLinks";
import AuthSection from "./navbar/AuthSection";
import MobileMenu from "./navbar/MobileMenu";

function Navbar() {
  const { authState } = use(AuthContext);

  return (
    // Relative positioning to anchor the absolute mobile menu
    <nav className="relative z-30 h-full w-full bg-gray-800 text-white md:h-15">
      {/* Desktop Menu */}
      <div className="container mx-auto hidden h-full items-center justify-between px-3 md:flex">
        <div className="flex h-full justify-start sm:pl-3">
          <Logo />
        </div>
        <ul className="flex h-full items-center justify-center gap-2">
          <NavLinks />
        </ul>
        <ul className="flex h-full items-center justify-end">
          <AuthSection authState={authState} />
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className="container mx-auto flex h-full items-center justify-between px-3 md:hidden">
        <div className="flex h-full justify-start sm:pl-3">
          <Logo />
        </div>
        <MobileMenu authState={authState} />
      </div>
    </nav>
  );
}

export default Navbar;
