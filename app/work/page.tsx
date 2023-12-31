import Image from "next/image";
import Link from "next/link";
import React from "react";
import Footer from "../(UIComponents)/Footer";
import Header from "../(UIComponents)/Header";
import { Work } from "../types";
import { client } from "../utils/client";
import { cy } from "../utils/Cy";
import { urlFor } from "../utils/UrlImage";

type Props = {};

export const revalidate = 10;
async function WorkPage({}: Props) {
  const works = await client.fetch(`
    *[_type == "work"] {
      ...
    }
  `);
  console.log(works);
  console.log(works[0].trainingPrograms[0]);
  console.log(works[0].slug);
  return (
    <main className="w-full h-max bg-black text-white">
      <Header />
      <div className="min-h-[70vh]">
        <div className="w-full flex flex-row justify-between items-center mb-4 md:mt-8 lg:mb-16">
          <div className="bg-coral h-[0.125rem] rounded-r-2xl w-[30%] md:h-1 lg:h-2"></div>
          <div
            className={`${cy.className} text-tiffany text-lg  md:text-4xl lg:text-6xl`}
          >
            OUR WORK
          </div>
          <div className="bg-coral h-[0.125rem] rounded-l-2xl w-[30%] md:h-1 lg:h-2 "></div>
        </div>
        {works.map((work: Work) => {
          return (
            <div key={work._id} className="w-full mb-6 md:mb-12 lg:mb-24 ">
              <div
                className={`${cy.className} text-coral text-sm  md:text-2xl lg:text-3xl mt-4 md:mt-8 lg:mt-16 flex justify-center`}
              >
                {work.title}
              </div>
              <Link href={`/work/${work.slug.current}`}>
                <div className="w-[80%] group  z-30 mx-auto h-[10rem] md:h-[20rem] lg:h-[40rem] relative mt-4 md:mt-8 lg:mt-12 flex items-center justify-center">
                  <Image
                    src={urlFor(work.image).url()}
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
          );
        })}
      </div>
      <Footer />
    </main>
  );
}

export default WorkPage;
