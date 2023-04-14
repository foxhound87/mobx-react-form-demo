import React from 'react';
import { observer } from 'mobx-react';

export default observer(({ field, id = null, value = null }) => (
  <div className="mt1">
    {/* <input
      id={id}
      value={value}
      type={field.type}
      checked={field.value === value}
      onChange={field.onChange}
      onBlur={field.onBlur}
      onFocus={field.onFocus}
    /> */}
    <input {...field.bind({
      id,
      value,
      checked: field.value === value
    })} />
    <label
      htmlFor={id}
      className="ml2"
    >
      {value}
    </label>
    <small className="f6 db red">
      {field.error}
    </small>
  </div>
));
