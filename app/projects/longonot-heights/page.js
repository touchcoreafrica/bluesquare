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
import ClickableImage from "@/components/ClickableImage/ClickableImage";

export default function Page() {
  const [card, setCard] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const controls = useAnimation();
  const siteImages = [
    "/assets/longonot-heights-site1.png",
    "/assets/longonot-heights-site2.png",
    "/assets/longonot-heights-site3.png",
    "/assets/longonot-heights-site4.png",
    "/assets/longonot-heights-site5.png",
    "/assets/longonot-heights-site6.png",
    "/assets/longonot-heights-site7.png",
    "/assets/longonot-heights-site8.png",
    "/assets/longonot-heights-site9.png",
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
      <section className="h-[85vh] w-full bg-cover bg-[url('/assets/longonot-heights-banner.png')] flex items-center justify-center">
        <motion.div
          className="banner-overlay"
          initial={{ background: "rgba(0, 0, 0, 0)" }}
          animate={controls}
        ></motion.div>
        <div className="flex flex-col">
          <h1 className={`headerFont text-5xl md:text-[100px] text-[#DAB797]`}>
            LONGONOT
            <br />
            HEIGHTS
          </h1>
          <h1
            className={`headerFont text-2xl md:text-4xl text-center text-[#DAB797]`}
          >
            LUXURY REDEFINED
          </h1>
        </div>
      </section>
      <section className=" flex sticky top-40 pr-20 md:mb-[-30px] w-fit self-end">
        {/* <div className="w-[70%]"></div> */}
        <div className="shadow-2xl hidden sticky top-10 p-4 md:flex flex-col gap-2 bg-white my-[-100px]  w-[27vw]">
          {/* <Button
            className={`font-bold bodyFont w-full bg-[#26282B] p-4 text-white`}
          >
            Book a tour
          </Button>
          <Button
            className={`font-bold bodyFont w-full border-[2px] border-[#26282B] p-4 text-black/90`}
          >
            Download brochure
          </Button> */}
          {/* <div className="flex flex-col">
          <div className={`flex gap-2 p-2`}>
            <div className="p-2 flex items-center justify-center bg-[#D1A55C1A]">
              <Image alt={""} src={"/assets/time.svg"} className={"h-8 w-8"} />
            </div>
              <p className={`font-bold bodyFont`}>Timeline</p>
              <p className={`text-sm text-[#6D6E71]`}>Q3 2024</p>
            </div> 
            </div>
          */}
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
              <p className={`text-sm text-[#6D6E71]`}>Completed</p>
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
                14 units of 4 bedroom terrace houses
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
          {/* <div className={`flex gap-2 p-2`}>
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
          </div> */}
          <div className="flex gap-2 self-center items-end">
            <Image src={"/assets/sold-out.svg"} alt={"sold out"} />
            <p className="text-red-500 font-black">Sold Out</p>
          </div>
        </div>
      </section>
      <section className="flex items-center md:px-20 p-4 overflow-visible py-5 gap-4">
        <div className="flex flex-col gap-5 md:w-[70%] bodyFont">
          <div className="flex flex-col">
            <p className={`text-[#6D6E71] `}>
              Felicia Alarape Elegushi Street, off Kusenla Road. Ikate, Lagos
            </p>
            <p className={`headerFont text-3xl text-[#CAA969]`}>
              Longonot Heights
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className={` text-[#6D6E71] leading-[190%]`}>
              Longonot Heights is a luxury estate that features 14 units of
              4-bedroom terrace houses in a spacious site of 3,200sqm.
            </p>
            <p className={` text-[#6D6E71] leading-[190%]`}>
              It is situated off Kusenla road, Elegushi, in Lekki; a
              seven-minute drive from Lekki 1st roundabout. In the neighbourhood
              are The Rock Cathedral, Nicon Town Estate, Circle Mall and Lekki
              Gardens Horizon estate.
            </p>
            <p className={` text-[#6D6E71] leading-[190%]`}>
              LONGONOT HEIGHTS consists of 2nos. Blocks of three terrace units
              and 2 nos. Blocks of four terrace units, along a central street
              that divides the estate. Each unit consists of four luxurious
              bedrooms, all ensuite; a BQ, spacious kitchen, family living room,
              and a main living and dining room which are designed for maximum
              comfort.
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
            {/*             <div className="flex flex-col items-center">
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
            </div> */}
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
              <p className="text-sm md:text-xl">Dedicated Transformer</p>
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
      <section className={`hidden p-4 md:p-20 gap-4 flex headerFont`}>
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
      <section className=" hidden gap-4 min-h-screen bg-[#f8f8f8] md:p-20 overflow-scroll">
        <div className="md:w-[70%] flex flex-col">
          <p className={`headerFont p-4 text-3xl md:text-5xl`}>Apartments</p>
          <div className="md:grid grid-cols-2 gap-4 flex overflow-scroll w-full">
            <ApartmentCard
              site={"Gazania Park"}
              name={"One Bedroom Apartment"}
              detail={
                "Sit ultrices enim massa facilisi cras in. Dictum adipiscing risus eget egestas donec varius"
              }
              images={[
                "/assets/GazaniaParkOneBedroom1.png",
                "/assets/GazaniaParkOneBedroom2.png",
              ]}
              squareFoot={1000}
              bedroom={1}
              bath={1}
              guest={0}
            />
            <ApartmentCard
              site={"Gazania Park"}
              name={"Two Bedroom Apartment"}
              detail={
                "Sit ultrices enim massa facilisi cras in. Dictum adipiscing risus eget egestas donec varius"
              }
              images={[
                "/assets/GazaniaParkTwoBedroom1.png",
                "/assets/GazaniaParkTwoBedroom2.png",
              ]}
              squareFoot={1100}
              bedroom={2}
              bath={2}
              guest={1}
            />
            <ApartmentCard
              site={"Gazania Park"}
              name={"Three Bedroom Apartment"}
              detail={
                "Sit ultrices enim massa facilisi cras in. Dictum adipiscing risus eget egestas donec varius"
              }
              images={[
                "/assets/GazaniaParkThreeBedroom1.png",
                "/assets/GazaniaParkThreeBedroom2.png",
              ]}
              squareFoot={1300}
              bedroom={3}
              bath={3}
              guest={1}
            />
            <ApartmentCard
              site={"Gazania Park"}
              name={"Three Bedroom Maisonette"}
              detail={
                "Sit ultrices enim massa facilisi cras in. Dictum adipiscing risus eget egestas donec varius"
              }
              images={[
                "/assets/GazaniaParkThreeBedroomMaisonette1.png",
                "/assets/GazaniaParkThreeBedroomMaisonette2.png",
              ]}
              squareFoot={1300}
              bedroom={3}
              bath={3}
              guest={1}
            />
            <ApartmentCard
              site={"Gazania Park"}
              name={"Four Bedroom Apartment"}
              detail={
                "Sit ultrices enim massa facilisi cras in. Dictum adipiscing risus eget egestas donec varius"
              }
              images={[
                "/assets/GazaniaParkFourBedroom1.png",
                "/assets/GazaniaParkFourBedroom2.png",
              ]}
              squareFoot={1500}
              bedroom={4}
              bath={4}
              guest={1}
            />
          </div>
        </div>
        <div className="hidden md:block w-[30%]"></div>
      </section>
      <ProjectMap />
      <div
        style={{ position: "sticky", bottom: 0 }}
        className=" sticky top-10 p-4 md:hidden flex flex-col gap-2 bg-white"
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
            Longonot Heights
          </p>
        </div>
        <div className={`hidden gap-2`}>
          <Button
            className={`font-bold bodyFont w-full bg-[#26282B] p-4 text-white text-sm md:text-base`}
          >
            Book a tour
          </Button>
          <Button
            className={`font-bold bodyFont w-full border-[2px] border-[#26282B] md:p-4 text-black/90 text-sm`}
          >
            Download brochure
          </Button>
        </div>
        <div className={`flex flex-col ${!card ? "hidden" : ""}`}>
          <div className={`hidden gap-2 p-2 `}>
            <div className="p-2 flex items-center justify-center bg-[#D1A55C1A]">
              <Image alt={""} src={"/assets/time.svg"} className={"h-8 w-8"} />
            </div>
            <div className="hidden flex-col">
              <p className={`font-bold bodyFont`}>Timeline</p>
              <p className={`text-sm text-[#6D6E71]`}>Jan 2023 - Jan 2024</p>
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
              <p className={`text-sm text-[#6D6E71]`}>Completed</p>
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
                14 units of 4 bedroom terrace houses
              </p>
            </div>
          </div>
          <div className={`hidden gap-2 p-2`}>
            <div className="p-2 flex items-center justify-center bg-[#D1A55C1A]">
              <Image
                alt={""}
                src={"/assets/payment-schedule.svg"}
                className={"h-8 w-8"}
              />
            </div>
            <div className="flex flex-col">
              <p className={`font-bold bodyFont`}>Payment Schedule</p>
              <p className={`text-sm text-blue-600 underline`}>
                view payment schedule
              </p>
            </div>
          </div>
          <div className={`hidden gap-2 p-2`}>
            <div className="p-2 flex items-center justify-center bg-[#D1A55C1A]">
              <Image
                alt={""}
                src={"/assets/investment.svg"}
                className={"h-8 w-8"}
              />
            </div>
            <div className="flex flex-col">
              <p className={`font-bold bodyFont`}>Investment Thesis</p>
              <p className={`text-sm text-blue-600 underline`}>view thesis</p>
            </div>
          </div>
          <div className="flex gap-2 self-center items-end">
            <Image src={"/assets/sold-out.svg"} alt={"sold out"} />
            <p className="text-red-500 font-black">Sold Out</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
