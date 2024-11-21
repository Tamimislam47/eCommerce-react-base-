import React from "react";
import Button from "../../../ReuseableComponents/Button";

export default function CartTotal() {
  return (
    <div className="flex w-full justify-center bg-[#EBEBEB] sm:col-span-2 sm:h-[80%] sm:w-[90%] xl:col-span-1">
      <div className="flex flex-col w-[90%]  gap-5 p-4 sm:w-[95%] lg:w-[80%]">
        <h4>Cart Total</h4>
        <div className="flex w-full items-center justify-between">
          <span className="text-[16px]">Total Products</span>
          <span className="text-xl font-bold">$120</span>
        </div>

        <div className="flex flex-col gap-4">
          <h4>Total shipping</h4>
          <div className="flex w-full items-center justify-between">
            <p className="flex gap-3 text-[16px]">
              <input type="checkbox" defaultChecked />
              Standard
            </p>
            <span className="text-xl font-bold">$20.00</span>
          </div>
          <div className="flex w-full items-center justify-between">
            <div className="flex w-full items-center justify-between">
              <p className="flex gap-3 text-[16px]">
                <input type="checkbox" defaultChecked />
                Express
              </p>
              <span className="text-xl font-bold">$20.00</span>
            </div>
          </div>
        </div>

        <div className="flex w-full items-center justify-between">
          <p className="flex gap-3 text-[16px]">Grand Total</p>
          <span className="text-xl font-bold">$260.00</span>
        </div>
        <Button className={"p-4"}>PROCEED TO CHECKOUT</Button>
      </div>
    </div>
  );
}
