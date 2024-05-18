"use client";

import { getBlogs } from "@/aitable";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

function BlogSuggestionSection() {
  const pathname = usePathname();
  const [blogs, setBlogs] = useState([]);

  const loadData = async () => {
    const data = await getBlogs();
    if (data) {
      let id = pathname?.split("/")[2];
      let filteredBlogs = data.filter((blog) => blog.id !== id);
      setBlogs(filteredBlogs);
    }
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <div className={ClassName.container}>
      <div className={ClassName.content}>
        <div className={ClassName.title} data-aos="fade-up">
          You might also like...
        </div>
        <div className={ClassName.blogs} data-aos="fade-up">
          {/* Blog Components */}
          {blogs.slice(0, 6).map((blog, index) => (
            <Link
              href={`/resources/blog-posts/${blog.id}`}
              key={index}
              className={ClassName.blog}
              data-aos="fade-up"
            >
              <div className={ClassName.blogImageContainer}>
                {blog.fields.image && (
                  <img
                    className="w-full h-full object-cover"
                    alt=""
                    src={blog.fields.image[0].thumbnails.full.url}
                  />
                )}
              </div>
              <span className={ClassName.readTime} data-aos="fade-up">
                {blog.fields.read}
              </span>
              <span className={ClassName.blogTitle} data-aos="fade-up">
                {blog.fields.title}
              </span>
              <p className={ClassName.blogDescription} data-aos="fade-up">
                {blog.fields.paragraph1
                  ? blog.fields.paragraph1.slice(0, 300)
                  : blog.fields.paragraph1}{" "}
                {blog.fields.paragraph1 &&
                  blog.fields.paragraph1.length > 300 &&
                  " ..."}
              </p>
              <div className={ClassName.author} data-aos="fade-up">
                <img
                  src="/blogAvatar.svg"
                  alt=""
                  className={ClassName.authorImage}
                />
                <span>
                  {blog.fields.author} ●{" "}
                  {new Date(blog.createdTime).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogSuggestionSection;

const ClassName = {
  container:
    "w-full flex flex-col justify-center items-center pt-4 pb-32 px-basicx xl:px-0 text-black",
  content:
    "w-full max-w-7xl flex flex-col border-y-2 border-gray-200 pt-10 sm:pt-32",
  title: "text-xl sm:text-3xl font-bold max-w-3xl mb-10",
  blogs:
    "flex flex-wrap w-full justify-center lg:justify-between gap-10 mb-10 sm:mb-32",
  //   Blog style
  blog: "flex flex-col w-96",
  blogImageContainer: "w-full rounded-md bg-gray-200 h-80 mb-4",
  readTime: "text-primary text-xxs font-semibold",
  blogTitle: "text-sm font-bold mb-2 mt-1",
  blogDescription: "text-tertiary font-semibold text-xs",
  author: "text-xxs text-tertiary gap-3 flex items-center mt-4",
  authorImage: "w-6 h-6 object-cover rounded-full",
};
