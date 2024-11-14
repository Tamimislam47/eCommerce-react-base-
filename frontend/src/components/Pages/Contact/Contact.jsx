import React from "react";
import Headers from "../Home/Navbars./Headers";
import BackGroundBanner from "../../ReuseableComponents/BackGroundBanner";
import Footer from "../Home/Navbars./Footer/Footer";
import ContactForm from "./ContactForm";
import GoogleMap from "./GoogleMap";

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Headers />
      <BackGroundBanner />
      <ContactForm />
      <GoogleMap />
      <Footer />
    </div>
  );
}
