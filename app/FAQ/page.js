"use client";

import React, { useEffect, useState } from "react";

import Footer from "@/components/Footer/Footer";
import ResourceCard from "@/components/ResourceCard/ResourceCard";
import { useAnimation, motion } from "framer-motion";
import { SlideFromRtoL } from "@/components/Animation";
import FAQCard from "@/components/FAQCard/FAQCard";

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
            Frequently Asked Questions
          </p>
        </section>
        <section className={`flex flex-col p-4 md:p-20 items-center gap-4`}>
          <FAQCard
            question={
              "How do I start the home-buying process with Blue Square?"
            }
            answer={
              "We make it easy to begin your journey. Simply explore our available properties, attend a property tour, or get in touch with us on 09169448069 to discuss your preferences."
            }
          />
          <FAQCard
            question={"What types of properties does Blue Square offer?"}
            answer={
              "Blue Square specializes in a diverse range of residential properties, including studios, apartments, penthouses, and luxury homes. Each property is crafted with attention to quality and detail."
            }
          />
          <FAQCard
            question={
              "How can I stay updated on available properties and new developments?"
            }
            answer={
              "Stay informed by subscribing to our newsletter, following our social media channels, or regularly checking our website's property listings and blog for the latest updates."
            }
          />
          <FAQCard
            question={
              "What sets Blue Square apart from other real estate agencies?"
            }
            answer={
              "Blue Square distinguishes itself through a commitment to quality, transparent transactions, and a passion for creating not just homes but lifestyles. Our customer-centric approach ensures a seamless experience."
            }
          />
          <FAQCard
            question={
              "Can I invest in Blue Square properties for rental income?"
            }
            answer={
              "We offer investment opportunities tailored for rental income. Explore our portfolio and consult with our investment specialists to find the right fit for your goals."
            }
          />
          <FAQCard
            question={
              "How does Blue Square ensure the security and legality of its properties?"
            }
            answer={
              "Blue Square adheres to rigorous legal and regulatory standards. Our properties undergo thorough due diligence, and our legal team ensures that every transaction is secure and compliant."
            }
          />
          <FAQCard
            question={"What mortgage options are available for homebuyers?"}
            answer={
              "Blue Square collaborates with reputable financial institutions to provide financing solutions. We can guide you through the available options and connect you with our trusted partners."
            }
          />
          <FAQCard
            question={
              "Are there additional costs beyond the property purchase price?"
            }
            answer={
              "We are transparent about associated costs, including legal fees, documentation fees, and applicable taxes. Our team will provide a detailed breakdown during the purchasing process."
            }
          />
          <FAQCard
            question={
              "How does Blue Square handle property maintenance and after-sales service?"
            }
            answer={
              "We prioritize customer satisfaction. Our after-sales service includes ongoing support, a dedicated property management team, and access to maintenance services to ensure your property remains in prime condition."
            }
          />
          <FAQCard
            question={"Can I schedule a visit to Blue Square properties?"}
            answer={
              "Reach out to our team to schedule a property tour or visit. We'll be delighted to showcase our properties and answer any questions you may have."
            }
          />
          <FAQCard
            question={
              "Is Blue Square involved in community development initiatives?"
            }
            answer={
              "Yes, we are committed to community well-being. Learn more about our social responsibility initiatives and how we contribute to the neighborhoods where we operate."
            }
          />
          <FAQCard
            question={
              "How can I contact Blue Square for further inquiries or assistance?"
            }
            answer={
              "Contact us via phone at 09169448069, email at info@bluesquareng.com, or visit our office. Our team is ready to assist you on your real estate journey.\n Feel free to reach out to us if you have any other questions or if you require additional information. We're here to make your experience with Blue Square exceptional."
            }
          />
        </section>
      </SlideFromRtoL>
      <Footer />
    </div>
  );
};

export default Page;
