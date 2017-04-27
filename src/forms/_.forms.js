import Form from './_.extend';

// forms
import markdown from './setup/markdown';
import fileUpload from './setup/fileUpload';
import nestedFields from './setup/nestedFields';
import registerSimple from './setup/registerSimple';
import registerMaterial from './setup/registerMaterial';
import companySimple from './setup/companySimple';
import companyWidgets from './setup/companyWidgets';
import dynamicFieldsSelect from './setup/dynamicFieldsSelect';

class RegisterMaterialForm extends Form {}
class RegisterSimpleForm extends Form {}
class NestedFieldsForm extends Form {}
class MarkdownForm extends Form {}
class FileUploadForm extends Form {}
class CompanySimpleForm extends Form {}
class CompanyWidgetsForm extends Form {}
class FormDynamicFieldsSelect extends Form {}

const submit = {
  onSuccess(fieldset) {
    // eslint-disable-next-line
    alert('see console');
    // eslint-disable-next-line
    console.log(`${fieldset.path} Values`, fieldset.values());
  },
  onError(fieldset) {
    // eslint-disable-next-line
    alert('see console');
    // eslint-disable-next-line
    console.log(`${fieldset.path} Errors`, fieldset.errors());
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
  fileUpload: new FileUploadForm({ ...fileUpload }, { name: 'Markdown' }),
  registerMaterial: new RegisterMaterialForm({ ...registerMaterial }, { name: 'Register Material' }),
  registerSimple: new RegisterSimpleForm({ ...registerSimple }, { name: 'Register Simple' }),
  companySimple: new CompanySimpleForm({ ...companySimple }, { name: 'Company Simple' }),
  companyWidgets: new CompanyWidgetsForm({ ...companyWidgets }, { name: 'Company Widgets' }),
  dynamicFieldsSelect: new FormDynamicFieldsSelect({ ...dynamicFieldsSelect }, { name: 'Dynamic Fields Select' }),
};
