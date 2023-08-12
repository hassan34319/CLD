import Footer from "@/app/(UIComponents)/Footer";
import Header from "@/app/(UIComponents)/Header";
import { client } from "@/app/utils/client";
import { cy } from "@/app/utils/Cy";
import { urlFor } from "@/app/utils/UrlImage";
import Image from "next/image";
import React from "react";

type Props = {};

async function TrainingPage({ params }: { params: { slug: string } }) {
  const query = `*[_type == "work" && _id == $slug]`;
  const { slug } = params;
  console.log(slug);
  const work = await client.fetch(query, { slug });
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
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default TrainingPage;
