import React from "react";

export default function ImgSide() {
  return (
    <div className="h-[80%] w-full  p-5">
      <div className="h-[90%] w-full rounded-lg border-2 border-gray-300">
        <img
          src="https://htmldemo.net/hmart/hmart/assets/images/product-image/zoom-image/1.webp"
          alt=""
          className="h-full w-full rounded-lg"
        />
        <div className="card-body">
          <ul className="menu menu-horizontal flex items-center justify-center gap-3 bg-base-200">
            <li className="w-[30%] rounded-lg border-2 border-gray-300 sm:w-auto">
              <img
                src="https://htmldemo.net/hmart/hmart/assets/images/product-image/small-image/1.webp"
                alt=""
                className="h-full w-full"
              />
            </li>
            <li className="w-[30%] rounded-lg border-2 border-gray-300 sm:w-auto">
              <img
                src="https://htmldemo.net/hmart/hmart/assets/images/product-image/small-image/2.webp"
                alt=""
                className="h-full w-full"
              />
            </li>
            <li className="w-[30%] rounded-lg border-2 border-gray-300 sm:w-auto">
              <img
                src="https://htmldemo.net/hmart/hmart/assets/images/product-image/small-image/3.webp"
                alt=""
                className="h-full w-full"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
