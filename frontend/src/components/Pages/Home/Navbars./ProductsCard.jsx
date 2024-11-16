import { productContext } from "../../../../ContextApi/ProductProvider";
import Button from "../../../ReuseableComponents/Button";
import { FaArrowsRotate } from "react-icons/fa6";
import { LuShoppingBag } from "react-icons/lu";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import React, { useContext } from "react";
import image1 from "@images/image1.webp";
import { useNavigate } from "react-router-dom";

const btns = [
  {
    id: 1,
    text: "Add to chart",
    icon: <LuShoppingBag />,
  },
  {
    id: 2,
    text: "Wishlist",
    icon: <FaRegHeart />,
  },
  {
    id: 3,
    text: "Quick View",
    icon: <IoEyeOutline />,
  },
  {
    id: 4,
    text: "Compare",
    icon: <FaArrowsRotate />,
  },
];

export default function ProdectCards(props) {
  const { id, NewPrice, OldPrice, productImg, productName } = props.item;
  const { setproductDetails } = useContext(productContext);

  const cartHandler = () => {
    setproductDetails(props.item);
  };
  const FavourateHandler = () => {
    console.log("dkjfdlkdj");
  };

  return (
    <div className="card relative h-full w-full border-[3px] border-[#E1E1E1] p-3">
      {/* Sales Badges */}
      <div className="flex flex-col gap-2">
        <Button className="w-[30%] rounded-lg bg-blue p-1 font-bold text-white">
          New
        </Button>
        <Button className="w-[30%] rounded-lg bg-black p-1 font-bold text-white">
          Sale
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
        <p className="text-[#707070]">$ {NewPrice}</p>

        {/* Action Buttons */}
        <div className="button flex h-[30%] w-full items-center justify-around gap-2">
          <Button
            onClick={cartHandler}
            className="bg-gray-500 p-3 hover:bg-blue"
          >
            <LuShoppingBag />
          </Button>
          <Button
            onClick={FavourateHandler}
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
