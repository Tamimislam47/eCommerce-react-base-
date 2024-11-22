import React, { useState } from "react";
import Headers from "../Home/Header/Headers";
import BackGroundBanner from "../../ReuseableComponents/Tools/BackGroundBanner";
import AllProduct from "./ProductRowsStyle/AllProduct";
import Footer from "../Home/Footer/Footer";
export default function Products() {

  
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <Headers />
      <BackGroundBanner />
      <div className="flex w-full flex-col items-center justify-center gap-5">
        <AllProduct />
        <Footer />
      </div>
    </div>
  );
}
