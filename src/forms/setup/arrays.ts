/*
  Form: Array Fields
  Fields Props Definition
*/

const fields = [
  'teamName',
  'members',
  'members[].name',
  'members[].role',
];

const values = {
  teamName: 'Dream Team',
  members: [
    { name: 'Alice', role: 'Developer' },
    { name: 'Bob', role: 'Designer' },
  ],
};

const labels = {
  teamName: 'Team Name',
  members: 'Team Members',
  'members[].name': 'Member Name',
  'members[].role': 'Role',
};

const placeholders = {
  teamName: 'Enter team name',
  'members[].name': 'Enter name',
  'members[].role': 'Enter role',
};

export default {
  fields,
  values,
  labels,
  placeholders,
};
