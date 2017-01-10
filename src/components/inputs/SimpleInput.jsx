import React from 'react';
import { observer } from 'mobx-react';

export default observer(({ field, type = 'text', placeholder = null }) => (
  <div>
    <div>
      <label htmlFor={field.id}>{field.label}</label>
      <i>{field.error}</i>
    </div>
    <input {...field.bind({ type, placeholder })} />
  </div>
));
