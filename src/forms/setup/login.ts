import type { FieldDefinition } from 'mobx-react-form';

const fields: Record<string, FieldDefinition> = {
  email: {
    value: 'user@example.com',
    label: 'Email',
    placeholder: 'Enter your email',
    rules: 'required|email|string|between:5,50',
  },
  password: {
    value: '',
    label: 'Password',
    placeholder: 'Enter your password',
    rules: 'required|string|between:6,30',
    type: 'password',
  },
  remember: {
    value: false,
    label: 'Remember me',
    type: 'checkbox',
  },
};

export default { fields };
