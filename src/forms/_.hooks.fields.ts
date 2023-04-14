import FieldInterface from "mobx-react-form/lib/models/FieldInterface";
import FormInterface from "mobx-react-form/lib/models/FormInterface";
// import Form, { Field } from "mobx-react-form";
import Form, { Field } from "../../modules/mobx-react-form/src";

export default {

  onInit(field: FieldInterface) {
    // override default bindings for all text inputs
    (this.state.form.name === 'Register Material')
      && field.set('bindings', 'MaterialTextField');
  },

  onSuccess(fieldset: FieldInterface) {
    alert('### see console');
    console.log('Form Values (fieldset)', fieldset.values());
  },

  onError(fieldset: FieldInterface) {
    alert('### see console');
    console.log('Form Errors (fieldset)', fieldset.errors());
  },

  onSubmit(field: FieldInterface) {
    console.log('-> onSubmit HOOK -', field.path, '- isValid?', field.isValid);
  },

  onClear(field: FieldInterface) {
    console.log('-> onClear HOOK -', field.path);
  },

  onReset(field: FieldInterface) {
    console.log('-> onReset HOOK -', field.path);
  },

  onChange(field: FieldInterface) {
    console.log('-> onChange HOOK -', field.path, field.value);
  },

  onFocus: (field: FieldInterface) => {
    console.log('-> onFocus HOOK -', field.path, field.value);
  },

  onBlur: (field: FieldInterface) => {
    console.log('-> onBlur HOOK -', field.path, field.value);
  },

  onToggle: (field: FieldInterface) => {
    console.log('-> onToggle HOOK -', field.path, field.value);
  },

  onKeyDown: (field: FieldInterface) => {
    console.log('-> onKeyDown HOOK -', field.path, field.value);
  }
};
