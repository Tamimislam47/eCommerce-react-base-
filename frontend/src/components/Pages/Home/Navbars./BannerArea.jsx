import React from "react";
import watch from "@images/bodyWatch.webp";
import Airdot from "@images/airdot.webp";
import phone from "@images/phone.webp";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../../../ReuseableComponents/Button";

export default function BannerArea() {
  return (
    <div className="AreaItemsContainer grid h-[80vh] w-full grid-cols-2 place-items-center items-center gap-3 sm:w-[80%] sm:gap-10 lg:w-[70%]">
      <div className="leftSideCard h-[75%] w-[100%] bg-[#F2F8FD]">
        <div
          style={{ backgroundImage: `url(${watch})` }}
          className="image flex h-[60%] w-full items-center justify-center bg-cover"
        >
        </div>
        <div className="flex h-[35%] flex-col justify-center p-[50px] text-2xl font-extrabold text-[#999DA0] sm:text-4xl">
          <p>Smart Watch For</p>
          <p>Your Hand</p>
          <div className="flex justify-between">
            <p>From $29.00</p>
            <Button className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-blue p-4">
              <Link to={"/products"}>
                {
                  <span className="text-xl">
                    <FaArrowRight />
                  </span>
                }{" "}
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="rightSideCard grid-col-2 grid h-[75%] w-[100%] gap-6">
        <div
          style={{ width: "100%", backgroundImage: `url(${Airdot})` }}
          className="upper flex flex-col justify-center gap-5 bg-cover bg-[65%] p-5 sm:w-full sm:text-4xl"
        >
          <h1 className="text-[#999DA0] sm:text-4xl">Headphones</h1>
          <p className="text-black sm:text-2xl">From $95.00</p>
          <Button className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-blue p-4 text-xl">
            <Link to={"/products"}> {<FaArrowRight />} </Link>
          </Button>
        </div>
        <div
          style={{ backgroundImage: `url(${phone})` }}
          className="upper flex flex-col justify-center gap-5 bg-cover bg-[65%] p-5 sm:text-4xl"
        >
          <h1 className="text-[#999DA0] sm:text-4xl">Smartphone</h1>
          <p className="text-black sm:text-2xl">From $69.00</p>
          <Button className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-blue p-4 text-xl">
            <Link to={"/products"}> {<FaArrowRight />} </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
