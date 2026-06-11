var e=`import React from 'react';
import { observer } from 'mobx-react';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default observer(({ field }) => (
  <div className="mb-4">
    <label className="form-label">{field.label}</label>
    <Box sx={{ mt: 0.5 }}>
      <Rating
        name={field.name}
        value={field.value || 0}
        onChange={(_, value) => field.set(value)}
        size="medium"
      />
    </Box>
    {field.error && (
      <p className="form-error-text mt-1">{field.error}</p>
    )}
  </div>
));
`;export{e as default};