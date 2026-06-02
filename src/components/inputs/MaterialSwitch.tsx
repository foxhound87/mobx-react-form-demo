import React from 'react';
import { observer } from 'mobx-react';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

export default observer(({ field }) => (
  <div className="mb-4">
    <FormControlLabel
      label={<span className="text-sm text-surface-700">{field.label}</span>}
      control={
        <Switch
          id={field.id}
          name={field.name}
          onChange={field.onToggle}
          onFocus={field.onFocus}
          onBlur={field.onBlur}
          size="small"
        />
      }
    />
    {field.error && (
      <p className="form-error-text mt-1 ml-7">{field.error}</p>
    )}
  </div>
));
