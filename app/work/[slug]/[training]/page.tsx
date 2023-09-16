import Footer from "@/app/(UIComponents)/Footer";
import Header from "@/app/(UIComponents)/Header";
import { TrainingProgram } from "@/app/types";
import { client } from "@/app/utils/client";
import { cy } from "@/app/utils/Cy";
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
    <main className="w-full h-max">
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
            <div className="text-xxs md:text-sm lg:text-lg flex justify-center w-[90%] text-white mx-auto mt-4 md:mt-8 lg:mt-16 ">{subTrainings[0].description}</div>
          )}
          <Training subTrainings={subTrainings} slug={slug} />
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default SubTrainingPage;
