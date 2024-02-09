import React from "react";
import Image from "../Image/Image";

const SearchCard = ({
  image,
  name,
  address,
  bedroom,
  bath,
  guest,
  size,
  price,
}) => {
  return (
    <div className="w-full flex bg-[#f8f8f8]">
      <Image alt={"apt"} src={image} className={"md:w-[30%] w-1/4"} />
      <div className="flex flex-col w-3/4 md:w-[70%] p-2">
        <p className={` text-sm text-[#6D6E71]`}>Wole Ariyo Lekki Phase One</p>
        <p className={`font-bold bodyFont`}>Property name goes here</p>
        <div className="flex gap-1 justify-between">
          <div className={`flex flex-col gap-1 `}>
            <div className={`flex gap-1 items-center`}>
              <Image
                alt={"bedroom"}
                src={"/assets/bedroom.svg"}
                className={"h-6 w-6"}
              />
              <p className={` text-[#6D6E71] text-xs`}>bedroom</p>
            </div>
            <div className={`flex gap-1 items-center`}>
              <Image
                alt={"bedroom"}
                src={"/assets/area.svg"}
                className={"h-6 w-6"}
              />
              <p className={` text-[#6D6E71] text-xs`}>
                250m<sup>2</sup>
              </p>
            </div>
          </div>
          <div className={`flex flex-col gap-1 `}>
            <div className={`flex gap-1 items-center`}>
              <Image
                alt={"bedroom"}
                src={"/assets/bath.svg"}
                className={"h-6 w-6"}
              />
              <p className={` text-[#6D6E71] text-xs`}>1 bath</p>
            </div>
          </div>
          <div className={`flex flex-col gap-1 `}>
            <div className={`flex gap-1 items-center`}>
              <Image
                alt={"bedroom"}
                src={"/assets/people.svg"}
                className={"h-6 w-6"}
              />
              <p className={` text-[#6D6E71] text-xs`}>1 Guest</p>
            </div>
            <p className={`font-bold bodyFont`}>$5,000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
