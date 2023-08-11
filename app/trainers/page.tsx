import React from "react";
import Footer from "../(UIComponents)/Footer";
import Header from "../(UIComponents)/Header";
import { client } from "../utils/client";
import { cy } from "../utils/Cy";
import Trainer from "./(TrainersComponents)/Trainer";

type Props = {};

async function TrainerPage({}: Props) {
  const trainers = await client.fetch(`
  *[_type == "trainer"] {
    ...
  }
`);
  return (
    <main className="w-full h-max">
      <Header />
      <div className="w-full flex flex-row justify-between items-center mt-3 md:mt-6 lg:mt-8">
        <div className="bg-coral h-1 rounded-r-2xl w-[30%] md:h-2 lg:h-4"></div>
        <div
          className={`${cy.className} text-tiffany text-lg  md:text-4xl lg:text-6xl`}
        >
          TRAINERS
        </div>
        <div className="bg-coral h-1 rounded-l-xl w-[30%] md:h-2 lg:h-4"></div>
      </div>
      {/* Trainers */}
      <Trainer trainers={trainers} />
      <Footer />
    </main>
  );
}

export default TrainerPage;
