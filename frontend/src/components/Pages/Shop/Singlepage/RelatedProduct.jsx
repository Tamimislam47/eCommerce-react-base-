import React from "react";
import { useFetchData } from "../../../../ContextApi/ProductDataProvider";
import ProductCard from "../../Home/Navbars./ProductsCard";
import { Link } from "react-router-dom";

export default function RelatedProduct() {
  const { data, loading } = useFetchData();

  const slideRelatedItem = data?.slice(0, 4);

  return (
    <div className="flex flex-col items-center justify-start gap-3 p-5">
      <div className="flex flex-col items-center justify-center pl-3 pr-3">
        <h1 className="text-4xl sm:text-5xl">Related Product</h1>
        <p className="">
          There are many variations of passages of Lorem Ipsum available Sale
          ProductProduct Accessories Round Pocket Router $38.50 -5% Product
        </p>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {slideRelatedItem?.map((item) => (
          <Link
            to={`/products/${item.id}`}
            key={item.id}
            state={{ loading, item }}
          >
            <ProductCard item={item} />
          </Link>
        ))}
      </div>
    </div>
  );
}
