import React from "react";

import { FaFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

function Footer() {
  return (
    <footer className="container mx-auto">
      <div className="mx-3 flex items-center justify-between border-t border-gray-200 py-4 dark:border-gray-700">
        <div className="flex items-center justify-start">
          <span className="text-gray-700">© 2025 Openblog, Inc</span>
        </div>

        <ul className="flex justify-end [&>*]:mx-1">
          <li className="">
            <a
              className="text-gray-700 transition-colors hover:text-gray-900"
              href="#"
              aria-label="Instagram"
            >
              <AiFillInstagram className="h-5 w-5" />
            </a>
          </li>
          <li className="">
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
