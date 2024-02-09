import React from "react";
import Image from "../Image/Image";

import Link from "next/link";
import { KeyboardArrowRight } from "@mui/icons-material";

const MenuItemWithSubmenu = ({ image, title, subtitle, handleClick }) => {
  return (
    <div
      className="z-50 justify-between flex items-center pr-4"
      onClick={handleClick}
    >
      <div
        className={`flex gap-2 p-4 text-xs lg:text-[15px] 2xl:text-base items-center cursor-pointer`}
      >
        <div className="bg-[#D1A55C1A] w-12 h-12 flex items-center justify-center">
          <Image alt={"icon"} src={image} />
        </div>
        <div className={`fle flex-col gap-2`}>
          <p className={` text-white`}>{title}</p>
          <p className={`text-[#6D6E71]`}>{subtitle}</p>
        </div>
      </div>
      <KeyboardArrowRight className="text-white" />
    </div>
  );
};

export default MenuItemWithSubmenu;
