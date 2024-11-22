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
  const [postsPerPage, setPostsPerPage] = useState(9);

  //* pagination page change
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = searchQuery?.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      {loading ? (
        <div className="flex w-full items-center justify-center">
          <Loader />
        </div>
      ) : error ? (
        <div className="text-center text-red-500">
          <p>Something went wrong: {error.message}</p>
        </div>
      ) : (
        <div className="flex w-full flex-col items-center justify-center">
          <div className="grid grid-cols-1 gap-3 sm:w-[80%] sm:grid-cols-2 lg:w-[70%] xl:grid-cols-3">
            {currentPosts?.map((item) => (
              <Link to={`/products/${item.id}`} state={{ loading, item }}>
                <ProductCard key={item.id} item={item} />
              </Link>
            ))}
          </div>
          {currentPosts.length >= 9 && (
            <Pagination
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
              length={data?.length}
              postsPerPage={postsPerPage}
            />
          )}
        </div>
      )}
    </>
  );
}
