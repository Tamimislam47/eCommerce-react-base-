import { productContext } from "../../../../ContextApi/ProductProvider";
import Button from "../../../ReuseableComponents/Button";
import { FaArrowsRotate } from "react-icons/fa6";
import { LuShoppingBag } from "react-icons/lu";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import React, { useContext } from "react";

export default function ProdectCards(props) {
  const { NewPrice, OldPrice, productImg, productName } = props.item;
  const { addProduct, addFavitems } = useContext(productContext);

  const Sale = ((NewPrice - OldPrice) / OldPrice) * 100;

  return (
    <div className="card relative h-full w-full border-[3px] border-[#E1E1E1] p-3">
      {/* Sales Badges */}
      <div className="flex flex-col gap-2">
        <Button className="w-[30%] rounded-lg bg-blue p-1 font-bold text-white">
          New
        </Button>
        <Button
          style={{
            backgroundColor: "black",
          }}
          className={`w-[30%] rounded-lg p-1 font-bold text-white ${NewPrice === OldPrice ? "hidden" : "block"} `}
        >
          {NewPrice === OldPrice
            ? `$ ${NewPrice}`
            : `$ ${Sale.toFixed(2)}% off`}
        </Button>
      </div>

      {/* Image */}
      <div className="image h-[60%] w-full">
        <img className="h-full w-full" src={productImg} alt="Product" />
      </div>

      {/* Text and Buttons */}
      <div className="text flex h-[40%] flex-col items-center justify-around gap-2 p-3">
        <p className="text-[#707070]">Accessories</p>
        <p className="font-bold">{productName}</p>
        <p className="text-[#707070]">
          ${NewPrice !== OldPrice ? <span>{OldPrice}</span> : NewPrice}
        </p>

        {/* Action Buttons */}
        <div className="button flex h-[30%] w-full items-center justify-around gap-2">
          <Button
            onClick={() => addProduct(props.item)}
            className="bg-gray-500 p-3 hover:bg-blue"
          >
            <LuShoppingBag />
          </Button>
          <Button
            onClick={() => addFavitems(props.item)}
            className="bg-gray-500 p-3 hover:bg-blue"
          >
            <FaRegHeart />
          </Button>
          <Button className="bg-gray-500 p-3 hover:bg-blue">
            <IoEyeOutline />
          </Button>
          <Button className="bg-gray-500 p-3 hover:bg-blue">
            <FaArrowsRotate />
          </Button>
        </div>
      </div>
    </div>
  );
}
