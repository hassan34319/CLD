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
async function TrainingPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  console.log(slug);
  const query = `*[_type == "work" && slug.current == "${slug}"]`;
  const work: Work[] = await client.fetch(query);
  console.log(work)
  return (
    <main className="w-full h-max bg-black text-white">
      <Header />
      <div className="min-h-[70vh]">
        <div key={work[0]._id} className="w-full mb-6 md:mb-12 lg:mb-24 ">
          <div className="w-[100%] group  z-30 mx-auto h-48 md:h-[24rem] lg:h-[40rem] relative mt-4 md:mt-8 lg:mt-12 flex items-center justify-center">
            <Image
              src={urlFor(work[0].image).url()}
              alt="banner"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-xxs md:text-base lg:text-xl text-white font-medium w-[95%] mx-auto mt-2 md:mt-4 lg:mt-8">
            {work[0].learningSolutionText}
          </p>
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
