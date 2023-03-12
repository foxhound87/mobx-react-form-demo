import simulateAsyncFindUserCall from './_.async';

const asyncRules = {
  checkUser: (value, attr, key, passes) => {
    const msg = `Hey! The username ${value} is already taken.`;
    // show error if the call does not returns entries
    simulateAsyncFindUserCall({ user: value })
      .then(items => (items.length === 0) ? passes() : passes(false, msg));
  },
};

const rules = {
  telephone: {
    function: value => value.match(/^\d{3}-\d{3}-\d{4}$/),
    message: 'The :attribute phone number is not in the format XXX-XXX-XXXX.',
  },
};

export default ({ validator }) => {
  // register async rules
  Object.keys(asyncRules).forEach(key =>
    validator.registerAsync(key, asyncRules[key]));
  // register sync rules
  Object.keys(rules).forEach(key =>
    validator.register(key, rules[key].function, rules[key].message));
};

