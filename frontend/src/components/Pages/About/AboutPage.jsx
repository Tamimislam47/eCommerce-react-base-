import React from "react";
// ClientFeedbacks Blog Footer ;
import Headers from "../Home/Navbars./Headers";
import ClientFeedback from "../Home/Navbars./ClientFeedback";
import BlogCards from "../Home/Navbars./BlogCards/BlogCard";
import BackGroundBanner from "../../ReuseableComponents/BackGroundBanner";
import Footer from "../Home/Navbars./Footer/Footer";
import Description from "./Description";
import Members from "./Members";
import Services from "./Services";
export default function About() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <Headers />
      <BackGroundBanner />
      <Description />
      {/* <ClientFeedback /> */}
      <Members />
      <Services />
      <BlogCards />
      <Footer />
    </div>
  );
}
