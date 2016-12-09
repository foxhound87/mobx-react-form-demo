import React from 'react';
import { observer } from 'mobx-react';
import { DateTimePicker } from 'react-widgets';

export default observer(({ field }) => (
  <div>

    <div>
      <label htmlFor={field.id}>{field.label}</label>
      <i>{field.error}</i>
    </div>

    <DateTimePicker
      id={field.id}
      value={field.value}
      onChange={field.sync}
      time={false}
    />

  </div>
));
