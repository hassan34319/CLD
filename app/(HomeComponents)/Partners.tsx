import partner from "@/sanity/schemas/partner";
import Image from "next/image";
import React from "react";
import { Partners } from "../types";
import { cy } from "../utils/Cy";
import { urlFor } from "../utils/UrlImage";

type Props = {
  partners: Partners[];
};

function Partners({ partners }: Props) {
  return (
    <section className="flex flex-col items-center mt-6 md:mt-12 lg:mt-20 mb-6 md:mb-12 lg:mb-20">
      <div className="w-full flex flex-row justify-between items-center ">
        <div className="bg-coral h-[0.125rem] rounded-r-2xl w-[10%] md:h-1 lg:h-2"></div>
        <div
          className={`${cy.className} text-tiffany text-lg  md:text-4xl lg:text-6xl`}
        >
          OUR POWER NETWORK
        </div>
        <div className="bg-coral h-[0.125rem] rounded-l-2xl w-[10%] md:h-1 lg:h-2 "></div>
      </div>
      {/* LOGOS */}
      <div className="flex flex-wrap justify-center w-full mt-6 md:mt-12 lg:mt-20">
        {partners[0].image.map((image) => {
          return (
            <div className="w-[20%] h-16 md:h-32 relative lg:h-[14rem] border-gray-500 border-[1px]">
              <Image
                className="object-contain"
                src={urlFor(image).url()}
                fill
                alt="Partner 1"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Partners;
