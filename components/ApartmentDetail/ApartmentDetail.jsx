import React, { useState } from "react";
import Image from "../Image/Image";

import Button from "../Button/Button";
import PropertyFeature from "../PropertyFeature/PropertyFeature";
import ApartmentCard from "../ApartmentCard/ApartmentCard";

const ApartmentDetail = ({
  images,
  name,
  site,
  address,
  bedroom,
  bath,
  guest,
  parking,
  squareFoot,
  detail,
  handleViewDetail,
  viewDetail,
  setViewDetail,
  type,
}) => {
  return (
    <div className={`flex flex-col gap-6 h-fit bg-white p-4 z-10`}>
      <div className="flex gap-4 justify-between">
        <div className={`p-2 h-fit px-5 bg-[#0336D61A] bodyFont font-bold`}>
          Fully Furnished
        </div>
        <div
          onClick={handleViewDetail}
          className="bg-red-200 h-fit p-2 flex items-center justify-center"
        >
          <Image src={"/assets/close.svg"} alt={"close"} />
        </div>
      </div>
      <div className={`flex gap-4 overflow-scroll`}>
        {images?.map((image, index) => {
          return (
            <Image
              key={index}
              alt={"second"}
              src={image}
              className={`bg-black/10 `}
            />
          );
        })}
      </div>
      <div className="flex justify-between w-full items-center">
        <div className="flex  flex-col">
          <p className={` text-sm text-[#6D6E71]`}>{address}</p>
          <p className={`headerFont text-2xl`}>
            {name + " " + "at" + " " + site}
          </p>
        </div>
        <Button
          className={`bodyFont font-bold text-white bg-[#2C393C] p-4 px-10`}
        >
          Book a tour
        </Button>
      </div>
      <div className={`flex gap-5 items-center`}>
        <div className={`flex gap-2 items-center`}>
          <div className={`p-3 bg-[#D1A55C1A]`}>
            <Image
              alt={"bedroom"}
              src={"/assets/bedroom.svg"}
              className={"h-6 w-6"}
            />
          </div>
          <p className={` text-[#6D6E71] text-sm`}>{`${bedroom}`} bedroom</p>
        </div>
        <div className={`flex gap-2 items-center`}>
          <div className={`p-3 bg-[#D1A55C1A]`}>
            <Image
              alt={"bath"}
              src={"/assets/bath.svg"}
              className={"h-6 w-6"}
            />
          </div>
          <p className={` text-[#6D6E71] text-sm`}>{`${bath}`} bath</p>
        </div>
        <div className={`flex gap-2 items-center`}>
          <div className={`p-3 bg-[#D1A55C1A]`}>
            <Image
              alt={"guest"}
              src={"/assets/people.svg"}
              className={"h-6 w-6"}
            />
          </div>
          <p className={` text-[#6D6E71] text-sm`}>{`${guest}`} guest</p>
        </div>
        {parking ? (
          <div className={`flex gap-2 items-center`}>
            <div className={`p-3 bg-[#D1A55C1A]`}>
              <Image
                alt={"bedroom"}
                src={"/assets/parking.svg"}
                className={"h-6 w-6"}
              />
            </div>
            <p className={` text-[#6D6E71] text-sm`}>{`${parking}`} parking</p>
          </div>
        ) : null}
        <div className={`flex gap-2 items-center`}>
          <div className={`p-3 bg-[#D1A55C1A]`}>
            <Image
              alt={"area"}
              src={"/assets/area.svg"}
              className={"h-6 w-6"}
            />
          </div>
          <p className={` text-[#6D6E71] text-sm`}>
            {`${squareFoot}`}m<sup>2</sup>
          </p>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#CAA969]"></div>
      {/*   <div className={`flex flex-col gap-2`}>
        <p className={`text-sm ${BRSonoma.className} text-[#6D6E71]`}>
          {detail}
        </p>
      </div>
      <div className="w-full h-[1px] bg-[#CAA969]"></div>
      <div className={`flex flex-col gap-4`}>
        <p className={` text-[#26282B] text-xs`}>
          OTHERS
        </p>
        <div className={`grid grid-cols-3 gap-2`}>
          {((bedroom === 1 && type !== 1) || bedroom !== 1) && (
            <ApartmentCard
              name={"Type 1 One bedroom apartment"}
              handleParentModal={() => {
                setViewDetail(false);
              }}
              detail={
                "Sit ultrices enim massa facilisi cras in. Dictum adipiscing risus eget egestas donec varius"
              }
              images={["/assets/7CentraleOneBedroom1.png"]}
              squareFoot={1000}
              bedroom={1}
              type={1}
              bath={1}
              guest={0}
            />
          )}
          {((bedroom === 1 && type !== 2) || bedroom !== 1) && (
            <ApartmentCard
              name={"Type 2 One bedroom apartment"}
              detail={
                "Sit ultrices enim massa facilisi cras in. Dictum adipiscing risus eget egestas donec varius"
              }
              images={["/assets/7CentraleOneBedroom1.png"]}
              squareFoot={1000}
              bedroom={1}
              type={2}
              bath={1}
              guest={0}
            />
          )}
          {((bedroom === 1 && type !== 3) || bedroom !== 1) && (
            <ApartmentCard
              name={"Type 3 One bedroom apartment"}
              detail={
                "Sit ultrices enim massa facilisi cras in. Dictum adipiscing risus eget egestas donec varius"
              }
              images={["/assets/7CentraleOneBedroom1.png"]}
              squareFoot={1000}
              bedroom={1}
              type={3}
              bath={1}
              guest={0}
            />
          )}
          {bedroom !== 2 && (
            <ApartmentCard
              name={"Two bedroom apartment"}
              detail={
                "Sit ultrices enim massa facilisi cras in. Dictum adipiscing risus eget egestas donec varius"
              }
              images={["/assets/7CentraleTwoBedroom1.png"]}
              squareFoot={1100}
              bedroom={2}
              bath={2}
              guest={1}
            />
          )}
          {bedroom !== 3 && (
            <ApartmentCard
              name={"Three bedroom apartment"}
              detail={
                "Sit ultrices enim massa facilisi cras in. Dictum adipiscing risus eget egestas donec varius"
              }
              images={["/assets/7CentraleThreeBedroom1.png"]}
              squareFoot={1300}
              bedroom={3}
              bath={3}
              guest={1}
            />
          )}
          {bedroom !== 4 && (
            <ApartmentCard
              name={"Four bedroom apartment"}
              detail={
                "Sit ultrices enim massa facilisi cras in. Dictum adipiscing risus eget egestas donec varius"
              }
              images={["/assets/7CentraleFourBedroom1.png"]}
              squareFoot={1500}
              bedroom={4}
              bath={4}
              guest={1}
            />
          )}
        </div>
      </div> */}
    </div>
  );
};

export default ApartmentDetail;
