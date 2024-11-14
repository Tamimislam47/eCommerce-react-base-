import React from "react";
import Headers from "../../Home/Navbars./Headers";
import Footer from "../../Home/Navbars./Footer/Footer";
import Loader from "../../../ReuseableComponents/Loader";
import BackGroundBanner from "../../../ReuseableComponents/BackGroundBanner";
import { useLocation } from "react-router-dom";
import SingleBlogContain from "./SingleBlogContain";

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
          <Footer />
        </>
      )}
    </div>
  );
}
