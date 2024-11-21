import React from "react";

export default function MemberCard({ img, ...rest }) {
  return (
    <div className="flex flex-col items-center justify-center" {...rest}>
      <img src={img} className="h-full w-full" alt="" />
      <p className="text-2xl font-bold">{rest.name}</p>
      <p> Team Member </p>
    </div>
  );
}
