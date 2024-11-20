import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../../ReuseableComponents/Button";
import SideSlider from "../../../ReuseableComponents/SideSilder/MenubarSlider";
import ActionSlider from "../../../ReuseableComponents/SideSilder/ActionSLider";
import { productContext } from "../../../../ContextApi/ProductProvider";
import SearchBar from "../../../ReuseableComponents/Tools/SearchBar";
import { LuShoppingBag } from "react-icons/lu";
import { FaRegHeart, FaSearch } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";

export default function LowerNav() {
  const { selectedproductDetails, favItemslist } = useContext(productContext);

  //* State for LeftSideSlider
  const [isLeftSliderOpen, setIsLeftSliderOpen] = useState(false);
  const [flag, setflag] = useState(false);
  const [favlistflag, setfavlistflag] = useState(false);

  //* Toggle functions
  const openLeftSlider = () => setIsLeftSliderOpen(true);
  const closeLeftSlider = () => setIsLeftSliderOpen(false);

  const iconsOpenHanlder = () => {
    setIsLeftSliderOpen(true);
    setflag(true);
  };
  const iconsCloseHanlder = () => {
    setIsLeftSliderOpen(false);
    setflag(false);
    setfavlistflag(false);
  };

  return (
    <nav className="flex h-[180px] w-full flex-col items-center p-3 sm:w-[80%] lg:w-[70%]">
      <div className="midNav flex h-[70%] w-full items-center justify-between">
        <h1 className="text-2xl font-bold sm:text-4xl">
          Nexu'<span className="text-blue">s</span>
        </h1>

        {/* Search Bar */}
        <div className="hidden">
          <SearchBar />
        </div>

        {/* Icons Section */}
        <div className="icons flex items-center gap-3 text-2xl">
          {/* Heart Icon */}
          <span className="relative flex items-center hover:cursor-pointer">
            <Button
              onClick={() => {
                setfavlistflag(true);
                setIsLeftSliderOpen(true);
              }}
              name="heart"
              className="hover:text-blue"
            >
              <FaRegHeart />
            </Button>
            {favItemslist.length > 0 && (
              <span className="absolute right-[-10px] top-[-8px] flex h-[20px] w-[20px] items-center justify-center rounded-full bg-green-500 text-[13px]">
                {favItemslist.length}
              </span>
            )}
          </span>

          {/* Shopping Bag Icon */}
          <span className="relative flex items-center hover:cursor-pointer">
            <Button onClick={iconsOpenHanlder} className="hover:text-blue">
              <LuShoppingBag />
            </Button>
            {selectedproductDetails.length > 0 && (
              <span className="absolute right-[-10px] top-[-8px] flex h-[20px] w-[20px] items-center justify-center rounded-full bg-green-500 text-[13px]">
                {selectedproductDetails.length}
              </span>
            )}
          </span>

          {/* Menu Icon */}
          <Button className="block sm:hidden" onClick={openLeftSlider}>
            <IoMenuSharp />
          </Button>
        </div>
      </div>

      {/* Bottom Navigation for larger screens */}
      <div className="bottomNav hidden w-full items-center justify-center bg-blue text-white sm:block sm:flex">
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

      <SearchBar />

      {/* {flag && (
        <ActionSlider
          isOpen={isLeftSliderOpen}
          closeSidebar={iconsCloseHanlder}
          flag={flag}
        />
      )}

      {favlistflag && (
        <ActionSlider
          isOpen={isLeftSliderOpen}
          closeSidebar={iconsCloseHanlder}
        />
      )} */}

      {/* {flag && favlistflag && (
        <SideSlider isOpen={isLeftSliderOpen} closeSidebar={closeLeftSlider} />
      )} */}
    </nav>
  );
}
