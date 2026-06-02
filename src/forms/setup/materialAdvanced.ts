export const colorOptions = [
  { value: 'red', label: 'Red' },
  { value: 'blue', label: 'Blue' },
  { value: 'green', label: 'Green' },
  { value: 'black', label: 'Black' },
  { value: 'white', label: 'White' },
  { value: 'yellow', label: 'Yellow' },
];

export const frameworksOptions = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'solid', label: 'Solid' },
];

export default {
  fields: {
    favoriteFramework: {
      value: null,
      label: 'Favorite Framework',
      placeholder: 'Choose your favorite',
      rules: 'required|string',
      extra: frameworksOptions,
    },
    color: {
      value: 'blue',
      label: 'Favorite Color',
      rules: 'required|string',
      extra: colorOptions,
    },
    skillLevel: {
      value: 3,
      label: 'Skill Level',
      rules: 'required|integer|between:1,5',
      default: 3,
    },
    experience: {
      value: 50,
      label: 'Experience (years)',
      rules: 'required|integer|between:0,100',
      default: 50,
    },
    satisfaction: {
      value: 4,
      label: 'Satisfaction',
      rules: 'required|integer|between:1,5',
      default: 4,
    },
    frameworkAutocomplete: {
      value: null,
      label: 'Framework (Autocomplete)',
      placeholder: 'Search frameworks',
      rules: 'required|string',
      extra: frameworksOptions,
    },
  },
};
