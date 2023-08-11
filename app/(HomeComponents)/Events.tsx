"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Activity, Gallery } from "../types";
import { bebas } from "../utils/Babas";
import { cy } from "../utils/Cy";
import { urlFor } from "../utils/UrlImage";

type Props = {
  activities: Activity[];
  gallery: Gallery[];
};

const Events = ({ activities, gallery }: Props) => {
  const [selectedTab, setSelectedTab] = useState("All");

  function getBlogActivities(activities: Activity[]): Activity[] {
    return activities.filter((activity) => activity.category === "blog");
  }
  const blogs = getBlogActivities(activities);
  function getEventActivities(activities: Activity[]): Activity[] {
    return activities.filter((activity) => activity.category === "events");
  }
  const events = getEventActivities(activities);
  console.log(activities);
  function sortByCreatedAtDesc(activities: Activity[]): Activity[] {
    return activities.slice().sort((a, b) => {
      const dateA = new Date(a._createdAt);
      const dateB = new Date(b._createdAt);
      return dateB.getTime() - dateA.getTime();
    });
  }
  const latestActivities = sortByCreatedAtDesc(activities);

  return (
    <section className="mt-16">
      <div className="w-[95%] mx-auto rounded-2xl bg-black border-sugar border-2 pb-4 md:pb-8 md:rounded-[40px] lg:rounded-[60px]">
        {/* heading */}
        <h1
          className={`${cy.className} text-tiffany text-lg  md:text-4xl lg:text-6xl pl-4 py-4 md:pl-8 md:py-8 xl:pl-14 xl:py-14`}
        >
          ACTIVITIES:
        </h1>
        {/* Links */}
        <div className="flex flex-row justify-end mx-auto w-[90%] space-x-2 md:space-x-4 lg:space-x-8 text-xxs md:text-base lg:text-xl">
          <button
            onClick={() => setSelectedTab("All")}
            className={`font-semibold  ${
                selectedTab === "All" ? "text-coral" : "text-white"
              }`}
          >
            All
          </button>
          <button
            onClick={() => setSelectedTab("Latest")}
            className={`font-semibold  ${
                selectedTab === "Latest" ? "text-coral" : "text-white"
              }`}
          >
            Latest
          </button>
          <button
            onClick={() => setSelectedTab("Event")}
            className={`font-semibold  ${
                selectedTab === "Event" ? "text-coral" : "text-white"
              }`}
          >
            Events
          </button>
          <button
            onClick={() => setSelectedTab("Blog")}
            className={`font-semibold  ${
                selectedTab === "Blog" ? "text-coral" : "text-white"
              }`}
          >
            Blog
          </button>
          <button
            onClick={() => setSelectedTab("Gallery")}
            className={`font-semibold  ${
              selectedTab === "Gallery" ? "text-coral" : "text-white"
            }`}
          >
            Gallery
          </button>
        </div>
        <div className="bg-sugar mx-4 md:mx-8 lg:mx-14 w-[90%] h-[2px] md:h-1 lg:h-2 mb-4 md:mb-8 lg:mb-14"></div>
        {/* Activity */}
        {selectedTab === "All" && (
          <div className="flex flex-row w-[90%] mx-auto">
            {/* Date */}
            <div className={`${cy.className} text-end mt-1`}>
              <h1 className="text-xxss md:text-base lg:text-lg text-white">
                {activities[0].date}
              </h1>
              <h1 className="text-xxss md:text-base lg:text-lg text-white">
                {activities[0].month}
              </h1>
            </div>
            {/* Activity Details */}
            <div className="ml-2 w-[50%]">
              <h1
                className={`${cy.className} text-xxss md:text-sm lg:text-base text-coral`}
              >
                {activities[0].title.toUpperCase()}
              </h1>
              <p className="text-xxss md:text-sm lg:text-base text-white mt-1">
                {activities[0].shortText}
                {"                                                          "}
                <span className="text-coral opacity-80">... read more</span>
              </p>
            </div>
            {/* Activity image */}
            <div className="w-[37%] h-16 md:h-48 relative ml-8  text-start">
              <Image
                className="object-contain"
                fill
                src={urlFor(activities[0].image).url()}
                alt="Activity"
              />
            </div>
          </div>
        )}
        {selectedTab === "Latest" && (
          <div className="flex flex-row w-[90%] mx-auto">
            {/* Date */}
            <div className={`${cy.className} text-end mt-1`}>
              <h1 className="text-xxss md:text-base lg:text-lg text-white">
                {latestActivities[0].date}
              </h1>
              <h1 className="text-xxss md:text-base lg:text-lg text-white">
                {latestActivities[0].month}
              </h1>
            </div>
            {/* Activity Details */}
            <div className="ml-2 w-[50%]">
              <h1
                className={`${cy.className} text-xxss md:text-sm lg:text-base text-coral`}
              >
                {latestActivities[0].title.toUpperCase()}
              </h1>
              <p className="text-xxss md:text-sm lg:text-base text-white mt-1">
                {latestActivities[0].shortText}
                {"                                                          "}
                <span className="text-coral opacity-80">... read more</span>
              </p>
            </div>
            {/* Activity image */}
            <div className="w-[37%] h-16 md:h-48 relative ml-8  text-start">
              <Image
                className="object-contain"
                fill
                src={urlFor(latestActivities[0].image).url()}
                alt="Activity"
              />
            </div>
          </div>
        )}
        {selectedTab === "Event" && (
          <div className="flex flex-row w-[90%] mx-auto">
            {/* Date */}
            <div className={`${cy.className} text-end mt-1`}>
              <h1 className="text-xxss md:text-base lg:text-lg text-white">
                {events[0].date}
              </h1>
              <h1 className="text-xxss md:text-base lg:text-lg text-white">
                {events[0].month}
              </h1>
            </div>
            {/* Activity Details */}
            <div className="ml-2 w-[50%]">
              <h1
                className={`${cy.className} text-xxss md:text-sm lg:text-base text-coral`}
              >
                {events[0].title.toUpperCase()}
              </h1>
              <p className="text-xxss md:text-sm lg:text-base text-white mt-1">
                {events[0].shortText}
                {"                                                          "}
                <span className="text-coral opacity-80">... read more</span>
              </p>
            </div>
            {/* Activity image */}
            <div className="w-[37%] h-16 md:h-48 relative ml-8  text-start">
              <Image
                className="object-contain"
                fill
                src={urlFor(events[0].image).url()}
                alt="Activity"
              />
            </div>
          </div>
        )}

        {selectedTab === "Blog" && (
          <div className="flex flex-row w-[90%] mx-auto">
            {/* Date */}
            <div className={`${cy.className} text-end mt-1`}>
              <h1 className="text-xxss md:text-base lg:text-lg text-white">
                {blogs[0].date}
              </h1>
              <h1 className="text-xxss md:text-base lg:text-lg text-white">
                {blogs[0].month}
              </h1>
            </div>
            {/* Activity Details */}
            <div className="ml-2 w-[50%]">
              <h1
                className={`${cy.className} text-xxss md:text-sm lg:text-base text-coral`}
              >
                {blogs[0].title.toUpperCase()}
              </h1>
              <p className="text-xxss md:text-sm lg:text-base text-white mt-1">
                {blogs[0].shortText}
                {"                                                          "}
                <span className="text-coral opacity-80">... read more</span>
              </p>
            </div>
            {/* Activity image */}
            <div className="w-[37%] h-16 md:h-48 relative ml-8  text-start">
              <Image
                className="object-contain"
                fill
                src={urlFor(blogs[0].image).url()}
                alt="Activity"
              />
            </div>
          </div>
        )}

        {selectedTab === "Gallery" && (
          <div className="flex flex-row justify-center w-[90%] mx-auto">
            <div className="w-[40%] h-16 md:h-48 relative ml-8  text-start">
              <Image
                className="object-contain"
                fill
                src={urlFor(gallery[0].images[0]).url()}
                alt="Activity"
              />
            </div>
            <div className="w-[40%] h-16 md:h-48 relative ml-8  text-start">
              <Image
                className="object-contain"
                fill
                src={urlFor(gallery[0].images[1]).url()}
                alt="Activity"
              />
            </div>
          </div>
        )}

        <div
          className={`cursor-pointer bg-white w-1/6 py-[1px] rounded-lg ${bebas.className} mx-auto flex items-center justify-center text-xxs mt-3 md:text-base md:rounded-2xl lg:text-xl lg:mt-5 md:py-1`}
        >
          <Link href="/activities" className="w-full text-center mx-auto">
            SEE MORE
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Events;
