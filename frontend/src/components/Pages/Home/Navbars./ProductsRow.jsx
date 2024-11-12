import React from "react";
import ProdectCards from "./ProductsCard";
import Button from "../../../ReuseableComponents/Button";

export default function ProductsRow() {
  return (
    <div className="flex min-h-screen w-screen justify-center">
      <div className="container w-[80%] sm:w-[80%] lg:w-[70%]">
        <nav className="mb-7 flex items-center gap-9">
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
          <ProdectCards
            itemName="Modern Smart Phone"
            itemPrice="$20"
          ></ProdectCards>
          <ProdectCards
            itemName="Modern Smart Phone"
            itemPrice="$20"
          ></ProdectCards>
          <ProdectCards
            itemName="Modern Smart Phone"
            itemPrice="$20"
          ></ProdectCards>
          <ProdectCards
            itemName="Modern Smart Phone"
            itemPrice="$20"
          ></ProdectCards>
          <ProdectCards
            itemName="Modern Smart Phone"
            itemPrice="$20"
          ></ProdectCards>
          <ProdectCards
            itemName="Modern Smart Phone"
            itemPrice="$20"
          ></ProdectCards>
          <ProdectCards
            itemName="Modern Smart Phone"
            itemPrice="$20"
          ></ProdectCards>
          <ProdectCards
            itemName="Modern Smart Phone"
            itemPrice="$20"
          ></ProdectCards>
        </div>
      </div>
    </div>
  );
}
