import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";

export default function LeftSideSlider({ isOpen, closeSidebar, width }) {
  return (
    <div
      className={`fixed left-0 top-0 z-10 h-full transform bg-gray-800 bg-opacity-90 transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } ${width} `}
      id="mySidebar"
    >
      <div className="flex flex-col gap-4 p-3">
        <Button
          onClick={closeSidebar}
          className="w-full bg-gray-700 px-4 py-2 text-lg text-white hover:bg-gray-600"
        >
          Close &times;
        </Button>
        <Link className="hover:bg-blue" to={"/"}>
          Home
        </Link>

        <Link className="hover:bg-blue" to={"/about"}>
          About
        </Link>

        <Link className="hover:bg-blue" to={"/products"}>
          Products
        </Link>
        <Link className="hover:bg-blue" to={"/Shop"}>
          Shop
        </Link>
        <Link className="hover:bg-blue" to={"/blogpage"}>
          Blog
        </Link>
        <Link className="hover:bg-blue" to={"/contact"}>
          Contact
        </Link>
      </div>
    </div>
  );
}
