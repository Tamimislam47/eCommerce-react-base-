import React from "react";
import TopCategories from "./SideNavbar/TopCategories";
import PriceFilter from "./SideNavbar/PriceFilter";
import Brands from "./SideNavbar/Brands";

export default function SideNax() {
  return (
    <div className="hidden h-auto xl:block">
      <div className="col-span-1 flex flex-col gap-8  pl-5 pt-5 xl:block">
        <TopCategories />
        <PriceFilter />
        <Brands />
      </div>
    </div>
  );
}
