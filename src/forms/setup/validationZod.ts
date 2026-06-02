import type { FieldDefinition } from 'mobx-react-form';

const fields: Record<string, FieldDefinition> = {
  username: {
    value: '',
    label: 'Username',
    placeholder: 'Enter username (min 3 chars)',
    rules: 'required|string|min:3',
  },
  email: {
    value: '',
    label: 'Email',
    placeholder: 'Enter your email',
    rules: 'required|email',
  },
  age: {
    value: '',
    label: 'Age',
    placeholder: 'Must be 18+',
    rules: 'required|integer|min:18|max:120',
  },
  website: {
    value: '',
    label: 'Website',
    placeholder: 'https://example.com (optional)',
    rules: 'url',
  },
  acceptTerms: {
    value: false,
    type: 'checkbox',
    label: 'Accept Terms & Conditions',
    rules: 'accepted',
  },
};

export default { fields };
