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

export default defineConfig({
  name: "default",
  title: "CLD TRAINING",
  projectId,
  dataset,
  plugins: [deskTool()],
  schema: {
    types: [activity,gallery,homeBanner,partner,socialPost],
  },
});
