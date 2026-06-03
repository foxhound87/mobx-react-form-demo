// @ts-nocheck
const component = (p) => import(`../components/forms/${p}.tsx?raw`).then(m => m.default);
const config = (p) => import(`./setup/${p}.ts?raw`).then(m => m.default);
const input = (p) => import(`../components/inputs/${p}.tsx?raw`).then(m => m.default);
const validator = (p) => import(`./extension/${p}.ts?raw`).then(m => m.default);
const raw = (p) => import(`../${p}?raw`).then(m => m.default);

// Input components used by each form
const inputComponents = {
  // Basics
  login: ['SimpleInput', 'SimpleCheckbox'],
  registerSimple: ['SimpleInput', 'SimpleCheckbox'],
  // Validation
  validationDvr: ['SimpleInput'],
  validationVjf: ['SimpleInput'],
  validationZod: ['SimpleInput', 'SimpleCheckbox'],
  validationAsync: ['SimpleInput', 'SimpleTextarea'],
  // Dynamic Data
  arrays: ['SimpleInput'],
  nestedFields: ['MaterialTextField', 'NestedHobbyInput'],
  dynamicFieldsSelect: ['MaterialTextField'],
  // Advanced
  interceptors: ['SimpleInput'],
  observers: ['SimpleInput'],
  composer: ['SimpleInput'],
  reactiveComputed: ['SimpleInput'],
  crossValidation: ['SimpleInput'],
  nestedComposition: ['SimpleInput'],
  bindingsDemo: ['SimpleInput'],
  // UI Libraries
  registerMaterial: ['MaterialTextField', 'MaterialSwitch'],
  materialAdvanced: ['MuiSelect', 'MuiAutocomplete', 'MuiRating', 'MuiSlider'],
  reactSelect: ['ReactSelect'],
  reactMultiSelect: ['ReactMultiSelect'],
  companySimple: ['SimpleInput', 'SimpleRadio'],
  companyWidgets: ['SimpleInput', 'WidgetDatePicker', 'WidgetDropdownList', 'WidgetMultiselect'],
  headlessUI: ['HeadlessListbox', 'HeadlessCombobox', 'HeadlessSwitch', 'HeadlessRadioGroup'],
  antd: ['AntdInput', 'AntdSelect', 'AntdDatePicker', 'AntdRate', 'AntdSlider', 'AntdSwitch', 'AntdInputNumber'],
  aria: ['AriaTextField', 'AriaSelect', 'AriaComboBox', 'AriaSlider', 'AriaSwitch'],
  markdown: ['SimpleTextarea'],
  fileUpload: ['SimpleFile', 'DropZone'],
  sortableList: [],
};

export const getInputComponents = (key) => inputComponents[key] || [];

export const loadInputSource = (name) => input(`${name}`);

// Forms that have a separate validator/extension source
export const validatorForms = ['validationDvr', 'validationVjf', 'validationZod', 'validationAsync'];

// Forms that show the bindings source
export const bindingsForms = ['bindingsDemo'];

// Forms that show the hooks source
export const hooksForms = ['registerMaterial'];

export const loadHooksSource = (key) => {
  const map = {
    registerMaterial: () => raw('forms/_.hooks.fields'),
    reactiveComputed: () => config('reactiveComputed'),
  };
  return (map[key] || (() => Promise.resolve('')))();
};

export const loadBindingsSource = () => raw('forms/_.bindings');

export const loadValidatorSource = (key) => {
  const map = {
    validationDvr: () => validator('dvr'),
    validationVjf: () => validator('vjf'),
    validationZod: () => raw('forms/extension/zodSchema'),
    validationAsync: () => validator('vjf'),
  };
  return (map[key] || (() => Promise.resolve('')))();
};

export const loadComponentSource = (key) => {
  const map = {
    // Basics
    login: () => component('FormLogin'),
    registerSimple: () => component('FormRegisterSimple'),
    // Validation
    validationDvr: () => component('FormValidationDvr'),
    validationVjf: () => component('FormValidationVjf'),
    validationZod: () => component('FormValidationZod'),
    validationAsync: () => component('FormValidationAsync'),
    // Dynamic Data
    arrays: () => component('FormArrays'),
    nestedFields: () => component('FormWithNestedFields'),
    dynamicFieldsSelect: () => component('FormDynamicFieldsSelect'),
    // Advanced
    interceptors: () => component('FormInterceptors'),
    observers: () => component('FormObservers'),
    composer: () => component('FormComposer'),
    // Advanced MRF features
    reactiveComputed: () => component('FormReactiveComputed'),
    crossValidation: () => component('FormCrossValidation'),
    nestedComposition: () => component('FormNestedComposition'),
    // Advanced - Bindings
    bindingsDemo: () => component('FormBindingsDemo'),
    // UI Libraries
    registerMaterial: () => component('FormRegisterMaterial'),
    materialAdvanced: () => component('FormMaterialAdvanced'),
    reactSelect: () => component('FormReactSelect'),
    reactMultiSelect: () => component('FormReactMultiselect'),
    companySimple: () => component('FormCompanySimple'),
    companyWidgets: () => component('FormCompanyWidgets'),
    headlessUI: () => component('FormHeadlessUI'),
    antd: () => component('FormAntd'),
    aria: () => component('FormAria'),
    markdown: () => component('FormMarkdown'),
    fileUpload: () => component('FormFileUpload'),
    sortableList: () => component('FormSortableList'),
  };
  return (map[key] || (() => Promise.resolve('')))();
};

export const loadConfigSource = (key) => {
  const map = {
    // Basics
    login: () => config('login'),
    registerSimple: () => config('registerSimple'),
    // Validation
    validationDvr: () => config('validationDvr'),
    validationVjf: () => config('validationVjf'),
    validationZod: () => config('validationZod'),
    validationAsync: () => config('validationAsync'),
    // Dynamic Data
    arrays: () => config('arrays'),
    nestedFields: () => config('nestedFields'),
    dynamicFieldsSelect: () => config('dynamicFieldsSelect'),
    // Advanced
    interceptors: () => config('interceptors'),
    observers: () => config('observers'),
    composer: () => config('composer'),
    // Advanced MRF features
    reactiveComputed: () => config('reactiveComputed'),
    crossValidation: () => config('crossValidation'),
    nestedComposition: () => config('nestedComposition'),
    // Advanced - Bindings
    bindingsDemo: () => config('bindingsDemo'),
    // UI Libraries
    registerMaterial: () => config('registerMaterial'),
    materialAdvanced: () => config('materialAdvanced'),
    reactSelect: () => config('reactSelect'),
    reactMultiSelect: () => config('reactMultiSelect'),
    companySimple: () => config('companySimple'),
    companyWidgets: () => config('companyWidgets'),
    headlessUI: () => config('headlessUI'),
    antd: () => config('antd'),
    aria: () => config('aria'),
    markdown: () => config('markdown'),
    fileUpload: () => config('fileUpload'),
    sortableList: () => config('sortableList'),
  };
  return (map[key] || (() => Promise.resolve('')))();
};
