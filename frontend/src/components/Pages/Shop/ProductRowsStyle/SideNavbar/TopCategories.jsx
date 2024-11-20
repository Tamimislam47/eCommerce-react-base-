import React from "react";

export default function TopCategories() {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="decoration-3 text-2xl underline decoration-gray-400 underline-offset-8">
        Top Categories
      </h1>
      <div className="flex flex-col justify-start">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="flex flex-col justify-start gap-4 text-xl">
          {/* Sidebar content here */}
          <li className="text-black no-underline hover:cursor-pointer hover:text-gray-700">
            <a className="text-inherit no-underline">All (65)</a>
          </li>
          <li className="text-black no-underline hover:cursor-pointer hover:text-gray-700">
            <a className="text-inherit no-underline">Computer (12)</a>
          </li>
          <li className="text-black no-underline hover:cursor-pointer hover:text-gray-700">
            <a className="text-inherit no-underline">Electronics (65)</a>
          </li>
          <li className="text-black no-underline hover:cursor-pointer hover:text-gray-700">
            <a className="text-inherit no-underline">Frame Sunglasses (19)</a>
          </li>
          <li className="text-black no-underline hover:cursor-pointer hover:text-gray-700">
            <a className="text-inherit no-underline">Furniture (7)</a>
          </li>
          <li className="text-black no-underline hover:cursor-pointer hover:text-gray-700">
            <a className="text-inherit no-underline">Genuine Leather (7)</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
