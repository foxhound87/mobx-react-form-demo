import React from 'react';
import { observer } from 'mobx-react';
import { DropdownList } from 'react-widgets';

export default observer(({ field, options = [] }) => (
  <div>

    <div>
      <label htmlFor={field.id}>{field.label}</label>
      <i>{field.error}</i>
    </div>

    <DropdownList
      id={field.id}
      value={field.value}
      onChange={field.sync}
      data={options}
    />

  </div>
));
