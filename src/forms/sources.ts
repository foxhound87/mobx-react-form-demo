// @ts-nocheck
const component = (p) => import(`../components/forms/${p}.tsx?raw`).then(m => m.default);
const config = (p) => import(`./setup/${p}.ts?raw`).then(m => m.default);
const input = (p) => import(`../components/inputs/${p}.tsx?raw`).then(m => m.default);
const validator = (p) => import(`./extension/${p}.ts?raw`).then(m => m.default);

import __bindings from './_.bindings?raw'
import __hooksFields from './_.hooks.fields?raw'
import __zodSchema from './extension/zodSchema?raw'
const rawFiles = {
  'forms/_.bindings': __bindings,
  'forms/_.hooks.fields': __hooksFields,
  'forms/extension/zodSchema': __zodSchema,
}

// Official documentation URL for each form demo.
// Sourced from the VitePress sidebar config of the mobx-react-form docs site.
// Docs use VitePress with cleanUrls enabled — no /docs/ prefix, no .html extensions.
//   https://foxhound87.github.io/mobx-react-form/  (root)
// Forms without a dedicated page are omitted.
const DOCS_BASE = 'https://foxhound87.github.io/mobx-react-form';
const DOCS_URLS: Record<string, string> = {
  // Basics
  login: `${DOCS_BASE}/quick-start`,
  registerSimple: `${DOCS_BASE}/quick-start`,
  // Validation
  validationDvr: `${DOCS_BASE}/validation/plugins/DVR/setup`,
  validationVjf: `${DOCS_BASE}/validation/plugins/VJF/setup`,
  validationZod: `${DOCS_BASE}/validation/plugins/ZOD/setup`,
  validationAsync: `${DOCS_BASE}/validation/plugins/VJF/async`,
  // Fields
  nestedFields: `${DOCS_BASE}/fields/#nested-unified-mode`,
  // Advanced
  interceptors: `${DOCS_BASE}/advanced/interceptors`,
  observers: `${DOCS_BASE}/advanced/observers`,
  reactiveComputed: `${DOCS_BASE}/extra/computed-props`,
  crossValidation: `${DOCS_BASE}/advanced/cross-validation`,
  nestedComposition: `${DOCS_BASE}/advanced/nested-composition`,
  wizard: `${DOCS_BASE}/advanced/wizard`,
  bindingsDemo: `${DOCS_BASE}/advanced/bindings-demo`,
  composer: `${DOCS_BASE}/extra/composer`,
  markdown: `${DOCS_BASE}/advanced/markdown`,
  fileUpload: `${DOCS_BASE}/advanced/file-upload`,
  sortableList: `${DOCS_BASE}/advanced/sortable`,
  bubbleErrors: `${DOCS_BASE}/fields/#nested-unified-mode`,
};

export const getDocsUrl = (key: string): string | null => DOCS_URLS[key] || null;

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
  nestedFields: ['SimpleInput', 'NestedHobbyInput'],
  bubbleErrors: ['SimpleInput', 'NestedHobbyInput'],
  dynamicFieldsSelect: [],
  // Advanced
  interceptors: ['SimpleInput'],
  observers: ['SimpleInput'],
  composer: ['SimpleInput'],
  reactiveComputed: ['SimpleInput'],
  crossValidation: ['SimpleInput'],
  nestedComposition: ['SimpleInput'],
  wizard: ['SimpleInput'],
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
    registerMaterial: () => Promise.resolve(rawFiles['forms/_.hooks.fields']),
    reactiveComputed: () => config('reactiveComputed'),
  };
  return (map[key] || (() => Promise.resolve('')))();
};

export const loadBindingsSource = () => Promise.resolve(rawFiles['forms/_.bindings']);

export const loadValidatorSource = (key) => {
  const map = {
    validationDvr: () => validator('dvr'),
    validationVjf: () => validator('vjf'),
    validationZod: () => Promise.resolve(rawFiles['forms/extension/zodSchema']),
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
    bubbleErrors: () => component('FormBubbleErrors'),
    dynamicFieldsSelect: () => component('FormDynamicFieldsSelect'),
    // Advanced
    interceptors: () => component('FormInterceptors'),
    observers: () => component('FormObservers'),
    composer: () => component('FormComposer'),
    // Advanced MRF features
    reactiveComputed: () => component('FormReactiveComputed'),
    crossValidation: () => component('FormCrossValidation'),
    nestedComposition: () => component('FormNestedComposition'),
    wizard: () => component('FormWizard'),
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
    bubbleErrors: () => config('nestedFields'),
    dynamicFieldsSelect: () => config('dynamicFieldsSelect'),
    // Advanced
    interceptors: () => config('interceptors'),
    observers: () => config('observers'),
    composer: () => config('composer'),
    // Advanced MRF features
    reactiveComputed: () => config('reactiveComputed'),
    crossValidation: () => config('crossValidation'),
    nestedComposition: () => config('nestedComposition'),
    wizard: () => config('wizard'),
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
