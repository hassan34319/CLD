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
    <main className="w-full h-max ">
      <Header />
      <AboutUs />
      {/* COMPANY SECTION */}

      <div
        className={`${cy.className} text-tiffany text-lg  md:text-4xl lg:text-6xl mt-8 md:mt-16 lg:mt-24 flex justify-center`}
      >
        BRAND IDEOLOGY
      </div>
      <Link href="/brand" className="w-full h-full relative">
        <div className="w-full h-48 md:h-[24rem] lg:h-[40rem] relative mt-8 md:mt-16 lg:mt-24">
          <Image
            src="/brandMain.jpg"
            alt="banner"
            fill
            className="object-fill"
          />
        </div>
      </Link>
      <div
        className={`${cy.className} text-tiffany text-lg  md:text-4xl lg:text-6xl mt-8 md:mt-16 lg:mt-24 flex justify-center`}
      >
        OUR PHILOSOPHY
      </div>
      <Link href="/philosophy" className="w-full h-full relative">
        <div className="w-full h-48 md:h-[24rem] lg:h-[40rem] relative mt-8 md:mt-16 lg:mt-24 border-tiffany border-4 md:border-8 lg:border-16">
          <Image src="/main.jpg" alt="banner" fill className="object-fill" />
        </div>
      </Link>
      <div className="w-full flex flex-row justify-between items-center mt-4 md:mt-8 lg:mt-16">
        <div className="bg-coral h-1 rounded-r-2xl w-[30%] md:h-2 lg:h-4"></div>
        <div
          className={`${cy.className} text-tiffany text-lg  md:text-4xl lg:text-6xl`}
        >
          OUR COMPANY
        </div>
        <div className="bg-coral h-1 rounded-l-xl w-[30%] md:h-2 lg:h-4"></div>
      </div>
      <div
        className={`${bebas.className} mt-4 mb-10 text-sugar px-6 text-center md:text-2xl md:px-16 md:mt-6 lg:text-4xl  lg:px-28 lg:mt-8`}
      >
        Registered name: Collaboration Technologies Company
        <br></br>
        <br></br>
        Company Registration number: 2031109748
        <br></br>
        <br></br>
        Registered address: Building # 9224, An Nada District, Al Uyun, Kingdom
        of Saudi Arabia Office Address: 7878, Ibn Hazim Street, King Faisal
        District, Riyadh 13215, Kingdom of Saudi
        <br></br>
        <br></br>
        Arabia VAT No. : 311323643800003 Bank Account: Alinma Bank IBAN:
        SA7705000068204171617000 Branch: Almubaraz, Aldhahran
      </div>
      <Footer />
    </main>
  );
}

export default AboutPage;
