import React from 'react';
import { observer } from 'mobx-react';

import Welcome from './Welcome';
import FormMarkdown from './forms/FormMarkdown';
import FormFileUpload from './forms/FormFileUpload';
import FormWithNestedFields from './forms/FormWithNestedFields';
import FormRegisterMaterial from './forms/FormRegisterMaterial';
import FormRegisterSimple from './forms/FormRegisterSimple';
import FormCompanyWidgets from './forms/FormCompanyWidgets';
import FormCompanySimple from './forms/FormCompanySimple';
import FormDynamicFieldsSelect from './forms/FormDynamicFieldsSelect';
import FormSortableList from './forms/FormSortableList';
import FormMaterialAdvanced from './forms/FormMaterialAdvanced';
import FormHeadlessUI from './forms/FormHeadlessUI';
import FormAntd from './forms/FormAntd';
import FormAria from './forms/FormAria';

export default observer(({ menu, forms, navigateTo }) => {
  switch (true) {
    case menu.welcome:
      return (<Welcome onNavigate={navigateTo ? () => navigateTo('registerMaterial') : undefined} />);

    case menu.markdown:
      return (<FormMarkdown form={forms.markdown} />);

    case menu.fileUpload:
      return (<FormFileUpload form={forms.fileUpload} />);

    case menu.nestedFields:
      return (<FormWithNestedFields form={forms.nestedFields} />);

    case menu.registerMaterial:
      return (<FormRegisterMaterial form={forms.registerMaterial} />);

    case menu.registerSimple:
      return (<FormRegisterSimple form={forms.registerSimple} />);

    case menu.companyWidgets:
      return (<FormCompanyWidgets form={forms.companyWidgets} />);

    case menu.companySimple:
      return (<FormCompanySimple form={forms.companySimple} />);

    case menu.dynamicFieldsSelect:
      return (<FormDynamicFieldsSelect form={forms.dynamicFieldsSelect} />);

    case menu.sortableList:
      return (<FormSortableList form={forms.sortableList} />);

    case menu.materialAdvanced:
      return (<FormMaterialAdvanced form={forms.materialAdvanced} />);

    case menu.headlessUI:
      return (<FormHeadlessUI form={forms.headlessUI} />);

    case menu.antd:
      return (<FormAntd form={forms.antd} />);

    case menu.aria:
      return (<FormAria form={forms.aria} />);

    default: return null;
  }
});
