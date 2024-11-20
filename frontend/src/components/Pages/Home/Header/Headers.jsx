import React from "react";
import UpperNavbar from "./UpperNavbar";
import LowerNav from "./LowerNav/LowerNav";

// ! Database (Date,Title, image,insertDb Comments)
export default function Main() {
  return (
    <>
      <div className="flex h-[200px] w-full flex-col items-center bg-[#252525] text-white">
        <UpperNavbar />
        <hr className="border-borderColor w-[100vw] border-t-2" />
        <LowerNav />
      </div>
    </>
  );
}
