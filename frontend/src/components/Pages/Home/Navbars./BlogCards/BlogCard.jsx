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

      <div className="grid w-full gap-3 lg:min-h-[50vh] lg:grid-cols-2">
        <LeftSide image={blogimg} heading="10 Quick Tips About Smart Product" />
        <RightSide
          image={rblogimg}
          heading="5 Real-Life Lessons About Smart Product"
        />
      </div>
    </div>
  );
}
