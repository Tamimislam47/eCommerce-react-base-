import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="flex h-auto w-screen justify-center bg-[#F2F8FD] pb-9">
      <div className="innerContainer flex w-[80%] items-center justify-center">
        <div className="contextContainer grid w-full items-center justify-center gap-4 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-4">
          <div className="flex h-[55%] w-full flex-col items-center justify-around gap-2">
            <ul>
              <h1 className="text-2xl font-semibold sm:text-4xl">
                Nexu'<span className="text-primary"> s</span>
              </h1>
              <li>
                <p>
                  Lorem ipsum dolor sit amet consl adipisi elit, sed do eiusmod
                  templ incididunt ut labore
                </p>
              </li>
              {/* //*icons */}
              <li className="icons mt-3 flex gap-3 sm:text-2xl">
                <li className="cursor-pointer hover:text-blue">
                  <FaFacebook />
                </li>
                <li className="cursor-pointer hover:text-blue">
                  <FaTwitter />{" "}
                </li>
                <li className="cursor-pointer hover:text-blue">
                  <FaInstagramSquare />
                </li>
              </li>
            </ul>
          </div>

          {/* //*Services */}
          <div className="flex h-[55%] w-full flex-col gap-2 lg:items-center lg:justify-around">
            <ul>
              <h1 className="text-2xl font-semibold sm:text-4xl">Services</h1>
              <li>My Account</li>
              {/* //*icons */}
              <li>Contact</li>
              <li>Shopping cart</li>
              <li>Shop</li>
              <li>Services Login</li>
            </ul>
          </div>

          {/* //*My-Account */}
          <div className="flex h-[55%] w-full flex-col gap-2 lg:items-center lg:justify-around">
            <ul>
              <h1 className="text-2xl font-semibold sm:text-4xl">My Account</h1>
              <li>My Account</li>
              <li>Contact</li>
              <li>Shopping cart</li>
              <li>Shop</li>
              <li>Services Login</li>
            </ul>
          </div>

          {/* //*Contact Info */}
          <div className="flex h-[55%] w-full flex-col gap-2 lg:items-center lg:justify-around">
            <ul>
              <h1 className="text-2xl font-semibold sm:text-4xl">
                Contact Info
              </h1>
              <li>Address: Your Address Goes Here.</li>
              <li>Phone/Fax: 01817401961</li>
              <li>
                <p className="hover:text-primary">
                  Email:
                  <a href="mailto:demo@example.com">tamim.furious@gmail.com</a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
