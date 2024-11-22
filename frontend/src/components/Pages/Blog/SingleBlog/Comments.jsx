import MessageCard from "../../../ReuseableComponents/MessageCard";
import CommentCard from "../../Home/Navbars./BlogCards/BlogCard";
import CommentForm from "./CommentForm";
import Navbar from "./Navbar";
import React, { useEffect, useState } from "react";

export default function Comments() {
  const [getCommentData, setgetCommentData] = useState([]);

  useEffect(() => {
    const fetchCommentData = async () => {
      try {
        const response = await fetch("/JsonData/Comment.json");
        const data = await response.json();

        setgetCommentData(data);
      } catch (error) {
        console.error("Error:", error.message);
      }
    };
    fetchCommentData();
  }, []);

  const slideCommentData = getCommentData.slice(0, 3);

  return (
    <div className="flex w-full justify-center p-3 sm:w-[80%] lg:w-[70%]">
      <div className="flex w-full flex-col gap-10 sm:w-[90%] xl:w-[65%]">
        <div className="hidden h-full w-full sm:block">
          <Navbar />
        </div>
        <div className="grid w-full gap-5">
          <p className="!important text-[12px] sm:text-2xl">
            {`Comments (${getCommentData.length})`}
          </p>
         

          {slideCommentData.map((data, index) => (
            <div
              key={data.id}
              className={`${
                index % 2 === 0 ? "justify-self-start" : "justify-self-end"
              }`}
            >
              <MessageCard msgData={data} />
            </div>
          ))}
        </div>

        <CommentForm />
      </div>
    </div>
  );
}
