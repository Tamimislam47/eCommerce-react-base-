import { useState } from "react";
import Homepage from "./components/Pages/Home/Navbars./Homepage";
import SignUp from "./components/Pages/Sign/SignUp";
import Signin from "./components/Pages/Sign/SignIn";
import BannerArea from "./components/Pages/Home/Navbars./BannerArea";
import About from "./components/Pages/About/AboutPage";


function App() {
  return (
    <div className="flex w-[100vw] flex-col items-center overflow-x-hidden">
      <Homepage />
    </div>
  );
}

export default App;
