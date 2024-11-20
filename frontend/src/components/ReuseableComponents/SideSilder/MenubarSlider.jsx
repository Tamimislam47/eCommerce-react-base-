import React from "react";
import { Link } from "react-router-dom";
import { FaRegHeart, FaSearch } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";

import { IoMenuSharp, IoClose, IoClipboard } from "react-icons/io5";

export default function MenubarSlider(props) {
  // Function to close the drawer

  const closeMenu = () => {
    const drawer = document.getElementById("my-drawer");
    if (drawer) drawer.checked = false;
  };

  

  return (
    <div className="drawer h-full">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label
            htmlFor="my-drawer"
            className="drawer-button h-full cursor-pointer text-xl"
          >
            <IoMenuSharp />
          </label>
      </div>
      <div className="drawer-side z-10 h-screen w-[50%] bg-base-200 sm:w-[20%] xl:w-[10%]">
        {/* Close Overlay */}
        <label htmlFor="my-drawer" className="drawer-overlay"></label>

        {/* Sidebar Content */}
        <div className="min-h-full w-80 p-4">
          {/* Close Button */}
          <button onClick={closeMenu} className="btn btn-circle btn-outline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <ul className="menu mt-10 text-base-content">
            <li></li>
            <li className="hover:cursor-pointer">
              <Link
                to={"/"}
                className="text-white hover:text-gray-300"
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li className="hover:cursor-pointer">
              <Link
                to={"/about"}
                className="text-white hover:text-gray-300"
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li className="hover:cursor-pointer">
              <Link
                to={"/products"}
                className="text-white hover:text-gray-300"
                onClick={closeMenu}
              >
                Shop
              </Link>
            </li>
            <li className="hover:cursor-pointer">
              <Link
                to={"/blogpage"}
                className="text-white hover:text-gray-300"
                onClick={closeMenu}
              >
                Blog
              </Link>
            </li>
            <li className="hover:cursor-pointer">
              <Link
                to={"/contact"}
                className="text-white hover:text-gray-300"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
