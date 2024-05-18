"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import BlogPostItem from "@/components/BlogPostItem/BlogPostItem";
import Footer from "@/components/Footer/Footer";
import React, { useEffect, useState } from "react";
import { getBlogs } from "@/aitable";
import Link from "next/link";

const tabs = ["All", "Blog", "Newsletter", "Product Update"];

const Page = () => {
  const [selected, setSelected] = useState(0);
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    AOS.init();
  }, []);

  const loadData = async () => {
    setBlogs([]);
    let category = "";
    if (selected === 1) {
      category = "Blog";
    } else if (selected === 2) {
      category = "Newsletter";
    } else if (selected === 3) {
      category = "Product Update";
    }
    const data = await getBlogs(category);
    if (data) {
      setBlogs(data);
    }
  };

  useEffect(() => {
    loadData();
  }, [selected]);

  return (
    <div className="bg-white">
      <div className="min-h-screen flex flex-col gap-10 w-full items-center">
        <section className="bg-[#111] w-full h-[100px]"></section>
        <section className="w-[90%] h-[70vh] bg-[url('/assets/ResourceBanner.png')] bg-cover"></section>
        {/* <section className="w-[90%] flex flex-wrap">
          <div className="flex flex-col md:grid md:grid-cols-3 gap-4 w-full">
            <BlogPostItem
              className={``}
              title={"Top 5 Benefits of Investing in Luxury Real Estate"}
              detail={
                "Are you considering investing in luxury real estate but not sure where to start? Look no further than our homeland, Nigeria."
              }
              date={"12, May 2023"}
              image={"/assets/BlogPost1.png"}
            />

            <BlogPostItem
              data-aos="fade-up"
              className={``}
              title={"Benefits of investing in Real Estate in Nigeria"}
              detail={
                "Despite the covid-19 pandemic which affects many investments in Nigeria, the only investment that is not affected is real estate because it’s not volatile."
              }
              date={"12, May 2023"}
              image={"/assets/BlogPost2.png"}
            />
            <BlogPostItem
              className={``}
              title={"Legal Guide to Buying a Property in Lagos"}
              detail={
                "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."
              }
              date={"12, May 2023"}
              image={"/assets/BlogPost3.png"}
            />
            <BlogPostItem
              data-aos="fade-up"
              className={``}
              title={"Benefits of investing in Real Estate in Nigeria"}
              detail={
                "Despite the covid-19 pandemic which affects many investments in Nigeria, the only investment that is not affected is real estate because it’s not volatile."
              }
              date={"12, May 2023"}
              image={"/assets/BlogPost2.png"}
            />
          </div>
        </section> */}

        <div className="bg-white p-3 w-full lg:w-fit flex mb-6 overflow-scroll scroll-hide text-black">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`px-4 cursor-pointer font-bold py-1 text-sm lg:text-lg flex-shrink-0 ${
                selected === index ? "text-white" : "text-[#808A9E]"
              } ${selected === index ? "bg-[#3B5090]" : "bg-transparent"}`}
              onClick={() => setSelected(index)}
            >
              {tab}
            </div>
          ))}
        </div>

        <div className="w-full max-w-7xl flex flex-wrap justify-between lg:gap-6 text-black">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="w-full lg:w-96 bg-[#F4F4F4] flex flex-col min-h-[360px] p-6 cursor-pointer"
            >
              <div className="w-full h-52 relative bg-white">
                {blog.fields.image && (
                  <img
                    src={blog.fields.image[0].thumbnails.full.url}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="text-sm lg:text-base px-3 py-2 bg-white/50 absolute bottom-4 left-4">
                  {blog.fields.category}
                </div>
              </div>
              <span className="font-bold text-lg lg:text-2xl mt-2 mb-4">
                {blog.fields.title}
              </span>
              <Link
                href={`/resources/blog-posts/${blog.id}`}
                className="font-bold text-sm lg:text-base text-[#808A9E]"
              >
                Read more
              </Link>
            </div>
          ))}
        </div>
      </div>
      ;
      <Footer />
    </div>
  );
};

export default Page;
