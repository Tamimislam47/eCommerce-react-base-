import React from "react";

import { Link } from "react-router-dom";

export default function LeftSideBlog({ summary, ...props }) {
  const { img, title, id, date } = props;


  if (summary && summary.length > 15) {
    summary = summary.split(" ").slice(0, 8).join(" ") + "...";
  }

  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <div className="flex w-full">
        <div className="w-[45%] sm:w-1/3">
          <figure className="h-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              alt="Movie"
              className="h-full"
            />
          </figure>
        </div>
        <div className="w-[55%] sm:w-2/3">
          <div className="card-body">
            <h2 className="card-title">{date}</h2>
            <h2 className="card-title text-[18px] font-bold">{title}</h2>
            <p>{summary}</p>
            <div className="card-actions justify-start">
              <button className="btn btn-primary">
                <Link state={{ ...props }} to={`/blogpage/:${id}`}>
                  Read Me
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
