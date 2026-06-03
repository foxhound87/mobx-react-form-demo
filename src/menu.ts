import { observable } from 'mobx';

export default observable({
  welcome: true,
  // Basics
  login: false,
  registerSimple: false,
  // Validation
  validationDvr: false,
  validationVjf: false,
  validationAsync: false,
  validationZod: false,
  // Dynamic Data
  arrays: false,
  nestedFields: false,
  dynamicFieldsSelect: false,
  // Advanced
  interceptors: false,
  observers: false,
  composer: false,
  // Advanced MRF features
  reactiveComputed: false,
  crossValidation: false,
  nestedComposition: false,
  // Advanced - Bindings
  bindingsDemo: false,
  // React-Select
  reactSelect: false,
  reactMultiSelect: false,
  // UI Libraries (existing)
  registerMaterial: false,
  materialAdvanced: false,
  companySimple: false,
  companyWidgets: false,
  headlessUI: false,
  antd: false,
  aria: false,
  markdown: false,
  fileUpload: false,
  sortableList: false,
});
