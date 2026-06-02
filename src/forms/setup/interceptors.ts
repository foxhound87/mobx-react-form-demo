import type { FieldDefinition } from 'mobx-react-form';

const fields: Record<string, FieldDefinition> = {
  fullName: {
    value: 'John Doe',
    label: 'Full Name',
    placeholder: 'Enter your name',
    rules: 'required|string|min:3',
  },
  email: {
    value: 'john@example.com',
    label: 'Email',
    placeholder: 'Enter your email',
    rules: 'required|email',
  },
  role: {
    value: 'user',
    label: 'Role',
    placeholder: 'Select role',
    rules: 'required|string',
  },
};

export default { fields };
