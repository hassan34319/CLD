export default {
    name: 'trainingProgram',
    type: 'document',
    title: 'Training Program',
    fields: [
      {
        name: 'typesTraining',
        type: 'array',
        title: 'Types of Training',
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
        name: 'banner',
        type: 'image',
        title: 'Banner'
      },
      {
        name: 'text',
        type: 'text',
        title: 'Text'
      },
      {
        name: 'duration',
        type: 'string',
        title: 'Duration'
      },
      {
        name: 'cost',
        type: 'string',
        title: 'Cost'
      },
      {
        name: 'dates',
        type: 'text',
        title: 'Dates'
      },
      {
        name: 'venue',
        type: 'string',
        title: 'Venue'
      },
      {
        name: 'seatsLeft',
        type: 'number',
        title: 'Seats Left'
      },
      {
        name: 'happyCustomers',
        type: 'number',
        title: 'Happy Customers'
      }
    ]
  };