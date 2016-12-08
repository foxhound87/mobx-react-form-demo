export default {
  fields: {
    name: {
      label: 'Company Name',
      value: 'Apple',
      rules: 'required|string|between:3,15',
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
    products: {
      label: 'Products',
      value: 'iMac',
    },
    productsMultiselect: {
      label: 'Products - Multiselect (react-select)',
      value: { value: 'watch', label: 'Watch' },
      rules: 'required',
    },
  },
};
