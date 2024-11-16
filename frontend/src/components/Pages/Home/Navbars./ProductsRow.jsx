import React, { useEffect, useState } from "react";
import ProdectCards from "./ProductsCard";
import Button from "../../../ReuseableComponents/Button";

export default function ProductsRow() {
  const [productData, setproductData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/JsonData/ProductDetails.json");
      const data = await response.json();
      setproductData(data);
    };
    fetchData();
  }, []);

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
          {productData.map((item) => (
            <ProdectCards key={item.id} item={item} />
          ))}

         
        </div>
      </div>
    </div>
  );
}
