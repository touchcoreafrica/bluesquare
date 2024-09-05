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
  const [showTour, setShowTour] = useState(false);
  const [showThesis, setShowThesis] = useState(false);
  const [showPlan, setShowPlan] = useState(false);
  const [card, setCard] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const controls = useAnimation();
  const siteImages = [
    "/assets/cove-towers-site1.png",
    "/assets/cove-towers-site2.png",
    "/assets/cove-towers-site3.png",
    "/assets/cove-towers-site4.png",
    "/assets/cove-towers-site5.png",
    "/assets/cove-towers-site6.png",
    "/assets/cove-towers-site7.png",
    "/assets/cove-towers-site8.png",
    "/assets/cove-towers-site9.png",
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
      <section className="h-[85vh] w-full bg-cover bg-[url('/assets/cove-towers-banner.png')] flex items-center justify-center">
        <motion.div
          className="banner-overlay"
          initial={{ background: "rgba(0, 0, 0, 0)" }}
          animate={controls}
        ></motion.div>
        <div className="flex flex-col">
          <h1
            className={`headerFont text-5xl text-center md:text-[100px] text-[#DAB797]`}
          >
            COVE TOWERS
          </h1>
          <h1
            className={`headerFont text-2xl md:text-4xl text-center text-[#DAB797]`}
          >
            CREATING BEAUTIFUL COMMUNITIES
          </h1>
        </div>
      </section>
      <section className=" flex sticky top-40 pr-20 md:mb-[-300px] w-fit self-end">
        {/* <div className="w-[70%]"></div> */}
        <div className="shadow-2xl hidden sticky top-10 p-4 md:flex flex-col gap-2 bg-white my-[-100px]  w-[27vw]">
          <Link href={"https://calendly.com/infobluesquareng/gazania-park"}>
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
          {/* <Link
            target="_blank"
            href={
              "https://dashboard.mailerlite.com/forms/415080/113618332504033207/share"
            }
            className={`font-bold bodyFont text-center w-full border-[2px] border-[#26282B] p-4 text-black/90`}
          >
            Download brochure
          </Link> */}
          <Link
            target="_blank"
            href={
              "https://drive.google.com/uc?export=download&id=19FtwPD-qwan76NEJMxMZaIxWYr4DSxnQ"
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
                Luxury 1, 2 and 3 bedroom apartments
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
      <section className="flex items-center md:px-20 p-4 overflow-visible py-5 md:py-20 gap-4">
        <div className="flex flex-col gap-5 md:w-[70%]">
          <div className="flex flex-col">
            <p className={`text-[#6D6E71] bodyFont`}>Elegushi - Lekki Lagos.</p>
            <p className={`headerFont text-3xl text-[#CAA969]`}>Cove Towers</p>
          </div>
          <div className="flex flex-col gap-4">
            <p className={`bodyFont text-[#6D6E71] leading-[190%]`}>
              Welcome to Cove Towers Lekki, where luxury living meets impeccable
              service. Nestled in the heart of Lekki, one of Nigeria&apos;s most
              vibrant and sought-after neighborhoods, Cove Towers stands tall as
              a testament to refined elegance and extraordinary living. Our
              luxurious condominiums offer a haven of tranquility amidst the
              bustling energy of the city.
            </p>
            <p className={`bodyFont text-[#6D6E71] leading-[190%]`}>
              From the moment you step into Cove Towers, you are greeted by a
              world of opulence and sophistication. Every detail has been
              meticulously designed to create a seamless fusion of comfort and
              style. With spacious and beautifully appointed residences, Cove
              Towers offers a variety of floor plans to cater to your unique
              preferences and desires.
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
                  index={index}
                  className={`w-full`}
                  alt={"images"}
                  siteImages={siteImages}
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
      <section className="flex gap-4 min-h-screen bg-[#f8f8f8] md:p-20 overflow-scroll">
        <div className="md:w-[70%] flex flex-col">
          <p className={`headerFont p-4 text-3xl md:text-5xl`}>Apartments</p>
          <div className="md:grid grid-cols-2 gap-4 flex overflow-scroll w-full">
            <ApartmentCard
              site={"Cove Towers"}
              name={"Studio Flat"}
              detail={
                "As a mobile professional or visiting business personnel, our studio flats give you just the right amount of space to own your own space while not breaking the bank."
              }
              images={[
                "/assets/CoveTowersOneBedroom1.png",
                "/assets/CoveTowersOneBedroom2.png",
              ]}
              squareFoot={85}
              bedroom={1}
              bath={1}
              guest={0}
            />
            <ApartmentCard
              site={"Cove Towers"}
              name={"One Bedroom Apartment"}
              detail={
                "Our one-bedroom apartments are super cool, spacious, and just perfect for the mobile professional and newlyweds. The features of this flat are listed above."
              }
              images={[
                "/assets/CoveTowersOneBedroom1.png",
                "/assets/CoveTowersOneBedroom2.png",
              ]}
              squareFoot={115}
              bedroom={1}
              bath={1}
              guest={0}
            />
            <ApartmentCard
              site={"Cove Towers"}
              name={"Two Bedroom Apartment"}
              detail={
                "Our two-bedroom flat features a combination of larger living rooms, spacious bedrooms and functional spaces like the kitchen. It is perfect for the young families as well as older families."
              }
              images={[
                "/assets/CoveTowersTwoBedroom1.png",
                "/assets/CoveTowersTwoBedroom2.png",
              ]}
              squareFoot={143}
              bedroom={2}
              bath={2}
              guest={1}
            />
            <ApartmentCard
              site={"Cove Towers"}
              name={"Three Bedroom Apartment"}
              detail={
                "Our 3 - bedroom apartment is amazingly comfortable. With large living spaces, including bedrooms and kitchen, this apartment is offered with an attached Boys Quarters’ room."
              }
              images={[
                "/assets/CoveTowersThreeBedroom1.png",
                "/assets/CoveTowersThreeBedroom2.png",
                "/assets/CoveTowersThreeBedroom3.png",
                "/assets/CoveTowersThreeBedroom4.png",
                "/assets/CoveTowersThreeBedroom5.png",
              ]}
              squareFoot={254}
              bedroom={3}
              bath={3}
              guest={1}
            />
          </div>
        </div>
        <div className="hidden md:block w-[30%]"></div>
      </section>
      <ProjectMap />
      <div
        style={{ position: "sticky", bottom: 0 }}
        className="  p-4 md:hidden flex flex-col gap-2 bg-white"
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

          <p className={`headerFont text-2xl text-[#CAA969]`}>Cove Towers</p>
        </div>
        <div className={`flex flex-col gap-2`}>
          <Link href={"https://calendly.com/infobluesquareng/gazania-park"}>
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
            target="_blank"
            href={
              "https://drive.google.com/uc?export=download&id=19FtwPD-qwan76NEJMxMZaIxWYr4DSxnQ"
            }
            className={`font-bold bodyFont text-center w-full border-[2px] p-4 border-[#26282B] md:p-4 text-black/90 text-sm`}
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
                Luxury 1, 2 and 3 bedroom apartments
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
                <span>Now Selling</span>{" "}
                <Button
                  className={` text-blue-600 underline`}
                  onClick={() => {
                    setShowPlan(true);
                  }}
                >
                  view payment schedule
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
        </div>
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
          <Link
            href={"https://calendly.com/infobluesquareng/cove-towers"}
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
              Cove Towers, Lekki presents a prime investment opportunity in the
              vibrant and burgeoning real estate market of Lagos, Nigeria.
              Located in a highly sought-after area known for its accessibility,
              amenities, and growing property values, this development offers a
              mix of luxurious studio, 1-bedroom, 2-bedroom, and 3-bedroom
              apartments, with BQ
            </p>
          </div>
          <span className="h-[2px] bg-[#D1A55C] w-full"></span>
          <div className="flex flex-col">
            <p className={`headerFont font-bold`}>Market Analysis</p>
            <p className={`text-[#6D6E71] bodyFont`}>
              The Lekki area has experienced a consistent increase in demand for
              high-quality residential spaces due to its proximity to commercial
              hubs, upscale lifestyle offerings, and improved infrastructure.
              The market trend indicates a rising preference for modern,
              well-appointed living spaces, catering to both the growing local
              population and an influx of upwardly mobile professionals.
            </p>
          </div>
          <span className="h-[2px] bg-[#D1A55C] w-full"></span>
          <div className="flex flex-col">
            <p className={`headerFont font-bold`}>Property Overview</p>
            <div className={`text-[#6D6E71] flex flex-col gap-2 bodyFont`}>
              <p>
                The Periwinkle Estate offers a diverse portfolio of residential
                units, strategically designed to cater to different demographics
                and housing needs. This includes:The Periwinkle Estate offers a
                diverse portfolio of residential units, strategically designed
                to cater to different demographics and housing needs. This
                includes:
              </p>
              <div className="flex gap-2 items-start">
                <span className="p-1 h-fit rounded-full bg-[#D1A55C26] flex items-center justify-center w-fit">
                  <CheckIcon className="text-[#D1A55C]" fontSize="10px" />
                </span>
                <p>
                  Luxury Studios: Ideal for single professionals or young
                  couples seeking convenience and style, these compact yet
                  elegant units offer modern amenities and efficient use of
                  space.
                </p>
              </div>
              <div className="flex gap-2 items-start">
                <span className="p-1 h-fit rounded-full bg-[#D1A55C26] flex items-center justify-center w-fit">
                  <CheckIcon className="text-[#D1A55C]" fontSize="10px" />
                </span>
                <p className="bodyFont">
                  1-Bedroom Apartments: Designed for urban living, these units
                  provide a comfortable and sophisticated environment for young
                  professionals or couples, with contemporary features and
                  thoughtful layouts.
                </p>
              </div>
              <div className="flex gap-2 items-start">
                <span className="p-1 h-fit rounded-full bg-[#D1A55C26] flex items-center justify-center w-fit">
                  <CheckIcon className="text-[#D1A55C]" fontSize="10px" />
                </span>
                <p className="bodyFont">
                  2 and 3-Bedroom Apartments with BQ: Catering to families or
                  individuals seeking larger spaces, these units offer generous
                  living areas, premium finishes, and the added advantage of a
                  servant&apos;s quarter (BQ), appealing to those desiring
                  flexibility and additional space for live-in staff or as an
                  extra room.
                </p>
              </div>
            </div>
          </div>
          <span className="h-[2px] bg-[#D1A55C] w-full"></span>
          <div className="flex flex-col">
            <p className={`headerFont font-bold`}>Investment Proposition</p>
            <div className={`text-[#6D6E71] flex flex-col gap-2 bodyFont`}>
              <p>
                Cove Towers, Lekki featuring luxury studios, 1-bedroom
                apartments, and 2 and 3-bedroom units with BQ, represents a
                solid investment prospect in an area poised for sustained
                growth. With its strategic location, diversified unit mix, and
                focus on quality, this property stands as an attractive option
                for investors seeking both rental income and capital
                appreciation in the evolving Lagos real estate market.
              </p>
              <p>
                This investment thesis underscores the potential for strong
                returns and long-term value creation, making it an enticing
                proposition for savvy investors looking to capitalize on the
                dynamic real estate landscape in Ikate Lekki Phase.
              </p>
              <div className="flex gap-2 items-start bodyFont">
                <span className="p-1 h-fit rounded-full bg-[#D1A55C26] flex items-center justify-center w-fit">
                  <CheckIcon className="text-[#D1A55C]" fontSize="10px" />
                </span>
                <p>
                  Demand and Location: Ikate Lekki is a high-demand area due to
                  its strategic location, proximity to key amenities,
                  educational institutions, and commercial districts. The
                  increasing urbanization and growing population in Lagos make
                  this property an attractive investment for both rental income
                  and capital appreciation.
                </p>
              </div>
              <div className="flex gap-2 items-start bodyFont">
                <span className="p-1 h-fit rounded-full bg-[#D1A55C26] flex items-center justify-center w-fit">
                  <CheckIcon className="text-[#D1A55C]" fontSize="10px" />
                </span>
                <p>
                  Diversified Unit Mix: Offering a range of unit sizes caters to
                  a diverse demographic, ensuring the property&apos;s
                  attractiveness to different tenant segments, from young
                  professionals to families, thereby mitigating vacancy risks.{" "}
                </p>
              </div>
              <div className="flex gap-2 items-start">
                <span className="p-1 h-fit rounded-full bg-[#D1A55C26] flex items-center justify-center w-fit">
                  <CheckIcon className="text-[#D1A55C]" fontSize="10px" />
                </span>
                <p>
                  Quality and Luxury: The focus on delivering luxury finishes,
                  modern amenities, and functional spaces aligns with the
                  preferences of the target market, allowing for potential
                  premium rental rates and higher tenant retention.
                </p>
              </div>
              <div className="flex gap-2 items-start bodyFont">
                <span className="p-1 h-fit rounded-full bg-[#D1A55C26] flex items-center justify-center w-fit">
                  <CheckIcon className="text-[#D1A55C]" fontSize="10px" />
                </span>
                <p>
                  Income Potential: The combination of rental income from
                  different unit types, coupled with the possibility of capital
                  appreciation in a rapidly developing area, positions this
                  property as a compelling long-term investment opportunity.
                </p>
              </div>
            </div>
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
        <Image alt={"plan"} src={"/assets/COVE_TOWERS_PAYMENT_PLAN.jpg"} />
      </Modal>
    </div>
  );
}
