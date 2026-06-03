import type { FieldDefinition } from 'mobx-react-form';

// Two independent form definitions composed together
export const contactFields: Record<string, FieldDefinition> = {
  fullName: {
    value: 'Alice Johnson',
    label: 'Full Name',
    placeholder: 'Enter full name',
    rules: 'required|string|min:3',
  },
  email: {
    value: 'alice@example.com',
    label: 'Email',
    placeholder: 'Enter email',
    rules: 'required|email',
  },
  phone: {
    value: '+1 555-0123',
    label: 'Phone',
    placeholder: 'Enter phone number',
    rules: 'required|string|min:7',
  },
};

export const addressFields: Record<string, FieldDefinition> = {
  street: {
    value: '123 Main Street',
    label: 'Street',
    placeholder: 'Enter street address',
    rules: 'required|string|min:5',
  },
  city: {
    value: 'New York',
    label: 'City',
    placeholder: 'Enter city',
    rules: 'required|string|min:2',
  },
  zipCode: {
    value: '10001',
    label: 'ZIP Code',
    placeholder: 'Enter ZIP code',
    rules: 'required|string|min:4',
  },
  country: {
    value: 'USA',
    label: 'Country',
    placeholder: 'Enter country',
    rules: 'required|string|min:2',
  },
};

// Fields for the parent (wrapper) form
const fields: Record<string, FieldDefinition> = {};

export default { fields };
