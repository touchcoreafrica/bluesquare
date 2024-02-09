import React from "react";
import Image from "../Image/Image";
import ZoomInOutAnimation from "../ZoomOutAnimation/ZoomOutAnimation";
import Link from "next/link";

const BlogPostItem = ({ className, title, detail, date, image }) => {
  return (
    <Link
      href={"/resources/blog-posts/1"}
      className={`${className} flex flex-col`}
    >
      <ZoomInOutAnimation className={"w-full"}>
        <Image alt={title} src={image} className={"w-full"} />
      </ZoomInOutAnimation>
      <div className="flex flex-col gap-4  bg-[#F8F8F8] rounded-b-lg p-4">
        <h1 className={`headerFont text-2xl`}>{title}</h1>
        {/* <p className={`${BRSonoma.className} text-black/60`}>{detail}</p> */}
        <p className={`bodyFont text-end`}>{date}</p>
      </div>
    </Link>
  );
};

export default BlogPostItem;
