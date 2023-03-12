import { productsOptions } from '../data/options';

/*
  Form: Company Widget
  Unified Fields Props Definition
*/
export default {
  fields: {
    name: {
      label: 'Company Name',
      value: 'Apple',
      rules: 'required|string|between:3,15',
    },
    founded: {
      label: 'Founded - DateTimePicker (react-widgets)',
      value: new Date(1976, 3, 1),
    },
    revenue: {
      label: 'Revenue (Billion $)',
      value: '233.715',
      rules: 'required|numeric',
    },
    assets: {
      label: 'Assets (Billion $)',
      value: 305.277,
      rules: 'required|numeric',
    },
    productsDropdown: {
      label: 'Products - Dropdown (react-widgets)',
      value: 'iMac',
      extra: productsOptions,
    },
    productsMultiselect: {
      label: 'Products - Multiselect (react-widgets)',
      value: ['iMac', 'iPhone'],
      rules: 'required',
      extra: productsOptions,
    },
  },
};
