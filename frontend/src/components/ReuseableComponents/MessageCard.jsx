import React from "react";
import { useNavigate } from "react-router-dom";

export default function MessageCard({ msgData }) {
  const navigate = useNavigate();

  const { userImg, userComment,  userName } = msgData;

  return (
    <div className="card card-side flex w-[90%] items-start shadow-xl">
      <div className="h-full w-[20%] pt-7">
        <figure className="w-full p-2">
          <img
            src={userImg}
            alt="User"
            className="w-full rounded-xl object-cover sm:h-[80px]" // Set max-height
          />
        </figure>
      </div>
      <div className="card-body w-2/3 flex-grow">
        <h2 className="card-title">{userName}</h2>
        <p>{userComment}</p>
        <div className="card-actions justify-end">
          <button onClick={() => navigate("")} className="btn btn-primary">
            Reply
          </button>
        </div>
      </div>
    </div>
  );
}
