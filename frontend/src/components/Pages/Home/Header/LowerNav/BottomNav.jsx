import React from "react";
import { Link } from "react-router-dom";

export default function BottomNav() {
  return (
    <div className="bottomNav hidden w-full   items-center justify-center bg-blue text-white sm:flex">
      <ul className="flex w-full justify-around p-4 text-xl">
        <li className="hover:cursor-pointer">
          <Link to={"/"} className="text-white hover:text-gray-300">
            Home
          </Link>
        </li>
        <li className="hover:cursor-pointer">
          <Link to={"/about"} className="text-white hover:text-gray-300">
            About
          </Link>
        </li>
        <li className="hover:cursor-pointer">
          <Link to={"/products"} className="text-white hover:text-gray-300">
            Shop
          </Link>
        </li>
        <li className="hover:cursor-pointer">
          <Link to={"/blogpage"} className="text-white hover:text-gray-300">
            Blog
          </Link>
        </li>
        <li className="hover:cursor-pointer">
          <Link to={"/contact"} className="text-white hover:text-gray-300">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
