"use client";

import CheckIcon from "@mui/icons-material/Check";
import ApartmentCard from "@/components/ApartmentCard/ApartmentCard";
import Button from "@/components/Button/Button";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Image from "@/components/Image/Image";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ProjectMap from "@/components/ProjectMap/ProjectMap";

import { useEffect, useState } from "react";
import { useAnimation, motion } from "framer-motion";
import FacilitiesCard from "@/components/FacilitiesCard/FacilitiesCard";
import ClickableImage from "@/components/ClickableImage/ClickableImage";
import Modal from "@/components/Modal/Modal";
import Link from "next/link";
import HeroSection from "./sections/HeroSection";
import WhyPerfectSection from "./sections/WhyPerfectSection";
import SiteImagesSection from "./sections/SiteImagesSection";
import FacilitiesSection from "./sections/FacilitiesSection";
import FacilitiesAccordionSection from "./sections/FacilitiesAccordionSection";
import ApartmentsSection from "./sections/ApartmentsSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import CTASection from "./sections/CTASection";

export default function Page() {
  const [card, setCard] = useState(false);
  const [showTour, setShowTour] = useState(false);
  const [showPlan, setShowPlan] = useState(false);
  const [showThesis, setShowThesis] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const controls = useAnimation();
  const siteImages = [
    "/assets/gazania-park-site1.png",
    "/assets/gazania-park-site2.png",
    "/assets/gazania-park-site3.png",
    "/assets/gazania-park-site4.png",
    "/assets/gazania-park-site5.png",
    "/assets/gazania-park-site6.png",
    "/assets/gazania-park-site7.png",
    "/assets/gazania-park-site8.png",
    "/assets/gazania-park-site9.png",
  ];
  const siteBigImages = [
    "/assets/gazania-park-site1.png",
    "/assets/gazania-park-site2.png",
    "/assets/gazania-park-site3.png",
    "/assets/gazania-park-site4.png",
    "/assets/gazania-park-site5.png",
    "/assets/gazania-park-site6.png",
    "/assets/gazania-park-site7.png",
    "/assets/gazania-park-site8.png",
    "/assets/gazania-park-site9.png",
  ];

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
    <div className={`flex flex-col bg-white`}>
      <HeroSection />
      <WhyPerfectSection />
      <SiteImagesSection />
      <FacilitiesSection />
      <FacilitiesAccordionSection />
      <ApartmentsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer noSubscriptionForm />
      <Modal
        isVisible={showThesis}
        onClose={() => {
          setShowThesis(!showThesis);
          console.log(showThesis);
        }}
      >
        <div className="w-[80vw] bg-white flex flex-col gap-4 p-5">
          <button
            onClick={() => {
              setShowThesis(false);
            }}
            className="bg-red-200 p-2 w-fit self-end"
          >
            <Image src={"/assets/close.svg"} alt={"close"} />
          </button>
          <span className="h-[2px] bg-[#D1A55C] w-full"></span>
          <div className="flex flex-col">
            <p className={`headerFont font-bold`}>Investment Thesis</p>
            <p className={`text-[#6D6E71] bodyFont`}>
              Gazania Park inside Periwinkle Estate in the vibrant locale of
              Lekki Phase 1, presents an alluring opportunity for property
              investment. The estate encompasses a diverse range of housing
              units, including 1-bedroom apartments, 2 & 3-bedroom apartments
              with BQ, and 3 & 4-bedroom maisonettes with BQ, catering to a wide
              spectrum of homeowner preferences and investment strategies
            </p>
          </div>
          <span className="h-[2px] bg-[#D1A55C] w-full"></span>
          <div className="flex flex-col">
            <p className={`headerFont font-bold`}>Market Analysis</p>
            <p className={`text-[#6D6E71] bodyFont`}>
              Lekki Phase 1 stands as one of Lagos&apos;s most coveted and
              rapidly appreciating real estate hubs, characterized by its
              strategic location, infrastructural development, and growing
              demand for residential spaces. The area&apos;s proximity to
              commercial centers, schools, recreational facilities, and
              essential amenities further enhances its appeal to prospective
              homeowners and tenants.
            </p>
          </div>
          <span className="h-[2px] bg-[#D1A55C] w-full"></span>
          <div className="flex flex-col">
            <p className={`headerFont font-bold`}>Property Overview</p>
            <div className={`flex flex-col gap-2 text-[#6D6E71] bodyFont`}>
              <p>
                The Periwinkle Estate offers a diverse portfolio of residential
                units, strategically designed to cater to different demographics
                and housing needs. This includes:
              </p>
              <div className="flex gap-2 items-start">
                <span className="p-1 h-fit rounded-full bg-[#D1A55C26] flex items-center justify-center w-fit">
                  <CheckIcon className="text-[#D1A55C]" fontSize="10px" />
                </span>
                <p>
                  1-bedroom apartments: Ideal for young professionals, singles,
                  or couples seeking compact yet modern living spaces.
                </p>
              </div>
              <div className="flex gap-2 items-start">
                <span className="p-1 h-fit rounded-full bg-[#D1A55C26] flex items-center justify-center w-fit">
                  <CheckIcon className="text-[#D1A55C]" fontSize="10px" />
                </span>
                <p>
                  2 & 3-bedroom apartments with BQ: Attractive to small families
                  or individuals desiring additional space and functionality.
                </p>
              </div>
              <div className="flex gap-2 items-start">
                <span className="p-1 h-fit rounded-full bg-[#D1A55C26] flex items-center justify-center w-fit">
                  <CheckIcon className="text-[#D1A55C]" fontSize="10px" />
                </span>
                <p>
                  3 & 4-bedroom maisonettes with BQ: Tailored for larger
                  families, offering ample living areas and enhanced privacy.
                </p>
              </div>
            </div>
          </div>
          <span className="h-[2px] bg-[#D1A55C] w-full"></span>
          <div className="flex flex-col">
            <p className={`headerFont font-bold`}>Investment Proposition</p>
            <div className={`flex flex-col gap-2 text-[#6D6E71] bodyFont`}>
              <p>
                Gazaniz Park, Periwinkle Estate in Lekki Phase 1 represents an
                enticing investment opportunity due to its strategic location,
                diverse property portfolio, and alignment with the growing
                demand for quality residential spaces in a thriving urban
                environment. The combination of rental yield potential,
                long-term appreciation, and market demand positions this
                investment as a prudent choice for investors seeking exposure to
                the burgeoning real estate market in Lagos
              </p>
              <div className="flex gap-2 items-start bodyFont">
                <span className="p-1 h-fit rounded-full bg-[#D1A55C26] flex items-center justify-center w-fit">
                  <CheckIcon className="text-[#D1A55C]" fontSize="10px" />
                </span>
                <p>
                  Diverse Market Appeal: With a range of property types, the
                  estate caters to various demographics, expanding the
                  investor&apos;s potential tenant or buyer pool.
                </p>
              </div>
              <div className="flex gap-2 items-start bodyFont">
                <span className="p-1 h-fit rounded-full bg-[#D1A55C26] flex items-center justify-center w-fit">
                  <CheckIcon className="text-[#D1A55C]" fontSize="10px" />
                </span>
                <p>
                  Lekki Phase 1 Growth: The estate&apos;s location in a
                  high-demand area ensures sustained property value appreciation
                  and rental yield potential.
                </p>
              </div>
              <div className="flex gap-2 items-start bodyFont">
                <span className="p-1 h-fit rounded-full bg-[#D1A55C26] flex items-center justify-center w-fit">
                  <CheckIcon className="text-[#D1A55C]" fontSize="10px" />
                </span>
                <p>
                  Quality and Amenities: Emphasis on quality construction,
                  modern amenities, and thoughtful design fosters tenant
                  satisfaction and property value retention.
                </p>
              </div>
              <div className="flex gap-2 items-start">
                <span className="p-1 h-fit rounded-full bg-[#D1A55C26] flex items-center justify-center w-fit">
                  <CheckIcon className="text-[#D1A55C]" fontSize="10px" />
                </span>
                <p>
                  Rental Yield Potential: The blend of property types allows for
                  flexible rental income streams, catering to different market
                  segments.
                </p>
              </div>
              <div className="flex gap-2 items-start bodyFont">
                <span className="p-1 h-fit rounded-full bg-[#D1A55C26] flex items-center justify-center w-fit">
                  <CheckIcon className="text-[#D1A55C]" fontSize="10px" />
                </span>
                <p>
                  Long-Term Capital Appreciation: Lekki Phase 1&apos;s
                  reputation for continuous development and appreciation makes
                  this an attractive long-term investment proposition.
                </p>
              </div>
            </div>
          </div>
          <span className="h-[2px] bg-[#D1A55C] w-full"></span>
          <div className="flex flex-col bodyFont">
            <p className={`headerFont font-bold`}>Capital Appreciation</p>
            <p className={`text-[#6D6E71]`}>
              With the high demand for rental properties in this area, this
              investment can generate a steady rental income stream. The diverse
              apartment options cater to different income brackets, allowing for
              flexibility in rental pricing and attracting a broader tenant
              base.
            </p>
          </div>
          <span className="h-[2px] bg-[#D1A55C] w-full"></span>
        </div>
      </Modal>
      <Modal
        isVisible={showTour}
        onClose={() => {
          setShowTour(!showTour);
        }}
      >
        <div className="w-[350px] bg-white flex flex-col gap-4 p-5">
          <button
            onClick={() => {
              setShowTour(false);
            }}
            className="bg-red-200 p-2 w-fit self-end"
          >
            <Image src={"/assets/close.svg"} alt={"close"} />
          </button>

          <span className="w-full h-[1px] bg-[#D1A55C]"></span>
          <Link
            href={"https://forms.gle/zoM8ccE1jcys31Q49"}
            className={"bg-[#111] text-white p-4 text-center"}
          >
            Book a physical tour
          </Link>
          <Link
            href={""}
            className={"border-[#111] border-[2px] p-4 text-center"}
          >
            Book a virtual tour
          </Link>
        </div>
      </Modal>
      <Modal
        isVisible={showPlan}
        onClose={() => {
          setShowPlan(!showPlan);
        }}
      >
        <Image alt={"plan"} src={"/assets/GAZANIA_PARK_PAYMENT_PLAN.jpg"} />
      </Modal>
    </div>
  );
}
