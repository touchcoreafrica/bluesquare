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
      <section className="w-full flex flex-col bg-[url('/assets/contact-banner.png')] bg-cover p-4 md:px-20 md:py-32 gap-4">
        <h1 className={`headerFont text-5xl text-white`}>Contact Us</h1>
        <div className="flex md:flex-row flex-col gap-4">
          <div className="flex flex-col bg-white p-4 w-full md:w-1/4">
            <div className="flex items-center justify-center p-2 bg-[#D1A55C1A] w-fit">
              <Image alt={"icon"} src={"/assets/email.svg"} />
            </div>
            <p>Our Emails</p>
            <div
              className={`bodyFont font-bold flex flex-col gap-3 bg-[#f8f8f8] p-2 text-black/60`}
            >
              <Link
                href={"#"}
                onClick={() => {
                  window.location = "mailto:info@bluesquareng.com";
                }}
              >
                info@bluesquareng.com
              </Link>
              <Link
                href={"#"}
                onClick={() => {
                  window.location = "mailto:marketing@bluesquareng.com";
                }}
              >
                marketing@bluesquareng.com
              </Link>
            </div>
          </div>
          <div className="flex flex-col bg-white p-4 w-full md:w-1/4">
            <div className="flex items-center justify-center p-2 bg-[#D1A55C1A] w-fit">
              <Image alt={"icon"} src={"/assets/call.svg"} />
            </div>
            <p>Our Phones</p>
            <div
              className={`bodyFont font-bold flex flex-col gap-3 bg-[#f8f8f8] p-2 text-black/60`}
            >
              <p>+234 817 777 1590</p>
              <p>+234 916 944 8069</p>
            </div>
          </div>

          <div className="flex flex-col bg-white p-4 w-full md:w-1/4">
            <div className="flex items-center justify-center p-2 bg-[#D1A55C1A] w-fit">
              <Image alt={"icon"} src={"/assets/timer.svg"} />
            </div>
            <p>Our Address</p>
            <div
              className={`bodyFont font-bold flex flex-col gap-3 bg-[#f8f8f8] p-2 text-black/60`}
            >
              <p>7, Sumbo Jibowu Street, S.W. Ikoyi, Lagos</p>
            </div>
          </div>
          <div className="flex flex-col bg-white p-4 w-full md:w-1/4">
            <div className="flex items-center justify-center p-2 bg-[#D1A55C1A] w-fit">
              <Image alt={"icon"} src={"/assets/location.svg"} />
            </div>
            <p>Working Hours</p>
            <div
              className={`bodyFont font-bold flex flex-col gap-3 bg-[#f8f8f8] p-2 text-black/60`}
            >
              <p>Mon – Fri: 9 AM – 6 PM</p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex md:flex-row flex-col md:pt-20 gap-4 md:gap-0">
        <div className="md:w-1/2 flex flex-col px-4 md:px-20 gap-5 ">
          <h3 className={`headerFont text-2xl`}>Send us a message</h3>
          <p className={`bodyFont text-black/60`}>Get in touch with us</p>
          <div className="flex flex-col gap-2">
            <Link
              href={"#"}
              onClick={() => {
                window.location = "mailto:info@bluesquareng.com";
              }}
              className="flex gap-2 items-center"
            >
              <div className="flex items-center justify-center p-2 bg-[#D1A55C1A] w-fit">
                <Image alt={"icon"} src={"/assets/email.svg"} />
              </div>
              <p>Shoot us an email</p>
            </Link>
            <Link
              href={"https://www.instagram.com/bluesquareng/"}
              target="_blank"
              rel="insta"
              className="flex gap-2 items-center"
            >
              <div className="flex items-center justify-center p-2 bg-[#D1A55C1A] w-fit">
                <Image alt={"icon"} src={"/assets/instagram-icon.png"} />
              </div>
              <p>Message us on Instagram</p>
            </Link>
            <Link
              href={"https://twitter.com/bluesquareikoyi"}
              target="_blank"
              rel="twitter"
              className="flex gap-2 items-center"
            >
              <div className="flex items-center justify-center p-2 bg-[#D1A55C1A] w-fit">
                <Image alt={"icon"} src={"/assets/twitter.svg"} />
              </div>
              <p>Message us on X(Twitter)</p>
            </Link>
          </div>
          <ContactUs />
        </div>
        <div className="w-full h-[400px] md:h-auto md:w-1/2 bg-[url('/assets/contact-map.png')]"></div>
      </section>
      <Footer />
    </div>
  );
};

export default page;
