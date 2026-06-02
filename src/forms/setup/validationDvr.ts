import type { FieldDefinition } from 'mobx-react-form';

const fields: Record<string, FieldDefinition> = {
  fullName: {
    value: '',
    label: 'Full Name',
    placeholder: 'Enter your full name',
    rules: 'required|string|min:3',
  },
  email: {
    value: '',
    label: 'Email',
    placeholder: 'Enter your email',
    rules: 'required|email|string',
  },
  phone: {
    value: '',
    label: 'Phone',
    placeholder: 'XXX-XXX-XXXX',
    rules: 'required|telephone',
  },
  age: {
    value: '',
    label: 'Age',
    placeholder: 'Enter your age',
    rules: 'required|integer|min:18|max:120',
  },
};

export default { fields };
