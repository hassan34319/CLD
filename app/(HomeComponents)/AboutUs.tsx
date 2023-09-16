import Link from "next/link";
import React from "react";
import { bebas } from "../utils/Babas";
import { cy } from "../utils/Cy";

type Props = {
  home?: boolean;
};

function AboutUs({ home }: Props) {
  return (
    <section className="w-full mt-[4%] flex flex-col items-center">
      {/* Heading */}
      <div className="w-full flex flex-row justify-between items-center mb-4 md:mt-8 lg:mb-16">
        <div className="bg-coral h-[0.125rem] rounded-r-2xl w-[30%] md:h-1 lg:h-2"></div>
        <div
          className={`${cy.className} text-tiffany text-lg  md:text-4xl lg:text-6xl`}
        >
          ABOUT US
        </div>
        <div className="bg-coral h-[0.125rem] rounded-l-2xl w-[30%] md:h-1 lg:h-2 "></div>
      </div>
      {/* Text */}
      <div
        className={`${bebas.className} mt-4 text-sugar px-6 text-center md:text-2xl md:px-16 md:mt-6 lg:text-4xl  lg:px-28 lg:mt-8`}
      >
        {"     "} “Collaboration for Leadership Development (CLD) is a network
        of world class{" "}
        <span className="text-coral">leadership and management</span>{" "}
        development trainers, who come together to contribute towards the
        success of <span className="text-coral">Vision 2030 </span>at Kingdom of
        Saudi Arabia”
      </div>
      {/* Button */}
      {home && (
        <Link
          href="/about"
          className={`${bebas.className} bg-sugar px-2 py-[1px] w-[25%] rounded-xl text-center mt-[0.8rem] text-sm flex items-center justify-center md:w-[20%] md:py-1 md:text-xl md:rounded-3xl lg:w-[16%] lg:text-3xl lg:mt-5`}
        >
          Learn More
        </Link>
      )}
    </section>
  );
}

export default AboutUs;
