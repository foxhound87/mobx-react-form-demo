import React from 'react';
import { observer } from 'mobx-react';

export default observer(({ field }) => (
  <div>
    <br />
    <div className="clearfix">
      <input
        {...field.bind({ type: 'checkbox' })}
        checked={field.value}
        className="left"
      />
      <label
        htmlFor={field.id}
        className="left"
      >
        {field.label}
      </label>
    </div>
    <div>
      <i>{field.error}</i>
    </div>
  </div>
));
