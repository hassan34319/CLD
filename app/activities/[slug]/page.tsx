import Footer from "@/app/(UIComponents)/Footer";
import Header from "@/app/(UIComponents)/Header";
import { Activity } from "@/app/types";
import { client } from "@/app/utils/client";
import { cy } from "@/app/utils/Cy";
import { urlFor } from "@/app/utils/UrlImage";
import Image from "next/image";
import React from "react";
import BlockContent from "@sanity/block-content-to-react";

type Props = {};

export const revalidate = 60;
async function page({ params }: { params: { slug: string } }) {
  const query = `*[_type == "activity" && slug.current == $slug]`;
  const { slug } = params;
  console.log(slug);
  const activity: Activity[] = await client.fetch(query, { slug });
  return (
    <main className="w-full h-max mb-3 md:mb-6 lg:mb-8">
      <Header />
      <div className="w-full min-h-[70vh]">
        <div className="w-full flex flex-row justify-between items-center mt-3 md:mt-6 lg:mt-8">
          <div
            className={`${cy.className} text-coral text-xs  md:text-2xl lg:text-4xl mx-auto`}
          >
            {activity[0].title}
          </div>
        </div>
        <div className=" h-40 md:h-[20rem] lg:h-[36rem] relative mt-4 md:mt-8 lg:mt-12 w-[90%] mx-auto">
          <Image
            src={urlFor(activity[0].image).url()}
            alt="banner"
            fill
            className="object-contain"
          />
        </div>
        <div className="text-white text-xss md:text-base lg:text-xl w-[90%] mx-auto mt-4 md:mt-8 lg:mt-16 mb-4 md:mb-8 lg:mb-16">
          <BlockContent blocks={activity[0].longText} />
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default page;
