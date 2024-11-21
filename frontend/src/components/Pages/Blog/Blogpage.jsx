import BackGroundBanner from "../../ReuseableComponents/Tools/BackGroundBanner";
import Pagination from "../../ReuseableComponents/Pagination/PaginationDesign";
import Loader from "../../ReuseableComponents/Loader";
import Footer from "../Home/Footer/Footer";
import React, { useEffect, useState } from "react";
import Headers from "../Home/Header/Headers";
import RowsBlogData from "./RowsBlogData";

export default function Blogpage() {
  const [blogData, setBlogData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(9);

  useEffect(() => {
    const getBlogData = async () => {
      try {
        const response = await fetch("/JsonData/Blog.json");
        if (!response.ok) throw new Error("Network response was not ok");

        const data = await response.json();
        if (data && data.blogs) {
          setBlogData(data.blogs);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching data:", error.message);
      }
    };
    getBlogData();
  }, []);

  //* pagination page change
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = blogData.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="flex flex-col items-center justify-center">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Headers />
          <BackGroundBanner />
          <RowsBlogData blogData={currentPosts} />
          <div className="flex w-full justify-end pr-20">
            <Pagination
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
              length={blogData.length}
              postsPerPage={postsPerPage}
            />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}
