var e=`import React from 'react';
import { observer } from 'mobx-react';
import TextField from '@mui/material/TextField';

export default observer(({
  field,
  type = 'text',
  placeholder = null,
  validatingText = 'validating...',
  className = 'mb-2',
}) => (
  <div className={className}>
    <TextField
      {...field.bind({ type, placeholder, validatingText })}
      variant="standard"
      fullWidth
      size="small"
    />
  </div>
));
`;export{e as default};