import React from "react";
import "./BlogCard.css";

const BlogCard = ({ blog }) => {
  const { img, published, title } = blog;
  return (
    <div className="relative overflow-hidden rounded-xl blog-card">
      <img
        src={img}
        className="h-full w-full object-cover object-center"
        alt=""
      />
      <div className="bg-black bg-opacity-70 text-white p-10 absolute inset-y-0 top-0 left-0 rounded-lg w-3/4">
        <p className="text-2xl mb-4">
          <span className="font-bold">Featured On:</span> {published}
        </p>
        <h2 className="text-6xl font-josefin font-light">{title}</h2>
      </div>
    </div>
  );
};

export default BlogCard;
