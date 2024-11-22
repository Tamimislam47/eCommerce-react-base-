import { useFetchData } from "../../../../ContextApi/ProductDataProvider";
import { productContext } from "../../../../ContextApi/ProductProvider";
import ProductCard from "../../Home/Navbars./ProductsCard";
import Loader from "../../../ReuseableComponents/Loader";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../../../ReuseableComponents/Pagination/PaginationDesign";

export default function ProductGrid() {
  const { data, loading, error } = useFetchData();
  const { searchQuery } = React.useContext(productContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9); // Default posts per page

  // Determine the dataset to display
  const dataset = searchQuery && searchQuery.length > 0 ? searchQuery : data;

  // Pagination logic
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = dataset?.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      {loading ? (
        <div className="flex w-full items-center justify-center">
          <Loader />
        </div>
      ) : (
        <div className="xl:x-auto col-span-4 flex w-full flex-col items-center gap-5  justify-center  xl:col-span-3">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {currentPosts?.map((item) => (
              <Link
                to={`/products/${item.id}`}
                state={{ loading, item }}
                key={item.id}
              >
                <ProductCard item={item} />
              </Link>
            ))}
          </div>
          {dataset?.length > postsPerPage && (
            <Pagination
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
              length={dataset?.length}
              postsPerPage={postsPerPage}
            />
          )}
        </div>
      )}
    </>
  );
}
