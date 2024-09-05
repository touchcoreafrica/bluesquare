import React, { useState } from "react";

import Image from "../Image/Image";

const TeamCard = ({ className, name, position, pic, detail }) => {
  const [view, setView] = useState(false);
  return (
    <div className={`${className} flex flex-col gap-3 bg-white p-4`}>
      <div className="flex justify-between w-full items-center">
        <p className={`text-2xl md:text-4xl headerFont text-black`}>
          {name || "Name Here"}
        </p>
        <button
          onClick={() => {
            setView(!view);
          }}
        >
          {view ? (
            <p className={`text-[#CAA969] text-3xl md:text-6xl font-thin`}>-</p>
          ) : (
            <p className={`text-[#CAA969] text-3xl md:text-6xl font-thin`}>+</p>
          )}
        </button>
      </div>
      <p className={`text-black/60 bodyFont`}>{position || "Position here"}</p>
      {view ? (
        <div className="flex gap-4 flex-col md:flex-row">
          {pic !== null ? (
            <Image
              className={"md:w-1/4 max-h-[200px] object-cover"}
              alt={"team pic"}
              src={pic}
            />
          ) : null}
          {detail !== null ? (
            <div className="flex flex-col">
              {detail?.map((description, index) => (
                <p
                  key={index}
                  className={`bodyFont text-black/60 text-lg mb-4`}
                >
                  {description}
                </p>
              ))}
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

export default TeamCard;
