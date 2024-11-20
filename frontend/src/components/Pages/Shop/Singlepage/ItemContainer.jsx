import React from "react";
import ImgSide from "./ImgSide";
import Contextside from "./Contextside";
export default function ItemContainer(props) {


  return (
    <div className="grid w-full   grid-cols-1 sm:w-[80%] lg:w-[70%] xl:grid-cols-2">
      <ImgSide />
      <Contextside itemDetails={props?.itemDetails} />
    </div>
  );
}
