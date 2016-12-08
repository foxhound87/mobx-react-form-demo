import React from 'react';
import { observer } from 'mobx-react';

import FormWithNestedFields from './FormWithNestedFields';
import FormRegisterMaterial from './FormRegisterMaterial';
import FormRegisterSimple from './FormRegisterSimple';
import FormCompanyWidgets from './FormCompanyWidgets';
import FormCompanySimple from './FormCompanySimple';

export default observer(({ menu, forms }) => {
  switch (true) {

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

    default: return null;
  }
});
