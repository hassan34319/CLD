// activity.ts

export default {
  name: "activity",
  type: "document",
  title: "Activity",
  fields: [
    {
      name: "date",
      type: "number",
      title: "Date",
    },
    {
      name: "month",
      type: "string",
      title: "Month",
    },
    {
      name: "category",
      type: "string",
      title: "Category",
      options: {
        list: [
          { title: "Events", value: "events" },
          { title: "Blog", value: "blog" },
        ],
      },
    },
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
      name: "shortText",
      type: "string",
      title: "Short Text",
    },
    {
      name: "longText",
      type: "array",
      title: "Long Text",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Heading 1", value: "h1" },
            { title: "Heading 2", value: "h2" },
            { title: "Heading 3", value: "h3" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
            ],
            annotations: [
              {
                name: "link",
                title: "Link",
                type: "object",
                fields: [
                  {
                    name: "href",
                    title: "URL",
                    type: "url",
                  },
                ],
              },
            ],
          },
        },
      ],
      options: {
        // Options for block content (paragraphs)
        lists: [
          { title: "Bullet List", value: "bullet" },
          { title: "Numbered List", value: "number" },
        ],
      },
    },
    {
      name: "image",
      type: "image",
      title: "Image",
    },
  ],
};
