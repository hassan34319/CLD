// work.js

export default {
    name: 'work',
    type: 'document',
    title: 'Work',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image'
      },
      {
        name: 'learningSolutionText',
        type: 'text',
        title: 'Learning Solution Text'
      },
      {
        name: 'learningSolutions',
        type: 'array',
        title: 'Learning Solutions',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'name', type: 'string', title: 'Name' },
              { name: 'description', type: 'text', title: 'Description' }
            ]
          }
        ]
      },
      {
        name: 'trainingPrograms',
        type: 'array',
        title: 'Training Programs',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'name', type: 'string', title: 'Name' },
              { name: 'trainingProgram', type: 'reference', title: 'Training Program', to: [{ type: 'trainingProgram' }] }
            ]
          }
        ]
      }
    ]
  };
  