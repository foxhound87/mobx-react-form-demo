/* eslint no-console: 0 */
/* eslint no-undef: 0 */

// console.log('MobxReactForm', MobxReactForm);

const { Form } = MobxReactForm;

const form = new Form({
  fields: {
    email: 'test@test.com',
  },
});

form.update({ email: 'test' });

console.log('form.values()', form.values());
