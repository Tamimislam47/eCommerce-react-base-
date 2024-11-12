import React from "react";
import { SlCalender } from "react-icons/sl";
import { IoPersonSharp } from "react-icons/io5";
import Button from "../../../../ReuseableComponents/Button";
import { Link } from "react-router-dom";

export default function LeftSideBlog({ heading, image }) {
  return (
    <div className="h-full w-full border-2 border-gray-500">
      <div className="grid h-[90vh] w-full grid-cols-1 grid-rows-2 sm:h-[75vh] lg:h-full lg:grid-cols-1 lg:grid-rows-2 xl:grid-cols-2 xl:grid-rows-1">
        {/* Image on top for phones and laptops, left for PCs */}
        <div className="h-full w-full">
          <img src={image} alt="blog" className="h-full w-full object-cover" />
        </div>

        {/* Text section below image on phones and laptops, right of image on PCs */}
        <div className="flex h-full w-full flex-col justify-around gap-2 p-4 sm:gap-1">
          <div className="flex w-full items-center justify-around">
            <div className="flex items-center gap-2">
              <span className="text-[20px] text-blue">
                <SlCalender />
              </span>
              <span className="text-[12px] sm:text-[17px]">27, Jun 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[20px] text-blue">
                <IoPersonSharp />
              </span>
              <span className="text-[12px] sm:text-[17px]">Oaklee Odom</span>
            </div>
          </div>
          <h2 className="text-xl font-bold sm:text-2xl">{heading}</h2>

          <p>
            Creating a successful smart product involves a few essential
            strategies. First, it’s crucial to understand user needs and design
            features that directly address specific pain points, making the
            product both practical and intuitive. Reliable connectivity, such as
            Wi-Fi or Bluetooth...
          </p>

          <Button className="w-[50%] rounded-2xl bg-gray-600 p-4 font-bold text-white hover:bg-blue sm:w-[25%] sm:text-xl lg:w-1/2">
            <Link to={"/products/:id"}>Read Me</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
