"use client";

import React, { useEffect, useState } from "react";

import Footer from "@/components/Footer/Footer";
import ResourceCard from "@/components/ResourceCard/ResourceCard";
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
    <div className={`min-h-screen w-full bg-white`}>
      <SlideFromRtoL>
        <div className="absolute top-0 bg-cover bg-[url('/assets/ResourceBanner.png')] h-[85vh] bg-origin-content w-full bg-no-repeat" />
        <section className={`h-[85vh] w-full flex items-end justify-end`}>
          <motion.div
            className="banner-overlay"
            initial={{ background: "rgba(0, 0, 0, 0)" }}
            animate={controls}
          ></motion.div>
          <p className={`bg-white z-10 p-5 text-3xl md:text-5xl headerFont`}>
            Resources
          </p>
        </section>
        <section className={`flex flex-col p-4 md:p-20 items-center gap-4`}>
          <h1 className={`headerFont text-3xl md:text-6xl`}>
            Find what you want
          </h1>
          <p className={`bodyFont text-black/60 md:text-lg`}>
            Empowering Your Property Dreams: Comprehensive Tools and Insights
            for Buyers, Sellers, and Investors.
          </p>
          <div className="flex flex-wrap w-full justify-between py-10">
            <ResourceCard
              link={"/FAQ"}
              className={"md:w-[32%] "}
              icon={"/assets/faq.svg"}
              title={"Frequently Asked Questions"}
              subtitle={
                "Find answers to common queries in our FAQ section. Whether you're a buyer, seller, or investor, these curated responses offer clarity on various aspects of the real estate process."
              }
            />
            <ResourceCard
              link={
                "https://docs.google.com/document/d/1RepNx67gxNfdligvD056W4nUcKkIG_asBBV7NMToOeA/edit#heading=h.9fldvhpofk5j"
              }
              className={"md:w-[32%] "}
              icon={"/assets/blogPost.svg"}
              title={"Blog Post"}
              subtitle={
                "Discover our rich repository of insightful blog posts. From the latest trends in real estate to expert advice on home improvement, our blog is your go-to resource for staying informed and inspired."
              }
            />
            <ResourceCard
              link={""}
              className={"md:w-[32%] "}
              icon={"/assets/buying.svg"}
              title={"Buying & Selling"}
              subtitle={
                "Explore comprehensive guides on buying and selling properties with us. Find valuable insights and tips to make informed decisions at every step."
              }
            />
            {/*  <ResourceCard
              link={""}
              className={"md:w-[32%] "}
              icon={"/assets/marketTrend.svg"}
              title={"Market Trends"}
              subtitle={
                "Stay ahead of the curve with our in-depth market trend analysis. Uncover the latest developments, investment opportunities, and emerging patterns shaping the real estate landscape"
              }
            /> */}
            <ResourceCard
              link={
                "https://docs.google.com/document/d/1r0Hl6rkmtYPNjJsFV585sRiGnUFtkwm8vaCSF8B1Jgc/edit"
              }
              className={"md:w-[32%] "}
              icon={"/assets/agent.svg"}
              title={"Agents Profile"}
              subtitle={
                "Embark on a rewarding journey with Blue Square as a valued affiliate. Our Agents Profile section is an invitation to real estate professionals who seek an empowered partnership."
              }
            />
            <ResourceCard
              link={
                "https://docs.google.com/document/d/1CLsxAV9RO8d5AtXhntH7EhgeDGEapY8zZokJYgxQDhc/edit?usp=sharing"
              }
              className={"md:w-[32%] "}
              icon={"/assets/realEstateNews.svg"}
              title={"Real Estate News"}
              subtitle={
                "Stay informed with the latest happenings in Lagos real estate and beyond. Our real-time updates cover industry news, regulatory changes, and market shifts that could impact your property decisions."
              }
            />
            {/*  <ResourceCard
              link={""}
              className={"md:w-[32%] "}
              icon={"/assets/propertyValuation.svg"}
              title={"Property Valuation"}
              subtitle={
                "Discover the true value of your property. Access our property valuation tools to get an accurate estimate, empowering you with valuable insights whether you're buying, selling, or refinancing."
              }
            /> 
            <ResourceCard
              link={""}
              className={"md:w-[32%] "}
              icon={"/assets/mortgageCalculator.svg"}
              title={"Mortgage Calculator"}
              subtitle={
                "Plan your finances confidently with our mortgage calculator. Tailor your calculations to explore mortgage options, understand repayment schedules, and make informed decisions about your home financing."
              }
            />*/}
            <ResourceCard
              link={
                "https://docs.google.com/document/d/1scACSK-W1BcQuXOuKkqEMF2KeMmIw3etvCRrrhjkGQA/edit"
              }
              className={"md:w-[32%] "}
              icon={"/assets/neighborhoodGuides.svg"}
              title={"Neighborhood Guides"}
              subtitle={
                "Explore the neighborhoods we serve. Our detailed guides offer a glimpse into the characteristics, amenities, and lifestyle each community has to offer."
              }
            />{" "}
            {/* <ResourceCard
              link={""}
              className={"md:w-[32%] "}
              icon={"/assets/valueEstimator.svg"}
              title={"Home Value Estimator"}
              subtitle={
                "Curious about your property's worth? Use our home value estimator for a quick and accurate assessment, providing you with valuable data for your real estate decisions."
              }
            /> 
            <ResourceCard
              link={""}
              className={"md:w-[32%] "}
              icon={"/assets/marketReport.svg"}
              title={"Market Reports"}
              subtitle={
                "Dive deep into our market reports for a comprehensive understanding of real estate trends. Informed by data and analysis, these reports equip you with the knowledge to make strategic property decisions."
              }
            />
            <ResourceCard
              link={""}
              className={"md:w-[32%] "}
              icon={"/assets/homeMaintenance.svg"}
              title={"Home Maintenance"}
              subtitle={
                "Maintain the longevity and charm of your home. Our home maintenance guides provide practical tips and advice to keep your property in top condition."
              }
            />*/}
          </div>
        </section>
      </SlideFromRtoL>
      <Footer />
    </div>
  );
};

export default Page;
