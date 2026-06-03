import React, { Suspense } from 'react';
import { observer } from 'mobx-react';

import Welcome from './Welcome';
import FormCodeViewer from './FormCodeViewer';

// Basics
const FormLogin = React.lazy(() => import(/* webpackChunkName: "form-login" */ './forms/FormLogin'));
const FormRegisterSimple = React.lazy(() => import(/* webpackChunkName: "form-register-simple" */ './forms/FormRegisterSimple'));

// Validation
const FormValidationZod = React.lazy(() => import(/* webpackChunkName: "form-validation-zod" */ './forms/FormValidationZod'));
const FormValidationDvr = React.lazy(() => import(/* webpackChunkName: "form-validation-dvr" */ './forms/FormValidationDvr'));
const FormValidationVjf = React.lazy(() => import(/* webpackChunkName: "form-validation-vjf" */ './forms/FormValidationVjf'));
const FormValidationAsync = React.lazy(() => import(/* webpackChunkName: "form-validation-async" */ './forms/FormValidationAsync'));

// Dynamic Data
const FormArrays = React.lazy(() => import(/* webpackChunkName: "form-arrays" */ './forms/FormArrays'));
const FormWithNestedFields = React.lazy(() => import(/* webpackChunkName: "form-nested" */ './forms/FormWithNestedFields'));
const FormDynamicFieldsSelect = React.lazy(() => import(/* webpackChunkName: "form-dynamic-fields" */ './forms/FormDynamicFieldsSelect'));

// Advanced
const FormInterceptors = React.lazy(() => import(/* webpackChunkName: "form-interceptors" */ './forms/FormInterceptors'));
const FormObservers = React.lazy(() => import(/* webpackChunkName: "form-observers" */ './forms/FormObservers'));
const FormComposer = React.lazy(() => import(/* webpackChunkName: "form-composer" */ './forms/FormComposer'));

// Advanced - Bindings
const FormBindingsDemo = React.lazy(() => import(/* webpackChunkName: "form-bindings-demo" */ './forms/FormBindingsDemo'));

// React-Select
const FormReactSelect = React.lazy(() => import(/* webpackChunkName: "form-react-select" */ './forms/FormReactSelect'));
const FormReactMultiselect = React.lazy(() => import(/* webpackChunkName: "form-react-multiselect" */ './forms/FormReactMultiselect'));

// UI Libraries (existing)
const FormRegisterMaterial = React.lazy(() => import(/* webpackChunkName: "form-register-material" */ './forms/FormRegisterMaterial'));
const FormMaterialAdvanced = React.lazy(() => import(/* webpackChunkName: "form-material-advanced" */ './forms/FormMaterialAdvanced'));
const FormCompanySimple = React.lazy(() => import(/* webpackChunkName: "form-company-simple" */ './forms/FormCompanySimple'));
const FormCompanyWidgets = React.lazy(() => import(/* webpackChunkName: "form-company-widgets" */ './forms/FormCompanyWidgets'));
const FormHeadlessUI = React.lazy(() => import(/* webpackChunkName: "form-headless" */ './forms/FormHeadlessUI'));
const FormAntd = React.lazy(() => import(/* webpackChunkName: "form-antd" */ './forms/FormAntd'));
const FormAria = React.lazy(() => import(/* webpackChunkName: "form-aria" */ './forms/FormAria'));
const FormMarkdown = React.lazy(() => import(/* webpackChunkName: "form-markdown" */ './forms/FormMarkdown'));
const FormFileUpload = React.lazy(() => import(/* webpackChunkName: "form-fileupload" */ './forms/FormFileUpload'));
const FormSortableList = React.lazy(() => import(/* webpackChunkName: "form-sortable" */ './forms/FormSortableList'));

const Fallback = () => (
  <div className="flex items-center justify-center py-20">
    <div className="w-6 h-6 border-2 border-brand-500 border-t-transparent rounded-full animate-spin" />
  </div>
);

const formComponents = {
  // Basics
  login: FormLogin,
  registerSimple: FormRegisterSimple,
  // Validation
  validationDvr: FormValidationDvr,
  validationVjf: FormValidationVjf,
  validationZod: FormValidationZod,
  validationAsync: FormValidationAsync,
  // Dynamic Data
  arrays: FormArrays,
  nestedFields: FormWithNestedFields,
  dynamicFieldsSelect: FormDynamicFieldsSelect,
  // Advanced
  interceptors: FormInterceptors,
  observers: FormObservers,
  composer: FormComposer,
  // Advanced - Bindings
  bindingsDemo: FormBindingsDemo,
  // React-Select
  reactSelect: FormReactSelect,
  reactMultiSelect: FormReactMultiselect,
  // UI Libraries (existing)
  registerMaterial: FormRegisterMaterial,
  materialAdvanced: FormMaterialAdvanced,
  companySimple: FormCompanySimple,
  companyWidgets: FormCompanyWidgets,
  headlessUI: FormHeadlessUI,
  antd: FormAntd,
  aria: FormAria,
  markdown: FormMarkdown,
  fileUpload: FormFileUpload,
  sortableList: FormSortableList,
};

export default observer(({ menu, forms, navigateTo }) => {
  if (menu.welcome) {
    return (<Welcome onNavigate={navigateTo ? () => navigateTo('registerSimple') : undefined} />);
  }

  const activeKey = Object.keys(menu).find(k => menu[k]);
  if (!activeKey || !formComponents[activeKey]) return null;

  const Component = formComponents[activeKey];
  return (
    <FormCodeViewer formKey={activeKey}>
      <Suspense fallback={<Fallback />}>
        <Component form={forms[activeKey]} />
      </Suspense>
    </FormCodeViewer>
  );
});
