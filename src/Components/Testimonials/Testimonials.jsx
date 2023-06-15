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
        <div className="grid 2xl:grid-cols-6 gap-12">
          <div className="2xl:col-span-2 self-center 2xl:order-first order-last flex justify-center">
            <img src={testimonialImg} alt="" />
          </div>
          <div className="2xl:col-span-4">
            <div className="lg:flex items-center justify-between text-center">
              <SectionTitle title="Testimonials" sub="Words from our client" />
              <div className="flex items-center lg:justify-normal justify-center flex-wrap lg:flex-nowrap gap-3">
                <button className="review-btn">Google</button>
                <button className="review-btn__alt">Facebook</button>
                <button className="review-btn__alt">Weddingwire</button>
                <button className="review-btn__alt">WedmeGood</button>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-7">
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
