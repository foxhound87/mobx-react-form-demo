import {
  isEmail,
  shouldBeEqualTo,
  checkUser,
} from '../extension/vjf';

/*
  Form: Register Simple
  Unified Fields Props Definition
*/
export default {
  fields: {
    username: {
      value: 'SteveJobs',
      label: 'Username',
      placeholder: 'Insert User Name',
      rules: 'required|string|between:5,15',
      validators: [checkUser],
      options: {
        validateOnChange: true,
      },
    },
    email: {
      value: 's.jobs@apple.com',
      label: 'Email',
      related: ['emailConfirm'],
      placeholder: 'Insert your Email address',
      rules: 'required|email|string|between:5,20',
    },
    emailConfirm: {
      value: 's.jobs@apple.com',
      label: 'Confirm Email',
      placeholder: 'Confirm your Email address',
      validators: [isEmail, shouldBeEqualTo('email')],
      rules: 'required|string|between:5,20',
    },
    password: {
      value: 'thinkdifferent',
      label: 'Password',
      placeholder: 'Insert your Password',
      rules: 'required|string|between:5,20',
    },
    devSkills: {
      value: 5,
      label: 'Dev Skills (5-10)',
      default: 5,
      rules: 'required|integer|between:5,10',
    },
    terms: {
      value: true,
      type: 'checkbox',
      label: 'Accept Terms',
      rules: 'boolean|accepted',
      options: {
        validateOnChange: true,
      },
    },
  },
};
