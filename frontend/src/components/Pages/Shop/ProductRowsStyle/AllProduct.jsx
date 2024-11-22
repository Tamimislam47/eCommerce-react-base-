import React, { useState } from "react";
import ProductGrid from "./ProductGrid";
import SideNav from "./SideNav";

export default function AllProduct() {
  return (
    <div className="grid w-full grid-cols-4 gap-3  sm:w-[80%] lg:w-[70%]">
      <SideNav />
      <ProductGrid />
    </div>
  );
}
