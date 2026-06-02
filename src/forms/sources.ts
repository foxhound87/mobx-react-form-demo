// @ts-nocheck
const component = (p) => import(`../components/forms/${p}.tsx?raw`).then(m => m.default);
const config = (p) => import(`./setup/${p}.ts?raw`).then(m => m.default);

export const loadComponentSource = (key) => {
  const map = {
    registerMaterial: () => component('FormRegisterMaterial'),
    materialAdvanced: () => component('FormMaterialAdvanced'),
    registerSimple: () => component('FormRegisterSimple'),
    companySimple: () => component('FormCompanySimple'),
    companyWidgets: () => component('FormCompanyWidgets'),
    headlessUI: () => component('FormHeadlessUI'),
    antd: () => component('FormAntd'),
    aria: () => component('FormAria'),
    nestedFields: () => component('FormWithNestedFields'),
    sortableList: () => component('FormSortableList'),
    fileUpload: () => component('FormFileUpload'),
    markdown: () => component('FormMarkdown'),
    dynamicFieldsSelect: () => component('FormDynamicFieldsSelect'),
  };
  return (map[key] || (() => Promise.resolve('')))();
};

export const loadConfigSource = (key) => {
  const map = {
    registerMaterial: () => config('registerMaterial'),
    materialAdvanced: () => config('materialAdvanced'),
    registerSimple: () => config('registerSimple'),
    companySimple: () => config('companySimple'),
    companyWidgets: () => config('companyWidgets'),
    headlessUI: () => config('headlessUI'),
    antd: () => config('antd'),
    aria: () => config('aria'),
    nestedFields: () => config('nestedFields'),
    sortableList: () => config('sortableList'),
    fileUpload: () => config('fileUpload'),
    markdown: () => config('markdown'),
    dynamicFieldsSelect: () => config('dynamicFieldsSelect'),
  };
  return (map[key] || (() => Promise.resolve('')))();
};
