import validatorjs from 'validatorjs';
import Form from './_.extend';

// forms
import nestedFields from './nestedFields';
import registerSimple from './registerSimple';
import registerMaterial from './registerMaterial';
import companySimple from './companySimple';
import companyWidgets from './companyWidgets';

// plugins extensions
// import svkExtend from './extension/svk';
import dvrExtend from './extension/dvr';

const plugins = {
  dvr: {
    package: validatorjs,
    extend: dvrExtend,
  },
};

class NestedFieldsForm extends Form {

  // onInit($form) {
    // console.log('ON INIT');
  // }
}

class RegisterMaterialForm extends Form {}
class RegisterSimpleForm extends Form {}
class CompanySimpleForm extends Form {}
class CompanyWidgetsForm extends Form {}

export default {

  nestedFields: new NestedFieldsForm({
    plugins, ...nestedFields,
  }, 'Nested Fields'),

  registerMaterial: new RegisterMaterialForm({
    plugins, ...registerMaterial,
  }, 'Register Material'),

  registerSimple: new RegisterSimpleForm({
    plugins, ...registerSimple,
  }, 'Register Simple'),

  companySimple: new CompanySimpleForm({
    plugins, ...companySimple,
  }, 'Company Simple'),

  companyWidgets: new CompanyWidgetsForm({
    plugins, ...companyWidgets,
  }, 'Company Widgets'),

};
