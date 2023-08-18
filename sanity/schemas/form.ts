// schema.js
export default {
    name: 'registrationForm',
    type: 'document',
    title: 'Registration Form',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
      },
      {
        name: 'email',
        type: 'email',
        title: 'Email',
      },
      {
        name: 'phone',
        type: 'string',
        title: 'Phone',
      },
      {
        name: 'country',
        type: 'string',
        title: 'Country',
      },
      {
        name: 'company',
        type: 'string',
        title: 'Company',
      },
      {
        name: 'selectedTraining',
        type: 'string',
        title: 'Selected Training',
      },
      {
        name: 'selectedSubTraining',
        type: 'string',
        title: 'Selected Sub Training',
      },
    ],
  };
  