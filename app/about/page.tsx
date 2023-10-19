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
      <div  className="w-full mb-6 md:mb-12 lg:mb-24 ">
              <Link href={`/brand`}>
                <div className="w-[80%] group  z-30 mx-auto h-[10rem] md:h-[20rem] lg:h-[40rem] relative mt-4 md:mt-8 lg:mt-12 flex items-center justify-center">
                  <Image
                    src="/5.jpg"
                    alt="banner"
                    fill
                    className="object-contain z-0 hover:opacity-30"
                  />
                  <div
                    className={`  hidden md:flex bg-sugar invisible group-hover:visible text-center text-black text-xl z-50  relative  bg-opacity-100 w-[30%] mx-auto my-auto  items-center justify-center h-12 rounded-xl  ${cy.className}`}
                  >
                    LEARN MORE
                  </div>
                </div>
              </Link>
            </div>
      <div className="w-full flex flex-row justify-between items-center mt-4 md:mt-8 lg:mt-16">
        <div className="bg-coral h-[0.125rem] rounded-r-2xl w-[15%] md:h-1 lg:h-2"></div>
        <div
          className={`${cy.className} text-tiffany text-lg  md:text-4xl lg:text-6xl`}
        >
          OUR PHILOSOPHY
        </div>
        <div className="bg-coral h-[0.125rem] rounded-l-2xl w-[15%] md:h-1 lg:h-2 "></div>
      </div>
      <div  className="w-full mb-6 md:mb-12 lg:mb-24 ">
              <Link href={`/philosophy`}>
                <div className="w-[80%] group  z-30 mx-auto h-[10rem] md:h-[20rem] lg:h-[40rem] relative mt-4 md:mt-8 lg:mt-12 flex items-center justify-center">
                  <Image
                    src="/philo11.jpg"
                    alt="banner"
                    fill
                    className="object-contain z-0 hover:opacity-30"
                  />
                  <div
                    className={`  hidden md:flex bg-sugar invisible group-hover:visible text-center text-black text-xl z-50  relative  bg-opacity-100 w-[30%] mx-auto my-auto  items-center justify-center h-12 rounded-xl  ${cy.className}`}
                  >
                    LEARN MORE
                  </div>
                </div>
              </Link>
            </div>
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
