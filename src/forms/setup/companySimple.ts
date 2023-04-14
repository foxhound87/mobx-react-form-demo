import { productsOptions, multiProductsOptions } from '../data/options';

/*
  Form: Company Simple
  Separated Fields Props Definition
*/
export default {
  fields: [
    'name',
    'revenue',
    'assets',
    'products',
    'productsMultiselect',
    'productsStatus',
  ],
  labels: {
    name: 'Company Name',
    revenue: 'Revenue (Billion $)',
    assets: 'Assets (Billion $)',
    products: 'Products',
    productsMultiselect: 'Products - Multiselect (react-select)',
  },
  extra: {
    products: productsOptions,
    productsMultiselect: multiProductsOptions,
  },
  values: {
    name: 'Apple',
    revenue: '233.715',
    assets: 305.277,
    products: 'iMac',
    productsMultiselect: { value: 'watch', label: 'Watch' },
    productsStatus: "Used",
  },
  types: {
    productsStatus: 'radio'
  },
  // hooks: {
  //   productsMultiselect: {
  //     onInit(field) {
  //       field.set({ value: 'watch', label: 'Watch' });
  //     },
  //   },
  // },
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
