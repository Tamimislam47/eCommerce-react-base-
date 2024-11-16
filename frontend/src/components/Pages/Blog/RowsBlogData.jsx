import React from "react";
import BlogCard from "../Home/Navbars./BlogCards/BlogSide";

export default function RowsBlogData({ blogData, loading }) {
  return (
    <div className="w-full lg:w-[80%] pr-3 pl-3 xl:w-[90%]">
      <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-3">
        {blogData.map((data) => (
          <div key={data.blogId} className="flex items-center justify-center">
            <BlogCard
              img={data.image}
              title={data.title}
              blogContent={data.blogContent}
              author={data.author}
              date={data.date}
              summary={data.summary}
              id={data.blogId}
              loading={loading}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
