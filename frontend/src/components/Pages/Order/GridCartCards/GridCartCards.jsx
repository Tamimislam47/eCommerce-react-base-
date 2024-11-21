import React from "react";
import ShippingAndTax from "./ShippingAndTax";
import CouponCode from "./CouponCode";
import CartTotal from "./CartTotal";

export default function GridCartCards() {
  return (
    <div className="grid h-auto w-full p-3  grid-cols-1 gap-5 sm:w-[80%] sm:grid-cols-2 sm:grid-rows-2 lg:w-[70%] xl:grid-cols-3">
      <ShippingAndTax />
      <CouponCode />
      <CartTotal />
    </div>
  );
}
