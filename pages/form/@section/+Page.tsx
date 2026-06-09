import React from 'react';
import FormLogin from '../../../src/components/forms/FormLogin';
import FormRegisterSimple from '../../../src/components/forms/FormRegisterSimple';
import FormValidationDvr from '../../../src/components/forms/FormValidationDvr';
import FormValidationVjf from '../../../src/components/forms/FormValidationVjf';
import FormValidationZod from '../../../src/components/forms/FormValidationZod';
import FormValidationAsync from '../../../src/components/forms/FormValidationAsync';
import FormArrays from '../../../src/components/forms/FormArrays';
import FormWithNestedFields from '../../../src/components/forms/FormWithNestedFields';
import FormDynamicFieldsSelect from '../../../src/components/forms/FormDynamicFieldsSelect';
import FormInterceptors from '../../../src/components/forms/FormInterceptors';
import FormObservers from '../../../src/components/forms/FormObservers';
import FormComposer from '../../../src/components/forms/FormComposer';
import FormBindingsDemo from '../../../src/components/forms/FormBindingsDemo';
import FormReactiveComputed from '../../../src/components/forms/FormReactiveComputed';
import FormCrossValidation from '../../../src/components/forms/FormCrossValidation';
import FormNestedComposition from '../../../src/components/forms/FormNestedComposition';
import FormWizard from '../../../src/components/forms/FormWizard';
import FormReactSelect from '../../../src/components/forms/FormReactSelect';
import FormReactMultiselect from '../../../src/components/forms/FormReactMultiselect';
import FormRegisterMaterial from '../../../src/components/forms/FormRegisterMaterial';
import FormMaterialAdvanced from '../../../src/components/forms/FormMaterialAdvanced';
import FormCompanySimple from '../../../src/components/forms/FormCompanySimple';
import FormCompanyWidgets from '../../../src/components/forms/FormCompanyWidgets';
import FormHeadlessUI from '../../../src/components/forms/FormHeadlessUI';
import FormAntd from '../../../src/components/forms/FormAntd';
import FormAria from '../../../src/components/forms/FormAria';
import FormMarkdown from '../../../src/components/forms/FormMarkdown';
import FormFileUpload from '../../../src/components/forms/FormFileUpload';
import FormSortableList from '../../../src/components/forms/FormSortableList';
import FormBubbleErrors from '../../../src/components/forms/FormBubbleErrors';

import forms from '../../../src/forms/_.forms';
import FormCodeViewer from '../../../src/components/FormCodeViewer';

const formComponents = {
  login: FormLogin,
  registerSimple: FormRegisterSimple,
  validationDvr: FormValidationDvr,
  validationVjf: FormValidationVjf,
  validationZod: FormValidationZod,
  validationAsync: FormValidationAsync,
  arrays: FormArrays,
  nestedFields: FormWithNestedFields,
  dynamicFieldsSelect: FormDynamicFieldsSelect,
  interceptors: FormInterceptors,
  observers: FormObservers,
  composer: FormComposer,
  bindingsDemo: FormBindingsDemo,
  reactiveComputed: FormReactiveComputed,
  crossValidation: FormCrossValidation,
  nestedComposition: FormNestedComposition,
  wizard: FormWizard,
  reactSelect: FormReactSelect,
  reactMultiSelect: FormReactMultiselect,
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
  bubbleErrors: FormBubbleErrors,
};

export default function Page({ routeParams }) {
  const section = routeParams?.section;
  const Component = formComponents[section];
  const form = forms[section];

  if (!Component || !form) {
    return (
      <div className="flex items-center justify-center py-20 text-surface-400">
        Form not found: {section}
      </div>
    );
  }

  return (
    <div className="max-w-form mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <FormCodeViewer formKey={section}>
        <Component form={form} />
      </FormCodeViewer>
    </div>
  );
}
