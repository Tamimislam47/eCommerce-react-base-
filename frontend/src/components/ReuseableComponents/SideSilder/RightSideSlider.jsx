import React, { useContext } from "react";
import WithImgSlider from "./WithImgSlider";
import { Link } from "react-router-dom";
import Button from "../Button";
import { productContext } from "../../../ContextApi/ProductProvider";

export default function RightSideSlider({
  rightopenSidebar,
  rightcloseSidebar,
}) {
 

  return (
    <div
      className={`fixed left-0 top-0 z-10 h-full w-[85vw] transform bg-gray-800 bg-opacity-90 transition-transform duration-300 sm:w-[60vw] ${
        rightopenSidebar ? "translate-x-0" : "-translate-x-full"
      }`}
      id="mySidebar"
    >
      <div className="flex h-full flex-col gap-4 overflow-y-auto p-3">
        {/* Close Button */}
        <Button
          onClick={rightcloseSidebar}
          className="w-full bg-gray-700 px-4 py-2 text-lg text-white hover:bg-gray-600"
        >
          Close &times;
        </Button>

        {/* Sidebar Content */}
        {[...Array(2)].map((_, index) => (
          <Link
            key={index}
            className="hover:bg-blue-600 block w-full p-2 text-white"
            to={"/"}
          >
            <WithImgSlider />
          </Link>
        ))}
      </div>
    </div>
  );
}
