/*
  Form: Nested Fields
  Separated Fields Props Definition
*/

const fields = [
  'club.name',
  'club.city',
  'members',
  'members[].firstname',
  'members[].lastname',
  'members[].hobbies',
  'members[].hobbies[]',
];

const initials = {
  club: {
    name: 'Jazz Club (initials)',
    city: 'New York (initials)',
  },
};

const defaults = {
  club: {
    name: 'Jazz Club (default)',
    city: 'New York (default)',
  },
};

const values = {
  club: {
    name: 'Jazz Club',
    city: 'New York',
  },
  members: [{
    firstname: 'Clint',
    lastname: 'Eastwood',
    hobbies: ['Soccer', 'Baseball'],
  }, {
    firstname: 'Charlie',
    lastname: 'Chaplin',
    hobbies: ['Golf', 'Basket'],
  }],
};

const labels = {
  'club': 'Club',
  'club.name': 'Club Name',
  'club.city': 'Club City',
  'members': 'All Members',
  'members[].firstname': 'Member First Name',
  'members[].lastname': 'Member Last Name',
  'members[].hobbies': 'Hobbies',
};

const placeholders = {
  'club': 'Insert Club',
  'club.name': 'Insert Club Name',
  'club.city': 'Insert Club City',
  'members': 'Insert All Members',
  'members[].firstname': 'Insert FirstName',
  'members[].lastname': 'Insert LastName',
  'members[].hobbies[]': 'Insert Hobbies',
};

const rules = {
  'club.name': 'string|required|min:3',
  'club.city': 'string|required|min:3',
  'members[].lastname': 'string|required|min:3',
  'members[].firstname': 'string|required|min:3',
  'members[].hobbies[]': 'string|required|min:3',
};

const bindings = {
  'club.name': 'MaterialTextFieldReimplemented',
  'club.city': 'MaterialTextFieldReimplemented',
  'members[].lastname': 'MaterialTextField',
  'members[].firstname': 'MaterialTextField',
  'members[].hobbies[]': 'MaterialTextField',
};

const $hooks = {
  onSuccess(fieldset) {
    // eslint-disable-next-line
    alert('see console');
    // eslint-disable-next-line
    console.log(`${fieldset.path} Values`, fieldset.values());
  },
  onError(fieldset) {
    // eslint-disable-next-line
    alert('see console');
    // eslint-disable-next-line
    console.log(`${fieldset.path} Errors`, fieldset.errors());
  },
  // onInit(instance) {
  //   console.log('-> onInit HOOK', instance.path || 'form');
  // },
  onAdd(instance) {
    console.log('-> onAdd HOOK', instance.path || 'form');
  },
  onDel(instance) {
    console.log('-> onDel HOOK', instance.path || 'form');
  },
};

const hooks = {
  'club': $hooks,
  'members': $hooks,
  'members[]': $hooks,
  'members[].hobbies': $hooks,
  'members[].hobbies[]': $hooks,
};

export default {
  hooks,
  fields,
  values,
  initials,
  defaults,
  labels,
  placeholders,
  rules,
  bindings,
};
