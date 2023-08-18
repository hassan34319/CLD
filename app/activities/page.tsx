import React from "react";
import Footer from "../(UIComponents)/Footer";
import Header from "../(UIComponents)/Header";
import { client } from "../utils/client";
import { cy } from "../utils/Cy";
import Activities from "./(ActivitiesComponents)/Activities";

type Props = {};
export const revalidate = 60;

async function page({}: Props) {
  const activities = await client.fetch(`
    *[_type == "activity"] {
      ...
    }
  `);
  const gallery = await client.fetch(`
  *[_type == "gallery"] {
    ...
  }
`);
  return (
    <main className="w-full h-max">
      <Header />
      {/* Trainers */}
      <Activities activities={activities} gallery={gallery} />
      <Footer />
    </main>
  );
}
export default page;
