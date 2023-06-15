import React from "react";
import "./BlogCard.css";

const BlogCard = ({ blog }) => {
  const { img, published, title } = blog;
  return (
    <div className="relative overflow-hidden rounded-xl blog-card">
      <img
        src={img}
        className="xl:h-full md:h-72 h-full w-full object-cover object-center"
        alt=""
      />
      <div className="bg-black bg-opacity-70 text-white p-10 absolute inset-y-0 top-0 left-0 rounded-lg w-3/4 max-w-full">
        <p className="2xl:text-2xl text-xl xl:mb-4">
          <span className="font-bold">Featured On:</span> {published}
        </p>
        <h2 className="2xl:text-6xl xl:text-5xl text-4xl font-josefin font-light">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default BlogCard;
