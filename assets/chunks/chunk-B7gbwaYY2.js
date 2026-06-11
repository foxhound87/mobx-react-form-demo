var e=`import React from 'react';
import { observer } from 'mobx-react';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default observer(({ field, min = 0, max = 100, step = 1 }) => (
  <div className="mb-4">
    <Box sx={{ px: 1 }}>
      <Typography
        gutterBottom
        sx={{ fontSize: '0.875rem', color: '#44403c', mb: 1 }}
      >
        {field.label}: <strong>{field.value}</strong>
      </Typography>
      <Slider
        value={field.value != null ? Number(field.value) : min}
        onChange={field.onChange}
        onBlur={field.onBlur}
        onFocus={field.onFocus}
        min={min}
        max={max}
        step={step}
        size="small"
        valueLabelDisplay="auto"
      />
    </Box>
    {field.error && (
      <p className="form-error-text mt-1">{field.error}</p>
    )}
  </div>
));
`;export{e as default};