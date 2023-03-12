import React from 'react';
import { observer } from 'mobx-react';

export default observer(({ field }) => (
  <div className="measure">
    <label
      htmlFor={field.id}
      className="f7 db mb2 mt3 light-silver"
    >
      {field.label}
    </label>
    <select {...field.bind()}>
      {field.extra.map(val =>
        <option key={val} value={val}>{val}</option>)}
    </select>
  </div>
));
