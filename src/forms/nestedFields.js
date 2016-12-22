const fields = [
  'club.name',
  'club.city',
  'members',
  'members[].firstname',
  'members[].lastname',
  'members[].hobbies',
  'members[].hobbies[]',
];

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
  'members[].firstname': 'Member FirstName',
  'members[].lastname': 'Member LastName',
  'members[].hobbies': 'Member Hobbies',
};

const rules = {
  'members[].lastname': 'string|required|min:3',
  'members[].firstname': 'string|required|min:3',
  'members[].hobbies[]': 'string|required|min:3',
};

export default { fields, values, labels, rules };
