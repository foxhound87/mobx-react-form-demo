import React from 'react';
import { observer } from 'mobx-react';

export default observer(({ field }) => (
  <div className="mb-4">
    <label
      htmlFor={field.id}
      className="form-label"
    >
      {field.label}
    </label>
    <input
      className={`form-input ${field.error ? 'form-input-error' : ''}`}
      aria-describedby="name-desc"
      {...field.bind()}
    />
    {field.error && (
      <p className="form-error-text">{field.error}</p>
    )}
  </div>
));
