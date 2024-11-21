import React from "react";
import Button from "../../../ReuseableComponents/Button";

export default function ShippingAndTax() {
  return (
    <div className="flex w-full items-center justify-center bg-[#EBEBEB]">
      <div className="flex w-[80%] flex-col gap-4 pb-10 pl-1 pr-1 pt-10">
        <h4>Estimate Shipping And Tax</h4>
        <p>Enter your destination to get a shipping estimate.</p>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">* Country</span>
          </div>
          <select className="select select-bordered w-full">
            <option>Bangladesh</option>
            <option>Albania</option>
            <option>China</option>
            <option>India</option>
          </select>
        </label>

        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">* Region / State</span>
          </div>
          <select className="select select-bordered">
            <option>Bangladesh</option>
            <option>Albania</option>
            <option>China</option>
            <option>India</option>
          </select>
        </label>
        <p>* Zip/Postal Code</p>
        <input className="w-full p-2"></input>
        <Button  className={"p-3 w-[70%] "}  >GET A QUOTE</Button>
      </div>
    </div>
  );
}
