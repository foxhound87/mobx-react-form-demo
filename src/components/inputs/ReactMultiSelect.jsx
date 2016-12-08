import React from 'react';
import { observer } from 'mobx-react';
import Select from 'react-select';

export default observer(({ field, options = [] }) => (
  <div>

    <div>
      <b>{field.label}</b>
      <i>{field.error}</i>
    </div>

    <Select
      multi
      options={options}
      value={field.value}
      name={field.name}
      onChange={field.sync}
      resetValue={[]}
    />

  </div>
));
