import React from "react";
import Footer from "../(UIComponents)/Footer";
import Header from "../(UIComponents)/Header";
import { client } from "../utils/client";
import { cy } from "../utils/Cy";
import Trainer from "./(TrainersComponents)/Trainer";

type Props = {};
export const revalidate = 60

async function TrainerPage({}: Props) {
  const trainers = await client.fetch(`
  *[_type == "trainer"] {
    ...
  }
`);
console.log(trainers)
  return (
    <main className="w-full h-max bg-black text-white">
      <Header />
      <div className="w-full flex flex-row justify-between items-center mt-3 md:mt-6 lg:mt-8">
        <div className="bg-coral rounded-r-2xl w-[20%]  h-[0.125rem]  md:h-1 lg:h-2 "></div>
        <div
          className={`${cy.className} text-tiffany text-lg  md:text-4xl lg:text-6xl`}
        >
          GLOBAL TRAINERS
        </div>
        <div className="bg-coral  h-[0.125rem] rounded-l-2xl  md:h-1 lg:h-2 w-[20%]"></div>
      </div>
      {/* Trainers */}
      <Trainer trainers={trainers} />
      <Footer />
    </main>
  );
}

export default TrainerPage;
