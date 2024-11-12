import React, { useEffect, useMemo } from "react";
import Headers from "../Home/Navbars./Headers";
import BackGroundBanner from "../../ReuseableComponents/BackGroundBanner";
import Footer from "../Home/Navbars./Footer/Footer";
import Loader from "../../ReuseableComponents/Loader";
import OneBlogCard from "./OneBlogCard";
export default function Blogpage() {
  const [blogData, setBlogData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const getBlogData = async () => {
      try {
        const response = await fetch("/JsonData/Blog.json"); // Access the file from public folder
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

  return (
    <div className="flex flex-col items-center justify-center">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Headers />
          <BackGroundBanner />
          <OneBlogCard  />
          <Footer />
        </>
      )}
    </div>
  );
}
