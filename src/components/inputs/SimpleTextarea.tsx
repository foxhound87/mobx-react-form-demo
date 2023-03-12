import React from 'react';
import { observer } from 'mobx-react';

export default observer(({ field, rows = 15, cols = 100 }) => (
  <div className="measure">
    <label
      htmlFor={field.id}
      className="f7 db mb2 mt3 light-silver"
    >
      {field.label}
    </label>
    <textarea
      className="db border-box hover-black w-100 measure ba b--black-20 pa2 br2"
      {...field.bind()}
      rows={rows}
      cols={cols}
    />
  </div>
));
