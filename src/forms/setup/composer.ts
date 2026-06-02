import type { FieldDefinition } from 'mobx-react-form';

const fields: Record<string, FieldDefinition> = {
  billingCard: {
    value: '4111111111111111',
    label: 'Card Number',
    placeholder: 'Enter card number',
    rules: 'required|string|min:16',
  },
  billingExpiry: {
    value: '12/28',
    label: 'Expiry Date',
    placeholder: 'MM/YY',
    rules: 'required|string',
  },
  billingCvv: {
    value: '123',
    label: 'CVV',
    placeholder: 'Enter CVV',
    rules: 'required|string|min:3|max:4',
  },
  shippingAddress: {
    value: '123 Main St',
    label: 'Shipping Address',
    placeholder: 'Enter address',
    rules: 'required|string|min:5',
  },
  shippingCity: {
    value: 'New York',
    label: 'City',
    placeholder: 'Enter city',
    rules: 'required|string|min:2',
  },
  shippingZip: {
    value: '10001',
    label: 'ZIP Code',
    placeholder: 'Enter ZIP',
    rules: 'required|string|min:5',
  },
};

export default { fields };
