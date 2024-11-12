import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import SignUp from "../Pages/Sign/SignUp";
import Signin from "../Pages/Sign/SignIn";
import Contact from "../Pages/Contact/Contact";
import AboutPage from "../Pages/About/AboutPage";
import Products from "../Pages/Product/Products";
import SingalProduct from "../Pages/Product/SingalProduct";
import Blogpage from "../Pages/Blog/Blogpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
  {
    path: "/signin",
    element: <Signin></Signin>,
  },
  {
    path: "/contact",
    element: <Contact></Contact>,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/products",
    element: <Products></Products>,
  },
  {
    path: "/products",
    element: <Products></Products>,
  },
  {
    path: "/products/:id",
    element: <SingalProduct></SingalProduct>,
  },
  {
    path: "/blogpage",
    element: <Blogpage></Blogpage>,
  },
  {
    path: "/blogpage/:id",
    element: <SingalProduct></SingalProduct>,
  },
]);

export default router;
