import React, { useState } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

import CheckIcon from "../CheckIcon/CheckIcon";

const FacilitiesCard = ({ className, title, facilities }) => {
  const [list, setList] = useState(false);
  return (
    <div
      className={`${className} flex w-full flex-col bg-[#F8F8F8]
      `}
    >
      <div className="flex justify-between w-full items-center p-4">
        <h1 className="text-3xl">{title}</h1>
        {list ? (
          <RemoveIcon
            className=" text-[#CAA969]"
            onClick={() => {
              setList(false);
            }}
          />
        ) : (
          <AddIcon
            className=" text-[#CAA969]"
            onClick={() => {
              setList(true);
            }}
          />
        )}
      </div>
      {list ? (
        <div className={`grid grid-cols-2 px-4 gap-2`}>
          {facilities.map((facility, index) => {
            return (
              <div
                className={` flex
                gap-2 items-start
                `}
                key={index}
              >
                <CheckIcon />
                <p className={` text-black/60`}>{facility}</p>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default FacilitiesCard;
