import React from "react";
import backgroundimg from "@images/breadcrunbBg.webp";
export default function BackGroundBanner() {
  return (
    <div className="h-[40vh] w-full bg-green-400">
      <img className="w-full h-full object-cover "  src={backgroundimg} alt="" />
    </div>
  );
}
