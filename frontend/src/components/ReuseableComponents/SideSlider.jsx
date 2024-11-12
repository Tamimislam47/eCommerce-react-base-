import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
export default function SideSlider({ isOpen, children }) {
  return (
    <div
      className={`fixed left-0 top-0 z-10 h-[100vh] w-[250px] transform bg-gray-800 bg-opacity-90 transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      id="mySidebar"
    >
      <div className="flex flex-col gap-4">
        {children}
      </div>
    </div>
  );
}
