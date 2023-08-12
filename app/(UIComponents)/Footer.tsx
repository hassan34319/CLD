import Image from "next/image";
import Link from "next/link";
import React from "react";
import { cy } from "../utils/Cy";
import {
  Email,
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  Location,
  Phone,
  Twitter,
} from "./Socials";

type Props = {};

function Footer({}: Props) {
  return (
    <section className="border-t-[3px] md:border-t-[6px] border-[#F5F5F5] w-full">
      <div className="mt-4 md:mt-8 lg:mt-12 mb-4 md:mb-8 lg:mb-12 flex justify-between items-center px-5 md:px-12 lg:px-20 w-full">
        {/* Logo And Details */}
        <div className="flex flex-col items-start justify-center w-[26.7%]">
          <div className="w-[80%] h-[2.5rem] md:h-20 lg:h-32 relative">
            <Image src="/Logo.png" alt="Logo" fill className="object-contain" />
          </div>
          <p className="text-[#F5F5F5] text-xxss md:text-xs font-semibold text-start lg:text-base">
            Global network of leadership experts contributing towards Vision
            2030
          </p>
          <div className="w-full flex flex-row items-center justify-between pr-2 mt-1 md:mt-2">
            <Link href="">
              <Facebook />
            </Link>
            <Link href="">
              <Twitter />
            </Link>
            <Link href="">
              <Linkedin />
            </Link>
            <Link href="">
              <Instagram />
            </Link>
          </div>
        </div>
        {/* Contact US */}
        <div className="flex flex-col items-start justify-center w-[26.7%] ">
          <div
            className={`${cy.className} text-tiffany text-xxs  md:text-xl lg:text-3xl mb-2 md:mb-2 lg:mb-4`}
          >
            CONTACT US
          </div>
          {/* Icons */}
          <div className="flex flex-col space-y-2 md:space-y-2">
            <div className="flex flex-row justify-start space-x-1 md:space-x-2 items-center ">
              <Email />
              <p className="text-[#F5F5F5] text-xxss md:text-xs font-bold text-start lg:text-base ">
                Info@cldtraining.biz
              </p>
            </div>
            <div className="flex flex-row justify-start space-x-1 md:space-x-2 items-center ">
              <Phone />
              <p className="text-[#F5F5F5] text-xxss md:text-xs font-bold text-start lg:text-base">
                +966 56 259 6805
              </p>
            </div>
            <div className="flex flex-row justify-start space-x-1 items-center md:space-x-2 ">
              <Location />
              <p className="text-[#F5F5F5] text-xxss md:text-xs font-bold text-start lg:text-base flex items-center">
                7878, Ibn Hazim Street, Al Faisal District, Saudia Arabia
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center w-[26.7%] ">
          <div
            className={`${cy.className} text-tiffany text-xxs  md:text-xl lg:text-3xl mb-1 md:mb-2 lg:mb-4`}
          >
            START A CONVERSATION:
          </div>
          {/* Text Bar*/}
          <div className="w-full text-white flex flex-col space-y-0">
            <p className="text-xxss md:text-xxs lg:text-xs">Name:</p>
            <input className="w-full h-3 md:h-6 lg:h-10 lg:text-xs bg-[#F5f5f5] relative text-xxss md:text-xxs text-black outline-none" />
          </div>
          <div className="w-full text-white flex flex-col space-y-0 mt-1 md:mt-2">
            <p className="text-xxss md:text-xxs lg:text-xs">Email:</p>
            <input className="w-full h-3 md:h-6 lg:h-10 lg:text-xs bg-[#F5f5f5] relative text-xxss md:text-xxs outline-none text-black" />
          </div>
          <button className="bg-coral w-1/3 h-3 md:h-6 lg:h-8 rounded-md md:rounded-2xl lg:rounded-[60px] text-xxss md:text-xxs lg:text-sm mt-2 md:mt-4 lg:mt-6 text-bold text-[#f5f5f5]  flex items-center justify-center">
            SUBMIT
          </button>
        </div>
      </div>
    </section>
  );
}

export default Footer;
