import React from "react";
// ClientFeedbacks Blog Footer ;
import Headers from "../Home/Header/Headers";
import ClientFeedback from "../Home/ClientFeedback/ClientFeedback";
import BlogCards from "../Home/Navbars./BlogCards/BlogCard";
import BackGroundBanner from "../../ReuseableComponents/Tools/BackGroundBanner";
import Footer from "../Home/Footer/Footer";
import Description from "./Description";
import Members from "./Members";
import Services from "./Services";
export default function About() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
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
