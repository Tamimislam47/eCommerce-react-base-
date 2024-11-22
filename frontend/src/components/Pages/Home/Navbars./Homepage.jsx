import FeaturedOffers from "./FeaturedOffers";
import ClientFeedback from "./ClientFeedback";
import BlogCards from "./BlogCards/BlogCard";
import SmartFashion from "./SmartFashion";
import ProductsRow from "./ProductsRow";
import BannerArea from "./BannerArea";
import Footer from "../Footer/Footer";
import Headers from "../Header/Headers";
import Banner from "./Banner";
import React from "react";

export default function Homepage() {
  return (
    <div className="flex  flex-col items-center">
      <Headers />
      <Banner />
      <BannerArea />
      <ProductsRow />
      <SmartFashion />
      <FeaturedOffers />
      <ClientFeedback />
      <BlogCards />
      <Footer />
    </div>
  );
}
