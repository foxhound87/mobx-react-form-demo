import React from 'react';
import { observer } from 'mobx-react';
import Select from 'react-select';

export default observer(({ field }) => (
  <div>

    <div>
      <label htmlFor={field.id}>{field.label}</label>
      <i>{field.error}</i>
    </div>

    <Select
      {...field.bind()}
      options={field.options}
      resetValue={[]}
      multi
    />

  </div>
));
