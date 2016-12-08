import React from 'react';
import { observer } from 'mobx-react';

export default observer(({ field, options = [] }) => (
  <div>

    <div>
      <b>{field.label}</b>
      <i>{field.error}</i>
    </div>

    <select
      value={field.value}
      name={field.name}
      onChange={field.sync}
    >
      {options.map(val =>
        <option key={val} value={val}>{val}</option>)}
    </select>

  </div>
));
