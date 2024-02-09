import React from "react";
import Image from "../Image/Image";

import Link from "next/link";

const ResourceCard = ({ className, title, subtitle, icon, link }) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel={`${title}`}
      className={` mb-4 flex flex-col gap-2 p-4 bg-[#f8f8f8] ${className}`}
    >
      <div className="flex items-center justify-center p-2 bg-[#D1A55C1A] w-fit">
        <Image alt={"icon"} src={icon} />
      </div>
      <h2 className={`headerFont text-xl md:text-2xl`}>{title}</h2>
      <p className={`bodyFont text-black/60`}>{subtitle}</p>
    </Link>
  );
};

export default ResourceCard;
