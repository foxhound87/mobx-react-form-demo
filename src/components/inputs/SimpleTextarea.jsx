import React from 'react';
import { observer } from 'mobx-react';

export default observer(({ field, rows = 20, cols = 100 }) => (
  <div>
    <div>
      <label htmlFor={field.id}>{field.label}</label>
      <i>{field.error}</i>
    </div>
    <textarea
      {...field.bind()}
      rows={rows}
      cols={cols}
    />
  </div>
));
