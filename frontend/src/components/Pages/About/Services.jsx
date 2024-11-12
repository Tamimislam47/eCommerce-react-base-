import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { CiCreditCard2 } from "react-icons/ci";
import { PiKeyReturnFill } from "react-icons/pi";

export default function Services() {
  return (
    <div className="pl-2 flex w-full items-center justify-center pr-2 sm:w-[80%] lg:w-[70%]">
      <div className="grid h-[30vh] w-full grid-cols-2 gap-2 rounded-3xl border-2 border-gray-600 pl-2 pr-2 sm:grid-cols-3 sm:gap-5">
        <div className="flex items-center justify-center gap-3">
          <div className="flex h-[40px] w-[55px] items-center justify-center rounded-full bg-blue text-white sm:h-[100px] sm:w-[100px]">
            <FaShippingFast />
          </div>
          <span>
            <span className="font-bold sm:text-[19px]"> Free Shipping</span>{" "}
            <br /> <span>Capped at $39 per order</span>
          </span>
        </div>

        <div className="flex items-center justify-center gap-3">
          <div className="flex h-[40px] w-[55px] items-center justify-center rounded-full bg-blue text-white sm:h-[100px] sm:w-[100px]">
            <FaShippingFast />
          </div>
          <span>
            <span className="font-bold sm:text-[19px]"> Free Shipping</span>{" "}
            <br /> <span>12 Months Installments</span>
          </span>
        </div>

        <div className="flex items-center justify-center gap-3">
          <div className="flex h-[40px] w-[55px] items-center justify-center rounded-full bg-blue text-white sm:h-[100px] sm:w-[100px]">
            <FaShippingFast />
          </div>
          <span>
            <span className="font-bold sm:text-[19px]"> Free Shipping</span>{" "}
            <br /> <span>Shop With Confidence</span>
          </span>
        </div>
      </div>
    </div>
  );
}
