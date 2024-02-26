"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "@/components/Footer/Footer";
import { useAnimation, motion } from "framer-motion";
import { SlideFromRtoL } from "@/components/Animation";
import Image from "@/components/Image/Image";
import Link from "next/link";
import Modal from "@/components/Modal/Modal";
import Button from "@/components/Button/Button";
import TextField from "@/components/TextField/TextField";

const Page = () => {
  const [showThesis, setShowThesis] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const controls = useAnimation();

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
        <div
          style={{ backgroundImage: "url(/assets/agents-banner.png)" }}
          className="absolute top-0 bg-cover h-[85vh] bg-origin-content w-full bg-no-repeat"
        />
        <section className={`h-[85vh] w-full flex items-end justify-end`}>
          <motion.div
            className="banner-overlay"
            initial={{ background: "rgba(0, 0, 0, 0)" }}
            animate={controls}
          ></motion.div>
          <p className={`z-10 bg-white p-5 text-3xl mdtext-5xl headerFont`}>
            Become An Agent
          </p>
        </section>
        <section className="bg-[#F8F8F8] w-full px-48 py-32">
          <p className={`bodyFont text-black/60 text-lg leading-[190%]`}>
            Embark on a rewarding journey with Blue Square as a valued
            affiliate. Our Agents Profile section is an invitation to real
            estate professionals who seek an empowered partnership. Experience
            the benefits of affiliation with a dynamic team dedicated to
            excellence and success.
          </p>
        </section>
        <section className="flex bg-white flex-col md:flex-row min-h-screen w-full">
          <div
            className="md:w-1/2 bg-cover bg-no-repeat flex items-end justify-end h-[400px] md:h-auto"
            style={{
              backgroundImage: `url('/assets/agents.png')`,
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
              <h1 className={`headerFont text-4xl`}>Why Choose Blue Square?</h1>
              <div className="flex gap-2">
                <span className="p-2 h-fit bg-[#D1A55C26] rounded-full">
                  <Image alt={"check"} src={"/assets/checkIcon.svg"} />
                </span>
                <p className={`bodyFont leading-[190%]`}>
                  Unparalleled Support: Enjoy a supportive environment that
                  fosters growth. From cutting-edge tools to marketing
                  assistance, we empower our agents to thrive.
                </p>
              </div>
              <div className="flex gap-2">
                <span className="p-2 h-fit bg-[#D1A55C26] rounded-full">
                  <Image alt={"check"} src={"/assets/checkIcon.svg"} />
                </span>
                <p className={`bodyFont leading-[190%]`}>
                  Lucrative Commissions: Elevate your earnings with competitive
                  commission structures. Our commitment to fair compensation
                  ensures that your hard work is duly rewarded.
                </p>
              </div>
              <div className="flex gap-2">
                <span className="p-2 h-fit bg-[#D1A55C26] rounded-full">
                  <Image alt={"check"} src={"/assets/checkIcon.svg"} />
                </span>
                <p className={`bodyFont leading-[190%]`}>
                  Networking Opportunities: Connect with a network of top-notch
                  professionals in the real estate industry. Leverage these
                  connections to expand your reach and enhance your career.
                </p>
              </div>
              <div className="flex gap-2">
                <span className="p-2 h-fit bg-[#D1A55C26] rounded-full">
                  <Image alt={"check"} src={"/assets/checkIcon.svg"} />
                </span>
                <p className={`bodyFont leading-[190%]`}>
                  Training and Development: Stay at the forefront of industry
                  trends with our continuous training programs. We invest in
                  your development to keep your skills sharp and relevant.
                </p>
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
              className={`headerFont text-center text-white text-2xl md:text-4xl`}
            >
              Ready to take your real estate career to new heights? Submit your
              <br className="hidden md:block" />
              application today and become an integral part of Blue Square’s
              success <br className="hidden md:block" /> story. Let&apos;s grow
              together!
            </p>
            <Button
              onClick={() => {
                setShowThesis(true);
              }}
              className={`bodyFont font-bold text-white px-8 py-4 w-full cursor-pointer md:w-fit z-50`}
              style={{
                background:
                  "linear-gradient(78deg, #835A03 0%, #CAA969 66.54%, #835A03 100%)",
              }}
            >
              Join Us Today
            </Button>
          </div>
        </section>
      </SlideFromRtoL>
      <Footer />
      <Modal
        isVisible={showThesis}
        onClose={() => {
          setShowThesis(!showThesis);
          console.log(showThesis);
        }}
      >
        <div className="w-[40vw] bg-white flex flex-col gap-4 p-5">
          <div className="flex justify-between w-full">
            <p className="headerFont text-2xl">Become an Agent</p>
            <button
              onClick={() => {
                setShowThesis(false);
              }}
              className="bg-red-200 p-2 w-fit self-end"
            >
              <Image src={"/assets/close.svg"} alt={"close"} />
            </button>
          </div>
          <span className="w-full h-[1px] bg-[#D1A55C]"></span>

          <div className="flex flex-col gap-2 w-full">
            <div className="flex gap-4 w-full">
              <div className="flex flex-col w-1/2">
                <p className={` text-sm text-[#CAA969]`}>FIRST NAME</p>
                <TextField
                  className={"border-[1px] bg-[#f8f8f8] py-4"}
                  placeholder={"Chiemena"}
                />
              </div>
              <div className="flex flex-col w-1/2">
                <p className={` text-sm text-[#CAA969]`}>LAST NAME</p>
                <TextField
                  className={"border-[1px] bg-[#f8f8f8] py-4"}
                  placeholder={"Okafor"}
                />
              </div>
            </div>
            <div className="flex gap-4 w-full">
              <div className="flex flex-col w-1/2">
                <p className={` text-sm text-[#CAA969]`}>EMAIL</p>
                <TextField
                  className={"border-[1px] bg-[#f8f8f8] py-4"}
                  placeholder={"email"}
                />
              </div>
              <div className="flex flex-col w-1/2">
                <p className={` text-sm text-[#CAA969]`}>PHONE NUMBER</p>
                <TextField
                  className={"border-[1px] bg-[#f8f8f8] py-4"}
                  placeholder={"phone number"}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <p className={` text-sm text-[#CAA969]`}>MESSAGE</p>
              <textarea
                type={"text"}
                rows={7}
                className={"border-[1px] bg-[#f8f8f8]"}
                placeholder={"Message"}
              />
            </div>
            <div className="flex flex-col gap-1 ">
              <p className="text-[#D1A55C]">UPLOAD CV</p>
              <Button className="flex gap-2 border-[1px] w-fit p-2 bg-[#f8f8f8]">
                <Image src={"/assets/file.svg"} alt={"file"} />
                <p className="text-black/50">.pdf</p>
              </Button>
            </div>

            <div className="flex gap-10 items-center">
              <p className="text-black/80">How do you want to be replied?</p>
              <div className="flex gap-2">
                <div className="border-[1px] border-[#03A028] bg-[#E1FFE8] p-2 flex gap-2 items-center justify-center">
                  <p>email</p>
                  <TextField type="radio" />
                </div>
                <div className="border-[1px] border-[#9AA0A2] bg-[#f8f8f8] py-2 px-4 flex gap-2 items-center justify-center">
                  <p>call</p>
                  <TextField type="radio" />
                </div>
              </div>
            </div>
            <Button
              className={`bodyFont font-bold text-white w-full bg-[#26282B] py-4`}
            >
              Send Message
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Page;
