var e=`import React from 'react';
import { observer } from 'mobx-react';
import { InputNumber } from 'antd';

export default observer(({ field, min = null, max = null, step = 1 }) => (
  <div className="mb-4">
    <label className="form-label">{field.label}</label>
    <InputNumber
      id={field.id}
      value={field.value}
      onChange={field.onChange}
      min={min}
      max={max}
      step={step}
      status={field.error ? 'error' : undefined}
      placeholder={field.placeholder}
    />
    {field.error && <p className="form-error-text">{field.error}</p>}
  </div>
));
`;export{e as default};