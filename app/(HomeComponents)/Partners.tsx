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
  console.log(partners);
  return (
    <section className="flex flex-col items-center mt-6 md:mt-12 lg:mt-20 mb-6 md:mb-12 lg:mb-20">
      <div
        className={`${cy.className} text-tiffany text-lg  md:text-4xl lg:text-6xl`}
      >
        CORPORATE PARTNERS
      </div>
      {/* LOGOS */}
      <div className="flex flex-wrap w-full mt-6 md:mt-12 lg:mt-20">
        {partners[0].image.map((image) => {
          return (
            <div className="w-[33.33%] h-24 md:h-48 relative lg:h-[20rem] border-gray-500 border-[1px]">
              <Image
                className="object-cover"
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
