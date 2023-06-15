import React from "react";
import testimonialImg from "../../assets/Images/Home/Testimonial/Testimonial.png";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import "./Testimonials.css";
import person from "../../assets/Images/Home/Testimonial/person.png";
import ReviewCard from "./ReviewCard";

const Testimonials = () => {
  const reviews = [
    {
      img: person,
      name: "Ramdom Name",
      quote:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet",
    },
    {
      img: person,
      name: "Ramdom Name",
      quote:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet",
    },
    {
      img: person,
      name: "Ramdom Name",
      quote:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet",
    },
    {
      img: person,
      name: "Ramdom Name",
      quote:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet",
    },
  ];

  return (
    <section>
      <div className="container pt-16 pb-24 border-b border-[#ADA3A3]">
        <div className="grid grid-cols-6 gap-12">
          <div className="col-span-2">
            <img src={testimonialImg} alt="" />
          </div>
          <div className="col-span-4">
            <div className="flex items-center justify-between">
              <SectionTitle title="Testimonials" sub="Words from our client" />
              <div className="flex items-center gap-3">
                <button className="review-btn">Google</button>
                <button className="review-btn__alt">Facebook</button>
                <button className="review-btn__alt">Weddingwire</button>
                <button className="review-btn__alt">WedmeGood</button>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-10 mt-7">
              {reviews.map((review, i) => (
                <ReviewCard key={i} review={review} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
