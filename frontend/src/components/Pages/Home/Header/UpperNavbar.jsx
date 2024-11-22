import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineAccountCircle } from "react-icons/md";
import { FaRegEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuthProvider } from "../../../../ContextApi/AuthProvider";

export default function UpperNavbar() {
  const { user, signout } = useAuthProvider();

  return (
    <nav className="h-[54px] w-full sm:w-[80%] lg:w-[70%]">
      <div className="flex h-full w-full justify-center">
        <div className="top flex w-full items-center justify-center text-[10px] sm:justify-between">
          <p>World Wide Completely Free Returns and Shipping</p>

          <ul className="hidden items-center justify-center sm:flex">
            <li className="border-borderColor flex h-[20px] items-center justify-center border-[3px] border-b-0 border-l-0 border-t-0 p-2 hover:cursor-pointer hover:text-primary">
              <FaPhoneAlt />
              <p className="ml-[8px]">+012 3456 789</p>
            </li>
            <li className="border-borderColor flex h-[20px] items-center justify-center border-[3px] border-b-0 border-l-0 border-t-0 p-2 hover:cursor-pointer hover:text-primary">
              <FaRegEnvelope />
              <p className="ml-[8px]">{user?.email ? user.email : "singout"}</p>
            </li>
            <li className="flex h-[20px] items-center justify-center hover:cursor-pointer hover:text-primary">
              <MdOutlineAccountCircle />
              <p>
                {user?.email ? (
                  <>
                    <button onClick={signout}>
                      <Link to={"/signin"} className="text-white">
                        signout
                      </Link>
                    </button>
                  </>
                ) : (
                  <>
                    <span>
                      <Link className="text-white" to={"/signin"}>
                        signin
                      </Link>
                      /
                      <Link className="text-white" to={"/signup"}>
                        signup
                      </Link>
                    </span>
                  </>
                )}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
