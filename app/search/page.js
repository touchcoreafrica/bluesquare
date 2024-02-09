"use client";

import Footer from "@/components/Footer/Footer";
import SearchCard from "@/components/SearchCard/SearchCard";
import SearchDetail from "@/components/SearchDetail/SearchDetail";
import { MenuItem, Select } from "@mui/material";
import { useAnimation, motion } from "framer-motion";

import { useEffect, useState } from "react";

const Page = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Adjust the values to control the opacity change
    const maxScroll = window.innerHeight; // Adjust this value to determine when the banner is fully scrolled

    const opacity = Math.min(1, scrollPosition / maxScroll);

    controls.start({
      background: `rgba(0, 0, 0, ${opacity})`,
      transition: { duration: 0, delay: 0 },
    });
  }, [scrollPosition, controls]);

  return (
    <div className={`bg-white`}>
      <section
        className={`relative bg-cover bg-[url('/assets/SearchBanner.png')] min-h-screen bg-origin-content w-full bg-no-repeat flex items-end justify-center`}
      >
        <motion.div
          className="banner-overlay"
          initial={{ background: "rgba(0, 0, 0, 0)" }}
          animate={controls}
        ></motion.div>
        <div
          className={`z-10 px-4 py-4 md:py-10 bg-white w-[90%] md:w-4/5  mb-[-70px] flex flex-col gap-5`}
        >
          <h1 className={`text-2xl md:text-5xl headerFont`}>
            Showing results for:
          </h1>
          <div className={`grid grid-cols-2 md:flex gap-2`}>
            <div className={`flex flex-col md:w-[15%]`}>
              <p className={`text-[#CAA969] text-sm`}>TO</p>
              <Select
                id="demo-simple-select"
                value={"buy"}
                label="To"
                onChange={() => {}}
              >
                <MenuItem value={"buy"}>Buy</MenuItem>
              </Select>
            </div>
            <div className={`flex flex-col md:w-[15%]`}>
              <p className={`text-[#CAA969] text-sm`}>LOCATION</p>
              <Select
                id="demo-simple-select"
                value={"lekki"}
                label="Lekki"
                onChange={() => {}}
              >
                <MenuItem value={"lekki"}>Lekki</MenuItem>
              </Select>
            </div>
            <div className={`flex flex-col md:w-[15%]`}>
              <p className={`text-[#CAA969] text-sm`}>TYPE</p>
              <Select
                id="demo-simple-select"
                value={"condo"}
                label="condo"
                onChange={() => {}}
              >
                <MenuItem value={"condo"}>Condo</MenuItem>
              </Select>
            </div>
            <div className={`flex flex-col md:w-[15%]`}>
              <p className={`text-[#CAA969] text-sm`}>PRICE RANGE</p>
              <Select
                id="demo-simple-select"
                value={"<$10,000"}
                label="price-range"
                onChange={() => {}}
              >
                <MenuItem value={"<$10,000"}>{"<$10,000"}</MenuItem>
              </Select>
            </div>
            <div className={`flex flex-col md:w-[20%]`}>
              <p className={`text-[#CAA969] text-sm`}>BEDROOMS</p>
              <Select
                id="demo-simple-select"
                value={"1 bedroom, 1 bath"}
                label="bedrooms"
                onChange={() => {}}
              >
                <MenuItem value={"1 bedroom, 1 bath"}>
                  {"1 bedroom, 1 bath"}
                </MenuItem>
              </Select>
            </div>
            <div className={`flex flex-col md:w-[20%]`}>
              <p className={`text-[#CAA969] text-sm`}>BEDROOMS</p>
              <Select
                id="demo-simple-select"
                value={""}
                label="select"
                onChange={() => {}}
              >
                <MenuItem value={""}>{""}</MenuItem>
              </Select>
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-screen flex ">
        <div className="md:w-2/5 min-h-full p-4 md:pl-20 pt-20 md:pr-4">
          <div className="flex justify-between">
            <p className={` text-sm text-[#6D6E71]`}>More than 100 available</p>
            <div className={`flex gap-2`}>
              <p className={`font-bold bodyFont`}>Latest</p>
            </div>
          </div>
          <SearchCard image={"/assets/image1.jpg"} />
        </div>
        <div className="hidden md:block w-3/5 pr-20 pl-4 pb-4 pt-20 min-h-full bg-[url('/assets/Sec5Bg.png')] bg-cover">
          <SearchDetail />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Page;
