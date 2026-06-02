import React from 'react';
import { observer } from 'mobx-react';
import { Multiselect } from 'react-widgets';

export default observer(({ field }) => (
  <div className="mb-4">
    <label
      htmlFor={field.id}
      className="form-label"
    >
      {field.label}
    </label>
    <Multiselect
      id={field.id}
      value={field.value}
      onChange={field.sync}
      data={field.extra}
    />
  </div>
));
