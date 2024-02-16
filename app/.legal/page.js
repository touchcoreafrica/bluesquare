"use client";

import React, { useEffect, useState } from "react";

import Footer from "@/components/Footer/Footer";
import { useAnimation, motion } from "framer-motion";
import { SlideFromRtoL } from "@/components/Animation";

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
        <div className="absolute top-0 bg-cover bg-[url('/assets/LegalBanner.png')] h-[85vh] bg-origin-content w-full bg-no-repeat" />
        <section className={`h-[85vh] w-full flex items-end justify-end`}>
          <motion.div
            className="banner-overlay"
            initial={{ background: "rgba(0, 0, 0, 0)" }}
            animate={controls}
          ></motion.div>
          <p className={`z-10 bg-white p-5 text-3xl mdtext-5xl headerFont`}>
            Legal
          </p>
        </section>
        <div className="hidden md:w-2/12 md:flex mb-[-250px] pt-4 flex-col gap-4 sticky top-16 left-20">
          <button
            className={`bodyFont font-bold text-white p-3`}
            style={{
              background:
                "linear-gradient(78deg, #835A03 0%, #CAA969 66.54%, #835A03 100%)",

              boxShadow:
                "0px 24px 50px 0px rgba(38, 40, 43, 0.30), 0px 10px 20px 0px rgba(38, 40, 43, 0.20)",
            }}
          >
            Terms and Conditions
          </button>
          <p className={`text-black/60`}>Privacy Policy</p>
          <p className={`text-black/60`}>Terms of Use</p>
          <p className={`text-black/60`}>Real Estate Glossary </p>
          <p className={`text-black/60`}>Cookie Policy</p>
        </div>
        <section
          className="flex p-4 md:p-20 w-full gap-10 bg-[#F8F8F8]"
          id="terms-and-conditions"
        >
          <div className="hidden md:w-2/12 md:flex flex-col gap-4"></div>
          <div className="md:w-10/12 flex flex-col gap-5 ">
            <h1 className={`headerFont text-3xl md:text-5xl`}>
              Terms and Conditions
            </h1>
            <div className="flex flex-col gap-4">
              <p className={`bodyFont text-black/60 text-lg leading-[190%]`}>
                Lorem ipsum dolor sit amet consectetur. Ultrices morbi vivamus
                nam pellentesque quis nulla dolor risus. Blandit egestas neque
                volutpat pharetra hac varius mi nisi feugiat. Pellentesque orci
                urna sagittis nulla. Fermentum tortor nunc at quis. Sociis
                ultricies ullamcorper dignissim sit volutpat turpis arcu. Tellus
                amet enim commodo quis. Et posuere elementum pellentesque nibh.
              </p>
              <p className={`bodyFont text-black/60 text-lg leading-[190%]`}>
                Quam natoque nisi laoreet ultrices ullamcorper posuere integer.
                Nibh ante pharetra urna nec elementum diam. Scelerisque facilisi
                lectus at scelerisque orci nullam scelerisque. Suspendisse
                sagittis habitant eu egestas faucibus pretium sit consequat in.
                Convallis malesuada eu integer senectus vitae.
              </p>
              <p className={`bodyFont text-black/60 text-lg leading-[190%]`}>
                Ac convallis cras leo morbi nibh sagittis massa venenatis sem.
                Orci arcu dapibus scelerisque commodo mattis elementum morbi
                amet aliquam. Condimentum orci facilisis sed laoreet turpis
                penatibus lacus ornare nulla. Sit magna est fringilla ut aliquet
                justo. Ornare enim consectetur vel nunc diam tellus semper
                sagittis. Sit aliquam massa erat nisl gravida venenatis id arcu.
              </p>
              <p className={`bodyFont text-black/60 text-lg leading-[190%]`}>
                Blandit egestas neque volutpat pharetra hac varius mi nisi
                feugiat. Pellentesque orci urna sagittis nulla. Fermentum tortor
                nunc at quis. Sociis ultricies ullamcorper dignissim sit
                volutpat turpis arcu. Tellus amet enim commodo quis. Et posuere
                elementum pellentesque nibh.
              </p>
            </div>
          </div>
        </section>
        <section className="flex p-4 md:p-20 w-full gap-10" id="privacy-policy">
          <div className="hidden w-2/12 md:flex flex-col gap-4"></div>
          <div className="md:w-10/12 flex flex-col gap-5 ">
            <h1 className={`headerFont text-3xl md:text-5xl`}>
              Privacy Policy
            </h1>
            <div className="flex flex-col gap-4">
              <p className={`bodyFont text-black/60 text-lg`}>
                Lorem ipsum dolor sit amet consectetur. Ultrices morbi vivamus
                nam pellentesque quis nulla dolor risus. Blandit egestas neque
                volutpat pharetra hac varius mi nisi feugiat. Pellentesque orci
                urna sagittis nulla. Fermentum tortor nunc at quis. Sociis
                ultricies ullamcorper dignissim sit volutpat turpis arcu. Tellus
                amet enim commodo quis. Et posuere elementum pellentesque nibh.
              </p>
              <p className={`bodyFont text-black/60 text-lg leading-[190%]`}>
                Quam natoque nisi laoreet ultrices ullamcorper posuere integer.
                Nibh ante pharetra urna nec elementum diam. Scelerisque facilisi
                lectus at scelerisque orci nullam scelerisque. Suspendisse
                sagittis habitant eu egestas faucibus pretium sit consequat in.
                Convallis malesuada eu integer senectus vitae.
              </p>
              <p className={`bodyFont text-black/60 text-lg leading-[190%]`}>
                Ac convallis cras leo morbi nibh sagittis massa venenatis sem.
                Orci arcu dapibus scelerisque commodo mattis elementum morbi
                amet aliquam. Condimentum orci facilisis sed laoreet turpis
                penatibus lacus ornare nulla. Sit magna est fringilla ut aliquet
                justo. Ornare enim consectetur vel nunc diam tellus semper
                sagittis. Sit aliquam massa erat nisl gravida venenatis id arcu.
              </p>
              <p className={`bodyFont text-black/60 text-lg leading-[190%]`}>
                Blandit egestas neque volutpat pharetra hac varius mi nisi
                feugiat. Pellentesque orci urna sagittis nulla. Fermentum tortor
                nunc at quis. Sociis ultricies ullamcorper dignissim sit
                volutpat turpis arcu. Tellus amet enim commodo quis. Et posuere
                elementum pellentesque nibh.
              </p>
            </div>
          </div>
        </section>
        <section
          className="flex p-4 md:p-20 w-full gap-10 bg-[#f8f8f8]"
          id="terms-of-use"
        >
          <div className="hidden w-2/12 md:flex flex-col gap-4"></div>
          <div className="md:w-10/12 flex flex-col gap-5 ">
            <h1 className={`headerFont text-3xl md:text-5xl`}>Terms of Use</h1>
            <div className="flex flex-col gap-4">
              <p className={`bodyFont text-black/60 text-lg leading-[190%]`}>
                Lorem ipsum dolor sit amet consectetur. Ultrices morbi vivamus
                nam pellentesque quis nulla dolor risus. Blandit egestas neque
                volutpat pharetra hac varius mi nisi feugiat. Pellentesque orci
                urna sagittis nulla. Fermentum tortor nunc at quis. Sociis
                ultricies ullamcorper dignissim sit volutpat turpis arcu. Tellus
                amet enim commodo quis. Et posuere elementum pellentesque nibh.
              </p>
              <p className={`bodyFont text-black/60 text-lg leading-[190%]`}>
                Quam natoque nisi laoreet ultrices ullamcorper posuere integer.
                Nibh ante pharetra urna nec elementum diam. Scelerisque facilisi
                lectus at scelerisque orci nullam scelerisque. Suspendisse
                sagittis habitant eu egestas faucibus pretium sit consequat in.
                Convallis malesuada eu integer senectus vitae.
              </p>
              <p className={`bodyFont text-black/60 text-lg leading-[190%]`}>
                Ac convallis cras leo morbi nibh sagittis massa venenatis sem.
                Orci arcu dapibus scelerisque commodo mattis elementum morbi
                amet aliquam. Condimentum orci facilisis sed laoreet turpis
                penatibus lacus ornare nulla. Sit magna est fringilla ut aliquet
                justo. Ornare enim consectetur vel nunc diam tellus semper
                sagittis. Sit aliquam massa erat nisl gravida venenatis id arcu.
              </p>
              <p className={`bodyFont text-black/60 text-lg leading-[190%]`}>
                Blandit egestas neque volutpat pharetra hac varius mi nisi
                feugiat. Pellentesque orci urna sagittis nulla. Fermentum tortor
                nunc at quis. Sociis ultricies ullamcorper dignissim sit
                volutpat turpis arcu. Tellus amet enim commodo quis. Et posuere
                elementum pellentesque nibh.
              </p>
            </div>
          </div>
        </section>
        <section
          className="flex p-4 md:p-20 w-full gap-10"
          id="real-estate-glossary"
        >
          <div className="hidden w-2/12 md:flex flex-col gap-4"></div>
          <div className="md:w-10/12 flex flex-col gap-5 ">
            <h1 className={`headerFont text-3xl md:text-5xl`}>
              Real Estate Glossary
            </h1>
            <div className="flex flex-col gap-4">
              <p className={`bodyFont text-black/60 text-lg leading-[190%]`}>
                Lorem ipsum dolor sit amet consectetur. Ultrices morbi vivamus
                nam pellentesque quis nulla dolor risus. Blandit egestas neque
                volutpat pharetra hac varius mi nisi feugiat. Pellentesque orci
                urna sagittis nulla. Fermentum tortor nunc at quis. Sociis
                ultricies ullamcorper dignissim sit volutpat turpis arcu. Tellus
                amet enim commodo quis. Et posuere elementum pellentesque nibh.
              </p>
              <p className={`bodyFont text-black/60 text-lg leading-[190%]`}>
                Quam natoque nisi laoreet ultrices ullamcorper posuere integer.
                Nibh ante pharetra urna nec elementum diam. Scelerisque facilisi
                lectus at scelerisque orci nullam scelerisque. Suspendisse
                sagittis habitant eu egestas faucibus pretium sit consequat in.
                Convallis malesuada eu integer senectus vitae.
              </p>
              <p className={`bodyFont text-black/60 text-lg leading-[190%]`}>
                Ac convallis cras leo morbi nibh sagittis massa venenatis sem.
                Orci arcu dapibus scelerisque commodo mattis elementum morbi
                amet aliquam. Condimentum orci facilisis sed laoreet turpis
                penatibus lacus ornare nulla. Sit magna est fringilla ut aliquet
                justo. Ornare enim consectetur vel nunc diam tellus semper
                sagittis. Sit aliquam massa erat nisl gravida venenatis id arcu.
              </p>
              <p className={`bodyFont text-black/60 text-lg leading-[190%]`}>
                Blandit egestas neque volutpat pharetra hac varius mi nisi
                feugiat. Pellentesque orci urna sagittis nulla. Fermentum tortor
                nunc at quis. Sociis ultricies ullamcorper dignissim sit
                volutpat turpis arcu. Tellus amet enim commodo quis. Et posuere
                elementum pellentesque nibh.
              </p>
            </div>
          </div>
        </section>
        <section
          className="flex p-4 md:p-20 w-full gap-10 bg-[#f8f8f8]"
          id="cookie-policy"
        >
          <div className="hidden w-2/12 md:flex flex-col gap-4"></div>
          <div className="md:w-10/12 flex flex-col gap-5 ">
            <h1 className={`headerFont text-3xl md:text-5xl`}>Cookie Policy</h1>
            <div className="flex flex-col gap-4">
              <p
                className={`bodyFont text-black/60 text-[18px] leading-[190%]`}
              >
                Lorem ipsum dolor sit amet consectetur. Ultrices morbi vivamus
                nam pellentesque quis nulla dolor risus. Blandit egestas neque
                volutpat pharetra hac varius mi nisi feugiat. Pellentesque orci
                urna sagittis nulla. Fermentum tortor nunc at quis. Sociis
                ultricies ullamcorper dignissim sit volutpat turpis arcu. Tellus
                amet enim commodo quis. Et posuere elementum pellentesque nibh.
              </p>
              <p className={`bodyFont text-black/60 text-lg leading-[190%]`}>
                Quam natoque nisi laoreet ultrices ullamcorper posuere integer.
                Nibh ante pharetra urna nec elementum diam. Scelerisque facilisi
                lectus at scelerisque orci nullam scelerisque. Suspendisse
                sagittis habitant eu egestas faucibus pretium sit consequat in.
                Convallis malesuada eu integer senectus vitae.
              </p>
              <p className={`bodyFont text-black/60 text-lg leading-[190%]`}>
                Ac convallis cras leo morbi nibh sagittis massa venenatis sem.
                Orci arcu dapibus scelerisque commodo mattis elementum morbi
                amet aliquam. Condimentum orci facilisis sed laoreet turpis
                penatibus lacus ornare nulla. Sit magna est fringilla ut aliquet
                justo. Ornare enim consectetur vel nunc diam tellus semper
                sagittis. Sit aliquam massa erat nisl gravida venenatis id arcu.
              </p>
              <p className={`bodyFont text-black/60 text-lg leading-[190%]`}>
                Blandit egestas neque volutpat pharetra hac varius mi nisi
                feugiat. Pellentesque orci urna sagittis nulla. Fermentum tortor
                nunc at quis. Sociis ultricies ullamcorper dignissim sit
                volutpat turpis arcu. Tellus amet enim commodo quis. Et posuere
                elementum pellentesque nibh.
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
