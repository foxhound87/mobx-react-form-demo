import React from 'react';
import { observer } from 'mobx-react';
import Select from 'react-select';

export default observer(({ field }) => (
  <div className="measure">
    <label
      htmlFor={field.id}
      className="f7 db mb2 mt3 light-silver"
    >
      {field.label}
    </label>
    <Select
      {...field.bind()}
      options={field.extra}
      resetValue={[]}
      multi
    />
  </div>
));
