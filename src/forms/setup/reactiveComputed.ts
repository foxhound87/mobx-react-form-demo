import type { FieldDefinition } from 'mobx-react-form';

const fields: Record<string, FieldDefinition> = {
  unitPrice: {
    value: 100,
    label: 'Unit Price (€)',
    type: 'number',
    rules: 'required|numeric|min_value:0',
  },
  quantity: {
    value: 3,
    label: 'Quantity',
    type: 'number',
    rules: 'required|integer|min_value:1',
  },
  discountPercent: {
    value: 10,
    label: 'Discount (%)',
    type: 'number',
    rules: 'numeric|min_value:0|max_value:100',
  },
  subtotal: {
    computed: ({ form }) => {
      const price = Number(form.$('unitPrice').value) || 0;
      const qty = Number(form.$('quantity').value) || 0;
      return price * qty;
    },
    label: 'Subtotal (€)',
  },
  discount: {
    computed: ({ form }) => {
      const price = Number(form.$('unitPrice').value) || 0;
      const qty = Number(form.$('quantity').value) || 0;
      const pct = Number(form.$('discountPercent').value) || 0;
      return Number(((price * qty) * (pct / 100)).toFixed(2));
    },
    label: 'Discount (€)',
  },
  total: {
    computed: ({ form }) => {
      const price = Number(form.$('unitPrice').value) || 0;
      const qty = Number(form.$('quantity').value) || 0;
      const pct = Number(form.$('discountPercent').value) || 0;
      const subtotal = price * qty;
      return Number((subtotal - subtotal * (pct / 100)).toFixed(2));
    },
    label: 'Total (€)',
  },
};

const hooks = {
  onSubmit(form) {
    console.log('Invoice values:', JSON.stringify(form.values(), null, 2));
  },
};

export default { fields, hooks };
