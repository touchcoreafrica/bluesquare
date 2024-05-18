import React from "react";
import Image from "../Image/Image";

import Link from "next/link";

const ProjectListItem = ({ image, name, address, startFrom, link }) => {
  return (
    <Link href={link} className="flex flex-col">
      <Image alt={"project image"} src={image} className={"h-80"} />
      <div className={`flex flex-col bg-[#f8f8f8] p-4 gap-4`}>
        <p className={`headerFont text-2xl text-black`}>{name}</p>
        <div className="flex justify-between">
          <div className="flex gap-4 items-center">
            <Image alt={"location"} src={"/assets/location2.svg"} />
            <p className={`text-black/60 text-sm bodyFont`}>{address}</p>
          </div>
          <div className=" hidden  gap-4 items-center">
            <Image alt={"money"} src={"/assets/money.svg"} />
            <p
              className={`text-black/60 text-sm bodyFont`}
            >{`from ${startFrom}`}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectListItem;
