import React from "react";
import CustomerRating from "../../../ReuseableComponents/Tools/MiddiumCustomerRating";
import IncDecButton from "../../../ReuseableComponents/Tools/IncDecButton";
import Button from "../../../ReuseableComponents/Button";
import { FaArrowsRotate } from "react-icons/fa6";
import { LuShoppingBag } from "react-icons/lu";
import TabContent from "../../../ReuseableComponents/TabcontentFolder/TabContent";

export default function Contextside(props) {
  const { id, NewPrice, OldPrice, productName, SKU, Tags, productDetails } =
    props.itemDetails;
  // console.log(props.itemDetails);
  return (
    <div className="flex flex-col gap-5 p-5">
      <div>
        <h1>{productName}</h1>
        <h2>${NewPrice}</h2>
        <CustomerRating />
        <hr />
        <p>{productDetails}</p>
        <p>
          <span>SKU:</span> {SKU}
        </p>
        <p>
          <span>Categories:</span> Smart Device, ETC
        </p>
        <p>
          <span>Tags:</span> {Tags}
        </p>
      </div>

      <div className="flex justify-between p-3 pl-0 sm:w-[80%]">
        <IncDecButton />
        <Button className="w-[40%] bg-blue sm:pl-8 sm:pr-8">
          <h5>Add To Cart</h5>
        </Button>
        <Button className="bg-gray-500 p-3 hover:bg-blue">
          <LuShoppingBag />
        </Button>
        <Button className="bg-gray-500 p-3 hover:bg-blue">
          <FaArrowsRotate />
        </Button>
      </div>

      <TabContent />
    </div>
  );
}
