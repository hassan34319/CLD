export default {
  name: "subTraining",
  type: "document",
  title: "Sub Training",
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
      name: "banner",
      type: "image",
      title: "Banner",
    },
    {
      name: "text",
      type: "text",
      title: "Text",
    },
    {
      name: "duration",
      type: "string",
      title: "Duration",
    },
    {
      name: "cost",
      type: "string",
      title: "Cost",
    },
    {
      name: "dates",
      type: "text",
      title: "Dates",
    },
    {
      name: "venue",
      type: "string",
      title: "Venue",
    },
    {
      name: "seatsLeft",
      type: "number",
      title: "Seats Left",
    },
    {
      name: "happyCustomers",
      type: "number",
      title: "Happy Customers",
    },
  ],
};
