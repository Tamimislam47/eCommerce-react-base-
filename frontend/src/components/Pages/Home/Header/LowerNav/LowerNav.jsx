import React from "react";
import MidNav from "./MidNav";
import SearchBar from "../../../../ReuseableComponents/Tools/SearchBar";
import BottomNav from "./BottomNav";

export default function LowerNav() {
  return (
    <nav className="flex w-full gap-3  flex-col items-center p-3 sm:w-[80%] lg:w-[70%]">
      <MidNav />
      <div className="sm:hidden">
        <SearchBar />
      </div>
      <BottomNav />
    </nav>
  );
}
