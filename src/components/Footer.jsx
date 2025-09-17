import React from "react";

import { FaFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

function Footer() {
  return (
    <footer className="container mx-auto">
      <div className="my-4 flex flex-wrap items-center justify-between border-t border-gray-200 py-3">
        <div className="mb-3 flex w-full items-center md:mb-0 md:w-1/3">
          <span className="text-gray-500">© 2025 Company, Inc</span>
        </div>

        <ul className="flex w-full list-none justify-center md:w-auto md:justify-end">
          <li className="ml-3">
            <a
              className="text-gray-50 hover:text-gray-700"
              href="#"
              aria-label="Instagram"
            >
              <AiFillInstagram color="white" />
            </a>
          </li>
          <li className="ml-3">
            <a
              className="text-gray-500 hover:text-gray-700"
              href="#"
              aria-label="Facebook"
            >
              <FaFacebook color="white" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
