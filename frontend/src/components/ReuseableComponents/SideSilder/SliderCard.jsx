import React, { useContext } from "react";
import { productContext } from "../../../ContextApi/ProductProvider";
import Button from "../Button";

export default function SliderCard({ selectedProduct, btn }) {
  const { deleteProduct, deleteFavItem } = useContext(productContext);

  const { productImg, productName, price } = selectedProduct;

  return (
    <div className="card card-side flex h-[100px] items-center bg-base-100 shadow-xl">
      <div className="h-full">
        <figure className="h-full w-full">
          <img src={productImg} alt="Movie" className="h-full w-full p-2" />
        </figure>
      </div>
      <div className="card-body flex w-[65%] gap-5">
        <div className="flex justify-between">
          <h2 className="card-title">{productName || "Product Name"}</h2>
          {btn === "favList" ? (
            <button onClick={() => deleteFavItem(selectedProduct.id)}>X</button>
          ) : (
            <button onClick={() => deleteProduct(selectedProduct.id)}>X</button>
          )}
        </div>
        <p> {price || "Price"} </p>
      </div>
    </div>
  );
}