import React from "react";
import watch from "@images/bodyWatch.webp";
import Airdot from "@images/airdot.webp";
import phone from "@images/phone.webp";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function BannerArea() {
  return (
    <div className="AreaItemsContainer grid h-screen w-full grid-cols-1 grid-rows-2 place-items-center gap-5 p-5 sm:h-[70vh] md:w-[80%] md:grid-cols-2 md:grid-rows-1 lg:w-[70%]">
      {/* Left Side Card */}
      <div className="leftSideCard flex h-[50vh] w-full flex-col bg-[#F2F8FD] sm:h-full">
        <div
          style={{ backgroundImage: `url(${watch})` }}
          className="image h-[70%] w-full bg-cover sm:h-[60%] sm:bg-center"
        ></div>
        <div className="flex h-[30%] flex-col justify-center p-10 text-2xl font-extrabold text-[#999DA0] sm:h-[35%] sm:p-6 sm:text-3xl md:text-left md:text-4xl">
          <p>Smart Watch For</p>
          <p>Your Hand</p>
          <div className="mt-4 flex items-center justify-between pb-6">
            <p className="text-lg sm:text-xl md:text-2xl">From $29.00</p>
            <button className="btn w-[50px] rounded-full border-0 bg-blue text-xl">
              <Link to="/products" className="text-white">
                <FaArrowRight />
              </Link>
            </button>
          </div>
        </div>
      </div>

      {/* Right Side Cards */}
      <div className="rightSideCard grid h-full w-full grid-rows-2 gap-6 md:grid-cols-1">
        {/* Headphones */}
        <div
          style={{ backgroundImage: `url(${Airdot})` }}
          className="upper flex h-full w-full flex-col items-start justify-between bg-cover bg-center p-6 text-left"
        >
          <div className="grid h-full w-full grid-rows-3">
            <h1 className="text-xl text-[#999DA0] sm:text-3xl md:text-4xl">
              AirBut
            </h1>
            <p className="text-lg text-black sm:text-xl md:text-2xl">
              From $69.00
            </p>
            <button className="btn w-[50px] rounded-full border-0 bg-blue text-xl">
              <Link to="/products" className="text-white">
                <FaArrowRight />
              </Link>
            </button>
          </div>
        </div>

        {/* Smartphone */}
        <div
          style={{ backgroundImage: `url(${phone})` }}
          className="upper flex h-full w-full flex-col items-start justify-between bg-cover bg-center p-6 text-left"
        >
          <div className="grid h-full w-full grid-rows-3">
            <h1 className="text-xl text-[#999DA0] sm:text-3xl md:text-4xl">
              Smartphone
            </h1>
            <p className="text-lg text-black sm:text-xl md:text-2xl">
              From $69.00
            </p>
            <button className="btn w-[50px] rounded-full border-0 bg-blue text-xl">
              <Link to="/products" className="text-white">
                <FaArrowRight />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
