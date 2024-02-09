import React from "react";

const FactCard = ({ className, title, subtitle }) => {
  return (
    <div className={`${className} bg-white flex flex-col gap-4 p-3 md:p-5`}>
      <h1 className={`text-3xl md:text-4xl text-[#CAA969] headerFont`}>
        {title}
      </h1>
      <p className={`bodyFont text-sm md:text-base`}>{subtitle}</p>
    </div>
  );
};

export default FactCard;
