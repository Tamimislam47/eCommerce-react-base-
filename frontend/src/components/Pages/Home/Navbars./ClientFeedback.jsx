import React from "react";
import Iphone from "@images/ipone10.webp";
import product2 from "@images/watch.webp";
import SimpleImageSlider from "react-simple-image-slider";

export default function ClientFeedback() {
  const images = [{ url: product2 }, { url: Iphone }, { url: Iphone }];

  return (
    <div className="flex h-[80vh] w-screen items-center justify-center bg-red-500">
      <div className="h-full w-full sm:w-[80%] lg:w-[70%]">
        <div>
          <h1>Client Feedback</h1>
          <p>There are many variations of passages of Lorem Ipsum available</p>
        </div>
        <div className="flex h-full w-full">
          <div className="h-[90%] w-1/2 flex gap-3 overflow-hidden bg-green-400">
           
          </div>
          <div className="bg-blue-400 h-[90%] w-1/2"></div>
        </div>
      </div>
    </div>
  );
}
