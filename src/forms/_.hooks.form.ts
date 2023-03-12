import FieldInterface from "mobx-react-form/src/models/FieldInterface";
import FormInterface from "mobx-react-form/src/models/FormInterface";
// import FieldInterface from "mobx-react-form/lib/models/FieldInterface";
// import FormInterface from "mobx-react-form/lib/models/FormInterface";
// import Form, { Field } from "mobx-react-form";
import Form, { Field } from "../../modules/mobx-react-form/src";

export default {

  onInit(form: FormInterface) {
    // override default bindings for all text inputs
    // (this.name === 'Register Material') &&
    //   this.each(field => field.type === 'text' &&
    //     field.set('bindings', 'MaterialTextField'));
  },

  onSuccess(form: FormInterface) {
    alert('### see console');
    console.log('Form Values', form.values());
  },

  onError(form: FormInterface) {
    alert('### see console');
    console.log('Form Errors', form.errors());
  },

  onSubmit(form: FormInterface) {
    console.log('-> onSubmit HOOK -', form.path || 'form', '- isValid?', form.isValid);
  },

  onClear(form: FormInterface) {
    console.log('-> onClear HOOK -', form.path || 'form');
  },

  onReset(form: FormInterface) {
    console.log('-> onReset HOOK -', form.path || 'form');
  },

  onChange(form: FormInterface) {
    console.log('-> onChange HOOK on Form: ', form.name);
  },
};
