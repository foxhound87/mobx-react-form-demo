import React from 'react';
import { observer } from 'mobx-react';
import { Slider } from 'antd';

export default observer(({ field, min = 0, max = 100, step = 1 }) => (
  <div className="mb-4">
    <label className="form-label">
      {field.label}: <strong>{field.value}</strong>
    </label>
    <Slider
      value={field.value != null ? Number(field.value) : min}
      onChange={field.onChange}
      min={min}
      max={max}
      step={step}
    />
    {field.error && <p className="form-error-text">{field.error}</p>}
  </div>
));
