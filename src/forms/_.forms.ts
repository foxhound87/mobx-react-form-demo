import Form from './_.extend';
import fieldsHooks from './_.hooks.fields';

import { Field } from 'mobx-react-form/src'; // load from source (MASTER)
// import { Field } from 'mobx-react-form/lib'; // load from build (FALLBACK)

// forms
import markdown from './setup/markdown';
import fileUpload from './setup/fileUpload';
import nestedFields from './setup/nestedFields';
import registerSimple from './setup/registerSimple';
import registerMaterial from './setup/registerMaterial';
import companySimple from './setup/companySimple';
import companyWidgets from './setup/companyWidgets';
import dynamicFieldsSelect from './setup/dynamicFieldsSelect';
import sortableList from './setup/sortableList';
import materialAdvanced from './setup/materialAdvanced';
import headlessUI from './setup/headlessUI';
import antd from './setup/antd';
import aria from './setup/aria';

import type {
  RegisterFields,
  CompanyFields,
  MarkdownFields,
  FileUploadFields,
  NestedClubFields,
} from './types';


class CustomField extends Field {

  hooks() {
    return fieldsHooks;
  }

  // handlers() {
  //   return {
  //     onChange: field => (e) => {
  //       field.set(e.target.value);
  //       console.log('-> onChange HANDLER - changed', field.path || 'form', field.value);
  //     },
  //   };
  // }

  // onChange = (e) => {
  //   this.set(e.target.value);
  //   console.log('-> onChange HANDLER - changed', this.path || 'form', this.value);
  //   // IMPORTANT! This Event Handler will be overwrited and will not call its Event Hook!
  // };
}

class RegisterMaterialForm extends Form<RegisterFields> {

  makeField(field) {
    return new CustomField(field);
  }
}

class RegisterSimpleForm extends Form<RegisterFields> {}
class NestedFieldsForm extends Form<NestedClubFields> {}
class MarkdownForm extends Form<MarkdownFields> {}
class FileUploadForm extends Form<FileUploadFields> {}
class CompanySimpleForm extends Form<CompanyFields> {}
class CompanyWidgetsForm extends Form<CompanyFields> {}
class FormDynamicFieldsSelect extends Form {}
class FormSortableList extends Form {}
class FormMaterialAdvanced extends Form {}
class FormHeadlessUI extends Form {}
class FormAntd extends Form {}
class FormAria extends Form {}

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
  sortableList: new FormSortableList({ ...sortableList }, { name: 'Sortable List' }),
  materialAdvanced: new FormMaterialAdvanced({ ...materialAdvanced }, { name: 'Material Advanced' }),
  headlessUI: new FormHeadlessUI({ ...headlessUI }, { name: 'Headless UI' }),
  antd: new FormAntd({ ...antd }, { name: 'Ant Design' }),
  aria: new FormAria({ ...aria }, { name: 'React Aria' }),
};
