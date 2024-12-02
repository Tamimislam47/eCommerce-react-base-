import BackGroundBanner from "../../ReuseableComponents/Tools/BackGroundBanner";
import Pagination from "../../ReuseableComponents/Pagination/PaginationDesign";
import { productContext } from "../../../ContextApi/ProductProvider";
import React, { useContext, useEffect, useState } from "react";
import Loader from "../../ReuseableComponents/Loader";
import Footer from "../Home/Footer/Footer";
import Headers from "../Home/Header/Headers";
import RowsBlogData from "./RowsBlogData";

export default function Blogpage() {
  //*context api
  const { searchQuery } = useContext(productContext);

  const [blogData, setBlogData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(9);
  const [chk, setchk] = useState(false);

  useEffect(() => {
    const getBlogData = async () => {
      try {
        const response = await fetch("/JsonData/Blog.json");
        if (!response.ok) throw new Error("Network response was not ok");

        const data = await response.json();
        if (data && data.blogs) {
          setBlogData(data.blogs);
        }
        setchk(true);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching data:", error.message);
      }
    };
    getBlogData();

    return () => {
      setchk(false);
    };
  }, []);

  //* pagination page change
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = searchQuery.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="flex flex-col items-center justify-center">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Headers blogData={blogData} chk={chk} />
          <div className="flex w-full flex-col items-center justify-center gap-4">
            <BackGroundBanner />
            <RowsBlogData blogData={currentPosts} />
            {searchQuery?.length > 0 && searchQuery?.length > postsPerPage && (
              <Pagination
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                length={blogData.length}
                postsPerPage={postsPerPage}
              />
            )}
            <Footer />
          </div>
        </>
      )}
    </div>
  );
}
