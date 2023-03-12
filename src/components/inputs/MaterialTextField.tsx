import React from 'react';
import { observer } from 'mobx-react';
import TextField from '@mui/material/TextField';

export default observer(({
  field,
  type = 'text',
  placeholder = null,
  validatingText = 'validating...',
}) => (
  <div className="pv3">
    <TextField
      {...field.bind({ type, placeholder, validatingText })}
      variant="standard"
      fullWidth
    /><br />
  </div>
));
