import React from "react";

export default function NavList() {
  return (
    <nav className="flex w-full gap-5 sm:w-[80%] lg:w-[70%]">
      <button className="bg-[#EBEBEB] pb-3 pl-8 pr-8 pt-3 hover:bg-black hover:text-white">
        {" "}
        CONTINUE SHOPPING
      </button>
      <button className="bg-[#EBEBEB] pb-3 pl-8 pr-8 pt-3 hover:bg-black hover:text-white">
        CLEAR SHOPPING CART
      </button>
    </nav>
  );
}
