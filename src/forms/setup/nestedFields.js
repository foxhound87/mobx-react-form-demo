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
    firstname: '',
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
  'members[].hobbies': 'Member Hobbies',
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

const onReset = {
  club: () => console.log('reset club done'),
};

const onClear = {
  club: () => console.log('clear club done'),
};

export default {
  fields,
  values,
  initials,
  defaults,
  labels,
  placeholders,
  rules,
  bindings,
  onReset,
  onClear,
};
