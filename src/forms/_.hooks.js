export default {

  onInit() {
    // override default bindings for all text inputs
    // eslint-disable-next-line
    (this.name === 'Register Material') &&
      this.each(field => field.type === 'text' &&
        field.set('bindings', 'MaterialTextField'));
  },

  onSuccess(form) {
    // eslint-disable-next-line
    alert('### see console');
    // eslint-disable-next-line
    console.log('Form Values', form.values());
  },

  onError(form) {
    // eslint-disable-next-line
    alert('### see console');
    // eslint-disable-next-line
    console.log('Form Errors', form.errors());
  },

  onSubmit(instance) {
    // eslint-disable-next-line
    console.log('-> onSubmit HOOK -', instance.path || 'form', '- isValid?', instance.isValid);
  },

  onClear(instance) {
    // eslint-disable-next-line
    console.log('-> onClear HOOK -', instance.path || 'form');
  },

  onReset(instance) {
    // eslint-disable-next-line
    console.log('-> onReset HOOK -', instance.path || 'form');
  },

  onChange(field) {
    // eslint-disable-next-line
    console.log('-> onChange HOOK -', field.path, field.value);
  },

  onFocus: (field) => {
    // eslint-disable-next-line
    console.log('-> onFocus HOOK -', field.path, field.value);
  },

  onBlur: (field) => {
    // eslint-disable-next-line
    console.log('-> onBlur HOOK -', field.path, field.value);
  },
};
