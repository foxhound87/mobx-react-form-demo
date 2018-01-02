import Form from './_.extend';
import hooks from './_.hooks';

import { Field } from 'mobx-react-form';
// import { Field } from '../../master/src'; // load from source (MASTER)

// forms
import markdown from './setup/markdown';
import fileUpload from './setup/fileUpload';
import nestedFields from './setup/nestedFields';
import registerSimple from './setup/registerSimple';
import registerMaterial from './setup/registerMaterial';
import companySimple from './setup/companySimple';
import companyWidgets from './setup/companyWidgets';
import dynamicFieldsSelect from './setup/dynamicFieldsSelect';


class CustomField extends Field {

  hooks() {
    return hooks;
  }

  // onChange = (e) => {
  //   this.set(e.target.value);
  //   console.log('-> onChange HANDLER - changed', this.path || 'form', this.value);
  //   // IMPORTANT! This Event Handler will be overwrited and will not call its Event Hook!
  // };

  // handlers() {
  //   return {
  //     onChange: field => (e) => {
  //       field.set(e.target.value);
  //       console.log('-> onChange HANDLER - changed', field.path || 'form', field.value);
  //     },
  //   };
  // }
}

class RegisterMaterialForm extends Form {

  makeField(field) {
    return new CustomField(field);
  }
}

class RegisterSimpleForm extends Form {}
class NestedFieldsForm extends Form {}
class MarkdownForm extends Form {}
class FileUploadForm extends Form {}
class CompanySimpleForm extends Form {}
class CompanyWidgetsForm extends Form {}
class FormDynamicFieldsSelect extends Form {}

const onSubmitFileUpload = (form) => {
  console.log('FileUpload > myFileUpload files', form.$('myFileUpload').files);
  console.log('FileUpload > myDropZone files', form.$('myDropZone').files);
};

export default {
  nestedFields: new NestedFieldsForm({ ...nestedFields }, { name: 'Nested Fields' }),
  markdown: new MarkdownForm({ ...markdown }, { name: 'Markdown' }),
  fileUpload: new FileUploadForm({ ...fileUpload }, { hooks: { onSubmit: onSubmitFileUpload }, name: 'File Upload' }),
  registerMaterial: new RegisterMaterialForm({ ...registerMaterial }, { name: 'Register Material' }),
  registerSimple: new RegisterSimpleForm({ ...registerSimple }, { name: 'Register Simple' }),
  companySimple: new CompanySimpleForm({ ...companySimple }, { name: 'Company Simple' }),
  companyWidgets: new CompanyWidgetsForm({ ...companyWidgets }, { name: 'Company Widgets' }),
  dynamicFieldsSelect: new FormDynamicFieldsSelect({ ...dynamicFieldsSelect }, { name: 'Dynamic Fields Select' }),
};
