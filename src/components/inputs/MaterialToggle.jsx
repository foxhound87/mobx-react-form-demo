import React from 'react';
import { observer } from 'mobx-react';
import Toggle from 'material-ui/Toggle';

export default observer(({ field }) => (
  <div>
    <br />
    <Toggle
      labelPosition="right"
      label={field.label}
      id={field.id}
      name={field.name}
      defaultToggled={field.value}
      onToggle={field.onToggle}
      onFocus={field.onFocus}
      onBlur={field.onBlur}
    />
    <div>
      <i>{field.error}</i>
    </div>
  </div>
));
