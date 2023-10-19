import Footer from "@/app/(UIComponents)/Footer";
import Header from "@/app/(UIComponents)/Header";
import { TrainingProgram } from "@/app/types";
import { client } from "@/app/utils/client";
import { cy } from "@/app/utils/Cy";
import Image from "next/image";
import React from "react";
import Training from "./(trainingComponents)/Training";

type Props = {};

async function SubTrainingPage({
  params,
}: {
  params: { slug: string; training: string };
}) {
  const query = `*[_type == "trainingProgram" && slug.current == $training]`;
  const { slug, training } = params;
  console.log(slug, training);
  const subTrainings: TrainingProgram[] = await client.fetch(query, {
    training,
  });
  return (
    <main className="w-full h-max bg-black text-white">
      <Header />
      <div className="min-h-[70vh]">
        <div
          key={subTrainings[0].slug.current}
          className="w-full mb-6 md:mb-12 lg:mb-24 "
        >
          <div
            className={`${cy.className} text-coral text-sm  md:text-2xl lg:text-3xl mt-4 md:mt-8 lg:mt-16 flex justify-center`}
          >
            {subTrainings[0].title}
          </div>
          {subTrainings[0].description && (
            <div className="text-xxs md:text-sm lg:text-lg flex justify-center w-[90%] text-white mx-auto mt-4 md:mt-8 lg:mt-16 ">
              {subTrainings[0].description}
            </div>
          )}
          <Training subTrainings={subTrainings} slug={slug} />
        </div>
        {subTrainings[0].slug.current ==
          "global-youth-leadership-expeditions" && (
          <>
            <div className="w-full h-48 md:h-[24rem] lg:h-[40rem] relative mt-8 md:mt-16 lg:mt-24">
              <Image
                src="/global.jpeg"
                alt="banner"
                fill
                className="object-contain"
              />
            </div>
            <div
              className={`${cy.className} text-tiffany text-sm  md:text-2xl lg:text-3xl text-start w-[90%] mx-auto mt-8 md:mt-16 lg:mt-24` }
            >
              Our Global Destinations Include :
            </div>
            <div className="flex flex-row mt-2 md:mt-4 lg:mt-8  text-white w-[90%] mx-auto mb-4 md:mb-8 lg:mb-16 gap-x-2 md:gap-x-4 lg:gap-x-8">
              <div className="w-[30%] text-sm  md:text-2xl lg:text-3xl flex flex-col gap-y-2 md:gap-y-4 lg:gap-y-8">
                <p>Tanzania</p>
                <p>Malaysia</p>
                <p>Uzbekistan</p>
                <p>Hungary</p>
                <p>Nepal</p>
                <p>Spain</p>
                <p>Turkey</p>
                <p>Srilanka</p>
                <p>Bulgaria</p>
                <p>Scotland</p>
                <p>Newzealand</p>
                <p>China</p>
              </div>
              <div className="w-[65%] flex flex-wrap justify-between mx-auto ">
                <div className="w-[45%] relative  h-24 md:h-[12rem] lg:h-[20rem]">
                  <Image
                    src="/gl1.jpg"
                    alt="None"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="w-[45%] relative  h-24 md:h-[12rem] lg:h-[20rem]">
                  <Image
                    src="/gl2.png"
                    alt="None"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="w-[45%] relative  h-24 md:h-[12rem] lg:h-[20rem]">
                  <Image
                    src="/gl3.jpg"
                    alt="None"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="w-[45%] relative  h-24 md:h-[12rem] lg:h-[20rem]">
                  <Image
                    src="/gl4.jpg"
                    alt="None"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="w-[45%] relative  h-24 md:h-[12rem] lg:h-[20rem]">
                  <Image
                    src="/gl5.jpg"
                    alt="None"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="w-[45%] relative  h-24 md:h-[12rem] lg:h-[20rem]">
                  <Image
                    src="/gl6.jpg"
                    alt="None"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="w-[45%] relative  h-24 md:h-[12rem] lg:h-[20rem]">
                  <Image
                    src="/gl7.jpg"
                    alt="None"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="w-[45%] relative  h-24 md:h-[12rem] lg:h-[20rem]">
                  <Image
                    src="/gl8.png"
                    alt="None"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <Footer />
    </main>
  );
}

export default SubTrainingPage;
