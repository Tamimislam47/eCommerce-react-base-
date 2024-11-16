import React, { useState } from "react";

export const productContext = React.createContext();

export default function ProductProvider({ children }) {
  const [productDetails, setproductDetails] = useState([]);

  const value = {
    productDetails,
    setproductDetails,
  };

  return (
    <productContext.Provider value={value}>{children}</productContext.Provider>
  );
}
