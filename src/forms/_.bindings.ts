/**
  Fields Bindings
*/
export default {

  // MaterialTextField
  MaterialTextField: ({ $try, field, props }) => ({
    type: $try(props.type, field.type),
    id: $try(props.id, field.id),
    name: $try(props.name, field.name),
    value: $try(props.value, field.value),
    label: $try(props.label, field.label),
    placeholder: $try(props.placeholder, field.placeholder),
    helperText: field.validating ? props.validatingText : $try(props.error, field.error),
    error: $try(props.hasError, field.hasError),
    disabled: props.disabled || field.disabled || field.state.form.disabled || field.state.form.submitting,
    onChange: $try(props.onChange, field.onChange),
    onBlur: $try(props.onBlur, field.onBlur),
    onFocus: $try(props.onFocus, field.onFocus),
    autoFocus: $try(props.autoFocus, field.autoFocus),
    onKeyDown: $try(props.onKeyDown, field.onKeyDown),
  }),

};
