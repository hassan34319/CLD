import Image from "next/image";
import React from "react";
import Header from "../(UIComponents)/Header";
import { cy } from "../utils/Cy";
import { urlFor } from "../utils/UrlImage";

type Props = {};

function BrandPage({}: Props) {
  return (
    <main className="w-full h-max mb-3 md:mb-6 lg:mb-8">
      <Header />
      <div className="w-full flex flex-row justify-between items-center mt-3 md:mt-6 lg:mt-8">
        <div className="bg-coral h-1 rounded-r-2xl w-[15%] md:h-2 lg:h-4"></div>
        <div
          className={`${cy.className} text-tiffany text-lg  md:text-4xl lg:text-6xl`}
        >
          BRAND IDEOLOGY
        </div>
        <div className="bg-coral h-1 rounded-l-xl w-[15%] md:h-2 lg:h-4"></div>
      </div>
      <div className="w-full h-48 md:h-[24rem] lg:h-[40rem] relative mt-8 md:mt-16 lg:mt-24">
        <Image
          src="/brand1.png"
          alt="banner"
          fill
          className="object-contain"
        />
      </div>
      <div className="w-full h-48 md:h-[24rem] lg:h-[40rem] relative mt-8 md:mt-16 lg:mt-24">
        <Image
          src="/brand2.png"
          alt="banner"
          fill
          className="object-contain"
        />
      </div>
      <div className="w-full h-48 md:h-[24rem] lg:h-[40rem] relative mt-8 md:mt-16 lg:mt-24">
        <Image
          src="/brand3.png"
          alt="banner"
          fill
          className="object-contain"
        />
      </div>
      <div className="w-full h-48 md:h-[24rem] lg:h-[40rem] relative mt-8 md:mt-16 lg:mt-24">
        <Image
          src="/brand4.png"
          alt="banner"
          fill
          className="object-contain"
        />
      </div>
      <div className="w-full h-48 md:h-[24rem] lg:h-[40rem] relative mt-8 md:mt-16 lg:mt-24">
        <Image
          src="/brand5.png"
          alt="banner"
          fill
          className="object-contain"
        />
      </div>
      <div className="w-full h-48 md:h-[24rem] lg:h-[40rem] relative mt-8 md:mt-16 lg:mt-24">
        <Image
          src="/brand6.png"
          alt="banner"
          fill
          className="object-contain"
        />
      </div>
      {/* Trainers */}
    </main>
  );
}

export default BrandPage;