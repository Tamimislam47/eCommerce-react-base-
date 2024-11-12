import React from "react";
import product1 from "@images/Headphone.webp";
import product2 from "@images/watch.webp";
import product3 from "@images/ipone10.webp";
import UpperCard from "../../../ReuseableComponents/FeatureProductCards";
import LowerCard from "../../../ReuseableComponents/FeatureProductCards";
import Button from "../../../ReuseableComponents/Button";


export default function FeaturedOffers() {
  return (
    <div className="FeatureContainer h-[calc(100vh+70vh)] w-full p-3 sm:w-[80%] lg:w-[70%] xl:mt-5 xl:h-[90vh]">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold">Featured Offers</h1>
        <p>There are many variations of passages of Lorem Ipsum available</p>
      </div>
      <div className="flex h-full w-full flex-col items-center justify-center gap-3">
        {/* Featured Cards */}
        <div className="cards flex h-full w-full flex-col gap-5 xl:flex xl:flex-row">
          {/* Left Side */}
          <div
            style={{
              backgroundImage: `url(${product1})`,
            }}
            className="h-[45%] w-full rounded-xl border-2 border-gray-500 bg-cover bg-center xl:h-full xl:w-1/2"
          >
            <div className="textContainer flex h-[80%] w-full flex-col items-center justify-between">
              <div className="uptxt mt-[20px] flex flex-col justify-around gap-3">
                <h1 className="text-center text-4xl font-bold">
                  Bluetooth Headphone
                </h1>
                <p className="text-center text-2xl">$38.50</p>
              </div>
              <Button className="rounded-[25px] bg-blue pb-4 pl-8 pr-8 pt-4 font-bold text-white sm:text-2xl">
                Shop Now
              </Button>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex h-1/2 w-full flex-col gap-5 xl:h-full xl:w-1/2">
            {/* //upper side */}
            <UpperCard src={product2} />

            <LowerCard src={product3} />
          </div>
        </div>
      </div>
    </div>
  );
}
