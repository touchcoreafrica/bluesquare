"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import BlogPostItem from "@/components/BlogPostItem/BlogPostItem";
import Footer from "@/components/Footer/Footer";
import React, { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="bg-white">
      <div className="min-h-screen flex flex-col gap-10 w-full items-center">
        <section className="bg-[#111] w-full h-[100px]"></section>
        <section className="w-[90%] h-[70vh] bg-[url('/assets/ResourceBanner.png')] bg-cover"></section>
        <section className="w-[90%] flex flex-wrap">
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
        </section>
      </div>
      ;
      <Footer />
    </div>
  );
};

export default Page;
