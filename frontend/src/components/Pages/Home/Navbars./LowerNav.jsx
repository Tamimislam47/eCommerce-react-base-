import React, { useContext, useState } from "react";
import { FaRegHeart } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import Button from "../../../ReuseableComponents/Button";
import { LuShoppingBag } from "react-icons/lu";

import { Link } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";
import LeftSideSlider from "../../../ReuseableComponents/SideSilder/LeftSideSlider";
import RightSideSlider from "../../../ReuseableComponents/SideSilder/RightSideSlider";
import { productContext } from "../../../../ContextApi/ProductProvider";

export default function LowerNav() {
  const { productDetails } = useContext(productContext);
  const [itemDetail, setItemDetail] = useState([]);
  
  // State to keep track of previous and current selected product
  const [previousProduct, setPreviousProduct] = useState(null);
  const [currentProduct, setCurrentProduct] = useState(null);

  //* SideSlider State
  const [isOpen, setIsOpen] = useState(false);
  const [rightsideisOpen, setRightsideIsOpen] = useState(false);

  //* LeftSide Func
  const openSidebar = () => setIsOpen(true);
  const closeSidebar = () => setIsOpen(false);

  //* RightsideSlider Func
  const rightopenSidebar = () => {
    // Store the current product as the previous one before updating
    setPreviousProduct(currentProduct);
    setCurrentProduct(productDetails); // Set the current product
    setItemDetail((prev) => [...prev, productDetails]);
    setRightsideIsOpen(true);
  };

  const rightcloseSidebar = () => setRightsideIsOpen(false);

  console.log("Previous Product:", previousProduct);
  console.log("Current Product:", currentProduct);

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
          <span className="relative hover:cursor-pointer">
            <span className="hover:text-blue">
              <FaRegHeart />
            </span>
            <span className="absolute right-[-10px] top-[-8px] flex h-[20px] w-[20px] items-center justify-center rounded-full bg-green-500 text-[13px]">
              01
            </span>
          </span>
          <span className="icons relative flex items-center text-2xl hover:cursor-pointer">
            <Button
              onClick={rightopenSidebar}
              className="hover:text-blue"
            >
              <LuShoppingBag />
            </Button>
            <span className="absolute right-[-10px] top-[-8px] flex h-[20px] w-[20px] items-center justify-center rounded-full bg-green-500 text-[13px]">
              01
            </span>
          </span>
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
            <button>Shop</button>
          </li>
          <li className="hover:cursor-pointer">
            <Link to={"/blogpage"}>Blog</Link>
          </li>
          <li className="hover:cursor-pointer">
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>

      {/* Sidebar with fixed width and height */}
      <LeftSideSlider
        isOpen={isOpen}
        closeSidebar={closeSidebar}
        width="250px"
      ></LeftSideSlider>

      <RightSideSlider
        rightopenSidebar={rightsideisOpen}
        rightcloseSidebar={rightcloseSidebar}
        width="100vw"
      ></RightSideSlider>

      <div className="mb-4 flex h-[40%] w-[100%] sm:hidden">
        <input className="h-full w-[85%] rounded-l-lg text-black" type="text" />

        <Button className="flex h-full w-[15%] items-center justify-center rounded-r-lg bg-blue pl-2 pr-2 text-[25px]">
          <FaSearch />
        </Button>
      </div>
    </nav>
  );
}
