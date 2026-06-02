import React from 'react';
import { observer } from 'mobx-react';

export default observer(({ field, rows = 15, cols = 100 }) => (
  <div className="mb-4">
    <label
      htmlFor={field.id}
      className="form-label"
    >
      {field.label}
    </label>
    <textarea
      className={`form-input resize-y min-h-[120px] ${field.error ? 'form-input-error' : ''}`}
      {...field.bind()}
      rows={rows}
      cols={cols}
    />
    {field.error && (
      <p className="form-error-text">{field.error}</p>
    )}
  </div>
));
