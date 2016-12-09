import React from 'react';
import { observer } from 'mobx-react';

export default observer(({ field, rows = 20, cols = 100 }) => (
  <div>
    <div>
      <label htmlFor={field.id}>{field.label}</label>
      <i>{field.error}</i>
    </div>
    <textarea
      rows={rows} cols={cols}
      id={field.id}
      name={field.name}
      value={field.value}
      placeholder={field.placeholder}
      disabled={field.disabled}
      onChange={field.onChange}
      onFocus={field.onFocus}
      onBlur={field.onBlur}
    />
  </div>
));
