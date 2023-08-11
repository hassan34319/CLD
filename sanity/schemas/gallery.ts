export default {
    name: 'gallery',
    type: 'document',
    title: 'Gallery',
    fields: [
      {
        name: 'images',
        type: 'array',
        title: 'Images',
        of: [{ type: 'image' }]
      }
    ]
  };
  