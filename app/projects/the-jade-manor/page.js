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
  const [showPlan, setShowPlan] = useState(false);
  const [showTour, setShowTour] = useState(false);
  const [showThesis, setShowThesis] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const controls = useAnimation();
  const siteImages = [
    "/assets/the-jade-manor-site1.png",
    "/assets/the-jade-manor-site2.png",
    "/assets/the-jade-manor-site3.png",
    "/assets/the-jade-manor-site4.png",
    "/assets/the-jade-manor-site5.png",
  ];
  const siteBigImages = [
    "/assets/the-jade-manor-site1.png",
    "/assets/the-jade-manor-site2.png",
    "/assets/the-jade-manor-site3.png",
    "/assets/the-jade-manor-site4.png",
    "/assets/the-jade-manor-site5.png",
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
      <section className="h-[85vh] w-full bg-cover bg-[url('/assets/the-jade-manor-banner.png')] flex items-center justify-center">
        <motion.div
          className="banner-overlay"
          initial={{ background: "rgba(0, 0, 0, 0)" }}
          animate={controls}
        ></motion.div>
        <div className="flex flex-col">
          <h1
            className={`headerFont text-5xl text-center md:text-[100px] text-[#DAB797]`}
          >
            THE JADE MANOR
          </h1>
          <h1
            className={`headerFont text-2xl md:text-4xl text-center text-[#DAB797]`}
          >
            Luxury Living in Oniru
          </h1>
        </div>
      </section>
      <section className=" flex sticky top-40 pr-20 md:mb-[-300px] w-fit self-end">
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
              className={`bodyFont font-bold w-full bg-[#26282B] p-4 text-white`}
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
              "https://drive.google.com/uc?export=download&id=175K_a7v-H9NHe59R_biG2NU5kCLYeigc"
            }
            className={`bodyFont font-bold text-center w-full border-[2px] border-[#26282B] p-4 text-black/90`}
          >
            Download brochure
          </Link>
          <div className={`hidden gap-2 p-2`}>
            <div className="p-2 flex items-center justify-center bg-[#D1A55C1A]">
              <Image alt={""} src={"/assets/time.svg"} className={"h-8 w-8"} />
            </div>
            <div className="hidden flex-col">
              <p className={`bodyFont font-bold`}>Timeline</p>
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
              <p className={`bodyFont font-bold`}>Status</p>
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
              <p className={`bodyFont font-bold`}>Apartments</p>
              <p className={`text-sm text-[#6D6E71]`}>
                Luxury 4-bedroom terraces
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
              <p className={`bodyFont font-bold`}>Payment Schedule</p>
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
        </div>
      </section>
      <section className="flex items-center md:p-20 p-4 overflow-visible py-5 gap-4">
        <div className="flex flex-col gap-5 md:w-[70%]">
          <div className="flex flex-col">
            <p className={`text-[#6D6E71] `}>
              Plot 13, Onigefun road Oniru, VI
            </p>
            <p className={`headerFont text-3xl text-[#CAA969]`}>
              THE JADE MANOR
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className={`bodyFont text-[#6D6E71] leading-[190%]`}>
              The Jade Manor stands as a testament to architectural brilliance,
              seamlessly blending contemporary design with timeless aesthetics.
              As you step into this exclusive enclave, be prepared to immerse
              yourself in a world of unparalleled comfort and style. Each
              terrace is a masterpiece, a testament to the commitment to
              craftsmanship and attention to detail that defines the Jade Manor
              experience.
            </p>
            <p className={`bodyFont text-[#6D6E71] leading-[190%]`}>
              Welcome to The Jade Manor, where luxury living meets convenience.
              Our development comprises 10 units of meticulously designed
              4-bedroom terraces, perfectly crafted without compromising on
              comfort or style.
            </p>
            <p className={`bodyFont text-[#6D6E71] leading-[190%]`}>
              Discover a harmonious blend of expansive living spaces,
              cutting-edge technology, and bespoke finishes that create an
              atmosphere of refined luxury. From the moment you enter, you will
              be greeted by the grandeur of the surroundings, with the finest
              materials and finishes adorning every corner. The carefully
              curated interiors showcase a seamless fusion of modern aesthetics
              and classic allure, creating an ambiance that is both inviting and
              indulgent.
            </p>
            <p className={`bodyFont text-[#6D6E71] leading-[190%]`}>
              The 4-bedroom terraces at Jade Manor are not just homes; they are
              a statement of prestige and exclusivity. With spacious layouts
              that provide ample room for relaxation and entertainment, these
              residences redefine the concept of modern living. The interiors
              are designed to elevate your lifestyle, featuring high-end
              appliances, custom cabinetry, and panoramic views that capture the
              essence of Oniru&apos;s charm.
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
              <p className=" text-xs md:text-xl">Communal Swimming pool</p>
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
          </div>
        </div>
        <div className="hidden md:block w-[30%]"></div>
      </section>
      <section className={` p-4 md:p-20 gap-4 hidden headerFont`}>
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
              site={"THE JADE MANOR"}
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
              site={"THE JADE MANOR"}
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
              site={"THE JADE MANOR"}
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
              site={"THE JADE MANOR"}
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
              site={"THE JADE MANOR"}
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
      <div
        style={{ position: "sticky", bottom: 0 }}
        className=" p-4 md:hidden flex flex-col gap-2 bg-white"
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

          <p className={`headerFont text-2xl text-[#CAA969]`}>The Jade Manor</p>
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
              className={`bodyFont font-bold w-full bg-[#26282B] p-4 text-white text-sm md:text-base`}
            >
              Book a tour
            </Button>
          </Link>
          <Link
            target="_blank"
            href={
              "https://drive.google.com/uc?export=download&id=175K_a7v-H9NHe59R_biG2NU5kCLYeigc"
            }
            className={`bodyFont font-bold w-full border-[2px] border-[#26282B] text-center p-4 text-black/90 text-sm`}
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
              <p className={`bodyFont font-bold`}>Timeline</p>
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
              <p className={`bodyFont font-bold`}>Status</p>
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
              <p className={`bodyFont font-bold`}>Apartments</p>
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
              <p className={`bodyFont font-bold`}>Payment Schedule</p>
              <p className={`text-sm`}>
                <span>Now Selling</span>{" "}
                <Button
                  className={`text-sm text-blue-600 underline`}
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
        </div>
      </div>
      <Footer />
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
              The Jade Manor property at Oniru presents a compelling investment
              opportunity in the upscale real estate market. Situated in the
              exclusive Oniru neighborhood, known for its prime location and
              high-end lifestyle, these luxury 4-bedroom terraces with staff
              quarters offer a unique blend of sophistication and comfort. The
              strategic location not only provides easy access to key business
              districts but also ensures a premium living experience, attracting
              affluent individuals and families seeking a lavish urban retreat.
            </p>
            <p className={`text-[#6D6E71] bodyFont`}>
              Beyond its prime location, The Jade Manor distinguishes itself
              with state-of-the-art amenities that elevate the overall value
              proposition. From meticulously designed interiors to top-tier
              security features, the property showcases a commitment to luxury
              living. The inclusion of staff quarters adds an extra layer of
              convenience, catering to the needs of discerning buyers who value
              both privacy and personalized service. With the increasing demand
              for premium real estate in Oniru and the surrounding areas, The
              Jade Manor stands as a promising investment opportunity poised for
              appreciation and sustained value in the competitive luxury
              property market.
            </p>
          </div>
          <span className="h-[2px] bg-[#D1A55C] w-full"></span>
          <div className="flex flex-col">
            <p className={`headerFont font-bold`}>Spaces Tailored to You</p>
            <p className={`text-[#6D6E71] bodyFont`}>
              The layouts are designed with flexibility in mind, allowing
              personal customization while maintaining a sense of spaciousness
              and homeliness. The ground floor caters to social activities,
              featuring a living room, dining area for eight, and an enclosed
              kitchen ideal for both functional living and hosting.
            </p>
          </div>
          <span className="h-[2px] bg-[#D1A55C] w-full"></span>
          <div className="flex flex-col">
            <p className={`headerFont font-bold`}>Notable Landmarks</p>
            <div className={`flex flex-wrap gap-4 text-[#6D6E71] bodyFont`}>
              <div className="flex gap-2 items-start">
                <span className="p-1 h-fit rounded-full bg-[#D1A55C26] flex items-center justify-center w-fit">
                  <CheckIcon className="text-[#D1A55C]" fontSize="10px" />
                </span>
                <p>Trinity Towers</p>
              </div>
              <div className="flex gap-2 items-start">
                <span className="p-1 h-fit rounded-full bg-[#D1A55C26] flex items-center justify-center w-fit">
                  <CheckIcon className="text-[#D1A55C]" fontSize="10px" />
                </span>
                <p>RCCG City of David </p>
              </div>
              <div className="flex gap-2 items-start">
                <span className="p-1 h-fit rounded-full bg-[#D1A55C26] flex items-center justify-center w-fit">
                  <CheckIcon className="text-[#D1A55C]" fontSize="10px" />
                </span>
                <p>Landmark Beach</p>
              </div>
              <div className="flex gap-2 items-start">
                <span className="p-1 h-fit rounded-full bg-[#D1A55C26] flex items-center justify-center w-fit">
                  <CheckIcon className="text-[#D1A55C]" fontSize="10px" />
                </span>
                <p>Twin waters towers</p>
              </div>
              <div className="flex gap-2 items-start">
                <span className="p-1 h-fit rounded-full bg-[#D1A55C26] flex items-center justify-center w-fit">
                  <CheckIcon className="text-[#D1A55C]" fontSize="10px" />
                </span>
                <p>The Palms Shopping mall</p>
              </div>
              <div className="flex gap-2 items-start">
                <span className="p-1 h-fit rounded-full bg-[#D1A55C26] flex items-center justify-center w-fit">
                  <CheckIcon className="text-[#D1A55C]" fontSize="10px" />
                </span>
                <p>Oba Oniru Palace</p>
              </div>
              <div className="flex gap-2 items-start">
                <span className="p-1 h-fit rounded-full bg-[#D1A55C26] flex items-center justify-center w-fit">
                  <CheckIcon className="text-[#D1A55C]" fontSize="10px" />
                </span>
                <p>Eko Atlantic</p>
              </div>
              <div className="flex gap-2 items-start">
                <span className="p-1 h-fit rounded-full bg-[#D1A55C26] flex items-center justify-center w-fit">
                  <CheckIcon className="text-[#D1A55C]" fontSize="10px" />
                </span>
                <p>Great wall of Lagos</p>
              </div>
              <div className="flex gap-2 items-start">
                <span className="p-1 h-fit rounded-full bg-[#D1A55C26] flex items-center justify-center w-fit">
                  <CheckIcon className="text-[#D1A55C]" fontSize="10px" />
                </span>
                <p>Four Points by Sheraton</p>
              </div>
            </div>
          </div>
          <span className="h-[2px] bg-[#D1A55C] w-full"></span>
          <div className="flex flex-col">
            <p className={`headerFont font-bold`}>Key Features</p>
            <div className={`flex flex-col gap-2 text-[#6D6E71] bodyFont`}>
              <div className="flex gap-2 items-start bodyFont">
                <span className="p-1 h-fit rounded-full bg-[#D1A55C26] flex items-center justify-center w-fit">
                  <CheckIcon className="text-[#D1A55C]" fontSize="10px" />
                </span>
                <p>
                  Prime Location: Nestled in the prestigious Oniru district,
                  enjoy proximity to upscale shopping, dining, entertainment,
                  and easy access to major transportation routes.
                </p>
              </div>
              <div className="flex gap-2 items-start bodyFont">
                <span className="p-1 h-fit rounded-full bg-[#D1A55C26] flex items-center justify-center w-fit">
                  <CheckIcon className="text-[#D1A55C]" fontSize="10px" />
                </span>
                <p>
                  Spacious Interiors: Each unit boasts expansive living spaces
                  designed for comfort and functionality, featuring four
                  bedrooms, well-appointed bathrooms, and ample storage.
                </p>
              </div>
              <div className="flex gap-2 items-start bodyFont">
                <span className="p-1 h-fit rounded-full bg-[#D1A55C26] flex items-center justify-center w-fit">
                  <CheckIcon className="text-[#D1A55C]" fontSize="10px" />
                </span>
                <p>
                  Contemporary Design: Immerse yourself in contemporary
                  architecture and elegant finishes, showcasing premium
                  materials and attention to detail at every corner.
                </p>
              </div>
              <div className="flex gap-2 items-start">
                <span className="p-1 h-fit rounded-full bg-[#D1A55C26] flex items-center justify-center w-fit">
                  <CheckIcon className="text-[#D1A55C]" fontSize="10px" />
                </span>
                <p>
                  State-of-the-Art Amenities: Experience luxury at its finest
                  with access to exclusive amenities such as a communal pool,
                  fitness center, landscaped gardens, and 24/7 security.
                </p>
              </div>
              <div className="flex gap-2 items-start bodyFont">
                <span className="p-1 h-fit rounded-full bg-[#D1A55C26] flex items-center justify-center w-fit">
                  <CheckIcon className="text-[#D1A55C]" fontSize="10px" />
                </span>
                <p>
                  Personalized Touch: Customize your living space to suit your
                  preferences with optional upgrades and design.
                </p>
              </div>
            </div>
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
            href={"https://calendly.com/infobluesquareng/the-jade-manor"}
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
        <Image alt={"plan"} src={"/assets/THE_JADE_MANOR_PAYMENT_PLAN.jpeg"} />
      </Modal>
    </div>
  );
}
