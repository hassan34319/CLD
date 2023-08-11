import Image from "next/image";
import Link from "next/link";
import React from "react";
import AboutUs from "../(HomeComponents)/AboutUs";
import Footer from "../(UIComponents)/Footer";
import Header from "../(UIComponents)/Header";
import { client } from "../utils/client";
import { cy } from "../utils/Cy";
import { urlFor } from "../utils/UrlImage";

type Props = {};

async function AboutPage({}: Props) {
  const companyBanner = await client.fetch(`
  *[_type == "companyBanner"] {
    ...
  }
`);
  const philosophyBanner = await client.fetch(`
  *[_type == "philosiphyPageBanner"] {
    ...
  }
`);
  return (
    <main className="w-full h-max ">
      <Header />
      <AboutUs />
      {/* COMPANY SECTION */}
      <div
        className={`${cy.className} text-tiffany text-lg  md:text-4xl lg:text-6xl mt-8 md:mt-16 lg:mt-24 flex justify-center`}
      >
        OUR COMPANY
      </div>
      <div className="w-full h-48 md:h-[24rem] lg:h-[40rem] relative mt-8 md:mt-16 lg:mt-24">
        <Image
          src={urlFor(companyBanner[0].banner).url()}
          alt="banner"
          fill
          className="object-fill"
        />
      </div>
      <div
        className={`${cy.className} text-tiffany text-lg  md:text-4xl lg:text-6xl mt-8 md:mt-16 lg:mt-24 flex justify-center`}
      >
        BRAND IDEOLOGY
      </div>
      <Link href="/brand" className="w-full h-full relative">
        <div className="w-full h-48 md:h-[24rem] lg:h-[40rem] relative mt-8 md:mt-16 lg:mt-24">
          <Image
            src="/brandIdeology.jpg"
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
      <div className="w-full h-48 md:h-[24rem] lg:h-[40rem] relative mt-8 md:mt-16 lg:mt-24 mb-10 md:mb-16 lg:mb-24">
        <Image
          src={urlFor(philosophyBanner[0].banner).url()}
          alt="banner"
          fill
          className="object-fill"
        />
      </div>
      <Footer />
    </main>
  );
}

export default AboutPage;
