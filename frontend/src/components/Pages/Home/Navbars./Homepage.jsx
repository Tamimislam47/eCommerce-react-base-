import React from "react";
import Headers from "./Headers";
import Banner from "./Banner";
import ProductsRow from "./ProductsRow";
import BannerArea from "./BannerArea";
import SmartFashion from "./SmartFashion";
import FeaturedOffers from "./FeaturedOffers";
import ClientFeedback from "./ClientFeedback";
import BlogCards from "./BlogCards/BlogCard";
import Footer from "./Footer/Footer";
export default function Homepage() {
  return (
    <div className="flex w-full flex-col items-center">
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
