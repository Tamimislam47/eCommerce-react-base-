import React from "react";
import Headers from "../../Home/Header/Headers";
import Footer from "../../Home/Footer/Footer";
import Loader from "../../../ReuseableComponents/Loader";
import BackGroundBanner from "../../../ReuseableComponents/Tools/BackGroundBanner";
import { useLocation } from "react-router-dom";
import SingleBlogContain from "./SingleBlogContain";
import Comments from "./Comments";

export default function SinglePageBlog() {
  const location = useLocation();
  const { loading } = location.state;

  return (
    <div className="flex flex-col items-center justify-center">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Headers />
          <BackGroundBanner />
          <SingleBlogContain blog={location.state} />
          <Comments />
          <Footer />
        </>
      )}
    </div>
  );
}
