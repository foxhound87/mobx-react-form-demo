var e=`import { multiProductsOptions } from '../data/options';

export default {
  fields: ['products'],
  labels: {
    products: 'Products - Multiselect (react-select)',
  },
  extra: {
    products: multiProductsOptions,
  },
  values: {
    products: [{ value: 'watch', label: 'Watch' }, { value: 'imac', label: 'iMac' }],
  },
};
`;export{e as default};