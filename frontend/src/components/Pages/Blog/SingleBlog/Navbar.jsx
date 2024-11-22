import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="flex w-full items-center justify-between border-y-2 border-gray-300 pb-2 pt-2 text-[16px]">
      {/* Tags Section */}
      <div className="flex w-1/2 items-center gap-3">
        <ul className="flex items-center gap-2">
          <p className="font-semibold">Tags:</p>
          <li className="hover:cursor-pointer hover:text-blue">Mobile,</li>
          <li className="hover:cursor-pointer hover:text-blue">Laptop,</li>
          <li className="hover:cursor-pointer hover:text-blue">Smart TV</li>
        </ul>
      </div>

      {/* Share Section */}
      <div className="flex w-1/2 items-center justify-end gap-3">
        <ul className="flex items-center gap-3">
          <p className="font-semibold">Share:</p>
          <li className="hover:cursor-pointer hover:text-blue">
            <FaFacebookF />
          </li>
          <li className="hover:cursor-pointer hover:text-blue">
            <CiInstagram />
          </li>
          <li className="hover:cursor-pointer hover:text-blue">
            <CiTwitter />
          </li>
          <li className="hover:cursor-pointer hover:text-blue">
            <FaWhatsapp />
          </li>
        </ul>
      </div>
    </nav>
  );
}
