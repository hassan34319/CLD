"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Activity, Gallery } from "../../types";
import { bebas } from "../../utils/Babas";
import { cy } from "../../utils/Cy";
import { urlFor } from "../../utils/UrlImage";

type Props = {
  activities: Activity[];
  gallery: Gallery[];
};

const Activities = ({ activities, gallery }: Props) => {
  const [selectedTab, setSelectedTab] = useState("All");

  const categories = ["All", "Latest", "Event", "Blog", "Gallery"];

  const filteredActivities: { [key: string]: Activity[] } = {
    All: activities,
    Latest: activities,
    Event: activities.filter((activity) => activity.category === "events"),
    Blog: activities.filter((activity) => activity.category === "blog"),
  };

  function sortByCreatedAtDesc(activities: Activity[]): Activity[] {
    return activities.slice().sort((a, b) => {
      const dateA = new Date(a._createdAt);
      const dateB = new Date(b._createdAt);
      return dateB.getTime() - dateA.getTime();
    });
  }

  return (
    <section className="w-full">
      {/* heading */}
      <h1
        className={`${cy.className} text-tiffany text-lg  md:text-4xl lg:text-6xl pl-4 py-4 md:pl-8 md:py-8 xl:pl-14 xl:py-14`}
      >
        ACTIVITIES:
      </h1>
      {/* Links */}
      <div className="flex flex-row justify-end mx-auto w-[90%] space-x-2 md:space-x-4 lg:space-x-8 text-xxs md:text-base lg:text-xl">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedTab(category)}
            className={`font-semibold ${
              selectedTab === category ? "text-coral" : "text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="bg-sugar mx-4 md:mx-8 lg:mx-14 w-[90%] h-[2px] md:h-1 lg:h-2 mb-4 md:mb-8 lg:mb-14"></div>
      {/* Activity */}
      {selectedTab !== "Gallery" && filteredActivities[selectedTab] && (
        <div className="flex flex-col gap-y-3 md:gap-y-8 lg:gap-y-16 w-[90%] mx-auto mb-4 md:mb-8 lg:mb-16 ">
          {filteredActivities[selectedTab].map((activity: Activity) => (
            <div className="flex flex-row w-full" key={activity._id}>
              <div className={`${cy.className} text-end mt-1`}>
                <h1 className="text-xxss md:text-base lg:text-lg text-white">
                  {activity.date}
                </h1>
                <h1 className="text-xxss md:text-base lg:text-lg text-white">
                  {activity.month}
                </h1>
              </div>
              ;{/* Activity Details */}
              <div className="ml-2 w-[50%]">
                <Link
                  href={`/activities/${activity.slug.current}`}
                  className={`${cy.className} text-xxss md:text-sm lg:text-base text-coral`}
                >
                  {activity.title.toUpperCase()}
                </Link>
                <p className="text-xxss md:text-sm lg:text-base text-white mt-1">
                  {activity.shortText}
                  {"                                                          "}
                  <span className="text-coral opacity-80">
                    <Link href={`/activities/${activity.slug.current}`}>
                      ... read more
                    </Link>
                  </span>
                </p>
              </div>
              ;{/* Activity image */}
              <div className="w-[37%] h-16 md:h-48 relative ml-8  text-start">
                <Image
                  className="object-contain"
                  fill
                  src={urlFor(activity.image).url()}
                  alt="Activity"
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Gallery */}
      {selectedTab === "Gallery" && (
        <div className="flex flex-wrap justify-center w-[90%] mx-auto mb-4 md:mb-8 lg:mb-16">
          {gallery[0].images.map((item, index) => (
            <div
              key={index}
              className="w-[40%] h-16 md:h-48 relative ml-8  text-start"
            >
              <Image
                className="object-contain"
                fill
                src={urlFor(item).url()}
                alt="Activity"
              />
            </div>
          ))}
        </div>
      )}

      {/* SEE MORE button */}
    </section>
  );
};

export default Activities;
