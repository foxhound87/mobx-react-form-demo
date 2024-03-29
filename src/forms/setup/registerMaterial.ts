/*
  Form: Register Material
  Unified Fields Props Definition
*/
export default {
  fields: {
    username: {
      value: 'SteveJobs',
      label: 'Username',
      placeholder: 'Insert User Name',
      rules: 'checkUser|required|string|between:5,15',
    },
    email: {
      value: 's.jobs@apple.com',
      label: 'Email',
      placeholder: 'Insert your Email address',
      rules: 'required|email|string|between:5,20',
      // related: ['emailConfirm'],
      options: {
        autoTrimValue: true,
        // validateTrimmedValue: true,
      }
    },
    emailConfirm: {
      value: 's.jobs@apple.com',
      label: 'Confirm Email',
      placeholder: 'Confirm your Email address',
      rules: 'required|email|string|same:email',
      options: {
        autoTrimValue: true,
      }
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
      type: 'checkbox',
      label: 'Accept Terms',
      rules: 'boolean|accepted',
    },
  },
};
