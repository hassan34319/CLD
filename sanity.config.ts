import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { loadEnvConfig } from "@next/env";
import { defineCliConfig } from "sanity/cli";

import { apiVersion, projectId, dataset } from "./sanity/env";
import activity from "./sanity/schemas/activity";
import gallery from "./sanity/schemas/gallery";
import homeBanner from "./sanity/schemas/homeBanner";
import partner from "./sanity/schemas/partner";
import socialPost from "./sanity/schemas/socialPost";
import work from "./sanity/schemas/work";
import trainingProgram from "./sanity/schemas/trainingProgram";
import trainer from "./sanity/schemas/trainer";
import companyBanner from "./sanity/schemas/companyBanner";
import philosophyBanner from "./sanity/schemas/philosophyBanner";

export default defineConfig({
  name: "default",
  title: "CLD TRAINING",
  projectId,
  dataset,
  plugins: [deskTool()],
  schema: {
    types: [activity,gallery,homeBanner,partner,socialPost,work,trainingProgram,trainer,companyBanner,philosophyBanner],
  },
});
