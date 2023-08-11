export default {
    name: 'partners',
    type: 'document',
    title: 'Partners',
    fields: [
      {
        name: 'image',
        type: 'array',
        title: 'Images',
        of: [{ type: 'image' }]
      }
    ]
  };