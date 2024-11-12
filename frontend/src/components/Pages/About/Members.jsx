import React from "react";
import MemberCard from "../../ReuseableComponents/MemberCard";
import memberImg1 from "@images/member1.webp";
import memberImg2 from "@images/member2.webp";
import memberImg3 from "@images/member3.webp";

const memberImgs = [
  {
    id: 1,
    name: "Sonali Howlader",
    img: memberImg1,
  },
  {
    id: 2,
    name: "Tamim Islam",
    img: memberImg2,
  },
  {
    id: 3,
    name: "Samiya Dewan",
    img: memberImg3,
  },
];

export default function Members() {
  return (
    <div className="pl-2 flex w-full flex-col items-center justify-center gap-10 pr-2 sm:w-[80%] lg:w-[70%]">
      <h1 className="text-4xl font-extrabold">Team Member</h1>
      <div className="grid h-full w-full grid-cols-3 place-items-center gap-3">
        {memberImgs?.map((data) => (
          <div key={data.id}>
            <MemberCard img={data.img} name={data.name} />
          </div>
        ))}
      </div>
    </div>
  );
}
