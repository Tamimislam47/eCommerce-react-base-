import SinglePageBlog from "../Pages/Blog/SingleBlog/SinglePageBlog";
import SingalProduct from "../Pages/Shop/Singlepage/SingalProduct";
import { createBrowserRouter } from "react-router-dom";
import AboutPage from "../Pages/About/AboutPage";
import Contact from "../Pages/Contact/Contact";
import Blogpage from "../Pages/Blog/Blogpage";
import Products from "../Pages/Shop/Products";
import Signin from "../Pages/Sign/SignIn";
import SignUp from "../Pages/Sign/SignUp";
import MyCart from "../Pages/Order/MyCart";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import * as React from "react";
import App from "../../App";

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
    path: "/products/:id",
    element: <SingalProduct></SingalProduct>,
  },
  {
    path: "/blogpage",
    element: <Blogpage></Blogpage>,
  },
  {
    path: "/blogpage/:id",
    element: <SinglePageBlog></SinglePageBlog>,
  },
  {
    path: "/mycart",
    element: (
      <PrivateRoute>
        <MyCart></MyCart>
      </PrivateRoute>
    ),
  },
]);

export default router;
