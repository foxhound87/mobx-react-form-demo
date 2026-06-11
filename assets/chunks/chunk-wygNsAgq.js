var e=`import type { FieldDefinition } from 'mobx-react-form';

// Registration form fields
export const registrationFields: Record<string, FieldDefinition> = {
  username: {
    value: 'johndoe',
    label: 'Username',
    placeholder: 'Choose a username',
    rules: 'required|string|min:3|max:20',
  },
  email: {
    value: 'john@example.com',
    label: 'Email',
    placeholder: 'Enter your email',
    rules: 'required|email',
  },
  password: {
    value: 'secret123',
    label: 'Password',
    placeholder: 'Enter a strong password',
    rules: 'required|string|min:6',
    type: 'password',
  },
};

// Profile form fields
export const profileFields: Record<string, FieldDefinition> = {
  fullName: {
    value: 'John Doe',
    label: 'Full Name',
    placeholder: 'Enter your full name',
    rules: 'required|string|min:3',
  },
  emailConfirm: {
    value: 'john@example.com',
    label: 'Confirm Email',
    placeholder: 'Re-enter email',
    rules: 'required|email',
  },
  bio: {
    value: 'Full-stack developer and open source enthusiast.',
    label: 'Bio',
    placeholder: 'Tell us about yourself',
    rules: 'string|max:200',
    type: 'textarea',
  },
};
`;export{e as default};