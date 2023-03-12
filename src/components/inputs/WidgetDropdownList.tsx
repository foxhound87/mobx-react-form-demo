import React from 'react';
import { observer } from 'mobx-react';
import { DropdownList } from 'react-widgets';

export default observer(({ field }) => (
  <div className="measure">
    <label
      htmlFor={field.id}
      className="f7 db mb2 mt3 light-silver"
    >
      {field.label}
    </label>
    <DropdownList
      id={field.id}
      value={field.value}
      onChange={field.sync}
      data={field.extra}
    />
  </div>
));
