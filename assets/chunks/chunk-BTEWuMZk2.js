var e=`/*
  Form: Company Simple
  Separated Fields Props Definition
*/
export default {
  fields: [
    'name',
    'revenue',
    'assets',
    'productsStatus',
  ],
  labels: {
    name: 'Company Name',
    revenue: 'Revenue (Billion $)',
    assets: 'Assets (Billion $)',
  },
  values: {
    name: 'Apple',
    revenue: '233.715',
    assets: 305.277,
    productsStatus: "Used",
  },
  types: {
    productsStatus: 'radio'
  },
  hooks: {
    name: {
      onSync: (field) => console.log('field', field)
    }
  },
  handlers: {
    name: {
      onChange: (field) => (e) => console.log('onSYNC handler field', field, e),
    }
  }
};
`;export{e as default};