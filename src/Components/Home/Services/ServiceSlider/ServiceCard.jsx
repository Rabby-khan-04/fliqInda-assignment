import "./ServiceCard.css";
const ServiceCard = ({ service }) => {
  const { title, img, price, time } = service;
  return (
    <div className="service-card rounded-xl overflow-hidden">
      <img src={img} className="w-full" alt="" />
      <div className="p-4 text-center">
        <h2 className="text-xl text-black font-semibold">{title}</h2>
        <div className="h-px bg-black"></div>
        <p className="text-[#4C696D] ">
          <span className="font-bold">Starting at</span> {price} ({time})
        </p>
        <button className="text-base text-white font-medium rounded-xl px-16 py-2 bg-primary inline-block mt-10">
          Know more
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
