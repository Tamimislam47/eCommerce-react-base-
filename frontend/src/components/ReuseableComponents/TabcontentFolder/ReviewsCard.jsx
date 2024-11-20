import React from "react";
import SmallRating from "../Tools/SmallRating";

export default function ReviewsCard(props) {
  const { userImg, userName, review } = props.item;

  return (
    <div className="h-full">
      <div className="alert alert-info flex h-full items-start">
        <div className="h-full">
          <div className="flex w-12 rounded-full">
            <img className="rounded-full" src={userImg} />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex gap-3">
            <p className="font-bold">{userName}</p>
            <SmallRating />
          </div>
          <p className="text-start">{review}</p>
        </div>
      </div>
    </div>
  );
}
