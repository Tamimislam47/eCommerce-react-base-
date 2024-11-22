import React, { useState } from "react";

export const productContext = React.createContext();

export default function ProductProvider({ children }) {
  const [selectedproductDetails, setselectedproductDetails] = useState([]);
  const [favItemslist, setfavItemslist] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState([]);

  const addProduct = (newProduct) => {
    setselectedproductDetails((prevDetails) => [...prevDetails, newProduct]);
  };

  const addFavitems = (newfavitem) => {
    setfavItemslist((prevFav) => [...prevFav, newfavitem]);
  };

  const deleteProduct = (productId) => {
    setselectedproductDetails((prevDetails) =>
      prevDetails.filter((product) => product.id !== productId),
    );
  };

  const deleteFavItem = (productId) => {
    setfavItemslist((prevProdect) => {
      return prevProdect.filter((product) => product.id !== productId);
    });
  };

  const filterData = (data, searching) => {
    const filter = data?.filter((item) =>
      item.productName.toLowerCase().includes(searching.toLowerCase()),
    );
    setSearchQuery(filter);
    return filter;
  };

  const value = {
    selectedproductDetails,
    setselectedproductDetails,
    setCartItems,
    addProduct,
    addFavitems,
    cartItems,
    deleteProduct,
    deleteFavItem,
    favItemslist,
    filterData,
    searchQuery,
  };

  return (
    <productContext.Provider value={value}>{children}</productContext.Provider>
  );
}
