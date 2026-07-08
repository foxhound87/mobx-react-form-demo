var e=`import type { FieldDefinition } from 'mobx-react-form';

export const roleOptions = [
  { value: 'developer', label: 'Developer' },
  { value: 'designer', label: 'Designer' },
  { value: 'pm', label: 'Product Manager' },
  { value: 'devops', label: 'DevOps' },
  { value: 'qa', label: 'QA Engineer' },
];

export const editorOptions = [
  { value: 'vscode', label: 'VS Code' },
  { value: 'webstorm', label: 'WebStorm' },
  { value: 'vim', label: 'Vim' },
  { value: 'sublime', label: 'Sublime Text' },
  { value: 'emacs', label: 'Emacs' },
];

const fields: Record<string, FieldDefinition> = {
  displayName: {
    label: 'Display Name',
    value: 'Jane Doe',
    placeholder: 'Enter display name',
    rules: 'required|string|between:3,30',
  },
  role: {
    label: 'Role',
    value: null,
    rules: 'required|string',
    extra: roleOptions,
  },
  editor: {
    label: 'Code Editor',
    value: null,
    placeholder: 'Search editors...',
    rules: 'required|string',
    extra: editorOptions,
  },
  experience: {
    value: 5,
    label: 'Experience',
    rules: 'required|integer|between:0,20',
    default: 5,
  },
  darkMode: {
    value: false,
    type: 'checkbox',
    label: 'Enable Dark Mode',
    rules: 'boolean',
  },
};

export default { fields };

`;export{e as default};