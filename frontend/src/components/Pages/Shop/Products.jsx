import React, { useState } from "react";
import Headers from "../Home/Header/Headers";
import BackGroundBanner from "../../ReuseableComponents/Tools/BackGroundBanner";
import AllProduct from "./ProductRowsStyle/AllProduct";
import { useFetchData } from "../../../ContextApi/ProductDataProvider";
import Pagination from "../../ReuseableComponents/Pagination/PaginationDesign";
import Footer from "../Home/Navbars./Footer/Footer";
export default function Products() {
  const { data } = useFetchData();

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(9);

  //* pagination page change
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = data?.slice(firstPostIndex, lastPostIndex);
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <Headers />
      <BackGroundBanner />
      <div className="flex w-full flex-col items-center justify-center gap-5">
        <AllProduct />
        <Pagination
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          length={data?.length}
          postsPerPage={postsPerPage}
        />
        <Footer />
      </div>
    </div>
  );
}
