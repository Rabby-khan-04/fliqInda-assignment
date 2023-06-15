import React from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import blogImg1 from "../../../assets/Images/Home/Blog/blog1.png";
import blogImg2 from "../../../assets/Images/Home/Blog/blog2.png";
import blogImg3 from "../../../assets/Images/Home/Blog/blog3.png";
import BlogCard from "./BlogCard";
import { Link } from "react-router-dom";
import "./blogs.css";

const Blogs = () => {
  const blogInfo = [
    {
      img: blogImg1,
      published: "Sep 15, 2021",
      title: "Wedding Photography at Goa",
      description:
        "Wedding Photography in Goa If not, every couple when they make their list of Pre-wedding shoot",
    },
    {
      img: blogImg2,
      published: "Sep 15, 2021",
      title: "Photography: Expectations VS. Reality",
      description:
        "Most of the time without any hands-on experience in photography, professional and advanced photography actually",
    },
    {
      img: blogImg3,
      published: "Sep 15, 2021",
      title:
        "Creative Industries are on the verge of depletion due to COVID-19",
      description:
        "Most of the time without any hands-on experience in photography, professional and advanced photography actually",
    },
  ];

  return (
    <section className="bg-[#DDF8F3] pt-6 pb-10">
      <div className="container">
        <div className="intro mb-10">
          <SectionTitle title="Our Blogs" sub="Check ourour Latest Blog" />
        </div>
        <div className="grid xl:grid-cols-8 gap-7">
          <div className="xl:col-span-6 grid md:grid-cols-2 gap-7 order-last xl:order-first">
            {blogInfo.slice(0, 2).map((blog, index) => (
              <BlogCard key={index} blog={blog} />
            ))}
          </div>
          <div className="xl:col-span-2 text-[#354547]">
            <div className="flex items-center justify-between">
              <h2 className="text-xl ">Trending Now</h2>
              <Link to="/" className="text-sm">
                View All
              </Link>
            </div>
            <div className="divide-y divide-black">
              {blogInfo.map((blog, index) => (
                <div key={index} className="flex items-center gap-4 py-[10px]">
                  <img
                    src={blog.img}
                    className="w-28 h-20 object-cover object-center rounded-md blog-img"
                    alt=""
                  />
                  <div className="space-y-1">
                    <h2 className="text-sm font-bold">{blog.title}</h2>
                    <p className="text-xs">{blog.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
