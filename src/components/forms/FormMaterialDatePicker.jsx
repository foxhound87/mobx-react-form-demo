import React from 'react';
import { observer } from 'mobx-react';

import DatePicker from 'material-ui/DatePicker';
import FormControls from '../controls/FormControls';

export default observer(({ form }) => (
  <div className="container normal">
    <form>
      <h2 className="light-red">Form Material DatePicker</h2>

      <DatePicker
        hintText={form.$('controlled').label}
        value={form.$('controlled').value}
        onChange={form.$('controlled').onChange}
      />

      <FormControls form={form} />
    </form>
  </div>
));
