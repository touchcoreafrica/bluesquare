import React from "react";
import Image from "../Image/Image";

const PropertyFeature = ({ feature }) => {
  return (
    <div className="flex gap-2 items-center">
      <div className="p-2 rounded-full bg-[#D1A55C26]">
        <Image src={"/assets/checkIcon.svg"} alt={"check"} />
      </div>
      <p className={` text-[#6D6E71]`}>{feature}</p>
    </div>
  );
};

export default PropertyFeature;
