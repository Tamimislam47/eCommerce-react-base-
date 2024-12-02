import React, { useState, useCallback } from "react";
import Header from "../Home/Header/Headers";
import Footer from "../Home/Footer/Footer";
import BackGroundBanner from "../../ReuseableComponents/Tools/BackGroundBanner";
import CartItemTable from "./CartItemTable";
import GridCartCards from "./GridCartCards/GridCartCards";
import { useLocation } from "react-router-dom";

import NavList from "./NavList";

export default function MyCart() {
  const location = useLocation();
  const [totals, setTotals] = useState({});

  // Callback to update the subtotal for each item
  const onTotalPrice = useCallback((id, newSubtotal) => {
    setTotals((prevTotals) => ({
      ...prevTotals,
      [id]: newSubtotal,
    }));
  }, []);

  // Calculate the total price by summing all subtotals
  const totalPrice = Object.values(totals).reduce(
    (acc, subtotal) => acc + subtotal,
    0,
  );


  return (
    <div className="flex w-full flex-col items-center justify-center">
      <Header />
      <BackGroundBanner />
      <div className="flex w-full flex-col items-center justify-center gap-5">
        <CartItemTable
          items={location?.state?.items}
          totalPrice={totalPrice}
          onTotalPrice={onTotalPrice}
        />
        <NavList />
        <GridCartCards totals={totalPrice} />
      </div>
      <Footer />
    </div>
  );
}
