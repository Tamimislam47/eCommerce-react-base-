import React, { useState, useCallback } from "react";
import { useLocation } from "react-router-dom";
import Table from "../../ReuseableComponents/Table/Table";

export default function CartItemTable() {
  const location = useLocation();
  const [totals, setTotals] = useState({});

  // Callback to update the subtotal for each item
  const onTotalPrice = useCallback(
    (id, newSubtotal) => {
      setTotals((prevTotals) => ({
        ...prevTotals,
        [id]: newSubtotal,
      }));
    },
    [],
  );

  // Calculate the total price by summing all subtotals
  const totalPrice = Object.values(totals).reduce(
    (acc, subtotal) => acc + subtotal,
    0,
  );

  

  return (
    <div className="mx-auto w-full overflow-x-auto sm:w-[80%] lg:w-[70%]">
      <table className="w-full table-auto border-collapse border border-gray-300 text-sm sm:text-base">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="px-2 py-2"></th>
            <th className="px-2 py-2">Image</th>
            <th className="px-2 py-2">Product Name</th>
            <th className="px-2 py-2">Unit Price</th>
            <th className="px-2 py-2">Qty</th>
            <th className="px-2 py-2">Subtotal</th>
            <th className="px-2 py-2"></th>
          </tr>
        </thead>
        <tbody>
          {location?.state?.items?.map((item) => (
            <Table key={item.id} item={item} onTotalPrice={onTotalPrice} />
          ))}
        </tbody>
      </table>

      {/* Display the total price */}
      <div className="mt-4 text-center text-xl font-bold">
        Total Price: ${totalPrice.toFixed(2)}
      </div>
    </div>
  );
}
