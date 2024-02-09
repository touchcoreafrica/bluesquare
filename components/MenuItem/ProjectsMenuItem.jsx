import React from "react";
import Image from "../Image/Image";
import Button from "../Button/Button";

import Link from "next/link";

const ProjectsMenuItem = ({
  image,
  title,
  subTitle,
  link,
  setMenuState,
  setProjectMenu,
}) => {
  return (
    <Link
      onClick={() => {
        setMenuState(false);
        setProjectMenu("");
      }}
      className="bg-white/10 h-fit  text-white flex gap-4 "
      href={link}
    >
      <Image alt={""} className={"h-16 w-16"} src={image} />
      <div className="flex flex-col gap-1 items-start">
        <p className={` text-white`}>{title}</p>
        <p className="text-sm capitalize text-start text-[#6D6E71]">
          {subTitle}
        </p>
      </div>
    </Link>
  );
};

export default ProjectsMenuItem;
