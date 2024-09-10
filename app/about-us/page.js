"use client";

import React, { useEffect, useState } from "react";

import FactCard from "@/components/FactCard/FactCard";
import CheckIcon from "@/components/CheckIcon/CheckIcon";
import TeamCard from "@/components/TeamCard/TeamCard";
import Footer from "@/components/Footer/Footer";
import { SlideFromRtoL } from "@/components/Animation";
import { useAnimation, motion } from "framer-motion";

const team = [
  {
    name: "Mr. Adekunle Sonola",
    position: "Director",
    picture: "/adekunle.png",
    descriptions: [
      "Mr. Sonola is a distinguished boardroom stalwart with over 33 years of extensive experience across Africa's financial services sector. He holds a bachelor's degree in English Language from Ogun State University, an LL.B in Law from Obafemi Awolowo University, and an MBA from Durham University Business School in the United Kingdom. His career highlights include serving as Chief Executive Officer at Polaris Bank and as Executive Director of Commercial Banking at Union Bank Plc from 2015 to March 2021. His international experience is notable, having been the pioneer Regional Managing Director of Guaranty Trust Bank East Africa, where he successfully established the franchise in Uganda, Rwanda, and Kenya. He advanced from a member of the Corporate Finance Group to Divisional Head of Corporate Banking and also held the position of Director of Investment Banking Africa for Standard Bank of South Africa. Mr. Adekunle has served on the boards of Airtel Africa Plc and First Bank of Nigeria, where he chaired the Board’s Risk Management Committee.",
    ],
  },
  {
    name: "Mr. Babasola Aluko",
    position: "Director",
    picture: "/babasola.png",
    descriptions: [
      "Babasola Aluko is a seasoned professional with over 20 years banking experience. He started his banking career in Chartered bank as a relationship officer in one of the branches. His experience in banking was largely in customer facing units and relationship management. He was the Head of Financial Institutions and International Organizations from Ecobank Nigeria. He held the position for 5years before resigning in 2019. While at Ecobank Nigeria, he broadened the Bank’s relationship with offshore banks and coordinated the Bank’s debut loan syndication where the Bank raised over $150 million from foreign banks. He is involved in several entrepreneurial activities after disengaging from banking. He currently has interests in Mining, Agriculture, real estate both in Nigeria and abroad. He is currently a Director in Blue Square Limited a real estate development company and on the board of other companies. Babasola has a B.Eng (Hons) in Civil Engineering from University of Ilorin and MBA (Marketing) from the Obafemi Awolowo University.",
    ],
  },
  {
    name: "Mrs. Morayo Oyeleke",
    position: "Director",
    picture: "/morayo.jpg",
    descriptions: [
      "Mrs. Oyeleke, has 25+ years of diverse management level experience cutting across various functions and customer value chains in the Banking and Finance Industry – including audit, internal control, commercial and retail banking – and Management Consulting. An experienced HR Leader with an excellent appreciation of C-suite pain points and with areas of expertise in Human Capital Strategy Development and Implementation and Talent Management, Morayo led the HR function of Guaranty Trust Bank for eight years bringing to bear her deep multi-sector expertise, leading largescale talent management. In addition, she has also worked In Union Bank leading the Leadership and Culture transformation initiatives across various divisions. Prior to serving at GTB, Mrs. Morayo Oyeleke worked at an audit firm, Adetona Isichei and Co. serving as an internal control and audit consultant. She currently leads a management consultancy firm where she is responsible for delivering talent transformation solutions for her clients cutting across multiple industries and sectors. Mrs. Morayo Oyeleke is an alumnus of executive education programmes at Insead, IMD, Cranfield and Harvard and holds a Bachelor of Science in Statistics from the University of Ibadan, Nigeria. She is an associate member of the Association of Chartered Accountants and an affiliate member of the Chartered Institute of Personnel Development, UK.",
    ],
  },
  {
    name: "Omotoyosi Ajayi",
    position: "Head of Marketing and Communications",
    picture: "/omotoyosi.png",
    descriptions: [
      "Omotoyosi Ajayi is a Branding and Communications Professional, adding long term value to the bottom line of brands through Integrated Marketing Communications, Public Relations, Brand Management, and Personal Branding. She leverages branding and communications as a tool for reinforcing value proposition, which leads to improved financial performance, higher productivity, brand recognition, and customer satisfaction. She has vast experience consulting for organizations and executives in providing marketing, brand management, public relations, and personal branding services, helping them to move from one level of growth to a higher level of growth, by developing effective marketing and communications strategies and equipping professionals with the confidence and competence needed to thrive.",
    ],
  },
  {
    name: "Mr. Gbemisola Sijuade",
    position: "Head of Sales",
    picture: "/gbemisola.png",
    descriptions: [
      "Gbemisola is a seasoned Sales professional with over 20 years of experience. She is highly motivated with extensive customer service and sales experienc. She has a track record of driving increased sales, improving buying experience and elevating the company profile with target market. A team player extraordinaire, resourceful, hardworking and result-oriented.",
    ],
  },
  {
    name: "Hammed Otunla",
    position: "Construction Manager/Structural Engineer",
    picture: "/hammed.jpg",
    descriptions: [
      "Engr. Hammed A. Otunla {MNSE, MNICE, R. Engr. COREN} is a trained and licensed Civil Engineer with over 15 years’ experience structural design, construction management and project management. He has managed different projects ranging from residential/commercial to institutional developments. He is a graduate of Civil Engineering from Federal Polytechnic Ilaro Ogun State and Federal university of Technology Akure Ondo State respectively.",
    ],
  },
  {
    name: "Oiza Effanga",
    position: "Project manager",
    picture: "/oiza.png",
    descriptions: [
      "A registered Architect and Project Manager with a cumulative of 10 years’ experience in the construction industry. She has been involved in and successfully anchored and executed several projects ranging from design to construction of multiple type residential developments, commercial and institutional projects. Her major strengths are in strategy and leadership capacity which enable her lead separate teams with different briefs as well as achieving fundamental improvements in the organization’s productivity and profitability",
    ],
  },
  {
    name: "Abiola Olanrewaju",
    position: "Finance manager",
    picture: "/abiola.png",
    descriptions: [
      "Olanrewaju Abiola is a Chartered Accountant with extensive experience spanning multiple industries. She earned a Bachelor of Science degree from Obafemi Awolowo University, Ile-Ife and a Master of Business Administration with a specialization in Finance from the University of Lagos.",
      "Throughout her career, she has demonstrated exceptional expertise in financial management, accounting, and taxation. Her professional journey is marked by significant contributions to various organizations, where she has applied her skills to enhance financial performance, ensure regulatory compliance, and drive strategic initiatives.",
      "As an Associate Member of both the Institute of Chartered Accountants of Nigeria (ICAN) and the Chartered Institute of Taxation of Nigeria (CITN), she remains committed to maintaining the highest standards of professional integrity and continuous learning. Her knowledge and practical experience make her a valuable asset to any organization seeking financial excellence and sustainable growth.",
    ],
  },
  // {
  //   name: "Fidel Okwuokei",
  //   position: "Architect and Finishing Manager",
  //   picture: "/fidel.png",
  //   descriptions: [
  //     "Fidel Okwuokei is a licenced arechitect . He obtained a B.Sc degree (Second Class Upper Division) in architecture and a masters degree both from the university of Jos, an MBA in Business Administration and also a Master Degree in Facilities management he obtained from Heriot Watt University in the united kingdom. He served with Design Union Consulting LLC, one of the leading consulting firms in Nigeria and West Africa for seven years, during his service at Design Union he rose from the position of Project Architect top general manager in charge of contract administration. He has vast experience in the construction industry spanning from the famous Grand Hotel in Asaba which he was the pioneer contractor/ consultant that built the hotel with Rofega Consultants (a construction company based in Jos). Fidel actively participated in the remodeling of the burnt terminus market in Jos in 2001. He served his Fatherland in Nasasrawa state ministry of works and was the team lead that help remodel the burnt orientation camp in Keffi, this earned him a state award from the National Youth Service Corp.",
  //   ],
  // },
  {
    name: "Elizabeth,  Ekpiken-okeke",
    position: "HUMAN RESOURCE AND ADMIN MANAGER",
    picture: "/elizabeth.png",
    descriptions: [
      "She is a seasoned legal professional with a distinguished career spanning over a decade. Holding a Bachelor of Law (LL.B) from the University of Ibadan and a Barrister at Law (B.L) from the Nigerian Law School, Lagos, Elizabeth has a strong foundation in legal principles and procedures.",
      "Beyond her legal expertise, Elizabeth has cultivated a deep understanding of the financial, real estate, and oil and gas industries. Her career journey has been enriched by advanced training in Strategic Human Resource Leadership, Total Reward, Compensation & Benefits, and Payroll Management.",
      "Currently, she is the Head of Human Resources and Administration at Blue Square . In this pivotal role, she oversees HR and administrative functions, leveraging their extensive knowledge in employee and labor relations, HR management, training, and development. The strategic insight and commitment to excellence has been instrumental in driving organizational success.",
      "Elizabeth is a dedicated professional who adheres to the highest ethical standards. With a diverse background and a continuous pursuit of learning, She is a valuable asset in aligning corporate goals with employee engagement and business growth.",
    ],
  },
];

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
    const maxScroll = window.innerHeight * 0.75; // Adjust this value to determine when the banner is fully scrolled

    const opacity = Math.min(1, scrollPosition / maxScroll);

    controls.start({
      background: `rgba(0, 0, 0, ${opacity})`,
      transition: { duration: 0, delay: 0 },
    });
  }, [scrollPosition, controls]);

  return (
    <div className="bg-white">
      <SlideFromRtoL>
        <div className="absolute top-0 bg-cover bg-[url('/assets/AboutUsBan.png')] h-[85vh] bg-origin-content w-full bg-no-repeat" />
        <section className={`h-[85vh] w-full flex items-end justify-end`}>
          <motion.div
            className="banner-overlay"
            initial={{ background: "rgba(0, 0, 0, 0)" }}
            animate={controls}
          ></motion.div>
          <p className={`z-10 bg-white p-5 text-3xl md:text-5xl headerFont`}>
            About Us
          </p>
        </section>
        <div className="hidden mb-[-150px] pt-4 w-2/12 md:flex flex-col gap-4 sticky top-16 left-20">
          <button
            className={` text-white p-3`}
            style={{
              background:
                "linear-gradient(78deg, #835A03 0%, #CAA969 66.54%, #835A03 100%)",

              boxShadow:
                "0px 24px 50px 0px rgba(38, 40, 43, 0.30), 0px 10px 20px 0px rgba(38, 40, 43, 0.20)",
            }}
          >
            Who are we?
          </button>

          <p className={`text-black/60`}>Meet the team</p>
        </div>
        <section
          className="hidden p-4 md:p-20 w-full gap-10 bg-[#F8F8F8]"
          // style={{ display: "unset", backgroundColor: "#F8F8F8" }}
        >
          <div className="hidden w-2/12 md:flex flex-col gap-4 sticky top-10 left-20"></div>
          <div className="md:float-right  w-full md:px-20 md:w-10/12 flex flex-col gap-5">
            <h1 className={`headerFont text-3xl md:text-5xl`}>
              Facts and Figures
            </h1>
            <div className="flex flex-wrap justify-between">
              <FactCard
                title={"150+"}
                subtitle={"Newly built units sold"}
                className={"w-full md:w-[32%] mb-5"}
              />
              <FactCard
                title={"335,500+"}
                subtitle={"Sqft of residential living spaces"}
                className={"w-full md:w-[32%] mb-5"}
              />

              <FactCard
                title={"Development and Expansion"}
                subtitle={
                  "Expansion into global and local markets with estimated value of over $100 million upon completion" +
                  <br /> +
                  <br /> +
                  "High return on investment (ROI), average rental yield, and occupancy ratios."
                }
                className={"w-full md:w-[32%] mb-5"}
              />
              <FactCard
                title={"Regulatory compliance"}
                subtitle={
                  "Blue Square Limited maintains a 100% compliance rate with local real estate regulations across all operational regions."
                }
                className={"w-full md:w-[32%] mb-5"}
              />
              <FactCard
                title={"Legal affairs"}
                subtitle={
                  "No ongoing legal disputes or litigations affecting current operations."
                }
                className={"w-full md:w-[32%] mb-5"}
              />
            </div>
          </div>
        </section>
        <section className="flex p-4 md:p-20 w-full gap-10" id="who-are-we">
          <div className="hidden w-2/12 md:flex flex-col gap-4"></div>
          <div className="md:w-10/12 flex flex-col gap-5">
            <h1 className={`headerFont text-3xl md:text-5xl`}>Who are we?</h1>
            <div className={`flex flex-col gap-3`}>
              <p
                className={`bodyFont text-black/60  md:text-[18px] leading-[190%]`}
              >
                We are a leading property development company in Nigeria,
                delivering distinct, stylish and functional living spaces to
                clients.
                <br />
                Our projects are primarily concentrated in high growth areas,
                with flagship developments in Lekki, Ikoyi and Victoria Island
                respectively.
                <br /> Passionate about building superior homes and inspiring
                living environments for families, with a deep-seated commitment
                to unlocking exceptional value for our customers, we never
                compromise on acceptable standards. We collaborate with the
                finest architects, landscapers, designers and contractors, to
                create beautiful homes, where people love to live, work and
                play.
                <br />
                We are a preferred choice for anyone seeking a secure family
                oriented destination and a fulfilling lifestyle with high yield
                property investment that consistently exceeds expected returns.
              </p>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/iq_163TmBN0?si=gPVzcbVJmIBaKGhB&amp;controls=0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div className="flex flex-col md:flex-row flex-wrap pt-5 gap-5 justify-between">
              <div className="flex flex-col gap-5 md:w-[48%] md:mb-20">
                <h2 className={`headerFont text-2xl md:text-4xl`}>
                  Our Mission
                </h2>
                <p
                  className={`bodyFont text-black/60 text-[18px] leading-[190%]`}
                >
                  To consistently deliver modern, functional, secure and
                  innovative homes, for people to truly live well whilst
                  providing sustainable investment opportunities.
                </p>
              </div>
              <div className="flex flex-col gap-5 md:w-[48%] md:mb-20">
                <h2 className={`headerFont text-2xl md:text-4xl`}>
                  Our Vision
                </h2>
                <p
                  className={`bodyFont text-black/60 text-[18px] leading-[190%]`}
                >
                  Our vision is to set the standard for successful real estate
                  investment in Nigeria and across Africa, driven by integrity,
                  innovation, and a deep-seated commitment to excellence.
                </p>
              </div>
              <div className="flex flex-col gap-5 md:w-[48%]">
                <h2 className={`headerFont text-2xl md:text-4xl`}>
                  Core Values
                </h2>
                <div className="flex flex-col gap-3">
                  <div className="flex gap-4 items-center">
                    <CheckIcon />
                    <p className={`bodyFont text-black/60`}>Innovation</p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <CheckIcon />
                    <p className={`bodyFont text-black/60`}>Integrity</p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <CheckIcon />
                    <p className={`bodyFont text-black/60`}>Excellence</p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <CheckIcon />
                    <p className={`bodyFont text-black/60`}>
                      Customer Centricity
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5 md:w-[48%]">
                <h2 className={`headerFont text-2xl md:text-4xl`}>
                  Our Services
                </h2>
                <div className="flex flex-col gap-3">
                  <div className="flex gap-4 items-center">
                    <CheckIcon />
                    <p className={`bodyFont text-black/60`}>
                      Property Development
                    </p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <CheckIcon />
                    <p className={`bodyFont text-black/60`}>
                      Property Management & Lettings
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="flex md:p-20 p-4 w-full gap-10 bg-[#F8F8F8]"
          id="meet-the-team"
        >
          <div className="hidden w-2/12 md:flex flex-col gap-4"></div>
          <div className="md:w-10/12 flex flex-col gap-5">
            <h1 className={`headerFont text-3xl md:text-5xl text-black`}>
              Meet the Team
            </h1>
            <div className="flex flex-col gap-4">
              {team?.map((person, index) => (
                <TeamCard
                  key={index}
                  name={person?.name}
                  position={person?.position}
                  className={"w-full"}
                  pic={person?.picture}
                  detail={person?.descriptions}
                />
              ))}
            </div>
          </div>
        </section>
      </SlideFromRtoL>
      <Footer />
    </div>
  );
};

export default Page;
