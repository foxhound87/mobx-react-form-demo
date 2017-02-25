import React from 'react';
import { observer } from 'mobx-react';
import TextField from 'material-ui/TextField';

export default observer(({
  field,
  type = 'text',
  placeholder = null,
  validatingText = 'validating...',
}) => (
  <div>
    <TextField
      {...field.bind({ type, placeholder, validatingText })}
    /><br />
  </div>
));
