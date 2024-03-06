"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import BlogPostItem from "@/components/BlogPostItem/BlogPostItem";
import { motion, useAnimation } from "framer-motion";
import Footer from "@/components/Footer/Footer";
import Image from "@/components/Image/Image";

import { useEffect, useState } from "react";
import ProjectMap from "@/components/ProjectMap/ProjectMap";
import Link from "next/link";
import Airtable from "airtable";

const imageTable = new Airtable({
  apiKey:
    "patzGKl2v91cTSfRy.223a9d9fe72d7aead513d2822125ec439133fa9e8bab3f246319f360d3ae8b15",
}).base("appmY1gQeKjqKRaXO");
export async function sliderImage() {
  return imageTable("sliderImage").select().all();
}

export default function Home() {
  const [sectionOne, setSectionOne] = useState(0);
  const [sectionThree, setSectionThree] = useState(0);
  const [sectionFour, setSectionFour] = useState(0);
  const [sectionFive, setSectionFive] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const controls = useAnimation();
  const [slider, setSlider] = useState();
  const instagramFeed = [
    "/assets/Instagram1.png",
    "/assets/Instagram2.png",
    "/assets/Instagram3.png",
    "/assets/Instagram4.png",
  ];

  useEffect(() => {
    const images = sliderImage().then((data) => {
      const sliderArray = data?.map((field) => {
        return field?.fields?.Attachments[0]?.thumbnails?.full?.url;
      });
      setSlider(sliderArray);
    });
  }, []);
  useEffect(() => {
    AOS.init();
  }, []);

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
    console.log(slider);
  }, [slider]);

  useEffect(() => {
    // Adjust the values to control the opacity change
    const maxScroll = window.innerHeight; // Adjust this value to determine when the banner is fully scrolled

    const opacity = Math.min(1, scrollPosition / maxScroll);

    controls.start({
      background: `rgba(0, 0, 0, ${opacity})`,
      transition: { duration: 0, delay: 0 },
    });
  }, [scrollPosition, controls]);

  const sectionOneData = [
    { bg: "/assets/FRONT1.png", site: "Cove Towers" },
    { bg: "/assets/FRONT2.png", site: "gazania park" },
  ];
  const sectionThreeData = [{ bg: "/assets/FRONT2Sec3.png" }];
  const sectionFourData = [{ bg: "/assets/FRONT2Sec4.png" }];
  const sectionFiveData = [{ bg: "/assets/FRONT2Sec5.png" }];
  return (
    <div className={`bg-white relative`}>
      <div
        className={`absolute top-0 bg-cover min-h-screen bg-origin-content w-full bg-no-repeat`}
        style={{
          backgroundImage: `url(${slider ? slider[sectionOne] : null})`,
        }}
      ></div>
      <section
        className={`relative bg-cover min-h-screen bg-origin-content w-full bg-no-repeat flex items-center justify-center`}
      >
        <motion.div
          className="banner-overlay min-h-full"
          initial={{ background: "rgba(0, 0, 0, 0)" }}
          animate={controls}
        ></motion.div>
        <div className="flex flex-col items-center justify-center p-4 gap-4">
          <p className="hidden text-[#D1A55C] font-bold">Blue Square</p>
          <p className="headerFont text-white text-4xl md:text-7xl font-black text-center">
            Blue Square are Limited
          </p>
          <p className="headerFont text-white text-3xl md:text-5xl font-black text-center">
            ...Your key to luxury living
          </p>
          <Link
            href={"/about-us"}
            className={`bodyFont text-white px-8 py-4 w-full cursor-pointer md:w-fit z-50`}
            style={{
              background:
                "linear-gradient(78deg, #835A03 0%, #CAA969 66.54%, #835A03 100%)",
            }}
          >
            Learn More
          </Link>
        </div>
        <div className=" flex md:gap-20 flex-col mb-10 md:mb-40 mr-5 md:mr-20 items-end">
          <div className="hidden  border-[20px] border-[#CAA969] h-60 w-72 bg-black/50"></div>
          <div className="flex gap-4 items-center">
            <h1 className={`hidden text-2xl md:text-6xl text-white `}>
              {sectionOneData[sectionOne].site}
            </h1>

            <div className="hidden">
              <button
                onClick={() => {
                  setSectionOne(0);
                }}
              >
                <Image
                  alt={"left"}
                  src={"/assets/leftArrow.svg"}
                  className={"p-2 md:p-4 bg-white"}
                />
              </button>
              <button
                onClick={() => {
                  setSectionOne(1);
                }}
              >
                <Image
                  alt={"right"}
                  src={"/assets/rightArrow.svg"}
                  className={"p-2 md:p-4 bg-[#CAA969]"}
                />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="  py-10 px-4 md:py-24 bg-[#26282B] flex flex-col items-center justify-center gap-5 md:gap-10">
        <div
          className="flex flex-col gap-5 items-center"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="500"
        >
          <p
            className={`headerFont text-center text-white text-2xl md:text-5xl`}
          >
            We specialize in the creation of exquisite
            <br className="hidden md:block" /> and functional homes for our
            discerning clientele.
          </p>
          <Link
            href={"/about-us"}
            className={`bodyFont text-white px-8 py-4 w-full cursor-pointer md:w-fit z-50`}
            style={{
              background:
                "linear-gradient(78deg, #835A03 0%, #CAA969 66.54%, #835A03 100%)",
            }}
          >
            Find out more
          </Link>
        </div>
      </section>

      <section className="flex bg-white flex-col md:flex-row min-h-screen w-full">
        <div
          className="md:w-1/2 bg-cover bg-no-repeat flex items-end justify-end h-[400px] md:h-auto"
          style={{
            backgroundImage: `url(${sectionThreeData[sectionThree].bg})`,
          }}
        >
          <div className="hidden p-5 md:p-10">
            <button
              onClick={() => {
                setSectionThree(0);
              }}
            >
              <Image
                alt={"left"}
                src={"/assets/leftArrow.svg"}
                className={"p-2 md:p-4 bg-white"}
              />
            </button>
            <button onClick={() => {}}>
              <Image
                alt={"right"}
                src={"/assets/rightArrow.svg"}
                className={"p-2 md:p-4 bg-[#CAA969]"}
              />
            </button>
          </div>
        </div>
        <div className=" md:w-1/2 flex justify-center p-10 pr-20 flex-col gap-4">
          <div
            className="  h-fit flex justify-center flex-col gap-4"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="50"
            data-aos-anchor-placement="bottom-bottom"
          >
            <h1 className={`headerFont text-4xl`}>7 Centrale Residences</h1>
            <p className={`bodyFont leading-[190%]`}>
              An exquisite collection of ultra-luxury apartments, situated in
              the esteemed Lekki Phase 1 enclave within the Durosinmi Etti
              neighborhood.
            </p>
            <p className={`bodyFont leading-[190%]`}>
              These residences redefine opulence and offer a truly unparalleled
              living experience in the heart of Lagos, Nigeria
            </p>
            <Link
              href={"projects/7-centrale"}
              className={`px-10 py-4 text-white w-fit`}
              style={{
                background:
                  "linear-gradient(78deg, #26282B 14.83%, #43464C 61.05%, #26282B 91.83%)",
                boxShadow:
                  "0px 24px 50px 0px rgba(38, 40, 43, 0.30), 0px 10px 20px 0px rgba(38, 40, 43, 0.20)",
              }}
            >
              More info
            </Link>
          </div>
        </div>
      </section>

      <section className="flex flex-col-reverse bg-white md:flex-row min-h-screen w-full">
        <div className="md:w-1/2 flex justify-center p-10 flex-col gap-4">
          <div
            className="flex flex-col gap-4 "
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="50"
            data-aos-anchor-placement="bottom-bottom"
          >
            <h1 className={`headerFont text-4xl`}>Gazania Park</h1>
            <p className={`bodyFont leading-[190%]`}>
              This impressive development is home to a unique collection of 1,
              2,
              <br />
              3 bed apartments, 3 and 4 luxury bedroom maisonette, designed with
              <br />
              the sophisticated and discerning in mind, upholding the tenets of
              <br />
              class, style, quality and innovation.
            </p>
            <Link
              href={"projects/gazania-park"}
              className={`px-10 py-4 text-white w-fit`}
              style={{
                background:
                  "linear-gradient(78deg, #26282B 14.83%, #43464C 61.05%, #26282B 91.83%)",
                boxShadow:
                  "0px 24px 50px 0px rgba(38, 40, 43, 0.30), 0px 10px 20px 0px rgba(38, 40, 43, 0.20)",
              }}
            >
              More info
            </Link>
          </div>
        </div>
        <div
          className="md:w-1/2 bg-cover bg-no-repeat flex items-end h-[400px] md:h-auto"
          style={{
            backgroundImage: `url(${sectionFourData[sectionFour].bg})`,
          }}
        >
          <div className="hidden p-10">
            <button
              onClick={() => {
                setSectionThree(0);
              }}
            >
              <Image
                alt={"left"}
                src={"/assets/leftArrow.svg"}
                className={"p-4 bg-white"}
              />
            </button>
            <button onClick={() => {}}>
              <Image
                alt={"right"}
                src={"/assets/rightArrow.svg"}
                className={"p-4 bg-[#CAA969]"}
              />
            </button>
          </div>
        </div>
      </section>
      <section className="flex bg-white flex-col md:flex-row min-h-screen w-full">
        <div
          className="md:w-1/2 bg-cover bg-no-repeat flex items-end justify-end h-[400px] md:h-auto"
          style={{
            backgroundImage: `url(${sectionFiveData[sectionFive].bg})`,
          }}
        >
          <div className="hidden p-5 md:p-10">
            <button
              onClick={() => {
                setSectionFive(0);
              }}
            >
              <Image
                alt={"left"}
                src={"/assets/leftArrow.svg"}
                className={"p-2 md:p-4 bg-white"}
              />
            </button>
            <button onClick={() => {}}>
              <Image
                alt={"right"}
                src={"/assets/rightArrow.svg"}
                className={"p-2 md:p-4 bg-[#CAA969]"}
              />
            </button>
          </div>
        </div>
        <div className=" md:w-1/2 flex justify-center p-10 pr-20 flex-col gap-4">
          <div
            className="  h-fit flex justify-center flex-col gap-4"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="50"
            data-aos-anchor-placement="bottom-bottom"
          >
            <h1 className={`headerFont text-4xl`}>Cove Towers</h1>
            <p className={`bodyFont leading-[190%]`}>
              Set in the heart of Lekki, Cove Towers is a state-of-the-art,
              first of its kind serviced Condominium building. Situated ten
              minutes drive from the Admiralty Toll Gate, this property is home
              to only the truly discerning residents of Lekki.
            </p>
            <Link
              href={"projects/cove-towers"}
              className={`px-10 py-4 text-white w-fit`}
              style={{
                background:
                  "linear-gradient(78deg, #26282B 14.83%, #43464C 61.05%, #26282B 91.83%)",
                boxShadow:
                  "0px 24px 50px 0px rgba(38, 40, 43, 0.30), 0px 10px 20px 0px rgba(38, 40, 43, 0.20)",
              }}
            >
              More info
            </Link>
          </div>
        </div>
      </section>

      {/*       <div className="text-4xl text-white font-black flex items-center bg-[url('/assets/ParallexBg.png')] min-h-screen bg-fixed bg-center bg-no-repeat bg-cover"></div> */}
      {/*  <ProjectMap /> */}
      <ProjectMap />
      <section className="bg-white p-4 md:p-24 hidden flex-col gap-5 ">
        <div className="w-full flex justify-between items-center">
          <p className={`headerFont text-2xl md:text-5xl`}>Blog Posts</p>
          <Link
            href={"/resources/blog-posts"}
            className={`px-10 py-4 text-white w-fit`}
            style={{
              background:
                "linear-gradient(78deg, #26282B 14.83%, #43464C 61.05%, #26282B 91.83%)",
              boxShadow:
                "0px 24px 50px 0px rgba(38, 40, 43, 0.30), 0px 10px 20px 0px rgba(38, 40, 43, 0.20)",
            }}
          >
            See All
          </Link>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <BlogPostItem
            className={`md:w-1/3`}
            title={"Top 5 Benefits of Investing in Luxury Real Estate"}
            detail={
              "Are you considering investing in luxury real estate but not sure where to start? Look no further than our homeland, Nigeria."
            }
            date={"12, May 2023"}
            image={"/assets/BlogPost1.png"}
          />

          <BlogPostItem
            data-aos="fade-up"
            className={`md:w-1/3`}
            title={"Benefits of investing in Real Estate in Nigeria"}
            detail={
              "Despite the covid-19 pandemic which affects many investments in Nigeria, the only investment that is not affected is real estate because it’s not volatile."
            }
            date={"12, May 2023"}
            image={"/assets/BlogPost2.png"}
          />
          <BlogPostItem
            className={`md:w-1/3`}
            title={"Legal Guide to Buying a Property in Lagos"}
            detail={
              "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."
            }
            date={"12, May 2023"}
            image={"/assets/BlogPost3.png"}
          />
        </div>
      </section>

      <section
        layout
        className="px-4 md:px-24 py-10 hidden flex flex-col gap-5 bg-black/10"
      >
        <div className="w-full flex justify-between items-center">
          <p className={`headerFont text-xl md:text-4xl`}>Instagram Feeds</p>
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href={"https://www.instagram.com/bluesquareng/?hl=en"}
            className={`px-5 md:px-10 py-2 md:py-4 text-white w-fit`}
            style={{
              background:
                "linear-gradient(78deg, #26282B 14.83%, #43464C 61.05%, #26282B 91.83%)",
              boxShadow:
                "0px 24px 50px 0px rgba(38, 40, 43, 0.30), 0px 10px 20px 0px rgba(38, 40, 43, 0.20)",
            }}
          >
            Follow US
          </Link>
        </div>
        <motion.div layout className="flex gap-4 overflow-scroll">
          {instagramFeed?.map((feed, index) => {
            return (
              <Image
                key={index}
                alt={"feed"}
                className={"min-w-1/3"}
                src={feed}
              />
            );
          })}
        </motion.div>
      </section>
      <Footer />
    </div>
  );
}
