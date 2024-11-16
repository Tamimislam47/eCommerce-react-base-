import React from "react";


export default function WithImgSlider(props) {
  const { productName, price, img } = props;
  return (
    <div className="card card-side flex   h-[100px] items-center bg-base-100 shadow-xl">
      <div className="h-full  ">
        <figure className="h-full w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            alt="Movie"
            className="h-full w-full p-2"
          />
        </figure>
      </div>
      <div className="card-body  flex gap-5  w-[65%]">
        <div className="flex justify-between">
          <h2 className="card-title">{productName || "Product Name"}</h2>
          <button>X</button>
        </div>
        <p> {price || "Price"} </p>
      </div>
    </div>
  );
}
