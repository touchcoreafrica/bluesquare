/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import React, { useEffect, useRef, useState } from "react";
import Image from "../Image/Image";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { Popper } from "@mui/material";

import MenuTab from "../MenuTab";
import MenuItem from "../MenuItem/MenuItem";
import Button from "../Button/Button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { SlideInFromTop } from "../Animation";

import MenuItemWithSubmenu from "../MenuItem/MenuItemWithSubmenu";
import { ArrowBack } from "@mui/icons-material";
import ProjectsMenuItem from "../MenuItem/ProjectsMenuItem";

const Header = ({ className }) => {
  const router = useRouter();
  const [projectMenu, setProjectMenu] = useState("");
  const [mobileMenu, setMobileMenu] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeHeader, setActiveHeader] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const headerRef = useRef();
  const [scrollY, setScrollY] = useState({
    current: 0,
  });
  const [paddingTop, setPaddingTop] = useState(0); //animation revert paddingTop initia 2.5 and uncomment useEffection for animation
  const [mouthOut, setMouthOut] = useState(true);

  const handleClick = (event, key) => {
    setActiveMenu(key);
    setOpen(!open);
  };
  const handleMouseIn = (event, key) => {
    setActiveMenu(key);
    setOpen(true);
  };
  const handleMouseOut = (event, key) => {
    setActiveMenu(key);
    setOpen(true);
  };

  const headerMenus = [
    {
      key: "home",
      label: "Home",
      link: "/",
    },
    {
      key: "about",
      label: "About",
      content: (
        <SlideInFromTop className="hidden ml-[15%] lg:ml-[25%] xl:ml-[40%] 2xl:ml-[45%] bg-[#26282B] w-fit p-4 md:flex flex-col gap-4">
          {/* <MenuItem
            image={"/assets/home1.svg"}
            title={"Facts and Figures"}
            subtitle={"Facts about us"}
            link={"/about-us"}
            setOpen={setOpen}
          /> */}
          <MenuItem
            image={"/assets/about-us.svg"}
            title={"Who are we?"}
            subtitle={"Everything you need to know"}
            link={"/about-us#who-are-we"}
            setOpen={setOpen}
          />
          <MenuItem
            image={"/assets/about-us.svg"}
            title={"Meet the Team"}
            subtitle={"The people behind every idea"}
            link={"/about-us#meet-the-team"}
            setOpen={setOpen}
          />
        </SlideInFromTop>
      ),
    },
    {
      key: "projects",
      label: "Projects",
      content: (
        <SlideInFromTop className="hidden bg-[#26282B] w-full p-5 md:flex flex-col gap-4">
          <MenuTab
            width={" w-full "}
            menus={[
              {
                icon: (
                  <div className="bg-[#D1A55C1A] w-12 h-12 flex items-center justify-center">
                    <Image alt={"icon"} src={"/assets/completed.svg"} />
                  </div>
                ),
                title: "Completed",
                subTitle: "See what we’ve done",
                menuOptions: [
                  {
                    title: "Longonut",
                    subTitle: "Felicia Alarape, Ikate, Elegushi Lekki.",
                    image: "/assets/LongonotHeightsList.png",
                    link: "/projects/longonot-heights",
                    type: "link",
                  },
                  {
                    title: "Quantum Place",
                    link: "/projects/quantum-place",
                    subTitle: "Orisa Sanya Street, Oniru, VI Lagos.",
                    image: "/assets/QuantumPlaceList.png",
                    type: "link",
                  },
                  {
                    title: "Lunar Courts",
                    subTitle: "Oniru Private Estate, Victoria Island.",
                    image: "/assets/LunarCourtList.png",
                    link: "/projects/lunar-courts",
                    type: "link",
                  },
                ],
              },
              {
                icon: (
                  <div className="bg-[#D1A55C1A] w-12 h-12 flex items-center justify-center">
                    <Image alt={"icon"} src={"/assets/ongoing.svg"} />
                  </div>
                ),
                title: "Ongoing",
                subTitle: "See what we're doing",
                menuOptions: [
                  {
                    title: "Cove Towers",
                    subTitle: "Elegushi, Lekki",
                    image: "/assets/CoveTowersList.png",
                    link: "/projects/cove-towers",
                    type: "link",
                  },
                  {
                    title: "7 Centrale Residence",
                    link: "/projects/7-centrale",
                    image: "/assets/7CentraleList.png",
                    subTitle: "Durosimi Etti, Lekki Phase 1",
                    type: "link",
                  },
                  {
                    title: "Gazania Park",
                    subTitle: "Periwinkle Estate, Lekki Phase 1",
                    image: "/assets/GazaniaParkList.png",
                    link: "/projects/gazania-park",
                    type: "link",
                  },
                  {
                    title: "The Jade Manor",
                    link: "/projects/the-jade-manor",
                    image: "/assets/the-jade-manor-site4.png",
                    subTitle: "Onigefun street, Oniru, VI",
                    type: "link",
                  },
                ],
              },
              {
                icon: (
                  <div className="bg-[#D1A55C1A] w-12 h-12 flex items-center justify-center">
                    <Image alt={"icon"} src={"/assets/future.svg"} />
                  </div>
                ),
                title: "Future",
                subTitle: "See what we have in mind",
                menuOptions: [
                  {
                    title: "Bankole Oki Ikoyi",
                    subTitle: "Location for project",
                    image: "/assets/blank.png",
                    link: "",
                    type: "link",
                  },
                  {
                    title: "Lekki Phase 1",
                    subTitle: "Location for project",
                    image: "/assets/blank.png",
                    link: "",
                    type: "link",
                  },
                ],
              },
            ]}
          />
        </SlideInFromTop>
      ),
    },
    {
      key: "resources",
      label: "Resources",
      content: (
        <SlideInFromTop className="hidden bg-[#26282B] w-full py-10 px-14 md:grid grid-cols-4 gap-5">
          <MenuItem
            image={"/assets/blogPost.svg"}
            title={"Blog Posts"}
            subtitle={"Latest reality insights"}
            link={"/resources/blog-posts"}
            setOpen={setOpen}
          />
          {/* <MenuItem
            image={"/assets/buying.svg"}
            title={"Buying & Selling Tips"}
            subtitle={"Transaction best practices"}
            link={"/resources"}
            setOpen={setOpen}
          /> 
          <MenuItem
            image={"/assets/marketTrend.svg"}
            title={"Market Trends"}
            subtitle={"Current industry movements"}
            link={"/resources"}
            setOpen={setOpen}
          />*/}
          <MenuItem
            image={"/assets/agent.svg"}
            title={"Agent Profile"}
            subtitle={"Realtor's background and expertise"}
            link={"/resources/agent"}
            setOpen={setOpen}
          />
          {/* <MenuItem
            image={"/assets/realEstateNews.svg"}
            title={"Real Estate News"}
            subtitle={"Property sector headlines"}
            link={""}
            setOpen={setOpen}
          />
           <MenuItem
            image={"/assets/propertyValuation.svg"}
            title={"Property Valuation"}
            subtitle={"Estimate asset worth"}
            link={"/resources"}
            setOpen={setOpen}
          />
          <MenuItem
            image={"/assets/mortgageCalculator.svg"}
            title={"Mortgage Calculator"}
            subtitle={"Loan payment estimations"}
            link={"/resources"}
            setOpen={setOpen}
          />
          <MenuItem
            image={"/assets/tenant.svg"}
            title={"Tenant Resources"}
            subtitle={"Rental guides and Tips"}
            link={"/resources"}
            setOpen={setOpen}
          /> 
          <MenuItem
            image={"/assets/neighborhoodGuides.svg"}
            title={"Neighborhood Guides"}
            subtitle={"Local area overview"}
            link={"/resources/neighborhood-guides"}
            setOpen={setOpen}
          />
            <MenuItem
            image={"/assets/valueEstimator.svg"}
            title={"Home Value Estimator"}
            subtitle={"Property worth gauge"}
            link={"/resources"}
            setOpen={setOpen}
          />
          <MenuItem
            image={"/assets/marketReport.svg"}
            title={"Market Reports"}
            subtitle={"Detailed sector analyses"}
            link={"/resources"}
            setOpen={setOpen}
          />
          <MenuItem
            image={"/assets/homeMaintenance.svg"}
            title={"Home Maintenance"}
            subtitle={"Upkeep and repair tips"}
            link={"/resources"}
            setOpen={setOpen}
          /> */}
          <MenuItem
            image={"/assets/faq.svg"}
            title={"FAQs"}
            subtitle={"Frequently asked questions"}
            link={"/FAQ"}
            setOpen={setOpen}
          />
        </SlideInFromTop>
      ),
    },

    {
      key: "contactUs",
      label: "Contact Us",
      link: "/contact-us",
    },
  ];

  {
    /* useEffect(() => {
    const handleScroll = () => {
      setScrollY({ current: window.scrollY });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollY?.current) {
      console.log(scrollY.current, scrollY.current <= 200);
      setPaddingTop(
        scrollY.current <= 100 ? 2 : 2 - (scrollY.current - 100) / 20
      );
      console.log(paddingTop);
    }
  }, [scrollY?.current]); */
  }

  return (
    <>
      <div className="w-full fixed top-0 z-20 max-h-10 ">
        <motion.div
          ref={headerRef}
          className={`hidden w-full md:flex px-6 ${
            paddingTop < 2 || open ? "bg-[#111]" : ""
          } ${className ? className : ""}`}
          initial={{ paddingTop: "2.5rem" }}
          animate={{ paddingTop: `${paddingTop}rem` }}
          onMouseLeave={() => {
            if (mouthOut) {
              setActiveHeader(false);
            }
          }}
        >
          <Link href={"/"} className="w-20 h-20 p-0">
            <Image
              alt={"logo"}
              src={"/assets/blue-square-logo.png"}
              className={"h-14 w-14"}
            />
          </Link>

          <Popper
            open={open}
            anchorEl={headerRef.current}
            className="w-full z-30 mt-10"
            onMouseLeave={() => {
              setMouthOut(true);
            }}
            onMouseEnter={() => {
              setMouthOut(false);
            }}
          >
            {headerMenus.find((menu) => menu.key === activeMenu)?.content}
          </Popper>
          <div className="  flex gap-8 justify-between w-full items-center">
            <div className="flex flex-1"></div>
            {headerMenus?.map((headerMenu, index) => (
              <div
                key={index}
                className={`flex gap-1 text-xs lg:text-[15px] 2xl:text-base items-center cursor-pointer ${
                  open ? "text-[#6D6E71]" : "text-white"
                } `}
                onMouseEnter={(e) => {
                  console.log(headerMenu.key, "enter");
                  if (headerMenu?.content) {
                    handleMouseIn(e, headerMenu.key);
                    setActiveHeader(true);
                  }
                }}
                onMouseLeave={(e) => {
                  console.log(headerMenu.key, "leave");
                  // handleMouseOut(e, headerMenu.key);
                  setActiveHeader(false);
                }}
                onClick={(e) => {
                  if (headerMenu?.content) {
                    handleClick(e, headerMenu.key);
                    setActiveHeader(true);
                  } else {
                    router.push(headerMenu.link);
                  }
                }}
              >
                <p className="font-bold text-lg">{headerMenu.label}</p>
                {headerMenu.content ? (
                  <KeyboardArrowDownIcon
                    className={"text-xs lg:text-[15px] 2xl:text-base font-bold"}
                  />
                ) : null}
              </div>
            ))}
            <Button
              className={`hidden text-center text-xs lg:text-[15px] 2xl:text-base  p-2 ${
                open ? "bg-white/10 text-white/90 " : "bg-white text-black/90"
              }`}
            >
              <Link href={"/search"}>Search For a Property</Link>
            </Button>
          </div>
        </motion.div>
        <div
          onClick={() => {
            setOpen(false);
          }}
          className={`${open ? "hidden md:block" : "hidden"}  h-[100vh]`}
        ></div>
        <div
          className={` absolute p-2 top-0 flex justify-between items-center w-full md:hidden`}
        >
          <Image
            alt={"logo"}
            src={"/assets/blue-square-logo.png"}
            className={"h-10 w-10"}
          />
          <button
            onClick={() => {
              console.log("clicked");
              setIsMobileMenuOpen(true);
            }}
          >
            <MenuIcon className={`text-3xl text-[#CAA969]`} />
          </button>
          <div
            className={` overflow-scroll fixed top-0  ${
              isMobileMenuOpen ? "block" : "hidden"
            } md:hidden flex w-full h-[100vh] `}
          >
            <div
              onClick={() => {
                setIsMobileMenuOpen(false);
              }}
              className={" w-1/5  h-[100vh] "}
            ></div>
            <div
              className={
                " w-4/5 overflow-scroll bg-black h-[100vh] flex flex-col justify-between gap-4 "
              }
            >
              <div className={` flex flex-col gap-4`}>
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={` font-bold text-[#6D6E71] w-full  text-start p-4`}
                >
                  Home
                </Link>
                <button
                  onClick={() => {
                    setMobileMenu((prev) => {
                      if (prev === "about") {
                        return "";
                      }
                      return "about";
                    });
                  }}
                  className={` font-bold ${
                    mobileMenu === "about" ? "text-[#CAA969]" : "text-[#6D6E71]"
                  } w-full  text-start p-4 flex justify-between items-center`}
                >
                  About
                  {mobileMenu === "about" ? (
                    <KeyboardArrowUpIcon />
                  ) : (
                    <KeyboardArrowDownIcon />
                  )}
                </button>
                <div
                  className={`flex flex-col ${
                    mobileMenu === "about" ? "block" : "hidden"
                  }`}
                >
                  {/* <MenuItem
                    image={"/assets/home1.svg"}
                    title={"Facts and Figures"}
                    subtitle={"Facts about us"}
                    link={"/about-us"}
                    setOpen={setIsMobileMenuOpen}
                  /> */}
                  <MenuItem
                    image={"/assets/about-us.svg"}
                    title={"Who are we?"}
                    subtitle={"Everything you need to know"}
                    link={"/about-us#who-are-we"}
                    setOpen={setIsMobileMenuOpen}
                  />
                  <MenuItem
                    image={"/assets/about-us.svg"}
                    title={"Meet the Team"}
                    subtitle={"The people behind every idea"}
                    link={"/about-us#meet-the-team"}
                    setOpen={setIsMobileMenuOpen}
                  />
                </div>
                <button
                  onClick={() => {
                    setMobileMenu((prev) => {
                      if (prev === "projects") {
                        return "";
                      }
                      return "projects";
                    });
                  }}
                  className={` font-bold ${
                    mobileMenu === "projects"
                      ? "text-[#CAA969]"
                      : "text-[#6D6E71]"
                  } w-full  text-start p-4 flex justify-between items-center`}
                >
                  Projects
                  {mobileMenu === "projects" ? (
                    <KeyboardArrowUpIcon />
                  ) : (
                    <KeyboardArrowDownIcon />
                  )}
                </button>
                <div
                  className={`flex flex-col ${
                    mobileMenu === "projects" ? "block" : "hidden"
                  }`}
                >
                  <MenuItemWithSubmenu
                    image={"/assets/completed.svg"}
                    title={"Completed"}
                    handleClick={() => {
                      setProjectMenu("Completed");
                    }}
                    subtitle={"See what we’ve done"}
                    link={"/"}
                    setOpen={setOpen}
                  />
                  <MenuItemWithSubmenu
                    image={"/assets/ongoing.svg"}
                    title={"Ongoing"}
                    subtitle={"See what we’re doing"}
                    handleClick={() => {
                      setProjectMenu("Ongoing");
                    }}
                  />
                  <MenuItemWithSubmenu
                    image={"/assets/future.svg"}
                    title={"Future"}
                    subtitle={"See what we have in mind"}
                    handleClick={() => {
                      setProjectMenu("Future");
                    }}
                  />
                </div>
                <button
                  onClick={() => {
                    setMobileMenu((prev) => {
                      if (prev === "resources") {
                        return "";
                      }
                      return "resources";
                    });
                  }}
                  className={` font-bold ${
                    mobileMenu === "resources"
                      ? "text-[#CAA969]"
                      : "text-[#6D6E71]"
                  } w-full  text-start p-4 flex justify-between items-center`}
                >
                  Resources
                  {mobileMenu === "resources" ? (
                    <KeyboardArrowUpIcon />
                  ) : (
                    <KeyboardArrowDownIcon />
                  )}
                </button>
                <div
                  className={`flex flex-col ${
                    mobileMenu === "resources" ? "block" : "hidden"
                  }`}
                >
                  <MenuItem
                    image={"/assets/blogPost.svg"}
                    title={"Blog Posts"}
                    subtitle={"Latest reality insights"}
                    link={""}
                    setOpen={setIsMobileMenuOpen}
                  />
                  {/* <MenuItem
                    image={"/assets/buying.svg"}
                    title={"Buying & Selling Tips"}
                    subtitle={"Transaction best practices"}
                    link={"/resources"}
                    setOpen={setIsMobileMenuOpen}
                  />
                  <MenuItem
                    image={"/assets/marketTrend.svg"}
                    title={"Market Trends"}
                    subtitle={"Current industry movements"}
                    link={"/resources"}
                    setOpen={setIsMobileMenuOpen}
                  /> */}
                  <MenuItem
                    image={"/assets/agent.svg"}
                    title={"Agent Profile"}
                    subtitle={"Realtor's background and expertise"}
                    link={""}
                    setOpen={setIsMobileMenuOpen}
                  />
                  {/*<MenuItem
                    image={"/assets/realEstateNews.svg"}
                    title={"Real Estate News"}
                    subtitle={"Property sector headlines"}
                    link={""}
                    setOpen={setIsMobileMenuOpen}
                  />
                   <MenuItem
                    image={"/assets/propertyValuation.svg"}
                    title={"Property Valuation"}
                    subtitle={"Estimate asset worth"}
                    link={"/resources"}
                    setOpen={setIsMobileMenuOpen}
                  />
                  <MenuItem
                    image={"/assets/mortgageCalculator.svg"}
                    title={"Mortgage Calculator"}
                    subtitle={"Loan payment estimations"}
                    link={"/resources"}
                    setOpen={setIsMobileMenuOpen}
                  />
                  <MenuItem
                    image={"/assets/tenant.svg"}
                    title={"Tenant Resources"}
                    subtitle={"Rental guides and Tips"}
                    link={""}
                    setOpen={setIsMobileMenuOpen}
                  /> 
                  <MenuItem
                    image={"/assets/neighborhoodGuides.svg"}
                    title={"Neighborhood Guides"}
                    subtitle={"Local area overview"}
                    link={""}
                    setOpen={setIsMobileMenuOpen}
                  />
                  <MenuItem
                    image={"/assets/valueEstimator.svg"}
                    title={"Home Value Estimator"}
                    subtitle={"Property worth gauge"}
                    link={"/resources"}
                    setOpen={setIsMobileMenuOpen}
                  />
                  <MenuItem
                    image={"/assets/marketReport.svg"}
                    title={"Market Reports"}
                    subtitle={"Detailed sector analyses"}
                    link={"/resources"}
                    setOpen={setIsMobileMenuOpen}
                  />
                  <MenuItem
                    image={"/assets/homeMaintenance.svg"}
                    title={"Home Maintenance"}
                    subtitle={"Upkeep and repair tips"}
                    link={"/resources"}
                    setOpen={setIsMobileMenuOpen}
                  /> */}
                  <MenuItem
                    image={"/assets/faq.svg"}
                    title={"FAQs"}
                    subtitle={"Frequently asked questions"}
                    link={"/FAQ"}
                    setOpen={setIsMobileMenuOpen}
                  />
                </div>
                {/* <button
                  onClick={() => {
                    setMobileMenu((prev) => {
                      if (prev === "legal") {
                        return "";
                      }
                      return "legal";
                    });
                  }}
                  className={` font-bold ${
                    mobileMenu === "legal" ? "text-[#CAA969]" : "text-[#6D6E71]"
                  } w-full  text-start p-4 flex justify-between items-center`}
                >
                  Legal
                  {mobileMenu === "legal" ? (
                    <KeyboardArrowUpIcon />
                  ) : (
                    <KeyboardArrowDownIcon />
                  )}
                </button> */}

                <button
                  className={` font-bold text-[#6D6E71] w-full  text-start p-4`}
                >
                  Contact Us
                </button>
              </div>
              {/* <button
                className={`hidden  bg-[#f8f8f8]/20 text-white w-full  text-center p-4`}
              >
                Search for a property
              </button> */}
            </div>
          </div>
          <div
            className={` overflow-scroll fixed top-0  ${
              projectMenu !== "" ? "block" : "hidden"
            } md:hidden flex w-full h-[100vh] `}
          >
            <div
              onClick={() => {
                setIsMobileMenuOpen(false);
                setProjectMenu("");
              }}
              className={" w-1/5  h-[100vh] "}
            ></div>
            <div
              className={
                " w-4/5 overflow-scroll bg-black h-[100vh] flex flex-col gap-4 "
              }
            >
              <div className={`flex gap-4 p-4 items-center`}>
                <ArrowBack
                  className={`text-[#f8f8f8]`}
                  onClick={() => {
                    setProjectMenu("");
                  }}
                />
                <p className={`text-[#f8f8f8]`}>
                  {projectMenu === "Completed"
                    ? "Completed"
                    : projectMenu === "Ongoing"
                    ? "Ongoing"
                    : "Future"}
                  Projects
                </p>
              </div>
              {projectMenu === "Completed" ? (
                <div className={`flex flex-col px-4 gap-2`}>
                  <ProjectsMenuItem
                    title="Longonut"
                    subTitle="Felicia Alarape, Ikate, Elegushi Lekki."
                    image="/assets/LongonotHeightsList.png"
                    link="/projects/longonot-heights"
                    setMenuState={setIsMobileMenuOpen}
                    setProjectMenu={setProjectMenu}
                  />
                  <ProjectsMenuItem
                    title="Quantum Place"
                    link="/projects/quantum-place"
                    subTitle="Orisa Sanya Street, Oniru, VI Lagos."
                    image="/assets/QuantumPlaceList.png"
                    setMenuState={setIsMobileMenuOpen}
                    setProjectMenu={setProjectMenu}
                  />
                  <ProjectsMenuItem
                    title="Lunar Courts"
                    subTitle="Oniru Private Estate, Victoria Island."
                    image="/assets/LunarCourtList.png"
                    link="/projects/lunar-courts"
                    setMenuState={setIsMobileMenuOpen}
                    setProjectMenu={setProjectMenu}
                  />
                </div>
              ) : projectMenu === "Ongoing" ? (
                <div className={`flex flex-col  gap-2 px-4`}>
                  <ProjectsMenuItem
                    title="Cove Towers"
                    subTitle=""
                    image="/assets/CoveTowersList.png"
                    link="/projects/cove-towers"
                    setMenuState={setIsMobileMenuOpen}
                    setProjectMenu={setProjectMenu}
                  />
                  <ProjectsMenuItem
                    title="7 Centrale Residence"
                    link="/projects/7-centrale"
                    image="/assets/7CentraleList.png"
                    subTitle=""
                    setMenuState={setIsMobileMenuOpen}
                    setProjectMenu={setProjectMenu}
                  />
                  <ProjectsMenuItem
                    title="Gazania Park"
                    subTitle=""
                    image="/assets/GazaniaParkList.png"
                    link="/projects/gazania-park"
                    setMenuState={setIsMobileMenuOpen}
                    setProjectMenu={setProjectMenu}
                  />
                  <ProjectsMenuItem
                    title="The Jade Manor"
                    subTitle=""
                    image="/assets/the-jade-manor-site4.png"
                    link="/projects/the-jade-manor"
                    setMenuState={setIsMobileMenuOpen}
                    setProjectMenu={setProjectMenu}
                  />
                  {/*    <ProjectsMenuItem
                    title="Oniru Project"
                    subTitle=""
                    image="/assets/CoveTowersList.png"
                    link="/projects/oniru"
                    setMenuState={setIsMobileMenuOpen}
                    setProjectMenu={setProjectMenu}
                  /> */}
                </div>
              ) : (
                <div className={`flex flex-col  gap-2 px-4`}>
                  <ProjectsMenuItem
                    title="Bankole Oki,Ikoyi"
                    subTitle=""
                    image="/assets/CoveTowersList.png"
                    link=""
                    setMenuState={setIsMobileMenuOpen}
                    setProjectMenu={setProjectMenu}
                  />
                  <ProjectsMenuItem
                    title="Lekki Phase 1"
                    link=""
                    image="/assets/7CentraleList.png"
                    subTitle=""
                    setMenuState={setIsMobileMenuOpen}
                    setProjectMenu={setProjectMenu}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

/* {
      key: "legal",
      label: "Legal",
      content: (
        <SlideInFromTop className=" bg-[#26282B] w-full py-10 px-14 grid grid-cols-4 gap-5">
          <MenuItem
            link={"/legal#terms-and-conditions"}
            image={"/assets/terms-and-conditions.svg"}
            title={"Terms and Conditions"}
            subtitle={"Contractual agreement rules"}
            setOpen={setOpen}
          />
          <MenuItem
            link={"/legal#privacy-policy"}
            image={"/assets/privacy-policy.svg"}
            title={"Privacy Policy"}
            subtitle={"User data protection details"}
            setOpen={setOpen}
          />
          <MenuItem
            link={"/legal#terms-of-use"}
            image={"/assets/terms-of-use.svg"}
            title={"Terms of Use"}
            subtitle={"Website access guidelines"}
            setOpen={setOpen}
          />
          <MenuItem
            link={"/legal#real-estate-glossary"}
            image={"/assets/real-estate-glossary.svg"}
            title={"Real Estate Glossaty"}
            subtitle={"Property terminology explained"}
            setOpen={setOpen}
          />
          <MenuItem
            link={"/legal#cookie-policy"}
            image={"/assets/cookies-policies.svg"}
            title={"Cookie Policy"}
            subtitle={"Managing site data storage"}
            setOpen={setOpen}
          />
        </SlideInFromTop>
      ),
    }, */

{
  /* <div
                  className={`flex flex-col ${
                    mobileMenu === "legal" ? "block" : "hidden"
                  }`}
                >
                  <MenuItem
                    link={"/legal#terms-and-conditions"}
                    image={"/assets/terms-and-conditions.svg"}
                    title={"Terms and Conditions"}
                    subtitle={"Contractual agreement rules"}
                    setOpen={setIsMobileMenuOpen}
                  />
                  <MenuItem
                    link={"/legal#privacy-policy"}
                    image={"/assets/privacy-policy.svg"}
                    title={"Privacy Policy"}
                    subtitle={"User data protection details"}
                    setOpen={setIsMobileMenuOpen}
                  />
                  <MenuItem
                    link={"/legal#terms-of-use"}
                    image={"/assets/terms-of-use.svg"}
                    title={"Terms of Use"}
                    subtitle={"Website access guidelines"}
                    setOpen={setIsMobileMenuOpen}
                  />
                  <MenuItem
                    link={"/legal#real-estate-glossary"}
                    image={"/assets/real-estate-glossary.svg"}
                    title={"Real Estate Glossaty"}
                    subtitle={"Property terminology explained"}
                    setOpen={setIsMobileMenuOpen}
                  />
                  <MenuItem
                    link={"/legal#cookie-policy"}
                    image={"/assets/cookies-policies.svg"}
                    title={"Cookie Policy"}
                    subtitle={"Managing site data storage"}
                    setOpen={setIsMobileMenuOpen}
                  />
                </div> */
}
