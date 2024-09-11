import React from "react";

import TextField from "../TextField/TextField";
import Image from "../Image/Image";
import Link from "next/link";
import EmailSubscriptionForm from "../EmailSubscriptionForm/EmailSubscriptionForm";
import Whatsapp from "../Whatsapp";

const Footer = () => {
  return (
    <section className=" min-h-screen flex flex-col">
      <Whatsapp />
      <div className={"h-[400px] flex items-end"}>
        <div
          className={` h-3/4 w-full bg-cover bg-[url('/assets/footerBg.png')] `}
        ></div>
      </div>
      <div className="h-1/2 bg-[#222222]">
        <div className="flex flex-col items-center">
          <EmailSubscriptionForm />
          <div className="flex flex-col md:flex-row gap-10 justify-between py-10 w-full px-4 md:px-24">
            <div className="flex flex-col gap-4 justify-between">
              <div className="flex gap-1 md:gap-4 items-start flex-col md:flex-row">
                <Image alt={"logo"} src={"/assets/blue-square-logo.png"} />
                <p className={`headerFont pt-2 md:text-xl text-white/80`}>
                  7, Sumbo Jibowu Street,
                  <br className="hidden md:block" /> S.W. Ikoyi, Lagos.
                </p>
              </div>
              <div className={`flex flex-col bodyFont text-white/60 gap-1`}>
                {/* <p>08177771590</p> */}
                <p>09169448069</p>
                <p className={`border-y-[1px] pt-5 w-fit`}>
                  info@bluesquareng.com
                </p>
              </div>
            </div>
            <div className="flex flex-col text-white/60 gap-10">
              <div className={`grid grid-cols-2 gap-10 md:flex justify-end`}>
                <div className="flex flex-col gap-4">
                  <Link href={"/about-us"}>About us</Link>
                  {/* <Link href={""}>Services</Link> */}
                  {/* <Link href={""}>Projects</Link> */}
                  <Link
                    target="_blank"
                    href={"https://forms.gle/zoM8ccE1jcys31Q49"}
                  >
                    Book a tour
                  </Link>
                  {/* <Link
                    target="_blank"
                    href={
                      "https://calendly.com/infobluesquareng/gazania-park?month=2024-02"
                    }
                  >
                    Virtual Tour
                  </Link> */}
                  <Link href={"resources"}>Resources</Link>
                  <Link href={"FAQ"}>FAQs</Link>
                  <Link href={"contact-us"}>Contact Us</Link>
                </div>
                <div className="hidden flex-col gap-4">
                  <p>Legal Terms & Conditions</p>
                  <Link href={"/legal"}>Privacy Policy</Link>
                  <Link href={"/legal"}>Cookie Policy</Link>
                  <Link href={"/legal"}>Terms of use</Link>
                  <Link href={""}>Real Estate Glossary</Link>
                </div>
                <div className="flex flex-col gap-4">
                  <p>Socials</p>
                  <Link
                    target="_blank"
                    href={"https://www.facebook.com/Bluesquareng/"}
                  >
                    Facebook
                  </Link>
                  <Link
                    target="_blank"
                    href={"https://twitter.com/Bluesquareikoyi"}
                  >
                    Twitter
                  </Link>
                  <Link
                    target="_blank"
                    href={"https://www.linkedin.com/company/bluesquareng"}
                  >
                    Linkedin
                  </Link>
                  <Link
                    target="_blank"
                    href={"https://www.instagram.com/bluesquareng/"}
                  >
                    Instagram
                  </Link>
                </div>
              </div>
              <p className={` text-center w-full`}>
                © 2024 Blue Square, Designed by Touchcore. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
