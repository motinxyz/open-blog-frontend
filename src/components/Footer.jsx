import React from "react";

import { FaFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

function Footer() {
  return (
    <footer className="container mx-auto">
      <div className="my-4 flex flex-wrap items-center justify-between border-t border-gray-200 py-3 dark:border-gray-700">
        <div className="mb-3 flex w-full items-center md:mb-0 md:w-1/3">
          <span className="text-gray-700">© 2025 Openblog, Inc</span>
        </div>

        <ul className="flex w-full list-none justify-center md:w-auto md:justify-end">
          <li className="ml-3">
            <a
              className="text-gray-700 transition-colors hover:text-gray-900"
              href="#"
              aria-label="Instagram"
            >
              <AiFillInstagram className="h-5 w-5" />
            </a>
          </li>
          <li className="ml-3">
            <a
              className="text-gray-700 transition-colors hover:text-gray-900"
              href="#"
              aria-label="Facebook"
            >
              <FaFacebook className="h-5 w-5" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
