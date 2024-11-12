import React, { useState } from "react";
import { LuShoppingBag } from "react-icons/lu";

export default function FeatureProductCards(props) {
  const [show, setShow] = useState(false);

  const handleMouseEnter = () => setShow(true);
  const handleMouseLeave = () => setShow(false);

  return (
    <div className="flex h-[45%] rounded-lg  w-full border-2 border-gray-500 xl:h-1/2">
      <div className="h-full w-1/2 object-cover ">
        <img src={props.src} className="h-full w-full" alt="" />
      </div>
      <div className="text-[15px] flex h-full w-[60%] flex-col items-start justify-center gap-3 p-4  font-bold">
        <button className="text-[#666666]">Time</button>
        <p>Ladies smart Watch</p>
        <p className="text-[#666666]">$45.00</p>
        <div className="flex w-full items-center justify-center">
          <hr className="w-[90%]" />
        </div>
        <ul className="marker:text-blue-500 flex list-disc flex-col gap-2 text-gray-800">
          <li>Predecessor: None</li>
          <li>Support Type: Neutral</li>
          <li>Cushioning: High Energizing</li>
          <li>Total Weight: 300gm</li>
        </ul>
      </div>
    </div>
  );
}
