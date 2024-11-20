import React from "react";

export default function Information() {
  return (
    <div className=" max-w-lg rounded-lg bg-gray-100 p-6 pl-0 shadow-lg">
      <ul className="space-y-4">
        <li className="flex items-center gap-4 rounded-lg bg-white p-4 shadow-md transition-all hover:bg-gray-50">
          <span className="font-semibold text-gray-700">Weight</span>
          <span className="text-gray-500">400g</span>
        </li>
        <li className="flex items-center gap-4 rounded-lg bg-white p-4 shadow-md transition-all hover:bg-gray-50">
          <span className="font-semibold text-gray-700">Dimensions</span>
          <span className="text-gray-500">10 x 10 x 15 cm</span>
        </li>
        <li className="flex items-center gap-4 rounded-lg bg-white p-4 shadow-md transition-all hover:bg-gray-50">
          <span className="font-semibold text-gray-700">Materials</span>
          <span className="text-gray-500">60% cotton, 40% polyester</span>
        </li>
        <li className="flex items-center gap-4 rounded-lg bg-white p-4 shadow-md transition-all hover:bg-gray-50">
          <span className="font-semibold text-gray-700">Other Info</span>
          <span className="text-gray-500">
            American heirloom jean shorts pug seitan letterpress
          </span>
        </li>
      </ul>
    </div>
  );
}
