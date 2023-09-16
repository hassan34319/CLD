export default {
  name: "trainingProgram",
  type: "document",
  title: "Training Program",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "description",
      type: "string",
      title: "Description",
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
      name: "blueBoxes",
      type: "array",
      title: "Blue boxes",
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
  ],
};
