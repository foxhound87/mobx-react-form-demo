import type { FieldDefinition } from 'mobx-react-form';

const fields: Record<string, FieldDefinition> = {
  username: {
    value: 'JohnDoe',
    label: 'Username',
    placeholder: 'Standard text input',
    rules: 'required|string|min:3',
  },
  productCode: {
    value: 'ABC-123',
    label: 'Product Code',
    placeholder: 'Auto-uppercased on type',
    rules: 'required|string',
  },
  price: {
    value: '1299.99',
    label: 'Price (€)',
    placeholder: 'Only numbers allowed',
    rules: 'required',
  },
  notes: {
    value: 'Check the console →',
    label: 'Notes (Debug)',
    placeholder: 'Watch the dev console...',
    rules: 'string',
  },
};

// Maps each field to a binding defined in _.bindings.ts
const bindings = {
  username: 'DefaultInput',
  productCode: 'UppercaseInput',
  price: 'CurrencyInput',
  notes: 'DebugInput',
};

export default { fields, bindings };
