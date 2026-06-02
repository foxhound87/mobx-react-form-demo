import Form from './_.extend';
import fieldsHooks from './_.hooks.fields';
import zodPlugin from 'mobx-react-form/validators/ZOD';
import { z } from 'zod';
import { zodSchema } from './extension/zodSchema';

import { Field } from 'mobx-react-form';
// import { Field } from 'mobx-react-form/lib'; // load from build (FALLBACK)

// forms — new structure
import login from './setup/login';
import registerSimple from './setup/registerSimple';
import validationDvr from './setup/validationDvr';
import validationVjf from './setup/validationVjf';
import validationAsync from './setup/validationAsync';
import validationZod from './setup/validationZod';
import arrays from './setup/arrays';
import sortableList from './setup/sortableList';
import nestedFields from './setup/nestedFields';
import dynamicFieldsSelect from './setup/dynamicFieldsSelect';
import interceptors from './setup/interceptors';
import observers from './setup/observers';
import composer from './setup/composer';

// keep existing library-based forms
import markdown from './setup/markdown';
import fileUpload from './setup/fileUpload';
import registerMaterial from './setup/registerMaterial';
import companySimple from './setup/companySimple';
import companyWidgets from './setup/companyWidgets';
import materialAdvanced from './setup/materialAdvanced';
import headlessUI from './setup/headlessUI';
import antd from './setup/antd';
import aria from './setup/aria';


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

// New structure form classes
class LoginForm extends Form {}
class ValidationDvrForm extends Form {}
class ValidationVjfForm extends Form {}
class ValidationAsyncForm extends Form {}

class ValidationZodForm extends Form {
  plugins() {
    return {
      ...super.plugins(),
      zod: zodPlugin({ package: z, schema: zodSchema }),
    };
  }
}

class ArraysForm extends Form {}
class InterceptorsForm extends Form {}
class ObserversForm extends Form {}
class ComposerForm extends Form {}

// Existing form classes
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
  // New structure
  login: new LoginForm({ ...login }, { name: 'Login' }),
  registerSimple: new RegisterSimpleForm({ ...registerSimple }, { name: 'Registration' }),
  validationDvr: new ValidationDvrForm({ ...validationDvr }, { name: 'DVR Validation' }),
  validationVjf: new ValidationVjfForm({ ...validationVjf }, { name: 'VJF Validation' }),
  validationAsync: new ValidationAsyncForm({ ...validationAsync }, { name: 'Async Validation' }),
  validationZod: new ValidationZodForm({ ...validationZod }, { name: 'ZOD Validation' }),
  arrays: new ArraysForm({ ...arrays }, { name: 'Array Fields' }),
  nestedFields: new NestedFieldsForm({ ...nestedFields }, { name: 'Nested Fields' }),
  dynamicFieldsSelect: new FormDynamicFieldsSelect({ ...dynamicFieldsSelect }, { name: 'Dynamic Fields' }),
  interceptors: new InterceptorsForm({ ...interceptors }, { name: 'Interceptors' }),
  observers: new ObserversForm({ ...observers }, { name: 'Observers' }),
  composer: new ComposerForm({ ...composer }, { name: 'Composer' }),
  // Existing library-based forms
  registerMaterial: new RegisterMaterialForm({ ...registerMaterial }, { name: 'Register Material' }),
  materialAdvanced: new FormMaterialAdvanced({ ...materialAdvanced }, { name: 'Material Advanced' }),
  companySimple: new CompanySimpleForm({ ...companySimple }, { name: 'Company Simple' }),
  companyWidgets: new CompanyWidgetsForm({ ...companyWidgets }, { name: 'Company Widgets' }),
  headlessUI: new FormHeadlessUI({ ...headlessUI }, { name: 'Headless UI' }),
  antd: new FormAntd({ ...antd }, { name: 'Ant Design' }),
  aria: new FormAria({ ...aria }, { name: 'React Aria' }),
  markdown: new MarkdownForm({ ...markdown }, { name: 'Markdown' }),
  fileUpload: new FileUploadForm({ ...fileUpload }, { hooks: { onSubmit: onSubmitFileUpload }, name: 'File Upload' }),
  sortableList: new FormSortableList({}, { name: 'Sortable List' }),
};
