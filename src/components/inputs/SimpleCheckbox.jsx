import React from 'react';
import { observer } from 'mobx-react';

export default observer(({ field }) => (
  <div>
    <br />
    <input
      type="checkbox"
      name={field.name}
      checked={field.value}
      onChange={field.sync}
    /> {field.label}
    <div>
      <i>{field.error}</i>
    </div>
  </div>
));
