var e=`import { checkUser } from '../extension/vjf';
import type { FieldDefinition } from 'mobx-react-form';

const fields: Record<string, FieldDefinition> = {
  username: {
    value: '',
    label: 'Username',
    placeholder: 'Check availability...',
    rules: 'required|string|between:3,20',
    validators: [checkUser],
    options: {
      validateOnChange: true,
    },
  },
  email: {
    value: '',
    label: 'Email',
    placeholder: 'Enter your email',
    rules: 'required|email|string',
  },
  message: {
    value: '',
    label: 'Message',
    placeholder: 'Write a message (async validated)',
    rules: 'required|string|min:10',
  },
};

export default { fields };
`;export{e as default};