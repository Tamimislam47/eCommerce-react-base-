import React from "react";
import memberImg1 from "@images/member1.webp";
import memberImg2 from "@images/member2.webp";
import memberImg3 from "@images/member3.webp";

export default function MemberCard({ img, ...rest }) {
  return (
    <div className="flex flex-col items-center justify-center" {...rest}>
      <img src={img} className="h-full w-full" alt="" />
      <p className="text-2xl font-bold">{rest.name}</p>
      <p> Team Member </p>
    </div>
  );
}
