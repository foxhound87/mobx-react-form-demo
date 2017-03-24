import Form from './_.extend';

// forms
import markdown from './setup/markdown';
import nestedFields from './setup/nestedFields';
import registerSimple from './setup/registerSimple';
import registerMaterial from './setup/registerMaterial';
import companySimple from './setup/companySimple';
import companyWidgets from './setup/companyWidgets';

class NestedFieldsForm extends Form {}
class MarkdownForm extends Form {}
class RegisterMaterialForm extends Form {}
class RegisterSimpleForm extends Form {}
class CompanySimpleForm extends Form {}
class CompanyWidgetsForm extends Form {}

const submit = {
  onSuccess(fieldset) {
    alert(`${fieldset.path} is valid! Send the request here.`); // eslint-disable-line
    // get all fields values...
    console.log(`${fieldset.path} Values!`, fieldset.values()); // eslint-disable-line
  },
  onError(fieldset) {
    // get all form errors...
    console.log(`All ${fieldset.path} errors`, fieldset.errors());  // eslint-disable-line
    // invalidate the form with a custom error message
    fieldset.invalidate('This is a generic error message!');
  },
};

const onSubmit = {
  'club': submit,
  'members': submit,
  'members[]': submit,
};

export default {

  nestedFields: new NestedFieldsForm({ ...nestedFields, onSubmit }, { name: 'Nested Fields' }),
  markdown: new MarkdownForm({ ...markdown }, { name: 'Markdown' }),
  registerMaterial: new RegisterMaterialForm({ ...registerMaterial }, { name: 'Register Material' }),
  registerSimple: new RegisterSimpleForm({ ...registerSimple }, { name: 'Register Simple' }),
  companySimple: new CompanySimpleForm({ ...companySimple }, { name: 'Company Simple' }),
  companyWidgets: new CompanyWidgetsForm({ ...companyWidgets }, { name: 'Company Widgets' }),

};
