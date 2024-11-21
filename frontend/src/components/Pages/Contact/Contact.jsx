import React from "react";
import Headers from "../Home/Header/Headers";
import BackGroundBanner from "../../ReuseableComponents/Tools/BackGroundBanner";
import Footer from "../Home/Footer/Footer";
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
