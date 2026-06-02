import React from 'react';
import { observer } from 'mobx-react';
import { TextField, Label, Input } from 'react-aria-components';

export default observer(({ field, type = 'text' }) => (
  <div className="mb-4">
    <TextField
      value={field.value || ''}
      onChange={field.onChange}
      type={type}
      className="w-full"
    >
      <Label className="block text-sm font-medium text-surface-700 mb-1.5">
        {field.label}
      </Label>
      <Input
        placeholder={field.placeholder}
        className={`w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-surface-900 shadow-soft focus:border-brand-400 focus:ring-1 focus:ring-brand-400 transition-colors ${
          field.error
            ? 'border-red-300 text-red-900 placeholder-red-300'
            : 'border-surface-200'
        }`}
      />
    </TextField>
    {field.error && <p className="form-error-text">{field.error}</p>}
  </div>
));
