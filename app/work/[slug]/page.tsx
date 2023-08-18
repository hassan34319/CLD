import Footer from "@/app/(UIComponents)/Footer";
import Header from "@/app/(UIComponents)/Header";
import { Work } from "@/app/types";
import { client } from "@/app/utils/client";
import { cy } from "@/app/utils/Cy";
import { urlFor } from "@/app/utils/UrlImage";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};
export const revalidate = 60;
async function TrainingPage({ params }: { params: { slug: string } }) {
  const query = `*[_type == "work" && slug.current == $slug]`;
  const { slug } = params;
  console.log(slug);
  const work: Work[] = await client.fetch(query, { slug });
  return (
    <main className="w-full h-max">
      <Header />
      <div className="min-h-[70vh]">
        <div key={work[0]._id} className="w-full mb-6 md:mb-12 lg:mb-24 ">
          <div
            className={`${cy.className} text-coral text-sm  md:text-2xl lg:text-3xl mt-4 md:mt-8 lg:mt-16 flex justify-center`}
          >
            {work[0].title}
          </div>
          <div className="w-[100%] group  z-30 mx-auto h-48 md:h-[24rem] lg:h-[40rem] relative mt-4 md:mt-8 lg:mt-12 flex items-center justify-center">
            <Image
              src={urlFor(work[0].image).url()}
              alt="banner"
              fill
              className="object-fill"
            />
          </div>
          <div
            className={`${cy.className} text-tiffany text-xs  md:text-xl lg:text-2xl mt-4 md:mt-8 lg:mt-16 mx-auto w-[95%] `}
          >
            OUR LEARNING SOLUTIONS
          </div>
          <p className="text-xxs md:text-base lg:text-xl text-white font-medium w-[95%] mx-auto mt-2 md:mt-4 lg:mt-8">
            {work[0].learningSolutionText}
          </p>
          <div className="w-[95%] flex-wrap flex justify-between mx-auto mt-4 md:mt-8 lg:mt-16">
            {work[0].learningSolutions.map((sol, index) => {
              return (
                <div className="w-[30%]" key={index}>
                  <div
                    className={`bg-coral h-6 md:h-12 lg:h-20 w-[100%] ${cy.className} text-xxs md:text-base lg:text-2xl text-black font-medium flex items-center justify-center`}
                  >
                    {sol.name}
                  </div>
                  <div className="bg-[#f5f5f5] h-[7.5rem] md:h-[15rem] lg:h-[25rem] w-[100%] text-[0.45rem] md:text-sm lg:text-xl text-black font-medium flex items-center justify-center text-start px-[3.33%] py-[1%] md:px-[6%] md:py-[2%] lg:px-[12%] lg:py-[4%]">
                    {sol.description}
                  </div>
                </div>
              );
            })}
          </div>

          <div
            className={`${cy.className} text-tiffany text-xs  md:text-xl lg:text-2xl mt-4 md:mt-8 lg:mt-16 mx-auto w-[95%] `}
          >
            OUR TRAINING PROGRAMS
          </div>
          <div className="w-[90%] flex-wrap flex justify-between mx-auto mt-4 md:mt-8 lg:mt-16">
            {work[0].trainingPrograms.map((training, index) => {
              console.log(index);
              return (
                <div
                  className="w-[50%] flex items-center justify-center text-center"
                  key={index}
                >
                  <Link
                    href={`/work/${slug}/${training.slug.current}`}
                    className={`h-[5rem] md:h-[10rem] lg:h-[20rem] w-[100%] border-white border-[1px] md:border-2 lg:border-3 ${
                      cy.className
                    } text-xs md:text-lg lg:text-4xl text-black font-medium flex items-center justify-center lg:px-16 ${
                      index === 0 || index === 3 || index === 4 || index === 7
                        ? "bg-coral"
                        : "bg-tiffany"
                    }`}
                  >
                    {training.name}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default TrainingPage;
