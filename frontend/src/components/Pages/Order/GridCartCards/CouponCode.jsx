import React from "react";
import Button from "../../../ReuseableComponents/Button";

export default function Couponcode() {
  return (
    <div className="flex w-full sm:h-1/2  justify-center bg-[#EBEBEB]">
      <div className="flex w-[80%] flex-col gap-4 p-4">
        <h4>Use Coupon Code</h4>
        <p>Enter your coupon code if you have one.</p>
        <input
          type="text"
          placeholder="Enter code"
          className="w-full rounded border border-gray-300 p-2"
        />
        <Button className={"w-[70%] p-3"}>GET A QUOTE</Button>
      </div>
    </div>
  );
}
