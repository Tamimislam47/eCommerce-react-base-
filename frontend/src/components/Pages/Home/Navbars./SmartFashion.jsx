import React from "react";
import image from "@images/fashionBg.webp";
import Button from "../../../ReuseableComponents/Button";

export default function SmartFashion() {
  return (
    <div
      style={{ backgroundImage: `url(${image} )` }}
      className="banner mb-28 mt-28 flex min-h-[50vh] w-screen flex-col items-center justify-center gap-5 text-white"
    >
      <p className="text-6xl">Smart Fashion</p>

      <p className="text-6xl font-extrabold">With Smart Devices</p>
      <div className="h-[70px] w-[250px] rounded-[20px] font-bold hover:bg-primary">
        <Button className="rounded-[25px] border-[3px] pb-[15px] pl-[25px] pr-[25px] pt-[15px] text-white">
          Shop All Devices
        </Button>
      </div>
    </div>
  );
}
