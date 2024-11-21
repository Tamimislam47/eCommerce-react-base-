import BackGroundBanner from "../../../ReuseableComponents/Tools/BackGroundBanner";
import { useParams, useLocation } from "react-router-dom";
import Footer from "../../Home/Footer/Footer";
import Headers from "../../Home/Header/Headers";
import React, { useState } from "react";
import ItemContainer from "./ItemContainer";
import RelatedProduct from "./RelatedProduct";
import Loader from "../../../ReuseableComponents/Loader";

export default function SingalProduct() {
  const location = useLocation();

  return (
    <>
      {location.state?.loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col items-center justify-center">
          <Headers />
          <BackGroundBanner />
          <ItemContainer itemDetails={location.state?.item} />
          <RelatedProduct />
          <Footer />
        </div>
      )}
    </>
  );
}
