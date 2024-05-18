"use client";

import { getBlog } from "@/aitable";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

function BlogContentSection() {
  const pathname = usePathname();
  const [blog, setBlog] = useState(null);

  const loadData = async () => {
    let id = pathname?.split("/")[3];
    if (id) {
      const data = await getBlog(id);
      if (data) {
        setBlog(data);
      }
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className={ClassName.container}>
      <div className={ClassName.content}>
        <div className={ClassName.blog}>
          <span className={ClassName.heading1} data-aos="fade-up">
            {blog?.fields.title}
          </span>
          <div className={ClassName.authorContainer} data-aos="fade-up">
            <div className={ClassName.author}>
              <img
                src="/blogAvatar.svg"
                alt=""
                className={ClassName.authorImage}
              />
              <span>
                {blog?.fields.author} ●{" "}
                {blog?.createdTime &&
                  new Date(blog.createdTime).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
              </span>
            </div>
            <span className={ClassName.readTime}>{blog?.fields.read}</span>
          </div>
          <div className={ClassName.imageContainer} data-aos="fade-up">
            {blog?.fields.image && (
              <img
                className="w-full h-full object-cover"
                alt=""
                src={blog.fields.image[0].thumbnails.full.url}
              />
            )}
          </div>
          {blog?.fields.paragraph1 && (
            <p className={ClassName.description} data-aos="fade-up">
              {blog?.fields.paragraph1}
            </p>
          )}
          {blog?.fields.paragraph2 && (
            <p className={ClassName.description} data-aos="fade-up">
              {blog?.fields.paragraph2}
            </p>
          )}
          {blog?.fields.paragraph3 && (
            <p className={ClassName.description} data-aos="fade-up">
              {blog?.fields.paragraph3}
            </p>
          )}
          {blog?.fields.paragraph4 && (
            <p className={ClassName.description} data-aos="fade-up">
              {blog?.fields.paragraph4}
            </p>
          )}
          {blog?.fields.paragraph5 && (
            <p className={ClassName.description} data-aos="fade-up">
              {blog?.fields.paragraph5}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default BlogContentSection;

const ClassName = {
  container:
    "w-full flex flex-col justify-center items-center pt-32 px-basicx xl:px-0 text-black",
  content: "w-full max-w-7xl flex flex-col items-center",
  blog: "w-full max-w-5xl flex flex-col items-center",

  heading1: "text-2xl md:text-4xl font-bold text-secondary mb-8 mt-5 w-full",
  heading2: "text-xl sm:text-3xl font-bold text-secondary mb-8 mt-5 w-full",
  authorContainer: "flex w-full items-center justify-between",
  author: "text-xs text-tertiary gap-3 flex items-center",
  authorImage: "w-6 h-6 object-cover rounded-full",
  readTime: "text-primary text-xs font-semibold",
  imageContainer:
    "w-full bg-gray-200 h-560px rounded-lg mt-4 mb-8 overflow-hidden",
  description: "mb-4 text-tertiary text-sm sm:text-base",
  tagsContainer:
    "flex flex-col sm:flex-row gap-4 sm:gap-0 items-center justify-between w-full font-bold text-black py-20 sm:py-32 text-center text-sm sm:text-base",
  shareContainer: "flex items-center gap-4",
  socialIcon: "w-4 sm:w-6 h-4 sm:h-6 object-contain cursor-pointer",
};
