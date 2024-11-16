import React from "react";
import member1 from "@images/member1.webp";
import { useNavigate } from "react-router-dom";


export default function MessageCard({ msgData }) {
      const navigate = useNavigate();

  const { userImg, userComment, Date, userName } = msgData;

  return (
    <div className="card card-side w-[90%]  flex items-center bg-base-100 shadow-xl">
      <div className="h-full w- ">
        <figure className="h-full w-full p-2">
          <img
            src={userImg || member1}
            alt="User"
            className="h-full max-h-32 w-full rounded-xl bg-green-300 object-cover" // Set max-height
          />
        </figure>
      </div>
      <div className="card-body w-2/3 flex-grow">
        <h2 className="card-title">{userName}</h2>
        <p>{userComment}</p>
        <div className="card-actions justify-end">
          <button onClick={() => navigate('')}  className="btn btn-primary">Reply</button>
        </div>
      </div>
    </div>
  );
}
