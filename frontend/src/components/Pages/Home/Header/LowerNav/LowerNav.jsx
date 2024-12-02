import React from "react";
import MidNav from "./MidNav";
import SearchBar from "../../../../ReuseableComponents/Tools/SearchBar";
import BottomNav from "./BottomNav";

export default function LowerNav({ blogData, chk }) {
  return (
    <nav className="flex w-full flex-col items-center gap-3 p-3 sm:w-[80%] lg:w-[70%]">
      <MidNav blogData={blogData} chk={chk} />
      <div className="sm:hidden">
        <SearchBar />
      </div>
      <BottomNav />
    </nav>
  );
}
