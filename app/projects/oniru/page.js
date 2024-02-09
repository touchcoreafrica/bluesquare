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

export default function Page() {
  const [card, setCard] = useState(false);
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
      <section className="h-[85vh] w-full bg-cover bg-[url('/assets/gazania-park-banner.png')] flex items-center justify-center">
        <motion.div
          className="banner-overlay"
          initial={{ background: "rgba(0, 0, 0, 0)" }}
          animate={controls}
        ></motion.div>
        <div className="flex flex-col">
          <h1 className={`headerFont text-5xl md:text-[100px] text-[#DAB797]`}>
            ONIRU
          </h1>
          <h1
            className={`headerFont text-2xl md:text-4xl text-center text-[#DAB797]`}
          >
            REDEFINING MODERN LIVING
          </h1>
        </div>
      </section>
      <section className=" flex sticky top-40 pr-20 md:mb-[-300px] w-fit self-end">
        {/* <div className="w-[70%]"></div> */}
        <div className="shadow-2xl hidden sticky top-10 p-4 md:flex flex-col gap-2 bg-white my-[-100px]  w-[27vw]">
          <Link href={"https://calendly.com/infobluesquareng/gazania-park"}>
            <Button
              className={`font-bold bodyFont w-full bg-[#26282B] p-4 text-white`}
            >
              Book a tour
            </Button>
          </Link>
          <Link
            href={
              "https://drive.google.com/uc?export=download&id=1079nvwoVl0o3MATifrBitjukIOdeP95X"
            }
            className={`font-bold bodyFont text-center w-full border-[2px] border-[#26282B] p-4 text-black/90`}
          >
            Download brochure
          </Link>
          <div className={`hidden gap-2 p-2`}>
            <div className="p-2 flex items-center justify-center bg-[#D1A55C1A]">
              <Image alt={""} src={"/assets/time.svg"} className={"h-8 w-8"} />
            </div>
            <div className="hidden flex-col">
              <p className={`font-bold bodyFont`}>Timeline</p>
              <p className={`text-sm text-[#6D6E71]`}>Q2 2026</p>
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
              <p className={`text-sm text-[#6D6E71]`}>Approved</p>
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
                Luxury 1, 2 and 3 bedrooms with BQ, 3 and 4 bedroom maisonnette
                with BQ
              </p>
            </div>
          </div>
          <div className={`flex gap-2 p-2`}>
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
                <Link
                  href={
                    "https://drive.google.com/file/d/1yNYlx4k-4ZyMCauXUflebRxVemJDiy20/view?usp=drive_link"
                  }
                >
                  <u className="text-blue-500">view payment schedule</u>
                </Link>
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
        </div>
      </section>
      <section className="flex items-center md:px-20 p-4 overflow-visible py-5 gap-4">
        <div className="flex flex-col gap-5 md:w-[70%]">
          <div className="flex flex-col">
            <p className={`text-[#6D6E71] `}>
              Periwinkle Estate, Lekki Phase 1
            </p>
            <p className={`headerFont text-3xl text-[#CAA969]`}>ONIRU</p>
          </div>
          <div className="flex flex-col gap-4">
            <p className={`bodyFont text-[#6D6E71] leading-[190%]`}>
              ONIRU depicts an outstanding opportunity to live amongst the
              character, heritage and culture that Periwinkle has to offer. This
              impressive development is home to a unique collection of 1, 2, 3
              bed apartments, 3 and 4 luxury bedroom maisonette, designed with
              the sophisticated and discerning in mind, upholding the tenets of
              class, style, quality and innovation.
            </p>
            <p className={`bodyFont text-[#6D6E71] leading-[190%]`}>
              Bringing together modern architecture and interior design, Gazania
              is one of the contemporary luxury residences in the area. Each
              apartments within this opulent development has distinctive design
              details and high-end finishes, setting a new benchmark for luxury
              living.
            </p>
            <p className={`bodyFont text-[#6D6E71] leading-[190%]`}>
              Apartments will offer picturesque and serene water views of Lekki
              phase 1 and environs and will be an ideal home with exciting
              children adventures and beautiful family memories which are a part
              of everyday life.
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
                alt={"transformer"}
                src={"/assets/transformer.svg"}
                className={"h-8 w-8 md:h-12 md:w-12"}
              />
              <p className="text-sm md:text-xl">Dedicated Transformer</p>
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
                alt={"spacial property"}
                src={"/assets/house.svg"}
                className={"h-8 w-8 md:h-12 md:w-12"}
              />
              <p className="text-sm md:text-xl">Spacious Property</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                alt={"Spa"}
                src={"/assets/massage.svg"}
                className={"h-8 w-8 md:h-12 md:w-12"}
              />
              <p className="text-sm md:text-xl">Namaste Spa</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                alt={"Spacious"}
                src={"/assets/fire-extinguisher.svg"}
                className={"h-8 w-8 md:h-12 md:w-12"}
              />
              <p className="text-sm md:text-xl">Fire Control System</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                alt={"drinks"}
                src={"/assets/drinks.svg"}
                className={"h-8 w-8 md:h-12 md:w-12"}
              />
              <p className="text-sm md:text-xl">Exquisite Bar Area</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                alt={"manager"}
                src={"/assets/manager.svg"}
                className={"h-8 w-8 md:h-12 md:w-12"}
              />
              <p className="text-sm md:text-xl">Facility Manager</p>
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
      <section className="flex gap-4 min-h-screen bg-[#f8f8f8] md:p-20 overflow-scroll">
        <div className="md:w-[70%] flex flex-col">
          <p className={`headerFont p-4 text-3xl md:text-5xl`}>Apartments</p>
          <div className="md:grid grid-cols-2 gap-4 flex overflow-scroll w-full">
            <ApartmentCard
              site={"ONIRU"}
              name={"1 Bedroom Apartment"}
              detail={
                "This unit features a cozy living area, a fully-equipped kitchen with high-end appliances and beautiful cabinetry that is both stylish and functional"
              }
              images={[
                "/assets/GazaniaParkOneBedroom1.png",
                "/assets/GazaniaParkOneBedroom2.png",
              ]}
              squareFoot={86}
              bedroom={1}
              bath={1}
              guest={0}
            />
            <ApartmentCard
              site={"ONIRU"}
              name={"2 Bedroom Apartment with BQ"}
              detail={
                "As you step through the grand entrance, you’ll be greeted by soaring ceilings and opulent finishes that set the tone for the rest of the home."
              }
              images={[
                "/assets/GazaniaParkTwoBedroom1.png",
                "/assets/GazaniaParkTwoBedroom2.png",
              ]}
              squareFoot={145}
              bedroom={2}
              bath={2}
              guest={1}
            />
            <ApartmentCard
              site={"ONIRU"}
              name={"3 Bedroom Apartment with BQ"}
              detail={
                "The spacious living area is perfect for entertaining guests, while the bedrooms offer a peaceful retreat from the hustle and bustle of the city."
              }
              images={[
                "/assets/GazaniaParkThreeBedroom1.png",
                "/assets/GazaniaParkThreeBedroom2.png",
              ]}
              squareFoot={177}
              bedroom={3}
              bath={3}
              guest={1}
            />
            <ApartmentCard
              site={"ONIRU"}
              name={"3 Bedroom Maisonette with BQ"}
              detail={
                "The expansive living area features beautiful finishes and plenty of natural light, creating a warm and inviting space."
              }
              images={[
                "/assets/GazaniaParkThreeBedroomMaisonette1.png",
                "/assets/GazaniaParkThreeBedroomMaisonette2.png",
                "/assets/GazaniaParkThreeBedroomMaisonette3.png",
                "/assets/GazaniaParkThreeBedroomMaisonette4.png",
                "/assets/GazaniaParkThreeBedroomMaisonette5.png",
              ]}
              squareFoot={236}
              bedroom={3}
              bath={3}
              guest={1}
            />
            <ApartmentCard
              site={"ONIRU"}
              name={"4 Bedroom Maisonette with BQ"}
              detail={
                "With large balconies and stunning views, this unit is perfect for families or those who love to entertain guests. Retreat to the spacious master suite."
              }
              images={[
                "/assets/GazaniaParkThreeBedroomMaisonette1.png",
                "/assets/GazaniaParkThreeBedroomMaisonette2.png",
                "/assets/GazaniaParkThreeBedroomMaisonette3.png",
                "/assets/GazaniaParkThreeBedroomMaisonette4.png",
                "/assets/GazaniaParkThreeBedroomMaisonette5.png",
              ]}
              squareFoot={353}
              bedroom={4}
              bath={4}
              guest={1}
            />
          </div>
        </div>
        <div className="hidden md:block w-[30%]"></div>
      </section>
      <ProjectMap />
      <Footer />
      <div
        style={{ position: "sticky", top: 0 }}
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
            7 Centrale Residences
          </p>
        </div>
        <div className={`flex gap-2`}>
          <Link href={"https://calendly.com/infobluesquareng/gazania-park"}>
            <Button
              className={`font-bold bodyFont w-full bg-[#26282B] p-4 text-white text-sm md:text-base`}
            >
              Book a tour
            </Button>
          </Link>
          <Button
            className={`font-bold bodyFont w-full border-[2px] border-[#26282B] md:p-4 text-black/90 text-sm`}
          >
            Download brochure
          </Button>
        </div>
        <div className={`md:flex flex-col ${!card ? "hidden" : ""}`}>
          <div className={`hidden gap-2 p-2`}>
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
              <p className={`text-sm text-[#6D6E71]`}>Approved and ongoing</p>
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
                20 flats (1, 2, 3 bedrooms, studio apartments)
              </p>
            </div>
          </div>
          <div className={`flex gap-2 p-2`}>
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
              <p className={`text-sm text-blue-600 underline`}>view thesis</p>
            </div>
          </div>
        </div>
      </div>
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
              ONIRU inside Periwinkle Estate in the vibrant locale of Lekki
              Phase 1, presents an alluring opportunity for property investment.
              The estate encompasses a diverse range of housing units, including
              1-bedroom apartments, 2 & 3-bedroom apartments with BQ, and 3 &
              4-bedroom maisonettes with BQ, catering to a wide spectrum of
              homeowner preferences and investment strategies
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
    </div>
  );
}
