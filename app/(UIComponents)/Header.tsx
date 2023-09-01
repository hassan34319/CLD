import Image from "next/image";
import Link from "next/link";
import React from "react";
import { cy } from "../utils/Cy";
import {ChevronDownIcon} from "@heroicons/react/24/solid"

type Props = {};

function Header({}: Props) {
  return (
    <div className="bg-black h-12 md:h-16 justify-between items-center flex px-[1%] md:py-[2%] py-[1%] lg:h-28  ">
      {/* Logo */}
      <div className="w-[14.5%] h-full relative">
        <Image src="/Logo.png" alt="Logo" fill className="object-contain"/>
      </div>
      {/* Links */}
      <div className="w-[58%] h-full   flex justify-between items-center text-sugar text-xxs md:text-sm font-bold lg:text-lg">
        <Link href="/">
            HOME
        </Link>
        <Link href="/activities">
            ACTIVITIES
        </Link>
        <Link href="/about">
            ABOUT US
        </Link>
        <Link href="/trainers">
            TRAINERS
        </Link>
        <Link href="/work">
            OUR WORK
        </Link>
      </div>
      {/* Button */}
      <Link href="/register" className={`flex flex-row w-[20%] items-center justify-center bg-sugar rounded-xl px-[1%] py-[1%] md:py-[1%] text-xxss md:text-xs lg:text-base lg:rounded-[60px] text-black ${cy.className} text-center md:rounded-3xl md:py-[1.5%]  `}>
        <span className="my-auto cursor-pointer">REGISTER NOW</span>
        <ChevronDownIcon className="text-black h-2 w-2 md:h-4 md:w-4 lg:h-6 lg:w-6 md:ml-[2px] ml-[1px] my-auto"/>
      </Link>
    </div>
  );
}

export default Header;
