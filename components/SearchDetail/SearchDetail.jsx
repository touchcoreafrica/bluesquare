import React, { useState } from "react";
import Image from "../Image/Image";

import Button from "../Button/Button";
import PropertyFeature from "../PropertyFeature/PropertyFeature";

const SearchDetail = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [
    "/assets/image1.jpg",
    "/assets/image2.jpg",
    "/assets/image3.jpg",
  ];
  return (
    <div className={`flex flex-col gap-6 h-fit w-full bg-white p-4 z-10`}>
      <div className="flex gap-4">
        <div className="bg-red-200 h-fit p-2 flex items-center justify-center">
          <Image src={"/assets/close.svg"} alt={"close"} />
        </div>
        <div className={`p-2 h-fit px-5 bg-[#0336D61A] bodyFont font-bold`}>
          Fully Furnished
        </div>
      </div>
      <div className={`flex gap-4`}>
        <div
          style={{ backgroundImage: `url(${images[imageIndex]})` }}
          className={` p-4 bg-cover w-[70%] h-[350px] flex justify-end items-end`}
        >
          <div className="flex">
            <button
              onClick={() => {
                setImageIndex((prev) => {
                  if (prev > 0) {
                    return prev - 1;
                  }
                  if (prev === 0) {
                    return prev;
                  }
                });
              }}
            >
              <Image
                alt={"left"}
                src={"/assets/leftArrow.svg"}
                className={"p-4  bg-white"}
              />
            </button>
            <button
              onClick={() => {
                setImageIndex((prev) => {
                  if (prev < images.length - 1) {
                    return prev + 1;
                  }
                  return prev;
                });
              }}
            >
              <Image
                alt={"right"}
                src={"/assets/rightArrow.svg"}
                className={"p-4 bg-[#CAA969]"}
              />
            </button>
          </div>
        </div>
        <div className={`flex flex-col gap-4 w-[30%]`}>
          <Image
            alt={"second"}
            src={images[1]}
            className={`bg-black/10 w-full h-1/2`}
          />
          <Image
            alt={"third"}
            src={images[2]}
            className={`bg-black/10 w-full h-1/2`}
          />
        </div>
      </div>
      <div className="flex justify-between w-full items-center">
        <div className="flex  flex-col">
          <p className={` text-sm text-[#6D6E71]`}>
            Wole Ariyo Lekki Phase One
          </p>
          <p className={`headerFont text-2xl`}>Property name goes here</p>
        </div>
        <Button
          className={`font-bold bodyFont text-white bg-[#2C393C] p-4 px-10`}
        >
          Book a tour
        </Button>
      </div>
      <div className={`flex justify-between items-center`}>
        <div className={`flex gap-2 items-center`}>
          <div className={`p-3 bg-[#D1A55C1A]`}>
            <Image
              alt={"bedroom"}
              src={"/assets/bedroom.svg"}
              className={"h-6 w-6"}
            />
          </div>
          <p className={` text-[#6D6E71] text-sm`}>1 bedroom</p>
        </div>
        <div className={`flex gap-2 items-center`}>
          <div className={`p-3 bg-[#D1A55C1A]`}>
            <Image
              alt={"bath"}
              src={"/assets/bath.svg"}
              className={"h-6 w-6"}
            />
          </div>
          <p className={` text-[#6D6E71] text-sm`}>1 bath</p>
        </div>
        <div className={`flex gap-2 items-center`}>
          <div className={`p-3 bg-[#D1A55C1A]`}>
            <Image
              alt={"guest"}
              src={"/assets/people.svg"}
              className={"h-6 w-6"}
            />
          </div>
          <p className={` text-[#6D6E71] text-sm`}>1 guest</p>
        </div>
        <div className={`flex gap-2 items-center`}>
          <div className={`p-3 bg-[#D1A55C1A]`}>
            <Image
              alt={"bedroom"}
              src={"/assets/parking.svg"}
              className={"h-6 w-6"}
            />
          </div>
          <p className={` text-[#6D6E71] text-sm`}>3 parking</p>
        </div>
        <div className={`flex gap-2 items-center`}>
          <div className={`p-3 bg-[#D1A55C1A]`}>
            <Image
              alt={"area"}
              src={"/assets/area.svg"}
              className={"h-6 w-6"}
            />
          </div>
          <p className={` text-[#6D6E71] text-sm`}>
            250m<sup>2</sup>
          </p>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#CAA969]"></div>
      <div className={`flex flex-col gap-2`}>
        <p className={` uppercase  text-[#26282B] text-xs`}>Property Details</p>
        <p className={`text-sm  text-[#6D6E71]`}>
          Lorem ipsum dolor sit amet consectetur. Vulputate elit non cursus
          adipiscing sagittis tortor massa cursus. Nisl sed enim sit faucibus a.
          Cursus sed turpis non donec.
          <br /> Sit ultrices enim massa facilisi cras in. Dictum adipiscing
          risus eget egestas donec varius. Cursus tortor dignissim libero cras
          nulla vel.
        </p>
      </div>
      <div className={`flex flex-col gap-4`}>
        <p className={` text-[#26282B] text-xs`}>PROPERTY FEATURES</p>
        <div className={`grid grid-cols-3 gap-2`}>
          <PropertyFeature feature={"7 Apartments available"} />
          <PropertyFeature feature={"10 floors"} />
          <PropertyFeature feature={"POP ceiling"} />
          <PropertyFeature feature={"Swimming pool"} />
          <PropertyFeature feature={"Drainage system"} />
          <PropertyFeature feature={"New"} />
          <PropertyFeature feature={"Fully furnished"} />
          <PropertyFeature feature={"Other details"} />
        </div>
      </div>
    </div>
  );
};

export default SearchDetail;
