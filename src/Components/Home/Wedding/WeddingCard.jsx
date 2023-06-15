import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./WeddingCard.css";

function ThumbnailPlugin(mainRef) {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active");
      });
    }
    function addActive(idx) {
      slider.slides[idx].classList.add("active");
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on("created", () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on("animationStarted", (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}

const WeddingCard = ({ item }) => {
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
  });
  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 3,
        spacing: 5,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );
  const { images, title, photos, location, color } = item;
  return (
    <div
      className="wedding-card bg-opacity-60 py-3 px-2 rounded-xl"
      style={{ background: `${color}` }}
    >
      <div>
        <div ref={sliderRef} className="keen-slider">
          {images.map((img, index) => (
            <div key={index} className="keen-slider__slide">
              <img
                src={img}
                className="w-full object-cover object-center rounded-t-2xl"
                alt=""
              />
            </div>
          ))}
        </div>

        <div ref={thumbnailRef} className="keen-slider thumbnail">
          {images.map((img, index) => (
            <div key={index} className="keen-slider__slide">
              <img src={img} alt="" />
            </div>
          ))}
        </div>
      </div>
      <div className="px-3">
        <h2 className="text-xl font-bold text-black">{title}</h2>
        <p className="text-[#4C696D]">
          {photos} photos. {location}
        </p>
      </div>
    </div>
  );
};

export default WeddingCard;
