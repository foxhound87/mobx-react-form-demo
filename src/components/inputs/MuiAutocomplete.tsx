import React from 'react';
import { observer } from 'mobx-react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default observer(({ field }) => {
  const options = field.extra || [];
  const current = options.find(o => (o.value || o) === field.value) || null;

  return (
    <div className="mb-4">
      <Autocomplete
        id={field.id}
        value={current}
        onChange={(_, newVal) => field.set(newVal ? (newVal.value || newVal) : null)}
        onBlur={field.onBlur}
        onFocus={field.onFocus}
        options={options}
        getOptionLabel={(opt) => opt.label || opt}
        isOptionEqualToValue={(opt, val) => (opt.value || opt) === (val.value || val)}
        disableClearable={false}
        size="small"
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label={field.label}
            placeholder={field.placeholder}
            error={field.hasError}
            helperText={field.validating ? 'validating...' : field.error}
            fullWidth
          />
        )}
      />
    </div>
  );
});
