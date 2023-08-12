// work.js

export default {
  name: "work",
  type: "document",
  title: "Work",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title", // Generates the slug based on the "title" field
        maxLength: 200, // Maximum length of the generated slug
      },
    },
    {
      name: "image",
      type: "image",
      title: "Image",
    },
    {
      name: "learningSolutionText",
      type: "text",
      title: "Learning Solution Text",
    },
    {
      name: "learningSolutions",
      type: "array",
      title: "Learning Solutions",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", type: "string", title: "Name" },
            { name: "description", type: "text", title: "Description" },
          ],
        },
      ],
    },
    {
      name: "trainingPrograms",
      type: "array",
      title: "Training Programs",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", type: "string", title: "Name" },
            {
              name: "trainingProgram",
              type: "reference",
              title: "Training Program",
              to: [{ type: "trainingProgram" }],
            },
            {
              name: "slug",
              type: "slug",
              title: "Slug",
              options: {
                source: "name", // Generates the slug based on the "title" field
                maxLength: 200, // Maximum length of the generated slug
              },
            },
          ],
        },
      ],
    },
  ],
};
