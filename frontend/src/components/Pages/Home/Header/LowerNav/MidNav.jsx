import React, { useContext, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
import MenubarSlider from "../../../../ReuseableComponents/SideSilder/MenubarSlider";
import SearchBar from "../../../../ReuseableComponents/Tools/SearchBar";
import ActionSlider from "../../../../ReuseableComponents/SideSilder/ActionSlider";
import { productContext } from "../../../../../ContextApi/ProductProvider";
import { useFetchData } from "../../../../../ContextApi/ProductDataProvider";

export default function MidNav({ blogData, chk }) {
  const { selectedproductDetails, favItemslist } = useContext(productContext);
  const { data } = useFetchData();

  const [isShowHeart, setIsShowHeart] = useState(false);
  const [isShowShopping, setIsShowShopping] = useState(false);

  const favListHandler = () => {
    setIsShowHeart(!isShowHeart);
  };

  const selectedItemsHandler = () => {
    setIsShowShopping(!isShowShopping);
  };

  return (
    <div className="midNav flex h-[70%] w-full items-center justify-between">
      <h1 className="text-2xl font-bold sm:text-4xl">
        Nexu'<span className="text-blue">s</span>
      </h1>

      {/* Search Bar */}
      <div className="hidden w-[40%] sm:block">
        <SearchBar data={chk ? blogData : data} />
      </div>

      {/* Icons Section */}
      <div className="icons flex items-center gap-3 text-2xl">
        {/* Heart Icon */}
        <span className="relative flex items-center hover:cursor-pointer">
          <button onClick={favListHandler} className="hover:text-blue">
            <FaRegHeart />
          </button>
          {favItemslist?.length > 0 && (
            <span className="absolute right-[-10px] top-[-8px] flex h-[20px] w-[20px] items-center justify-center rounded-full bg-green-500 text-[13px]">
              {favItemslist.length}
            </span>
          )}
        </span>

        {/* Shopping Bag Icon */}
        <span className="relative flex h-full items-center hover:cursor-pointer">
          <button
            onClick={selectedItemsHandler}
            className="h-full hover:text-blue"
          >
            <LuShoppingBag />
          </button>

          {selectedproductDetails?.length > 0 && (
            <span className="absolute right-[-10px] top-[-8px] flex h-[20px] w-[20px] items-center justify-center rounded-full bg-green-500 text-[13px]">
              {selectedproductDetails.length}
            </span>
          )}
        </span>

        {/* Menu Icon */}
        <span className="relative flex h-full items-center hover:cursor-pointer">
          <div className="h-full hover:text-blue">
            <MenubarSlider />
          </div>
        </span>
      </div>

      {/* Action Slider for Heart */}

      {favListHandler && isShowHeart && (
        <ActionSlider
          isOpen={isShowHeart}
          closeSidebar={favListHandler}
          items={favItemslist}
          btn={"favList"}
        />
      )}

      {/* Action Slider for Shopping */}
      {selectedItemsHandler && isShowShopping && (
        <ActionSlider
          btn={"selectedItem"}
          isOpen={isShowShopping}
          closeSidebar={selectedItemsHandler}
          items={selectedproductDetails}
        />
      )}
    </div>
  );
}
