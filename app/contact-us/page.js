"use client";

import React from "react";

import Image from "@/components/Image/Image";
import Footer from "@/components/Footer/Footer";
import TextField from "@/components/TextField/TextField";
import Button from "@/components/Button/Button";
import Link from "next/link";
import ContactUs from "@/components/ContactUs/ContactUs";

const page = () => {
  return (
    <div className={`min-h-screen w-full bg-white`}>
      <section className="w-full flex flex-col bg-[url('/assets/contact-banner.png')] bg-cover  gap-4 min-h-[85vh] items-end justify-end">
        <p className={`z-10 bg-white p-5 text-3xl md:text-5xl headerFont`}>
          Contact Us
        </p>
      </section>
      <section className="flex w-full md:flex-row flex-col md:pt-20 gap-4">
        <div className="flex flex-col gap-10 rounded-lg md:rounded-none md:w-1/2 bg-[#26282B] p-5 justify-between">
          <div className="flex flex-col gap-4 w-[90%]">
            <p className="headerFont text-white font-black text-2xl md:text-4xl">
              Send us a message
            </p>
            <p className="text-[#808A9E] pr-20">
              Have questions, feedback, or want to collaborate? Reach out to us
              through the following channels
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-3 items-center">
              <Image alt={"call"} src={"/assets/callLight.svg"} />
              <p className="text-white">09169448069</p>
            </div>
            <div className="flex gap-3 items-center">
              <Image alt={"email"} src={"/assets/emailLight.svg"} />
              <div className="flex flex-col gap-2">
                <p className="text-white">info@bluesquareng.com,</p>
                <p className="text-white">marketing@bluesquareng.com</p>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <Image alt={"working hour"} src={"/assets/hourLight.svg"} />
              <p className="text-white">Mon – Fri: 9 AM – 6 PM</p>
            </div>
            <div className="flex gap-3 items-center">
              <Image alt={"location"} src={"/assets/addressLight.svg"} />
              <p className="text-white">
                7, Sumbo Jibowu Street, S.W. Ikoyi, Lagos
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <Image alt={"X"} src={"/assets/xLight.svg"} />
            <Image alt={"facebook"} src={"/assets/facebookLight.svg"} />
            <Image alt={"instagram"} src={"/assets/instagramLight.svg"} />
          </div>
        </div>
        <div className="w-1/2">
          <ContactUs />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default page;
