import React from 'react';
import { observer } from 'mobx-react';

export default observer(({ field, type = null }) => (
  <div>
    <div>
      <b>{field.label}</b>
      <i>{field.error}</i>
    </div>
    <input
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
