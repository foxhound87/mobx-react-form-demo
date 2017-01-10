import React from 'react';
import { observer } from 'mobx-react';

export default observer(({ field }) => (
  <div>

    <div>
      <label htmlFor={field.id}>{field.label}</label>
      <i>{field.error}</i>
    </div>

    <select
      id={field.id}
      value={field.value}
      name={field.name}
      onChange={field.sync}
    >
      {field.options.map(val =>
        <option key={val} value={val}>{val}</option>)}
    </select>

  </div>
));
