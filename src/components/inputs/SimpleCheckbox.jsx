import React from 'react';
import { observer } from 'mobx-react';

export default observer(({ field }) => (
  <div>
    <label
      className="pa0 ma0 mt3 lh-copy f6 pointer"
      htmlFor={field.id}
    >
      <input
        checked={field.value}
        {...field.bind({
          type: 'checkbox',
        })}
      /> {field.label}
    </label>
    <small
      id="name-desc"
      className="f6 black-60 db mt1 mb3 red"
    >
      {field.error}
    </small>
  </div>
));
