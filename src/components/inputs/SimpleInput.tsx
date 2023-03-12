import React from 'react';
import { observer } from 'mobx-react';

export default observer(({ field, type = 'text', placeholder = null }) => (
  <div className="measure">
    <label
      htmlFor={field.id}
      className="f7 db mb2 mt3 light-silver"
    >
      {field.label}
    </label>
    <input
      className="input-reset ba b--black-10 br1 pa2 mb2 db w-100 f6"
      aria-describedby="name-desc"
      {...field.bind({ type, placeholder })}
    />
    <small className="f6 db red">
      {field.error}
    </small>
  </div>
));
