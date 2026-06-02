import React, { Suspense } from 'react';
import { observer } from 'mobx-react';

import Welcome from './Welcome';
import FormCodeViewer from './FormCodeViewer';

const FormMarkdown = React.lazy(() => import(/* webpackChunkName: "form-markdown" */ './forms/FormMarkdown'));
const FormFileUpload = React.lazy(() => import(/* webpackChunkName: "form-fileupload" */ './forms/FormFileUpload'));
const FormWithNestedFields = React.lazy(() => import(/* webpackChunkName: "form-nested" */ './forms/FormWithNestedFields'));
const FormRegisterMaterial = React.lazy(() => import(/* webpackChunkName: "form-register-material" */ './forms/FormRegisterMaterial'));
const FormRegisterSimple = React.lazy(() => import(/* webpackChunkName: "form-register-simple" */ './forms/FormRegisterSimple'));
const FormCompanyWidgets = React.lazy(() => import(/* webpackChunkName: "form-company-widgets" */ './forms/FormCompanyWidgets'));
const FormCompanySimple = React.lazy(() => import(/* webpackChunkName: "form-company-simple" */ './forms/FormCompanySimple'));
const FormDynamicFieldsSelect = React.lazy(() => import(/* webpackChunkName: "form-dynamic-fields" */ './forms/FormDynamicFieldsSelect'));
const FormSortableList = React.lazy(() => import(/* webpackChunkName: "form-sortable" */ './forms/FormSortableList'));
const FormMaterialAdvanced = React.lazy(() => import(/* webpackChunkName: "form-material-advanced" */ './forms/FormMaterialAdvanced'));
const FormHeadlessUI = React.lazy(() => import(/* webpackChunkName: "form-headless" */ './forms/FormHeadlessUI'));
const FormAntd = React.lazy(() => import(/* webpackChunkName: "form-antd" */ './forms/FormAntd'));
const FormAria = React.lazy(() => import(/* webpackChunkName: "form-aria" */ './forms/FormAria'));

const Fallback = () => (
  <div className="flex items-center justify-center py-20">
    <div className="w-6 h-6 border-2 border-brand-500 border-t-transparent rounded-full animate-spin" />
  </div>
);

const formComponents = {
  markdown: FormMarkdown,
  fileUpload: FormFileUpload,
  nestedFields: FormWithNestedFields,
  registerMaterial: FormRegisterMaterial,
  registerSimple: FormRegisterSimple,
  companyWidgets: FormCompanyWidgets,
  companySimple: FormCompanySimple,
  dynamicFieldsSelect: FormDynamicFieldsSelect,
  sortableList: FormSortableList,
  materialAdvanced: FormMaterialAdvanced,
  headlessUI: FormHeadlessUI,
  antd: FormAntd,
  aria: FormAria,
};

export default observer(({ menu, forms, navigateTo }) => {
  if (menu.welcome) {
    return (<Welcome onNavigate={navigateTo ? () => navigateTo('registerMaterial') : undefined} />);
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