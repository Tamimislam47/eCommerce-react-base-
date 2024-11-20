import React from "react";
import TopCategories from "./SideNavbar/TopCategories";
import PriceFilter from "./SideNavbar/PriceFilter";
import Brands from "./SideNavbar/Brands";

export default function SideNax() {
  return (
    <div className="flex w-[28%] flex-col   gap-8 pl-5 pt-5">
      <TopCategories />
      <PriceFilter />
      <Brands />
    </div>
  );
}
