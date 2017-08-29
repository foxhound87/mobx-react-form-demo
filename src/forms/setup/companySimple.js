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
  },
  hooks: {
    productsMultiselect: {
      onInit(field) {
        field.set([{ value: 'watch', label: 'Watch' }]);
      },
    },
  },
};
