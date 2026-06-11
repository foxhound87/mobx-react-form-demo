var e=`import type { FieldDefinition } from 'mobx-react-form';

const fields: Record<string, FieldDefinition> = {
  firstName: {
    value: 'Jane',
    label: 'First Name',
    placeholder: 'Enter first name',
    rules: 'required|string|min:2',
  },
  lastName: {
    value: 'Smith',
    label: 'Last Name',
    placeholder: 'Enter last name',
    rules: 'required|string|min:2',
  },
  fullDisplay: {
    value: '',
    label: 'Computed Display',
  },
  count: {
    value: 0,
    label: 'Change Count',
    rules: 'integer',
  },
};

export default { fields };
`;export{e as default};