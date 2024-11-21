import React, { useEffect, useState } from "react";
import IncDecButton from "../Tools/IncDecButton";

export default function Table({ item, onTotalPrice }) {
  const [clicks, setClicks] = useState(1);
  const [subTotal, setSubTotal] = useState(0);

  // Destructuring item properties
  const { id, NewPrice, productImg, productName } = item;

  // Handle quantity change
  const clickHandler = (newClicks) => {
    setClicks(newClicks);
  };

  useEffect(() => {
    const total = clicks * NewPrice;
    setSubTotal(total);
    onTotalPrice(id, total); // Pass updated subtotal to parent
  }, [clicks, NewPrice, id, onTotalPrice]);

  return (
    <tr>
      <th></th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-16 sm:h-[6rem] sm:w-[6rem]">
              <img src={productImg} alt="Product" />
            </div>
          </div>
        </div>
      </td>
      <td>
        {productName}
        <br />
      </td>
      <td> $ {NewPrice} </td>
      <th>
        <IncDecButton
          w={"w-full"}
          clicks={clicks}
          onClicksChange={clickHandler}
        />
      </th>
      <th> $ {subTotal.toFixed(2)} </th>
    </tr>
  );
}
