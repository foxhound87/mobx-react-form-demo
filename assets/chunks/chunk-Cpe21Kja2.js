var e=`import React from 'react';
import { observer } from 'mobx-react';

export default observer(({ field, id = null, value = null }) => (
  <div className="mb-2 flex items-center gap-3">
    <input
      className="form-radio"
      {...field.bind({
        id,
        value,
        checked: field.value === value
      })}
    />
    <label
      htmlFor={id}
      className="text-sm text-surface-700 cursor-pointer select-none"
    >
      {value}
    </label>
    {field.error && (
      <p className="form-error-text">{field.error}</p>
    )}
  </div>
));
`;export{e as default};