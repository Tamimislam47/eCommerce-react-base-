import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="flex w-full items-center justify-center gap-5 border-2 border-l-0 border-r-0 border-gray-300 p-3 text-[16px]">
      <div className="flex w-1/2 justify-start gap-2">
        <p>Tages:</p>
        <ul className="flex gap-1">
          <li className="hover:cursor-pointer hover:text-blue">Mobile,</li>
          <li className="hover:cursor-pointer hover:text-blue">Laptop,</li>
          <li className="hover:cursor-pointer hover:text-blue">Smart Tv,</li>
        </ul>
      </div>
      <div className="flex w-1/2 justify-end gap-2">
        <p>Share:</p>
        <ul className="flex items-center gap-3">
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
