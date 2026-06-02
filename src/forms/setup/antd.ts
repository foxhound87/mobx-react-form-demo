export const frameworkOptions = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'solid', label: 'Solid' },
];

export const statusOptions = [
  { value: 'active', label: 'Active' },
  { value: 'pending', label: 'Pending' },
  { value: 'inactive', label: 'Inactive' },
  { value: 'archived', label: 'Archived' },
];

export default {
  fields: {
    fullName: {
      label: 'Full Name',
      value: 'John Doe',
      placeholder: 'Enter your full name',
      rules: 'required|string|between:3,30',
    },
    projectStatus: {
      label: 'Project Status',
      value: 'active',
      rules: 'required|string',
      extra: statusOptions,
    },
    satisfaction: {
      value: 4,
      label: 'Satisfaction',
      rules: 'required|integer|between:1,5',
      default: 4,
    },
    yearsExp: {
      value: 5,
      label: 'Years of Experience',
      rules: 'required|integer|between:0,60',
      default: 5,
    },
    activeSubscription: {
      value: true,
      type: 'checkbox',
      label: 'Active Subscription',
      rules: 'boolean',
    },
    teamSize: {
      value: 10,
      label: 'Team Size',
      rules: 'required|integer|between:1,100',
      default: 10,
    },
    startDate: {
      label: 'Start Date',
      value: new Date(2024, 0, 15),
    },
    favoriteFramework: {
      label: 'Favorite Framework',
      value: null,
      rules: 'required|string',
      extra: frameworkOptions,
    },
  },
};
