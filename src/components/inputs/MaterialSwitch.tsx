import React from 'react';
import { observer } from 'mobx-react';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

export default observer(({ field }) => (
  <div>
    <br />
    <FormControlLabel
      label={field.label}
      control={
        <Switch
          id={field.id}
          name={field.name}
          onChange={field.onToggle}
          onFocus={field.onFocus}
          onBlur={field.onBlur}
        />
      }
    />
    <small
      id="name-desc"
      className="f7 black-60 db mt1 mb3 red"
    >
      {field.error}
    </small>
  </div>
));
