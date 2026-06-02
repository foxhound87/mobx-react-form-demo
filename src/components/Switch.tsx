import React, { Suspense } from 'react';
import { observer } from 'mobx-react';

import Welcome from './Welcome';

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

export default observer(({ menu, forms, navigateTo }) => {
  switch (true) {
    case menu.welcome:
      return (<Welcome onNavigate={navigateTo ? () => navigateTo('registerMaterial') : undefined} />);

    case menu.markdown:
      return (<Suspense fallback={<Fallback />}><FormMarkdown form={forms.markdown} /></Suspense>);

    case menu.fileUpload:
      return (<Suspense fallback={<Fallback />}><FormFileUpload form={forms.fileUpload} /></Suspense>);

    case menu.nestedFields:
      return (<Suspense fallback={<Fallback />}><FormWithNestedFields form={forms.nestedFields} /></Suspense>);

    case menu.registerMaterial:
      return (<Suspense fallback={<Fallback />}><FormRegisterMaterial form={forms.registerMaterial} /></Suspense>);

    case menu.registerSimple:
      return (<Suspense fallback={<Fallback />}><FormRegisterSimple form={forms.registerSimple} /></Suspense>);

    case menu.companyWidgets:
      return (<Suspense fallback={<Fallback />}><FormCompanyWidgets form={forms.companyWidgets} /></Suspense>);

    case menu.companySimple:
      return (<Suspense fallback={<Fallback />}><FormCompanySimple form={forms.companySimple} /></Suspense>);

    case menu.dynamicFieldsSelect:
      return (<Suspense fallback={<Fallback />}><FormDynamicFieldsSelect form={forms.dynamicFieldsSelect} /></Suspense>);

    case menu.sortableList:
      return (<Suspense fallback={<Fallback />}><FormSortableList form={forms.sortableList} /></Suspense>);

    case menu.materialAdvanced:
      return (<Suspense fallback={<Fallback />}><FormMaterialAdvanced form={forms.materialAdvanced} /></Suspense>);

    case menu.headlessUI:
      return (<Suspense fallback={<Fallback />}><FormHeadlessUI form={forms.headlessUI} /></Suspense>);

    case menu.antd:
      return (<Suspense fallback={<Fallback />}><FormAntd form={forms.antd} /></Suspense>);

    case menu.aria:
      return (<Suspense fallback={<Fallback />}><FormAria form={forms.aria} /></Suspense>);

    default: return null;
  }
});