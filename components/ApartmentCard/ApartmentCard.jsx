import React, { useEffect, useState } from "react";
import Image from "../Image/Image";

import Modal from "../Modal/Modal";
import ApartmentDetail from "../ApartmentDetail/ApartmentDetail";

const ApartmentCard = ({
  images,
  name,
  detail,
  squareFoot,
  bedroom,
  bath,
  site,
  parking,
  guest,
  type,
  handleParentModal,
}) => {
  const [viewDetail, setViewDetail] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  useEffect(() => {
    console.log(viewDetail);
  }, [viewDetail]);
  return (
    <>
      <div
        onClick={() => {
          setShowDetail(true);
          handleParentModal ? handleParentModal() : null;
        }}
        className={`flex flex-col p-4 gap-2 bg-white w-screen lg:w-auto`}
      >
        <Image
          src={images[0]}
          alt={""}
          style={{ backgroundImage: `url(${images[0]})` }}
          className={` bg-cover w-full`}
        ></Image>
        <p className={`bodyFont font-bold`}>{name}</p>
        <p className={`bodyFont text-sm text-[#6D6E71]`}>
          {detail.substring(0, 150)}
        </p>
        <div className="h-[2px] bg-[#f8f8f8]"></div>
        <div className="flex gap-1 justify-between">
          <div className={`flex flex-col-reverse gap-1 `}>
            <div className={`flex gap-1 items-center`}>
              <Image
                alt={"bedroom"}
                src={"/assets/bedroom.svg"}
                className={"h-6 w-6"}
              />
              <p className={` text-[#6D6E71] text-xs`}>
                {`${bedroom}`} bedroom
              </p>
            </div>
            <div className={`flex gap-1 items-center`}>
              <Image
                alt={"bedroom"}
                src={"/assets/area.svg"}
                className={"h-6 w-6"}
              />
              <p className={` text-[#6D6E71] text-xs`}>
                {`${squareFoot}`}m<sup>2</sup>
              </p>
            </div>
          </div>
          <div className={`flex flex-col gap-1 justify-end`}>
            <div className={`flex gap-1 items-center`}>
              <Image
                alt={"bedroom"}
                src={"/assets/bath.svg"}
                className={"h-6 w-6"}
              />
              <p className={` text-[#6D6E71] text-xs`}>{`${bath}`} bath</p>
            </div>
          </div>
          <div className={`flex gap-1 flex-col-reverse `}>
            <div className={`flex gap-1 items-center`}>
              <Image
                alt={"bedroom"}
                src={"/assets/people.svg"}
                className={"h-6 w-6"}
              />
              <p className={` text-[#6D6E71] text-xs`}>{`${guest}`} Guest</p>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isVisible={showDetail}
        onClose={() => {
          setViewDetail(!viewDetail);
          setShowDetail(!showDetail);
          console.log(showDetail);
          console.log(viewDetail);
        }}
      >
        <div className="w-[80vw] bg-white">
          <ApartmentDetail
            handleViewDetail={() => {
              setViewDetail(!viewDetail);
              setShowDetail(!showDetail);
              console.log(showDetail);
              console.log(viewDetail);
            }}
            viewDetail={viewDetail}
            setViewDetail={setViewDetail}
            images={images}
            name={name}
            site={site}
            address={""}
            type={type}
            bedroom={bedroom}
            bath={bath}
            guest={guest}
            parking={parking}
            squareFoot={squareFoot}
            detail={detail}
          />
        </div>
      </Modal>
    </>
  );
};

export default ApartmentCard;
