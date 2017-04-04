/**
  Fields Bindings
*/
export default {

  MaterialTextFieldReimplemented: ({ $try, field, props }) => ({
    type: $try(props.type, field.type),
    id: $try(props.id, field.id),
    name: $try(props.name, field.name),
    value: $try(props.value, field.value),
    floatingLabelText: $try(props.label, field.label),
    hintText: $try(props.placeholder, field.placeholder),
    errorText: field.validating ? props.validatingText : $try(props.error, field.error),
    errorStyle: field.validating ? { background: 'yellow', color: 'black' } : {},
    disabled: $try(props.disabled, field.disabled),
    onChange: $try(props.onChange, field.onChange),
    onBlur: $try(props.onBlur, field.onBlur),
    onFocus: $try(props.onFocus, field.onFocus),
    autoFocus: $try(props.autoFocus, field.autoFocus),
  }),

  MaterialTextField: {
    id: 'id',
    name: 'name',
    type: 'type',
    value: 'value',
    label: 'floatingLabelText',
    placeholder: 'hintText',
    disabled: 'disabled',
    error: 'errorText',
    onChange: 'onChange',
    onBlur: 'onBlur',
    onFocus: 'onFocus',
    autoFocus: 'autoFocus',
  },

};
