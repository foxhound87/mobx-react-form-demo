import React from 'react';
import { observer } from 'mobx-react';
import { DateTimePicker } from 'react-widgets';

export default observer(({ field }) => (
  <div>

    <div>
      <b>{field.label}</b>
      <i>{field.error}</i>
    </div>
    <DateTimePicker
      time={false}
      value={field.value}
      onChange={field.sync}
    />

  </div>
));
