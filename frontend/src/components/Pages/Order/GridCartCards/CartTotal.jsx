import React, { useState } from "react";
import Button from "../../../ReuseableComponents/Button";
import { useAsyncError } from "react-router-dom";

const initialShippingOptions = [
  { name: "standard", checked: false, value: 20 },
  { name: "express", checked: false, value: 40 },
];

export default function CartTotal({ totals }) {
  const [shipping, setshipping] = useState(initialShippingOptions);
  const [selectedShippingValue, setSelectedShippingValue] = useState(0);

  const checkBoxHanlder = (e) => {
    const { name, checked } = e.target;
    setshipping((prev) =>
      prev?.map((option) => {
        if (option?.name === name) {
          if (checked) {
            setSelectedShippingValue((prevValue) => prevValue + option?.value);
            console.log(option?.value);
          } else {
            setSelectedShippingValue((prevValue) => prevValue - option?.value);
          }
        }
        return option;
      }),
    );
  };

  return (
    <div className="flex w-full justify-center bg-[#EBEBEB] sm:col-span-2 sm:h-[80%] sm:w-[90%] xl:col-span-1">
      <div className="flex w-[90%] flex-col gap-5 p-4 sm:w-[95%] lg:w-[80%]">
        <h4>Cart Total</h4>
        <div className="flex w-full items-center justify-between">
          <span className="text-[16px]">Total Products</span>
          <span className="text-xl font-bold">${`${totals}`} </span>
        </div>

        <div className="flex flex-col gap-4">
          <h4>Total shipping</h4>
          <div className="flex w-full items-center justify-between">
            <p className="flex gap-3 text-[16px]">
              <input
                onChange={(e) => checkBoxHanlder(e)}
                type="checkbox"
                name="standard"
              />
              Standard
            </p>
            <span className="text-xl font-bold">$20.00</span>
          </div>
          <div className="flex w-full items-center justify-between">
            <div className="flex w-full items-center justify-between">
              <p className="flex gap-3 text-[16px]">
                <input
                  onChange={(e) => checkBoxHanlder(e)}
                  type="checkbox"
                  name="express"
                />
                Express
              </p>
              <span className="text-xl font-bold">$40.00</span>
            </div>
          </div>
        </div>

        <div className="flex w-full items-center justify-between">
          <p className="flex gap-3 text-[16px]">Grand Total</p>
          <span className="text-xl font-bold">
            ${" "}
            {totals + selectedShippingValue > 0
              ? totals + selectedShippingValue
              : 0}
          </span>
        </div>
        <Button className={"p-4"}>PROCEED TO CHECKOUT</Button>
      </div>
    </div>
  );
}
