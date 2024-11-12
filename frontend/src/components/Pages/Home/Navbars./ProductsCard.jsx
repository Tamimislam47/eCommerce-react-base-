import { FaArrowsRotate } from "react-icons/fa6";
import { LuShoppingBag } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import image1 from "@images/image1.webp";
import React from "react";
import Button from "../../../ReuseableComponents/Button";

export default function ProdectCards(props) {
  const { itemName, itemPrice } = props;

  return (
    <div className="h-[450px] p-2 sm:h-[500px]">
      <div className="card relative h-full w-full border-[3px] border-[#E1E1E1]">
        {/* Sales Badges */}
        <div className="sales">
          <div className="flex flex-col gap-2">
            <Button className="w-[30%] rounded-lg bg-blue p-1 font-bold text-white">
              New
            </Button>
            <Button className="w-[30%] rounded-lg bg-black p-1 font-bold text-white">
              Sale
            </Button>
          </div>
        </div>

        {/* Image */}
        <div className="image h-[60%] w-full">
          <img className="h-full w-full " src={image1} alt="Product" />
        </div>

        {/* Text and Buttons */}
        <div className="text flex h-[40%] flex-col items-center justify-around p-3">
          <p className="text-[#707070]">Accessories</p>
          <p className="font-bold">{itemName}</p>
          <p className="text-[#707070]">{itemPrice}</p>

          {/* Action Buttons */}
          <div className="button flex h-[30%] w-full items-center justify-around gap-2">
            <Button
              text="Add to Cart"
              className="ml-2 flex h-[100%] w-[90%] items-center justify-center bg-slate-500 text-white"
            >
              <LuShoppingBag />
            </Button>
            <Button
              text="View"
              className="flex h-[100%] w-[90%] items-center justify-center bg-slate-500 text-white"
            >
              <IoEyeOutline />
            </Button>
            <Button
              text="Wishlist"
              className="flex h-[100%] w-[90%] items-center justify-center bg-slate-500 text-white"
            >
              <FaRegHeart />
            </Button>
            <Button
              text="Compare"
              className="mr-2 flex h-[100%] w-[90%] items-center justify-center bg-slate-500 text-white"
            >
              <FaArrowsRotate />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
