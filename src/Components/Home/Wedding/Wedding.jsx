import React from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { wedding } from "../../../utilities/Wedding";
import WeddingCard from "./WeddingCard";
import { FaArrowRight } from "react-icons/fa";

const Wedding = () => {
  return (
    <section className="pt-28">
      <div className="container pb-8 border-b border-black">
        <div className="intro mb-10">
          <SectionTitle
            title="Real Wedding"
            sub="List you wedding and brows portfolio"
          />
        </div>

        <div className="grid grid-cols-4 gap-14">
          {wedding.map((item, index) => (
            <WeddingCard key={index} item={item} />
          ))}
        </div>
        <div className="flex justify-center mt-14">
          <button
            className="text-2xl text-black border-[0.2px] border-[#0000003D] bg-[#DDF9FF] flex items-center gap-3 px-5 py-4 rounded-md"
            style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
          >
            View more weddings <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Wedding;
