import Image from "next/image";
import React from "react";
import Footer from "../(UIComponents)/Footer";
import Header from "../(UIComponents)/Header";
import { cy } from "../utils/Cy";
import { urlFor } from "../utils/UrlImage";

type Props = {};
export default function PhilPage({}: Props) {
  return (
    <main className="w-full h-max mb-3 md:mb-6 lg:mb-8 bg-black text-white">
      <Header />
      <div className="w-full flex flex-row justify-between items-center mt-4 md:mt-8 lg:mt-16 mb-4 md:mb-8 lg:mb-16">
        <div className="bg-coral h-[0.125rem] rounded-r-2xl w-[15%] md:h-1 lg:h-2"></div>
        <div
          className={`${cy.className} text-tiffany text-lg  md:text-4xl lg:text-6xl`}
        >
          OUR PHILOSOPHY
        </div>
        <div className="bg-coral h-[0.125rem] rounded-l-2xl w-[15%] md:h-1 lg:h-2 "></div>
      </div>

      <div className="w-full h-48 md:h-[24rem] lg:h-[40rem] relative">
        <Image
          src="/philo12.jpg"
          alt="banner"
          fill
          className="object-contain"
        />
      </div>
      <div className="w-full h-48 md:h-[24rem] lg:h-[40rem] relative ">
        <Image
          src="/philo13.jpg"
          alt="banner"
          fill
          className="object-contain"
        />
      </div>
      <div className="w-full h-48 md:h-[24rem] lg:h-[40rem] relative ">
        <Image
          src="/philo14.jpg"
          alt="banner"
          fill
          className="object-contain"
        />
      </div>
      <div className="w-full h-48 md:h-[24rem] lg:h-[40rem] relative">
        <Image
          src="/philo15.jpg"
          alt="banner"
          fill
          className="object-contain"
        />
      </div>
      <div className="w-full h-48 md:h-[24rem] lg:h-[40rem] relative ">
        <Image
          src="/philo16.jpg"
          alt="banner"
          fill
          className="object-contain"
        />
      </div>
      <div className="w-full h-48 md:h-[24rem] lg:h-[40rem] relative ">
        <Image
          src="/philo17.jpg"
          alt="banner"
          fill
          className="object-contain"
        />
      </div>
      <Footer/>
    </main>
  );
}