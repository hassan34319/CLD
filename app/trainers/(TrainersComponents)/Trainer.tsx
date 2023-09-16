import { Trainer } from "@/app/types";
import { cy } from "@/app/utils/Cy";
import { urlFor } from "@/app/utils/UrlImage";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  trainers: Trainer[];
};

function Trainer({ trainers }: Props) {
  return (
    <div className="min-h-[70vh] mb-6 md:mb-12 lg:mb-20 ">
      <div className="flex flex-wrap justify-center mt-10 md:mt-18 lg:mt-24 mx-3 gap-y-10 space-x-4 md:space-x-8 lg:space-x-12 lg:gap-y-16">
        {trainers.map((trainer) => {
          return (
            <Link
              href={`/trainers/${trainer.slug.current}`}
              key={trainer._id}
              className="w-[28%]  flex flex-col"
            >
              <div className="mx-auto w-[70%] h-16 md:h-32 lg:h-64 relative mb-[-4vh] lg:mb-[-6vh] ">
                <Image
                  className="object-cover"
                  fill
                  src={urlFor(trainer.image).url()}
                  alt="Trainer 1"
                />
              </div>
              <div className="bg-white h-[7rem] md:h-[14rem] lg:h-[18rem] w-full">
                <div
                  className={`flex flex-col items-center mt-[4vh] ${cy.className}`}
                >
                  <div className="bg-black bg-opacity-60 h-[1px] w-[10%] mx-auto mt-2 md:mt-4 lg:mt-6 md:h-[2px] "></div>
                  <h1 className="text-coral text-xxss mt-2 md:mt-4 lg:mt-8 md:text-sm lg:text-xl">
                    {trainer.name.toUpperCase()}
                  </h1>
                  <h3 className="text-xxss text-gray-700 md:text-xxs lg:text-sm">
                    {trainer.title}
                  </h3>
                  <div className="bg-black bg-opacity-60 h-[1px]  w-[10%] mx-auto mt-2  md:mt-4 lg:mt-6 md:h-[2px]"></div>
                  <Link
                    href={`/trainers/${trainer.slug.current}`}
                    className="text-white bg-coral hover:opacity-80 text-xxss  focus:ring-4 mt-2 md:mt-4 lg:mt-8 focus:outline-none focus:opacity-70 font-medium rounded-lg md:text-sm px-2 py-1 md:px-5 md:py-2.5 text-center inline-flex items-center dark:bg-coral dark:hover:opacity-80 dark:focus:opacity-80"
                  >
                    Discover More
                    <svg
                      className="md:w-3.5 md:h-3.5 w-2 h-2 ml-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                    </Link>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Trainer;
