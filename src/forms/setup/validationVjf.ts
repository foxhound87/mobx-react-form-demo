import { isEmail, shouldBeEqualTo } from '../extension/vjf';
import type { FieldDefinition } from 'mobx-react-form';

const fields: Record<string, FieldDefinition> = {
  username: {
    value: '',
    label: 'Username',
    placeholder: 'Choose a username',
    rules: 'required|string|between:3,20',
  },
  email: {
    value: '',
    label: 'Email',
    related: ['emailConfirm'],
    placeholder: 'Enter your email',
    rules: 'required|email|string',
  },
  emailConfirm: {
    value: '',
    label: 'Confirm Email',
    placeholder: 'Confirm your email',
    validators: [isEmail, shouldBeEqualTo('email')],
    rules: 'required|string',
  },
  website: {
    value: '',
    label: 'Website',
    placeholder: 'https://example.com',
    rules: 'url',
  },
};

export default { fields };
