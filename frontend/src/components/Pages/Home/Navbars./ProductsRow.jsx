import { Link } from "react-router-dom";
import { useFetchData } from "../../../../ContextApi/ProductDataProvider";
import Button from "../../../ReuseableComponents/Button";
import ProdectCards from "./ProductsCard";
import React from "react";

export default function ProductsRow() {
  const { data, loading } = useFetchData();

  return (
    <div className="flex min-h-screen w-screen justify-center">
      <div className="container w-[80%] sm:w-[80%] lg:w-[70%]">
        <nav className="mb-7 flex items-center gap-3 text-[15px]">
          <Button className="rounded-[15px] bg-blue p-3 text-white">
            New Arrivals
          </Button>
          <Button className="rounded-[15px] bg-blue p-3 text-white">
            Top Rated{" "}
          </Button>
          <Button className="rounded-[15px] bg-blue p-3 text-white">
            Featured
          </Button>
        </nav>
        <div className="productItems grid min-h-screen w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {data?.map((item) => (
            <Link
              to={`/products/${item?.id}`}
              state={{ loading, item }}
              key={item.id} // Move the key here
            >
              <ProdectCards item={item} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
