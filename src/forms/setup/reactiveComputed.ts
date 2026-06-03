/*
  Form: Reactive Computed Fields
  Uses autorun() pattern (same as Observers demo) for reactive computations:
  - Row-level: products[].total = qty * amount
  - Grand total: sum of all product totals
*/

const fields = [
  'products',
  'products[].name',
  'products[].qty',
  'products[].amount',
  'products[].total',
  'orderTotal',
];

const values = {
  products: [
    { name: 'MacBook Pro', qty: 1, amount: 2499, total: 0 },
    { name: 'AirPods Pro', qty: 2, amount: 249, total: 0 },
  ],
};

const labels = {
  products: 'Products',
  'products[].name': 'Product Name',
  'products[].qty': 'Qty',
  'products[].amount': 'Unit Price (€)',
  'products[].total': 'Total (€)',
  orderTotal: 'Order Total (€)',
};

const placeholders = {
  'products[].name': 'Enter product name',
  'products[].qty': '0',
  'products[].amount': '0.00',
};

const types = {
  'products[].qty': 'number',
  'products[].amount': 'number',
  'products[].total': 'number',
  orderTotal: 'number',
};

const hooks = {
  onInit(form) {
    if (form.$('products').fields.size === 0) {
      form.$('products').add();
    }
  },
  onSubmit(form) {
    console.log('Order values:', JSON.stringify(form.values(), null, 2));
  },
};

export default {
  fields,
  values,
  labels,
  placeholders,
  types,
  hooks,
};
