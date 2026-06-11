var e=`import React from 'react';
import { observer } from 'mobx-react';

export default observer(({ field }) => (
  <div className="mb-4">
    <label
      htmlFor={field.id}
      className="form-label"
    >
      {field.label}
    </label>
    <select
      className={\`form-input \${field.error ? 'form-input-error' : ''}\`}
      {...field.bind()}
    >
      {field.extra.map(val => (
        <option key={val} value={val}>{val}</option>
      ))}
    </select>
    {field.error && (
      <p className="form-error-text">{field.error}</p>
    )}
  </div>
));
`;export{e as default};