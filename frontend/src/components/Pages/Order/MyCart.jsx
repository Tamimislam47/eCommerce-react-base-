import React from "react";
import Header from "../Home/Header/Headers";
import Footer from "../Home/Footer/Footer";
import BackGroundBanner from "../../ReuseableComponents/Tools/BackGroundBanner";
import CartItemTable from "./CartItemTable";
import GridCartCards from "./GridCartCards/GridCartCards";
import NavList from "./NavList";

export default function MyCart() {
  
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <Header />
      <BackGroundBanner />
      <div className="flex w-full gap-5 flex-col items-center justify-center">
        <CartItemTable />
        <NavList />
        <GridCartCards />
      </div>
      <Footer />
    </div>
  );
}
