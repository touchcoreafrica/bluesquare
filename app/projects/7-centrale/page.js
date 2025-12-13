"use client";

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
import Modal from "@/components/Modal/Modal";
import ClickableImage from "@/components/ClickableImage/ClickableImage";
import Link from "next/link";

export default function Page() {
  const [card, setCard] = useState(false);
  const [showTour, setShowTour] = useState(false);
  const [showThesis, setShowThesis] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showPlan, setShowPlan] = useState(false);
  const controls = useAnimation();
  const siteImages = [
    "/assets/7-centrale-site1.png",
    "/assets/7-centrale-site2.png",
    "/assets/7-centrale-site3.png",
    "/assets/7-centrale-site4.png",
    "/assets/7-centrale-site5.png",
    "/assets/7-centrale-site6.png",
    "/assets/7-centrale-site7.png",
    "/assets/7-centrale-site8.png",
    "/assets/7-centrale-site9.png",
  ];

  const siteBigImages = [
    "/assets/7-centrale-site-big1.png",
    "/assets/7-centrale-site-big2.png",
    "/assets/7-centrale-site-big3.png",
    "/assets/7-centrale-site-big4.png",
    "/assets/7-centrale-site-big5.png",
    "/assets/7-centrale-site-big6.png",
    "/assets/7-centrale-site-big7.png",
    "/assets/7-centrale-site-big8.png",
    "/assets/7-centrale-site-big9.png",
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
      <section className="h-[85vh] w-full bg-cover bg-[url('/assets/7-centrale-banner.png')] flex items-center justify-center">
        {/* <motion.div
          className="banner-overlay"
          initial={{ background: "rgba(0, 0, 0, 0)" }}
          animate={controls}
        ></motion.div> */}
        <div className="flex flex-col">
          <h1
            className={`headerFont text-center text-5xl md:text-[100px] text-[#DAB797]`}
          >
            7 CENTRALE <br /> RESIDENCES
          </h1>
          <h1
            className={`headerFont text-2xl md:text-4xl text-center text-[#DAB797]`}
          >
            Crafting Timeless Elegance in Lekki Phase 1
          </h1>
        </div>
      </section>
      <section className=" flex sticky top-40 pr-20 md:mb-[-100px] w-fit self-end">
        {/* <div className="w-[70%]"></div> */}
        <div className="shadow-2xl hidden sticky top-10 p-4 md:flex flex-col gap-2 bg-white my-[-100px]  w-[27vw]">
          <Link
            href={"https://forms.gle/zoM8ccE1jcys31Q49"}
            target="_blank"
            rel="noreferrer"
          >
            <Button
              onClick={() => {
                setShowTour(true);
              }}
              className={`font-bold bodyFont w-full bg-[#26282B] p-4 text-white`}
            >
              Book a tour
            </Button>
          </Link>
          <Link
            // className="hidden"
            href={
              "https://docs.google.com/forms/d/e/1FAIpQLSfXo-jj4z8rznqHyPoklATpu22m9-AYo8NaX5_vC1fwbSeP6A/viewform"
            }
            target="_blank"
            rel="noreferrer"
          >
            <Button
              // onClick={() => {
              //   setShowTour(true);
              // }}
              className={`font-bold bodyFont w-full bg-[#0A52BF] p-4 text-white`}
            >
              Register interest
            </Button>
          </Link>
          <Link
            target="_blank"
            href={
              "https://drive.google.com/uc?export=download&id=1im8E_h9cZTMFWTtKNqJVi_f9z6C21xha"
            }
            className={`font-bold bodyFont text-center w-full border-[2px] border-[#26282B] p-4 text-black/90`}
          >
            Download brochure
          </Link>
          <div className="flex flex-col">
            <div className={`hidden gap-2 p-2`}>
              <div className="p-2 flex items-center justify-center bg-[#D1A55C1A]">
                <Image
                  alt={""}
                  src={"/assets/time.svg"}
                  className={"h-8 w-8"}
                />
              </div>
              <div className="hidden flex-col">
                <p className={`font-bold bodyFont`}>Timeline</p>
                <p className={`text-sm text-[#6D6E71]`}>Q3 2024</p>
              </div>
            </div>
          </div>

          <div className={`flex gap-2 p-2`}>
            <div className="p-2 flex items-center justify-center bg-[#D1A55C1A]">
              <Image
                alt={""}
                src={"/assets/status.svg"}
                className={"h-8 w-8"}
              />
            </div>
            <div className="flex flex-col">
              <p className={`font-bold bodyFont`}>Status</p>
              <p className={`text-sm text-[#6D6E71]`}>Ongoing</p>
            </div>
          </div>
          <div className={`flex gap-2 p-2`}>
            <div className="p-2 flex items-center justify-center bg-[#D1A55C1A]">
              <Image
                alt={""}
                src={"/assets/apartments.svg"}
                className={"h-8 w-8"}
              />
            </div>
            <div className="flex flex-col">
              <p className={`font-bold bodyFont`}>Apartments</p>
              <p className={`text-sm text-[#6D6E71]`}>
                Luxury 1, 2 and 3 bedroom apartments
              </p>
            </div>
          </div>
          {/*  <div className={`flex gap-2 p-2`}>
            <div className="p-2 flex items-center justify-center bg-[#D1A55C1A]">
              <Image
                alt={""}
                src={"/assets/payment-schedule.svg"}
                className={"h-8 w-8"}
              />
            </div>
            <div className="flex flex-col">
              <p className={`font-bold bodyFont`}>Payment Schedule</p>
              <p className={`text-sm`}>Fully Sold Out</p>
            </div>
          </div> */}
          <div className={`flex gap-2 p-2 text-black`}>
            <div className="p-2 flex items-center justify-center bg-[#D1A55C1A]">
              <Image
                alt={""}
                src={"/assets/payment-schedule.svg"}
                className={"h-8 w-8"}
              />
            </div>
            <div className="flex flex-col">
              <p className={`font-bold bodyFont`}>Payment Schedule</p>
              <p className={`text-sm`}>
                Now selling{" "}
                <Button
                  onClick={() => {
                    setShowPlan(true);
                  }}
                >
                  <u className="text-blue-500">view payment schedule</u>
                </Button>
              </p>
            </div>
          </div>
          <div className={`flex gap-2 p-2`}>
            <div className="p-2 flex items-center justify-center bg-[#D1A55C1A]">
              <Image
                alt={""}
                src={"/assets/investment.svg"}
                className={"h-8 w-8"}
              />
            </div>
            <div className="flex flex-col">
              <p className={`font-bold bodyFont`}>Investment Thesis</p>
              <button
                onClick={() => {
                  setShowThesis(true);
                }}
                className={`w-fit text-sm text-blue-600 underline`}
              >
                view thesis
              </button>
            </div>
          </div>
          {/* <div className="flex gap-2 self-center items-end">
            <Image src={"/assets/sold-out.svg"} alt={"sold out"} />
            <p className="text-red-500 font-black">Sold Out</p>
          </div> */}
        </div>
      </section>
      <section className="flex items-center md:px-20 p-4 overflow-visible py-5 gap-4">
        <div className="flex flex-col gap-5 md:w-[70%]">
          <div className="flex flex-col">
            <p className={`text-[#6D6E71] bodyFont`}>Lekki Phase One</p>
            <p className={`headerFont text-3xl text-[#CAA969]`}>
              7 Centrale Residences
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className={`bodyFont text-[#6D6E71] leading-[190%]`}>
              Welcome to 7 Centrale Residences, an exquisite collection of
              ultra-luxury apartments nestled in the prestigious Lekki Phase 1
              neighborhood of Durosinmi Etti. These residences redefine opulence
              and offer a truly unparalleled living experience in the heart of
              Lagos, Nigeria.
            </p>
            <p className={`bodyFont text-[#6D6E71] leading-[190%]`}>
              7 Centrale Residences epitomize sophistication and contemporary
              design, showcasing the perfect fusion of elegance and
              functionality. Each apartment has been meticulously crafted with
              the finest materials and finishes, elevating the concept of modern
              living to new heights. From the moment you step into the
              residences, you will be enveloped in an atmosphere of grandeur and
              refinement.
            </p>
          </div>
        </div>
        <div className="  w-[30%]"></div>
      </section>
      <section className={`p-4 md:p-20 flex flex-col gap-10 bg-[#f8f8f8]`}>
        <p className={`headerFont text-3xl md:text-5xl`}>
          Elevation & Site Images
        </p>
        <div className="flex gap-4">
          <div className="grid grid-cols-3 md:w-[70%] gap-4">
            {siteImages.map((image, index) => {
              return (
                <ClickableImage
                  key={index}
                  siteImages={siteBigImages}
                  index={index}
                  className={`w-full`}
                  alt={"images"}
                  image={image}
                />
              );
            })}
          </div>
          <div className="hidden md:block w-[30%]"></div>
        </div>
      </section>
      <section className={`p-4 md:p-20 gap-4 flex headerFont`}>
        <div className="md:w-[70%] flex flex-col gap-5">
          <p className="text-3xl md:text-5xl ">Facilities</p>
          <div className="grid grid-cols-3 md:grid-cols-4  gap-5">
            <div className="flex flex-col items-center">
              <Image
                alt={"fitness center"}
                src={"/assets/gym.svg"}
                className={" h-8 w-8 md:h-12 md:w-12"}
              />
              <p className="text-sm md:text-xl">Fitness Center</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                alt={"Security"}
                src={"/assets/cctv.svg"}
                className={"h-8 w-8 md:h-12 md:w-12"}
              />
              <p className="text-sm md:text-xl">Security</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                alt={"Swimming-pool"}
                src={"/assets/swimming-pool.svg"}
                className={"h-8 w-8 md:h-12 md:w-12"}
              />
              <p className=" text-xs md:text-xl">Swimming pool</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                alt={"restaurant"}
                src={"/assets/restaurant.svg"}
                className={"h-8 w-8 md:h-12 md:w-12"}
              />
              <p className="text-sm md:text-xl">Kitchen</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                alt={"lounge"}
                src={"/assets/lounge.svg"}
                className={"h-8 w-8 md:h-12 md:w-12"}
              />
              <p className="text-sm md:text-xl">Lounge</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                alt={"elevator"}
                src={"/assets/lift.svg"}
                className={"h-8 w-8 md:h-12 md:w-12"}
              />
              <p className="text-sm md:text-xl">Elevator</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                alt={"reception"}
                src={"/assets/reception.svg"}
                className={"h-8 w-8 md:h-12 md:w-12"}
              />
              <p className="text-sm md:text-xl">Reception</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                alt={"parking"}
                src={"/assets/parking.svg"}
                className={"h-8 w-8 md:h-12 md:w-12"}
              />
              <p className="text-sm md:text-xl">Parking</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                alt={"transformer"}
                src={"/assets/transformer.svg"}
                className={"h-8 w-8 md:h-12 md:w-12"}
              />
              <p className="text-sm md:text-xl">Transformer</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                alt={"spacial property"}
                src={"/assets/house.svg"}
                className={"h-8 w-8 md:h-12 md:w-12"}
              />
              <p className="text-sm md:text-xl">Spacious Property</p>
            </div>
          </div>
        </div>
        <div className="hidden md:block w-[30%]"></div>
      </section>
      <section className={` p-4 md:p-20 gap-4 flex headerFont`}>
        <div className={`md:w-[70%] flex flex-col gap-2`}>
          <FacilitiesCard
            title={"Shared Facilities"}
            facilities={[
              "Interior designed entrance lobby",
              "12-hour daytime concierge",
              "24-hours CCTV and security",
              "Over 100 car parking bays",
              "Caribbean themed pool bar",
              "Large outdoor sun heated swimming pool",
            ]}
          />
          <FacilitiesCard
            title={"Electrical and Mechanical"}
            facilities={[
              "High capacity water treatment plants",
              "Smoke detectors",
              "LED down- lighters throughout",
              "Wall plates for power and light switches",
              "Fire heat detector",
            ]}
          />
          <FacilitiesCard
            title={"General"}
            facilities={[
              "Square edge skirting and architraves",
              "3 Panoramic lifts",
              "Fire control systems",
              "Private balcony for each apartment",
              "Walls painted with premium emulsion / white satin paint",
              "Beautiful façade with contemporary architecture",
            ]}
          />
          <FacilitiesCard
            title={"Kitchen"}
            facilities={[
              "Composite worktop",
              "Feature led lighting to wall units",
              "Stainless steel kitchen sink",
              "Integrated extractor",
              "Handless kitchen units with soft close doors",
              "Premium brand appliances – Microwave – Oven – Table- top hob",
            ]}
          />
          <FacilitiesCard
            title={"Bathrooms and Ensuites"}
            facilities={[
              "Vitrified premium matt tiles",
              "Tiled bathrooms and shower rooms",
              "Glazed wall tiles",
              "Composite countertop to bathrooms/toilet",
            ]}
          />
          <FacilitiesCard
            title={"Bedroom"}
            facilities={[
              "Full height fitted wardrobes to master bedroom and normal sized rooms",
              "Private balcony with glass balustrades.",
            ]}
          />
        </div>
        <div className={`md:w-[30%]`}></div>
      </section>
      <section className="flex gap-4 md:min-h-screen bg-[#f8f8f8] md:p-20 overflow-scroll">
        <div className="md:w-[70%] flex flex-col">
          <p className={`headerFont p-4 text-3xl md:text-5xl`}>Apartments</p>
          <div className="md:grid grid-cols-2 gap-4 flex overflow-scroll w-full">
            <ApartmentCard
              site={"7 Centrale Park"}
              name={"One bedroom apartment"}
              detail={
                "Our luxury 1-bedroom apartments offer a sophisticated and intimate living space ideal for individuals or couples seeking exclusivity and comfort. Each unit boasts a meticulously designed layout, featuring a spacious bedroom, a modern bathroom, and an open-plan living area. The interiors are adorned with high end finishes, premium fixtures, and elegant touches that create an ambiance of refined living. Residents can enjoy a fully equipped kitchen with top of the line appliances, ample storage space, and stunning views of the surrounding area from select units. With meticulous attention to detail and a focus on comfort, these 1-bedroom apartments offer a serene retreat within the vibrant Lekki Phase 1 neighborhood."
              }
              images={[
                "/assets/7CentraleOneBedroom1.png",
                "/assets/7CentraleOneBedroom2.png",
                "/assets/7CentraleOneBedroom3.png",
                "/assets/7CentraleOneBedroom4.png",
                "/assets/7CentraleOneBedroom5.png",
              ]}
              squareFoot={81}
              bedroom={1}
              bath={1}
              guest={0}
            />
            <ApartmentCard
              site={"7 Centrale Park"}
              name={"Two bedroom apartment"}
              detail={
                "Our upscale 2-bedroom apartments redefine luxury living with their generous space and contemporary design. These residences are perfect for small families or individuals seeking extra room for guests or a home office. Each apartment features two well-appointed bedrooms with en-suite bathrooms, a spacious living room, a modern kitchen outfitted with high-quality appliances, and a designated dining area. The interiors are characterized by sleek finishes, premium flooring, and large windows that flood the space with natural light, creating an inviting atmosphere. Additionally, residents can take advantage of amenities such as a fitness center, swimming pool, and dedicated parking, offering both comfort and convenience in this prime location."
              }
              images={[
                "/assets/7CentraleTwoBedroom1.png",
                "/assets/7CentraleTwoBedroom2.png",
                "/assets/7CentraleTwoBedroom3.png",
                "/assets/7CentraleTwoBedroom4.png",
                "/assets/7CentraleTwoBedroom5.png",
                "/assets/7CentraleTwoBedroom6.png",
                "/assets/7CentraleTwoBedroom7.png",
                "/assets/7CentraleTwoBedroom8.png",
                "/assets/7CentraleTwoBedroom9.png",
              ]}
              squareFoot={122}
              bedroom={2}
              bath={2}
              guest={0}
            />
            <ApartmentCard
              site={"7 Centrale Park"}
              name={"Three bedroom apartment"}
              detail={
                "Our lavish 3-bedroom apartments epitomize luxury living, combining space, style, and functionality to accommodate families or those desiring extra room for various purposes. These apartments feature three generously sized bedrooms, each with its own private bathroom, providing ample privacy and comfort for residents. The expansive living areas are designed to maximize comfort and elegance, boasting a modern kitchen equipped with high end appliances, a spacious dining area, and a well-appointed living room perfect for relaxation and entertainment. Residents can relish the breathtaking views from balconies, enjoy the convenience of in-unit laundry facilities, and access a range of on site amenities including a clubhouse, landscaped gardens, and 24/7 security, ensuring a truly luxurious living experience in the heart of Lekki Phase 1."
              }
              images={[
                "/assets/7CentraleThreeBedroom1.png",
                "/assets/7CentraleThreeBedroom2.png",
                "/assets/7CentraleThreeBedroom3.png",
                "/assets/7CentraleThreeBedroom4.png",
                "/assets/7CentraleThreeBedroom5.png",
                "/assets/7CentraleThreeBedroom6.png",
                "/assets/7CentraleThreeBedroom7.png",
                "/assets/7CentraleThreeBedroom8.png",
                "/assets/7CentraleThreeBedroom9.png",
              ]}
              squareFoot={217}
              bedroom={3}
              bath={3}
              guest={0}
            />
            {/*
            <ApartmentCard
              site={"7 Centrale Park"}
              name={"Two bedroom apartment"}
              detail={
                "Sit ultrices enim massa facilisi cras in. Dictum adipiscing risus eget egestas donec varius"
              }
              images={[
                "/assets/7CentraleTwoBedroom1.svg",
                "/assets/7CentraleTwoBedroom2.svg",
                "/assets/7CentraleTwoBedroom3.svg",
                "/assets/7CentraleTwoBedroom4.svg",
                "/assets/7CentraleTwoBedroom5.svg",
                "/assets/7CentraleTwoBedroom6.svg",
                "/assets/7CentraleTwoBedroom7.svg",
                "/assets/7CentraleTwoBedroom8.svg",
                "/assets/7CentraleTwoBedroom9.svg",
              ]}
              squareFoot={122}
              bedroom={2}
              bath={2}
              guest={0}
            />
            <ApartmentCard
              site={"7 Centrale Park"}
              name={"Three bedroom apartment"}
              detail={
                "Sit ultrices enim massa facilisi cras in. Dictum adipiscing risus eget egestas donec varius"
              }
              images={[
                "/assets/7CentraleThreeBedroom1.svg",
                "/assets/7CentraleThreeBedroom2.svg",
                "/assets/7CentraleThreeBedroom3.svg",
                "/assets/7CentraleThreeBedroom4.svg",
                "/assets/7CentraleThreeBedroom5.svg",
                "/assets/7CentraleThreeBedroom6.svg",
                "/assets/7CentraleThreeBedroom7.svg",
                "/assets/7CentraleThreeBedroom8.svg",
                "/assets/7CentraleThreeBedroom9.svg",
              ]}
              squareFoot={236.3}
              bedroom={3}
              bath={3}
              guest={1}
            />
              
                       <ApartmentCard
              site={"7 Centrale Park"}
              name={"Four bedroom apartment"}
              detail={
                "Sit ultrices enim massa facilisi cras in. Dictum adipiscing risus eget egestas donec varius"
              }
              images={[
                "/assets/7CentraleFourBedroom1.png",
                "/assets/7CentraleFourBedroom2.png",
                "/assets/7CentraleFourBedroom3.png",
                "/assets/7CentraleFourBedroom4.png",
                "/assets/7CentraleFourBedroom5.png",
                "/assets/7CentraleFourBedroom6.png",
                "/assets/7CentraleFourBedroom7.png",
                "/assets/7CentraleFourBedroom8.png",
                "/assets/7CentraleFourBedroom9.png",
                "/assets/7CentraleFourBedroom10.png",
              ]}
              squareFoot={360}
              bedroom={4}
              bath={4}
              guest={1}
            /> */}
          </div>
        </div>
        <div className="hidden md:block w-[30%]"></div>
      </section>
      <ProjectMap />
      <div
        style={{ position: "sticky", bottom: 0 }}
        className=" h-fit  p-4 md:hidden flex flex-col gap-2 bg-white"
      >
        <div className={`flex justify-between`}>
          {!card ? (
            <Button
              onClick={() => {
                setCard(true);
              }}
            >
              <MenuIcon />
            </Button>
          ) : (
            <Button
              onClick={() => {
                setCard(false);
              }}
            >
              <CloseIcon />
            </Button>
          )}

          <p className={`headerFont text-2xl text-[#CAA969]`}>
            7 Centrale Residences
          </p>
        </div>
        <div className={`flex flex-col gap-2`}>
          <Link
            href={"https://forms.gle/zoM8ccE1jcys31Q49"}
            target="_blank"
            rel="noreferrer"
          >
            <Button
              onClick={() => {
                setShowTour(true);
              }}
              className={`font-bold bodyFont w-full bg-[#26282B] p-4 text-white text-sm md:text-base`}
            >
              Book a tour
            </Button>
          </Link>
          <Link
            // className="hidden"
            href={
              "https://docs.google.com/forms/d/e/1FAIpQLSfXo-jj4z8rznqHyPoklATpu22m9-AYo8NaX5_vC1fwbSeP6A/viewform"
            }
            target="_blank"
            rel="noreferrer"
          >
            <Button
              // onClick={() => {
              //   setShowTour(true);
              // }}
              className={`font-bold bodyFont w-full bg-[#0A52BF] p-4 text-white`}
            >
              Register interest
            </Button>
          </Link>
          <Link
            target="_blank"
            href={
              "https://drive.google.com/uc?export=download&id=1im8E_h9cZTMFWTtKNqJVi_f9z6C21xha"
            }
            className={`font-bold p-4 text-center bodyFont w-full border-[2px] border-[#26282B] md:p-4 text-black/90 text-sm`}
          >
            Download brochure
          </Link>
        </div>
        <div className={`md:flex flex-col ${!card ? "hidden" : ""}`}>
          <div className={`hidden gap-2 p-2`}>
            <div className="p-2 flex items-center justify-center bg-[#D1A55C1A]">
              <Image alt={""} src={"/assets/time.svg"} className={"h-8 w-8"} />
            </div>
            <div className="hidden flex-col">
              <p className={`font-bold bodyFont`}>Timeline</p>
              <p className={`text-sm text-[#6D6E71]`}>Q3 2024</p>
            </div>
          </div>
          <div className={`flex gap-2 p-2`}>
            <div className="p-2 flex items-center justify-center bg-[#D1A55C1A]">
              <Image
                alt={""}
                src={"/assets/status.svg"}
                className={"h-8 w-8"}
              />
            </div>
            <div className="flex flex-col">
              <p className={`font-bold bodyFont`}>Status</p>
              <p className={`text-sm text-[#6D6E71]`}>Ongoing</p>
            </div>
          </div>
          <div className={`flex gap-2 p-2`}>
            <div className="p-2 flex items-center justify-center bg-[#D1A55C1A]">
              <Image
                alt={""}
                src={"/assets/apartments.svg"}
                className={"h-8 w-8"}
              />
            </div>
            <div className="flex flex-col">
              <p className={`font-bold bodyFont`}>Apartments</p>
              <p className={`text-sm text-[#6D6E71]`}>
                Luxury 1, 2 and 3 bedroom apartments
              </p>
            </div>
          </div>

          <div className={`flex gap-2 p-2`}>
            <div className="p-2 flex items-center justify-center bg-[#D1A55C1A]">
              <Image
                alt={""}
                src={"/assets/investment.svg"}
                className={"h-8 w-8"}
              />
            </div>
            <div className="flex flex-col">
              <p className={`font-bold bodyFont`}>Investment Thesis</p>
              <button
                onClick={() => {
                  setShowThesis(true);
                }}
                className={` w-fit text-sm text-blue-600 underline`}
              >
                view thesis
              </button>
            </div>
          </div>
        </div>
        {/* <div
          className={`${card ? "" : "hidden"} flex gap-2 self-center items-end`}
        >
          <Image src={"/assets/sold-out.svg"} alt={"sold out"} />
          <p className="text-red-500 font-black">Sold Out</p>
        </div> */}
      </div>
      <Footer />
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
          <Link href={""} className={"bg-[#111] text-white p-4 text-center"}>
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
            <p className={`headerFont font-bold`}>Market Demand</p>
            <p className={`text-[#6D6E71] bodyFont`}>
              Lekki Phase 1 is an upscale area known for its growing demand for
              high-end residential spaces. The diverse range of apartment sizes
              caters to different segments of the market, appealing to young
              professionals, families, and even investors looking for rental
              income.
            </p>
          </div>
          <span className="h-[2px] bg-[#D1A55C] w-full"></span>
          <div className="flex flex-col">
            <p className={`headerFont font-bold`}>Location Advantage</p>
            <p className={`text-[#6D6E71] bodyFont`}>
              Lekki Phase 1 is an upscale area known for its growing demand for
              high-end residential spaces. The diverse range of apartment sizes
              caters to different segments of the market, appealing to young
              professionals, families, and even investors looking for rental
              income.
            </p>
          </div>
          <span className="h-[2px] bg-[#D1A55C] w-full"></span>
          <div className="flex flex-col">
            <p className={`headerFont font-bold`}>Luxury Amenities</p>
            <p className={`text-[#6D6E71] bodyFont`}>
              With features like modern architecture, high-quality finishes,
              premium appliances, smart home technology, amenities such as a
              swimming pool, gym, landscaped gardens, and 24/7 security
              contributes to the allure and potential value appreciation.
            </p>
          </div>
          <span className="h-[2px] bg-[#D1A55C] w-full"></span>
          <div className="flex flex-col">
            <p className={`headerFont font-bold`}>Rental Income Potential</p>
            <p className={`text-[#6D6E71] bodyFont`}>
              With the high demand for rental properties in this area, this
              investment can generate a steady rental income stream. The diverse
              apartment options cater to different income brackets, allowing for
              flexibility in rental pricing and attracting a broader tenant
              base.
            </p>
          </div>
          <span className="h-[2px] bg-[#D1A55C] w-full"></span>
          <div className="flex flex-col">
            <p className={`headerFont font-bold`}>Capital Appreciation</p>
            <p className={`text-[#6D6E71]bodyFont`}>
              Properties in Lekki Phase 1 historically experience consistent
              capital appreciation due to the high demand and limited available
              land for development. Investing in this location offers the
              potential for long-term value growth.
            </p>
          </div>
          <span className="h-[2px] bg-[#D1A55C] w-full"></span>
          <div className="flex flex-col">
            <p className={`headerFont font-bold`}>Stability and Security</p>
            <p className={`text-[#6D6E71]bodyFont`}>
              The stability of the neighborhood and the security measures in
              place, provides a safe and serene environment for residents, which
              is crucial for attracting tenants and ensuring a high occupancy
              rate.
            </p>
          </div>
          <span className="h-[2px] bg-[#D1A55C] w-full"></span>
          <div className="flex flex-col">
            <p className={`headerFont font-bold`}>
              Sustainability and Green Initiatives
            </p>
            <p className={`text-[#6D6E71] bodyFont`}>
              Incorporating sustainable features such as energy-efficient
              systems, eco-friendly designs, and green spaces further adds value
              to the property, attracting environmentally conscious buyers and
              investors.
            </p>
          </div>
          <span className="h-[2px] bg-[#D1A55C] w-full"></span>
        </div>
      </Modal>
      <Modal
        isVisible={showPlan}
        onClose={() => {
          setShowPlan(!showPlan);
        }}
      >
        <Image alt={"plan"} src={"/assets/7_CENTRALE_PAYMENT_PLAN.jpg"} />
      </Modal>
    </div>
  );
}
