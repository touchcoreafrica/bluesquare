"use client";

import React, { useEffect, useState } from "react";

import Footer from "@/components/Footer/Footer";
import { useAnimation, motion } from "framer-motion";
import { SlideFromRtoL } from "@/components/Animation";
import Image from "@/components/Image/Image";

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
    <div className="min-h-screen w-full bg-white">
      <SlideFromRtoL>
        <div className="absolute top-0 bg-cover bg-[url('/assets/ResourceBanner.png')] h-[85vh] bg-origin-content w-full bg-no-repeat" />
        <section className={`h-[85vh] w-full flex items-end justify-end`}>
          <motion.div
            className="banner-overlay"
            initial={{ background: "rgba(0, 0, 0, 0)" }}
            animate={controls}
          ></motion.div>
          <p className={`z-10 bg-white p-5 text-3xl mdtext-5xl headerFont`}>
            Neighborhood Guides
          </p>
        </section>
        <div className="hidden md:w-2/12 md:flex mb-[-250px] pt-4 flex-col gap-4 sticky top-16 left-20">
          <p
            className={`bodyFont font-bold text-white p-3`}
            style={{
              background:
                "linear-gradient(78deg, #835A03 0%, #CAA969 66.54%, #835A03 100%)",

              boxShadow:
                "0px 24px 50px 0px rgba(38, 40, 43, 0.30), 0px 10px 20px 0px rgba(38, 40, 43, 0.20)",
            }}
          >
            Overview
          </p>
          <p className={`text-black/60`}>Meadow Hall School</p>
          <p className={`text-black/60`}>British International School</p>
          <p className={`text-black/60`}>Greensprings School </p>
          <p className={`text-black/60`}>Corona School</p>
          <p className={`text-black/60`}>Grace Children&apos;s School</p>
          <p className={`text-black/60`}>Please Note</p>
        </div>
        <section
          className="flex p-4 md:p-20 w-full gap-10 bg-[#F8F8F8]"
          id="section1"
        >
          <div className="hidden md:w-2/12 md:flex flex-col gap-4"></div>
          <div className="md:w-10/12 flex flex-col gap-5 ">
            <h1 className={`headerFont text-2xl md:text-3xl`}></h1>
            <div className="flex flex-col gap-4">
              <p className={`bodyFont text-black/60 text-lg leading-[190%]`}>
                Explore the heartbeat of Lekki, VI, and Ikoyi through our
                Neighborhood Guide—a curated collection of the finest schools,
                restaurants, hotels, and iconic landmarks. Discover the vibrant
                essence of these neighborhoods, handpicked to complement our
                properties, offering you a comprehensive glimpse into the
                exceptional lifestyle awaiting you in these coveted locales.
              </p>
            </div>
          </div>
        </section>
        <section className="flex p-4 md:p-20 w-full gap-10" id="section2">
          <div className="hidden w-2/12 md:flex flex-col gap-4"></div>
          <div className="md:w-10/12 flex flex-col gap-5 ">
            <h1 className={`headerFont text-2xl md:text-3xl`}>
              Meadow Hall School
            </h1>
            <div className="flex flex-col gap-4">
              <p className={`bodyFont text-black/60 text-lg`}>
                Meadow Hall Way, Alma Beach Estate, Lekki, Lagos
              </p>
              <Image alt={"neighborhood1"} src={"/assets/guide1.png"} />
              <p className={`bodyFont text-black/60 text-lg leading-[190%]`}>
                Meadow Hall School is renowned for its holistic education
                approach, focusing on academic excellence, character
                development, and creative thinking. The school offers a
                conducive learning environment with modern facilities.
              </p>
            </div>
          </div>
        </section>
        <section
          className="flex p-4 md:p-20 w-full gap-10 bg-[#f8f8f8]"
          id="section3"
        >
          <div className="hidden w-2/12 md:flex flex-col gap-4"></div>
          <div className="md:w-10/12 flex flex-col gap-5 ">
            <h1 className={`headerFont text-2xl md:text-3xl`}>
              British International School
            </h1>
            <div className="flex flex-col gap-4">
              <p className={`bodyFont text-black/60 text-lg`}>
                Landbridge Avenue, Oniru Private Estate, Victoria Island, Lagos.
              </p>
              <Image alt={"neighborhood1"} src={"/assets/guide2.png"} />
              <p className={`bodyFont text-black/60 text-lg leading-[190%]`}>
                British International School provides a British curriculum
                education with world-class facilities and a diverse student
                body. It emphasizes academic rigor, critical thinking, and
                extracurricular opportunities.
              </p>
            </div>
          </div>
        </section>
        <section className="flex p-4 md:p-20 w-full gap-10" id="section4">
          <div className="hidden w-2/12 md:flex flex-col gap-4"></div>
          <div className="md:w-10/12 flex flex-col gap-5 ">
            <h1 className={`headerFont text-2xl md:text-3xl`}>
              Greensprings School
            </h1>
            <div className="flex flex-col gap-4">
              <p className={`bodyFont text-black/60 text-lg`}>
                32, Olatunde Ayoola Avenue, Anthony, Lagos.
              </p>
              <Image alt={"neighborhood1"} src={"/assets/guide3.png"} />
              <p className={`bodyFont text-black/60 text-lg leading-[190%]`}>
                Greensprings School offers a well-rounded education blending
                academics, sports, and the arts. It boasts a conducive learning
                environment and a comprehensive curriculum.
              </p>
            </div>
          </div>
        </section>
        <section
          className="flex p-4 md:p-20 w-full gap-10 bg-[#f8f8f8]"
          id="section5"
        >
          <div className="hidden w-2/12 md:flex flex-col gap-4"></div>
          <div className="md:w-10/12 flex flex-col gap-5 ">
            <h1 className={`headerFont text-2xl md:text-3xl`}>Corona School</h1>
            <div className="flex flex-col gap-4">
              <p className={`bodyFont text-black/60 text-lg`}>
                Abayomi Awonuga Street, Off Elf Road, Lekki Phase 1, Lagos.
              </p>
              <Image alt={"neighborhood1"} src={"/assets/guide4.png"} />
              <p className={`bodyFont text-black/60 text-lg leading-[190%]`}>
                Corona School Lekki is known for its academic excellence,
                providing quality education with a focus on character
                development and leadership skills.
              </p>
            </div>
          </div>
        </section>
        <section
          className="flex p-4 md:p-20 w-full gap-10 bg-[#f8f8f8]"
          id="section6"
        >
          <div className="hidden w-2/12 md:flex flex-col gap-4"></div>
          <div className="md:w-10/12 flex flex-col gap-5 ">
            <h1 className={`headerFont text-2xl md:text-3xl`}>
              Grace Children&apos;s School
            </h1>
            <div className="flex flex-col gap-4">
              <p className={`bodyFont text-black/60 text-lg`}>
                3, Church Street, Lekki Phase 1, Lagos.
              </p>
              <Image alt={"neighborhood1"} src={"/assets/guide5.png"} />
              <p className={`bodyFont text-black/60 text-lg leading-[190%]`}>
                Grace Children School is committed to nurturing well-rounded
                individuals by providing a balanced education encompassing
                academics, extracurricular activities, and character
                development.
              </p>
            </div>
          </div>
        </section>
        <section
          className="flex p-4 md:p-20 w-full gap-10 bg-[#f8f8f8]"
          id="section5"
        >
          <div className="hidden w-2/12 md:flex flex-col gap-4"></div>
          <div className="md:w-10/12 flex flex-col gap-5 ">
            <h1 className={`headerFont text-2xl md:text-3xl`}>Note:</h1>
            <div className="flex flex-col gap-4">
              <p className={`bodyFont text-black/60 text-lg`}>
                Please note that these details might be subject to change, so
                it&apos;s advisable to contact the schools directly or visit
                their websites for updated information.
              </p>
            </div>
          </div>
        </section>
      </SlideFromRtoL>
      <Footer />
    </div>
  );
};

export default Page;
