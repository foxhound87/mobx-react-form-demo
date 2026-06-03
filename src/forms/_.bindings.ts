/**
  Fields Bindings

  Each binding is a function that receives { $try, field, props } and returns
  the props to spread onto an input element.

  - $try: picks the first defined value from props[key] ?? field[key]
  - field: the mobx-react-form Field instance
  - props: optional overrides passed to field.bind(props)

  To assign a binding to a field, set bindings in the form config:
    const bindings = { username: 'DefaultInput', code: 'UppercaseInput' };
    export default { fields, bindings };

  Or programmatically:
    field.set('bindings', 'UppercaseInput');
*/
export default {

  // Default text input — standard mapping (label, value, onChange, etc.)
  DefaultInput: ({ $try, field, props }) => ({
    type: $try(props.type, field.type, 'text'),
    id: $try(props.id, field.id),
    name: $try(props.name, field.name),
    value: $try(props.value, field.value),
    placeholder: $try(props.placeholder, field.placeholder),
    onChange: $try(props.onChange, field.onChange),
    onBlur: $try(props.onBlur, field.onBlur),
    onFocus: $try(props.onFocus, field.onFocus),
    disabled: props.disabled || field.disabled || field.state.form.disabled,
  }),

  // Uppercase input — automatically transforms typed text to uppercase
  UppercaseInput: ({ $try, field, props }) => ({
    type: $try(props.type, field.type, 'text'),
    id: $try(props.id, field.id),
    name: $try(props.name, field.name),
    value: $try(props.value, field.value),
    placeholder: $try(props.placeholder, field.placeholder),
    onChange: (e) => {
      e.target.value = e.target.value.toUpperCase();
      field.onChange(e);
    },
    onBlur: $try(props.onBlur, field.onBlur),
    onFocus: $try(props.onFocus, field.onFocus),
    disabled: props.disabled || field.disabled || field.state.form.disabled,
  }),

  // Currency input — filters out non-numeric characters
  CurrencyInput: ({ $try, field, props }) => ({
    type: 'text',
    id: $try(props.id, field.id),
    name: $try(props.name, field.name),
    value: String($try(props.value, field.value)),
    placeholder: $try(props.placeholder, field.placeholder),
    onChange: (e) => {
      const el = e.target;
      const cursor = el.selectionStart;
      const cleaned = el.value.replace(/[^0-9.,]/g, '');
      el.value = cleaned;
      field.onChange(e);
      requestAnimationFrame(() => {
        const newPos = Math.min(cursor, cleaned.length);
        el.setSelectionRange(newPos, newPos);
      });
    },
    onBlur: $try(props.onBlur, field.onBlur),
    onFocus: $try(props.onFocus, field.onFocus),
    disabled: props.disabled || field.disabled || field.state.form.disabled,
  }),

  // Debug input — logs every interaction to the console
  DebugInput: ({ $try, field, props }) => ({
    type: $try(props.type, field.type, 'text'),
    id: $try(props.id, field.id),
    name: $try(props.name, field.name),
    value: $try(props.value, field.value),
    placeholder: $try(props.placeholder, field.placeholder),
    onChange: (e) => {
      console.log(`[DebugInput] onChange  — ${field.path}:`, e.target.value);
      field.onChange(e);
    },
    onBlur: (e) => {
      console.log(`[DebugInput] onBlur    — ${field.path}:`, e.target.value);
      field.onBlur?.(e);
    },
    onFocus: (e) => {
      console.log(`[DebugInput] onFocus   — ${field.path}:`, e.target.value);
      field.onFocus?.(e);
    },
    onKeyDown: (e) => {
      console.log(`[DebugInput] onKeyDown — ${field.path}:`, e.key);
      field.onKeyDown?.(e);
    },
    disabled: props.disabled || field.disabled || field.state.form.disabled,
  }),

  // MaterialTextField — kept for Material UI forms (legacy)
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
