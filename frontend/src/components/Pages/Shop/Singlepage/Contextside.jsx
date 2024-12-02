import React, { useContext, useState } from "react";
import CustomerRating from "../../../ReuseableComponents/Tools/MiddiumCustomerRating";
import IncDecButton from "../../../ReuseableComponents/Tools/IncDecButton";
import { FaArrowsRotate } from "react-icons/fa6";
import { LuShoppingBag } from "react-icons/lu";
import TabContent from "../../../ReuseableComponents/TabcontentFolder/TabContent";
import { productContext } from "../../../../ContextApi/ProductProvider";

export default function Contextside(props) {
  //*contextapi
  const { addProduct, favItemslist } = useContext(productContext);
  //*props
  const { id, NewPrice, OldPrice, productName, SKU, Tags, productDetails } =
    props.itemDetails;

  //*state
  const [clicks, setClicks] = useState(0);

  const handleClicksChange = (newClicks) => {
    setClicks(newClicks);
  };

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

      <div className="flex w-full justify-between gap-3 p-3 pl-0 sm:w-[80%]">
        {/* Pass the clicks and handler as props to IncDecButton */}
        <div className="flex w-[100px] items-center justify-center">
          <IncDecButton clicks={clicks} onClicksChange={handleClicksChange} />
        </div>

        <button
          onClick={() => addProduct(props.itemDetails)}
          className="w-[40%] bg-blue text-white sm:pl-8 sm:pr-8"
        >
          Add To Cart
        </button>
        <button className="bg-gray-500 p-3 text-white hover:bg-blue">
          <LuShoppingBag />
        </button>
        <button className="bg-gray-500 p-3 text-white hover:bg-blue">
          <FaArrowsRotate />
        </button>
      </div>

      <TabContent />
    </div>
  );
}
