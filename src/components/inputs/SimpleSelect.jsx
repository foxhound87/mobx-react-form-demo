import React from 'react';
import { observer } from 'mobx-react';

export default observer(({ field }) => (
  <div>

    <div>
      <label htmlFor={field.id}>{field.label}</label>
      <i>{field.error}</i>
    </div>

    <select {...field.bind()}>
      {field.extra.map(val =>
        <option key={val} value={val}>{val}</option>)}
    </select>

  </div>
));
