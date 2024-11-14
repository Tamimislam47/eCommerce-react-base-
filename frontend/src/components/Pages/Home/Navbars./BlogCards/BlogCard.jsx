import React from "react";
import LeftSide from "./BlogSide";
import RightSide from "./BlogSide";
import blogimg from "@images/BlogImg.webp";
import rblogimg from "@images/blogimgR.webp";

export default function Blog() {
  return (
    <div className="mb-5 mt-5 flex w-full flex-col items-center justify-center gap-10 p-5 sm:w-[80%] lg:w-[70%]">
      <h1 className="text-5xl font-extrabold">Latest Blog</h1>
      <p>There are many variations of passages of Lorem Ipsum available</p>

      <div className="grid w-full gap-3 lg:grid-cols-2">
        <LeftSide
          img={blogimg}
          title="10 Principles of Psychology You Can Use to Improve Your Smart Product"
          summary="Lorem ipsum dolor sit amet consl adipisi elit, sed do eiusmod templ incididunt ut labore in smart"
        />
        <RightSide
          title="Understanding Cognitive Load in UI/UX Design"
          img={rblogimg}
          summary="Discover ways to manage cognitive load in design by simplifying choices and using familiar elements to prevent"
        />
      </div>
    </div>
  );
}
