import { Bebas_Neue } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AboutUs from "../(HomeComponents)/AboutUs";
import Footer from "../(UIComponents)/Footer";
import Header from "../(UIComponents)/Header";
import { bebas } from "../utils/Babas";
import { client } from "../utils/client";
import { cy } from "../utils/Cy";
import { urlFor } from "../utils/UrlImage";

export const revalidate = 60;
type Props = {};

async function AboutPage({}: Props) {
  return (
    <main className="w-full h-max bg-black text-white ">
      <Header />
      <AboutUs />
      {/* COMPANY SECTION */}

      <div className="w-full flex flex-row justify-between items-center mt-4 md:mt-8 lg:mt-16">
        <div className="bg-coral h-[0.125rem] rounded-r-2xl w-[15%] md:h-1 lg:h-2"></div>
        <div
          className={`${cy.className} text-tiffany text-lg  md:text-4xl lg:text-6xl`}
        >
          BRAND GUIDELINES
        </div>
        <div className="bg-coral h-[0.125rem] rounded-l-2xl w-[15%] md:h-1 lg:h-2 "></div>
      </div>
      <Link href="/brand" className="w-full h-full relative">
        <div className="w-full h-48 md:h-[24rem] lg:h-[40rem] relative mt-8 md:mt-16 lg:mt-24">
          <Image
            src="/brandMain.jpg"
            alt="banner"
            fill
            className="object-contain"
          />
        </div>
      </Link>
      <div className="w-full flex flex-row justify-between items-center mt-4 md:mt-8 lg:mt-16">
        <div className="bg-coral h-[0.125rem] rounded-r-2xl w-[15%] md:h-1 lg:h-2"></div>
        <div
          className={`${cy.className} text-tiffany text-lg  md:text-4xl lg:text-6xl`}
        >
          OUR PHILOSOPHY
        </div>
        <div className="bg-coral h-[0.125rem] rounded-l-2xl w-[15%] md:h-1 lg:h-2 "></div>
      </div>
      <Link href="/philosophy" className="w-full h-full relative">
        <div className="w-full h-48 md:h-[24rem] lg:h-[40rem] relative mt-8 md:mt-16 lg:mt-24 border-tiffany border-4 md:border-8 lg:border-16">
          <Image src="/main.jpg" alt="banner" fill className="object-contain" />
        </div>
      </Link>
      <div className="w-full flex flex-row justify-between items-center mt-4 md:mt-8 lg:mt-16">
        <div className="bg-coral h-[0.125rem] rounded-r-2xl w-[20%] md:h-1 lg:h-2"></div>
        <div
          className={`${cy.className} text-tiffany text-lg  md:text-4xl lg:text-6xl`}
        >
          OUR COMPANY
        </div>
        <div className="bg-coral h-[0.125rem] rounded-l-2xl w-[20%] md:h-1 lg:h-2 "></div>
      </div>
      <div
        className={`text-xxs md:text-xs lg:text-base font-bold mt-4 mb-10 text-sugar px-6 text-start  md:px-16 md:mt-8  lg:px-28 lg:mt-16`}
      >
        Registered name: Collaboration Technologies Company
        <br></br>
        <br></br>
        Company Registration number: 2031109748
        <br></br>
        <br></br>
        Registered address: Building # 9224, An Nada District, Al Uyun, Kingdom
        of Saudi Arabia Office Address: 7878, Ibn Hazim Street, King Faisal
        District, Riyadh 13215, Kingdom of Saudia Arabia
        <br></br>
        <br></br>
        Arabia VAT No. : 311323643800003 
        <br></br>
        <br></br>
        Bank Account: Alinma Bank 
        <br></br>
        <br></br>
        IBAN:
        SA7705000068204171617000 
        <br></br>
        <br></br>
        Branch: Almubaraz, Aldhahran
        <br></br>
        <br></br>
        <div className="mt-4 text-xxs md:text-sm md:mt-8 lg:mt-16 md:w-[70%] w-[90%] flex flex-row justify-between text-coral underline lg:text-base mx-auto">
          <a href="/Vat.pdf" download>
            DOWNLOAD VAT CERIFICATE
          </a>
          <a href="/Company.pdf" download>
            DOWNLOAD COMPANY REGISTRATION CERTIFICATE
          </a>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default AboutPage;
