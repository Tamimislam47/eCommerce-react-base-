import React, { useState } from "react";
import ProductGrid from "./ProductGrid";
import SideNav from "./SideNav";

export default function AllProduct() {
  return (
    <div className="flex w-full items-center justify-center gap-3 sm:w-[80%] lg:w-[70%]">
      <div className="hidden">
        <SideNav />
      </div>
      <ProductGrid />
    </div>
  );
}
