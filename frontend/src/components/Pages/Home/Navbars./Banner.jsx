import React, { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import MusicBox from "@images/BannerMusicBox.png";
import bannerImg from "@images/Banner.webp";
import { Link } from "react-router-dom";
import Button from "../../../ReuseableComponents/Button";

export default function Banner() {
  const [isHovered, setIsHovered] = useState(false);

  // Handlers for mouse enter and leave
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      style={{
        height: "calc(100vh - 200px)",
        backgroundImage: `url(${bannerImg})`,
      }}
      className="bannerContainer relative flex w-screen flex-col items-center justify-center bg-cover text-white"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Left side button with hover animation */}
      <Button
        className={`absolute left-[50px] hidden h-[60px] w-[60px] items-center justify-center rounded-full bg-white text-4xl text-black transition-transform duration-500 ease-in-out sm:flex ${
          isHovered ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
        }`}
      >
        <MdKeyboardArrowLeft />
      </Button>

      <div className="grid h-full w-[60%] grid-rows-2 sm:grid-cols-2">
        <div className="rightSide col-start-1 col-end-2 row-start-1 row-end-3 flex flex-col items-center justify-center gap-8  font-extrabold">
          <p className="text-center text-2xl">Welcome to Nexus</p>

          <p className="text-center text-2xl sm:text-4xl lg:text-6xl">
            Your Home <br /> Smart Devices & <br />
            Best Solution
          </p>

          <Button className="white w-[70%] rounded-[20px] border-[4px] bg-transparent p-4 hover:bg-primary sm:w-[50%]">
            <Link to="/products">Shop All Devices</Link>
          </Button>
        </div>

        <div className="leftSide flex w-full items-center justify-center ">
          <div className="flex w-[50%]  items-center justify-center  sm:absolute sm:right-[28%] sm:top-[29%] sm:w-[18%] sm:h-[71%] lg:w-[10%]">
            <img className="h-full w-full" src={MusicBox} alt="Music Box" />
          </div>
        </div>
      </div>

      {/* Right side button with hover animation */}
      <Button
        className={`absolute right-[45px] hidden h-[60px] w-[60px] items-center justify-center rounded-full bg-white text-4xl text-black transition-transform duration-500 ease-in-out sm:flex ${
          isHovered ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
        }`}
      >
        <MdKeyboardArrowRight />
      </Button>
    </div>
  );
}
