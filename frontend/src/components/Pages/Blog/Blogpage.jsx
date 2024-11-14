import BackGroundBanner from "../../ReuseableComponents/BackGroundBanner";
import Pagination from "../../ReuseableComponents/PaginationDesign";
import Loader from "../../ReuseableComponents/Loader";
import Footer from "../Home/Navbars./Footer/Footer";
import React, { useEffect, useState } from "react";
import Headers from "../Home/Navbars./Headers";
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

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = blogData.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="flex flex-col items-center justify-center gap-4 pl-3 pr-3">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Headers />
          <BackGroundBanner />
          <RowsBlogData  blogData={currentPosts} />
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
