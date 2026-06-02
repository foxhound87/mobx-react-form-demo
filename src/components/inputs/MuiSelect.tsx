import React from 'react';
import { observer } from 'mobx-react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';

export default observer(({ field }) => (
  <div className="mb-4">
    <FormControl
      variant="standard"
      fullWidth
      size="small"
      error={field.hasError}
    >
      <InputLabel id={`${field.id}-label`}>{field.label}</InputLabel>
      <Select
        labelId={`${field.id}-label`}
        id={field.id}
        value={field.value || ''}
        onChange={field.onChange}
        onBlur={field.onBlur}
        onFocus={field.onFocus}
        label={field.label}
        disabled={field.disabled || field.state.form.disabled || field.state.form.submitting}
      >
        {field.extra.map((opt) => (
          <MenuItem key={opt.value || opt} value={opt.value || opt}>
            {opt.label || opt}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>
        {field.validating ? 'validating...' : field.error}
      </FormHelperText>
    </FormControl>
  </div>
));
