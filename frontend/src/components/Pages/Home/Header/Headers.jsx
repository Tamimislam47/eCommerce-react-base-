import React from "react";
import UpperNavbar from "./UpperNavbar";
import LowerNav from "./LowerNav/LowerNav";

export default function Main({ blogData, chk }) {
  return (
    <>
      <div className="flex h-[200px] w-full flex-col items-center bg-[#252525] text-white">
        <UpperNavbar />
        <hr className="border-borderColor w-[100vw] border-t-2" />
        <LowerNav blogData={blogData} chk={chk} />
      </div>
    </>
  );
}
