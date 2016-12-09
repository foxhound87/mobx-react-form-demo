import React from 'react';
import { observer } from 'mobx-react';

export default observer(({ field, type = null }) => (
  <div>
    <div>
      <label htmlFor={field.id}>{field.label}</label>
      <i>{field.error}</i>
    </div>
    <input
      id={field.id}
      type={type || 'text'}
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
