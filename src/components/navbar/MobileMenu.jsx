import React, { useState, useRef } from "react";
import { TbMenu2, TbX } from "react-icons/tb";
import { useClickOutside } from "../../hooks/useClickOutside";
import NavLinks from "./NavLinks";
import AuthSection from "./AuthSection";

function MobileMenu({ authState }) {
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const hamburgerRef = useRef(null);

  const closeMenu = () => setIsOpen(false);
  
  useClickOutside(mobileMenuRef, closeMenu, hamburgerRef);

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <div ref={hamburgerRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-end pr-3 text-2xl"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <TbX /> : <TbMenu2 />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div
          className="absolute top-full left-0 w-full bg-gray-800"
          ref={mobileMenuRef}
        >
          <ul className="flex flex-col items-stretch text-center">
            <NavLinks onLinkClick={closeMenu} />
            <div className="border-t border-gray-700" />
            <AuthSection authState={authState} onLinkClick={closeMenu} />
          </ul>
        </div>
      )}
    </div>
  );
}

export default MobileMenu;
