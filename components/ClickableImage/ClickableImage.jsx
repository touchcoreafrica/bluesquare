"use client";

import React, { useState } from "react";
import Modal from "../Modal/Modal";
import Image from "../Image/Image";

const ClickableImage = ({ image, index }) => {
  const [showImage, setShowImage] = useState(false);
  const [next, setNext] = useState(0);
  console.log(next);
  const siteImages = [
    "/assets/gazania-park-site1.png",
    "/assets/gazania-park-site2.png",
    "/assets/gazania-park-site3.png",
    "/assets/gazania-park-site4.png",
    "/assets/gazania-park-site5.png",
    "/assets/gazania-park-site6.png",
    "/assets/gazania-park-site7.png",
    "/assets/gazania-park-site8.png",
    "/assets/gazania-park-site9.png",
  ];
  console.log(siteImages[index + next]);

  return (
    <>
      <div
        className=""
        onClick={() => {
          setShowImage(true);
        }}
      >
        <Image className={``} alt={"images"} src={image} />
      </div>
      <Modal
        isVisible={showImage}
        onClose={() => {
          setShowImage(false);
          console.log(image);
        }}
      >
        <div
          className="w-[80vw] h-[80vh] bg-cover flex justify-end items-end p-10"
          style={{ backgroundImage: `url(${siteImages[index + next]})` }}
        >
          <div className="flex">
            <button
              onClick={() => {
                console.log();
                setNext((prev) => {
                  if (prev > 0 || index + next > 0) {
                    return prev - 1;
                  }
                  return prev;
                });
              }}
            >
              <Image
                alt={"left"}
                src={"/assets/leftArrow.svg"}
                className={"p-2 md:p-4 bg-white"}
              />
            </button>
            <button
              onClick={() => {
                setNext((prev) => {
                  if (prev + index < siteImages.length - 1) {
                    return prev + 1;
                  }
                  return prev;
                });
              }}
            >
              <Image
                alt={"right"}
                src={"/assets/rightArrow.svg"}
                className={"p-2 md:p-4 bg-[#CAA969]"}
              />
            </button>
          </div>
          {/* <Image className={` `} alt={"images"} src={siteImages[index]} /> */}
        </div>
      </Modal>
    </>
  );
};

export default ClickableImage;
