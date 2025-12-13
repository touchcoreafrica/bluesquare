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

export default function Page() {
  const [card, setCard] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const controls = useAnimation();
  const siteImages = [
    "/assets/quantum-place-site1.png",
    "/assets/quantum-place-site2.png",
    "/assets/quantum-place-site3.png",
    "/assets/quantum-place-site4.png",
    "/assets/quantum-place-site5.png",
    "/assets/quantum-place-site6.png",
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
      <section className="h-[85vh] w-full bg-cover bg-[url('/assets/quantum-place-banner.png')] flex items-center justify-center">
        {/* <motion.div
          className="banner-overlay"
          initial={{ background: "rgba(0, 0, 0, 0)" }}
          animate={controls}
        ></motion.div> */}
        <div className="flex flex-col">
          <h1
            className={`headerFont text-center text-5xl md:text-[100px] text-[#DAB797]`}
          >
            QUANTUM PLACE
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
            className={`bodyFont font-bold w-full bg-[#26282B] p-4 text-white`}
          >
            Book a tour
          </Button>
          <Button
            className={`bodyFont font-bold w-full border-[2px] border-[#26282B] p-4 text-black/90`}
          >
            Download brochure
          </Button> */}
          {/* <div className="flex flex-col">
          <div className={`flex gap-2 p-2`}>
            <div className="p-2 flex items-center justify-center bg-[#D1A55C1A]">
              <Image alt={""} src={"/assets/time.svg"} className={"h-8 w-8"} />
            </div>
              <p className={`bodyFont font-bold`}>Timeline</p>
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
              <p className={`bodyFont font-bold`}>Status</p>
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
              <p className={`bodyFont font-bold`}>Apartments</p>
              <p className={`text-sm text-[#6D6E71]`}>
                20 flats (1, 2, 3 bedrooms, studio apartments)
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
              <p className={`bodyFont font-bold`}>Payment Schedule</p>
              <p className={`text-sm`}>Fully Sold Out</p>
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
              <p className={`bodyFont font-bold`}>Investment Thesis</p>
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
*/}
          <div className="flex gap-2 self-center items-end">
            <Image src={"/assets/sold-out.svg"} alt={"sold out"} />
            <p className="text-red-500 font-black">Sold Out</p>
          </div>
        </div>
      </section>
      <section className="flex items-center md:px-20 p-4 overflow-visible py-5 gap-4">
        <div className="flex flex-col gap-5 md:w-[70%]">
          <div className="flex flex-col">
            <p className={`text-[#6D6E71] bodyFont`}>
              Orisa Sanya Street, Oniru, Victoria Island, Lagos.
            </p>
            <p className={`headerFont text-3xl text-[#CAA969]`}>
              Quantum Place
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className={`headerFont text-[#6D6E71] leading-[190%]`}>
              The functionality and use of seamless finishing in this property
              are an outstanding reflection of design and architectural
              excellence. It is situated in Orisa Sanya Street, Oniru Victoria
              Island Lagos and features 6 units of 2 and 3 bedroom apartments
              with 6 units of 4 bedroom detached duplexes.
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
                <Image
                  key={index}
                  className={`w-full`}
                  alt={"images"}
                  src={image}
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
            {/* <div className="flex flex-col items-center">
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
              <p className="text-sm md:text-xl text-center">
                Dedicated
                <br /> Transformer
              </p>
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
      <section className="hidden gap-4 min-h-screen bg-[#f8f8f8] md:p-20 overflow-scroll">
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

          <p className={`headerFont text-2xl text-[#CAA969]`}>Quantum Place</p>
        </div>
        <div className={` gap-2 hidden`}>
          <Button
            className={`bodyFont font-bold w-full bg-[#26282B] p-4 text-white text-sm md:text-base`}
          >
            Book a tour
          </Button>
          <Button
            className={`bodyFont font-bold w-full border-[2px] border-[#26282B] md:p-4 text-black/90 text-sm`}
          >
            Download brochure
          </Button>
        </div>
        <div className={`flex flex-col ${!card ? "hidden" : ""}`}>
          <div className={`hidden gap-2 p-2`}>
            <div className="p-2 flex items-center justify-center bg-[#D1A55C1A]">
              <Image alt={""} src={"/assets/time.svg"} className={"h-8 w-8"} />
            </div>
            <div className="hidden flex-col">
              <p className={`bodyFont font-bold`}>Timeline</p>
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
              <p className={`bodyFont font-bold`}>Status</p>
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
              <p className={`bodyFont font-bold`}>Apartments</p>
              <p className={`text-sm text-[#6D6E71]`}>
                20 flats (1, 2, 3 bedrooms, studio apartments)
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
              <p className={`bodyFont font-bold`}>Payment Schedule</p>
              <p className={`text-sm text-blue-600 underline`}>
                view payment schedule
              </p>
            </div>
          </div>
          <div className="flex gap-2 self-center items-end">
            <Image src={"/assets/sold-out.svg"} alt={"sold out"} />
            <p className="text-red-500 font-black">Sold Out</p>
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
              <p className={`bodyFont font-bold`}>Investment Thesis</p>
              <p className={`text-sm text-blue-600 underline`}>view thesis</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
