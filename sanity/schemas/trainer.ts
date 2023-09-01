export default {
    name: 'trainer',
    type: 'document',
    title: 'Trainer',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
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
      {
        name: 'image',
        type: 'image',
        title: 'Image'
      },
      {
        name: 'title',
        type: 'string',
        title: 'Title'
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
    ]
  };