import { Trainer } from "@/app/types";
import { cy } from "@/app/utils/Cy";
import { urlFor } from "@/app/utils/UrlImage";
import Image from "next/image";
import React from "react";

type Props = {
  trainers: Trainer[];
};

function Trainer({ trainers }: Props) {
  return (
    <div className="min-h-[70vh] mb-6 md:mb-12 lg:mb-20 ">
      <div className="flex flex-wrap justify-center mt-10 md:mt-18 lg:mt-24 mx-3 gap-y-10 space-x-4 md:space-x-8 lg:space-x-12">
        {trainers.map((trainer) => {
          return (
            <div key={trainer._id} className="w-[28%]  flex flex-col">
              <div className="mx-auto w-[70%] h-16 md:h-32 lg:h-64 relative mb-[-4vh] lg:mb-[-6vh] ">
                <Image
                  className="object-cover"
                  fill
                  src={urlFor(trainer.image).url()}
                  alt="Trainer 1"
                />
              </div>
              <div className="bg-white h-[9.5rem] md:h-64 lg:h-[24rem] w-full">
                <div
                  className={`flex flex-col items-center mt-[4vh] ${cy.className}`}
                >
                  <div className="bg-black bg-opacity-60 h-[1px] w-[10%] mx-auto mt-2 md:mt-4 lg:mt-6 md:h-[2px] "></div>
                  <h1 className="text-coral text-xxs mt-2 md:mt-4 lg:mt-8 md:text-base lg:text-2xl">
                    {trainer.name.toUpperCase()}
                  </h1>
                  <h3 className="text-xxss text-gray-700 md:text-xxs lg:text-sm">
                    {trainer.title}
                  </h3>
                  <div className="bg-black bg-opacity-60 h-[1px]  w-[10%] mx-auto mt-2  md:mt-4 lg:mt-6 md:h-[2px]"></div>
                </div>
                <p className="text-xxss w-[90%] mx-auto text-center mt-2 md:text-xxs lg:text-sm md:mt-4 lg:mt-6">
                  {trainer.para1}
                </p>
                <p className="text-xxss w-[90%] mx-auto text-center mt-2 mb-2 md:text-xxs lg:text-sm md:mt-4 lg:mt-6">
                {trainer.para2}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Trainer;
