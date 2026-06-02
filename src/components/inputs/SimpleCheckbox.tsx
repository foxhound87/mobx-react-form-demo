import React from 'react';
import { observer } from 'mobx-react';

export default observer(({ field }) => (
  <div className="mb-4">
    <label
      className="inline-flex items-center gap-3 cursor-pointer select-none"
      htmlFor={field.id}
    >
      <input
        className="form-checkbox"
        {...field.bind()}
      />
      <span className="text-sm text-surface-700">{field.label}</span>
    </label>
    {field.error && (
      <p className="form-error-text mt-1 ml-7">{field.error}</p>
    )}
  </div>
));
