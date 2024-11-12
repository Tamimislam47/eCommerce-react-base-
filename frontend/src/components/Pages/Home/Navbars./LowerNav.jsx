import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa6";
import { LuShoppingBag } from "react-icons/lu";
import { FaSearch } from "react-icons/fa";
import Button from "../../../ReuseableComponents/Button";
import { Link } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";
import SideSlider from "../../../ReuseableComponents/SideSlider";

export default function LowerNav() {
  const [isOpen, setIsOpen] = useState(false);

  const openSidebar = () => setIsOpen(true);
  const closeSidebar = () => setIsOpen(false);

  return (
    <nav className="flex h-[180px] w-full flex-col items-center p-3 sm:w-[80%] lg:w-[70%]">
      <div className="midNav flex h-[70%] w-full items-center justify-between">
        <h1 className="text-2xl font-bold sm:text-4xl">
          Nexu'<span className="text-blue">s</span>
        </h1>
        <div className="hidden h-[60%] w-[40%] sm:flex">
          <input
            className="h-full w-[85%] rounded-l-lg text-black"
            type="text"
          />
          <Button className="flex h-full w-[15%] items-center justify-center rounded-r-lg bg-blue pl-2 pr-2 text-[25px]">
            <FaSearch />
          </Button>
        </div>
        <div className="icons flex items-center gap-3 text-2xl">
          <FaRegHeart />
          <LuShoppingBag />
          <Button className="block sm:hidden" onClick={openSidebar}>
            <IoMenuSharp />
          </Button>
        </div>
      </div>

      <div className="bottomNav hidden w-full items-center justify-center bg-blue text-white sm:flex">
        <ul className="flex w-full justify-around p-4 text-xl">
          <li className="hover:cursor-pointer">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="hover:cursor-pointer">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="hover:cursor-pointer">
            <Link to={"/products"}>Products</Link>
          </li>
          <li className="hover:cursor-pointer">
            <button onClick={() => console.log("dlkfjdlkjf")}>Shop</button>
          </li>
          <li className="hover:cursor-pointer">
            <Link to={'/blogpage'}  >Blog</Link>
          </li>
          <li className="hover:cursor-pointer">
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>

      {/* Sidebar with fixed width and height */}
      <SideSlider isOpen={isOpen}>
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
      </SideSlider>

      <div className="mb-4 flex h-[40%] w-[100%] sm:hidden">
        <input className="h-full w-[85%] rounded-l-lg text-black" type="text" />

        <Button className="flex h-full w-[15%] items-center justify-center rounded-r-lg bg-blue pl-2 pr-2 text-[25px]">
          <FaSearch />
        </Button>
      </div>
    </nav>
  );
}
