import type { FieldDefinition } from '../../../modules/mobx-react-form/src';

export const frameworkOptions = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'solid', label: 'Solid' },
];

export const languageOptions = [
  { value: 'javascript', label: 'JavaScript' },
  { value: 'typescript', label: 'TypeScript' },
  { value: 'python', label: 'Python' },
  { value: 'rust', label: 'Rust' },
  { value: 'go', label: 'Go' },
];

export const notifOptions = [
  { value: 'email', label: 'Email' },
  { value: 'push', label: 'Push Notification' },
  { value: 'sms', label: 'SMS' },
  { value: 'slack', label: 'Slack' },
];

const fields: Record<string, FieldDefinition> = {
  framework: {
    value: 'react',
    label: 'Framework',
    rules: 'required|string',
    extra: frameworkOptions,
  },
  language: {
    value: null,
    label: 'Programming Language',
    placeholder: 'Search languages...',
    rules: 'required|string',
    extra: languageOptions,
  },
  notifications: {
    value: false,
    type: 'checkbox',
    label: 'Enable Notifications',
    rules: 'boolean',
  },
  theme: {
    value: 'light',
    label: 'Theme Preference',
    extra: [
      { value: 'light', label: 'Light' },
      { value: 'dark', label: 'Dark' },
      { value: 'system', label: 'System' },
    ],
  },
  preferredNotif: {
    value: 'email',
    label: 'Preferred Notification',
    rules: 'required|string',
    extra: notifOptions,
  },
};

export default { fields };

