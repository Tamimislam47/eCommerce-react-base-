import React from "react";
import BlogCard from "../Home/Navbars./BlogCards/BlogSide";
import blogimg from "@images/BlogImg.webp";
import rblogimg from "@images/blogimgR.webp";
export default function OneBlogCard() {
  return (
    <div className="grid w-full grid-cols-1 sm:w-[80%] lg:w-[70%]">
      <BlogCard image={blogimg} heading={"kdjfkdjk"} />
      <BlogCard image={blogimg} heading={"kdjfkdjk"} />
    </div>
  );
}
