import React from 'react';
import { observer } from 'mobx-react';
import { Select } from 'antd';

export default observer(({ field }) => (
  <div className="mb-4">
    <label className="form-label">{field.label}</label>
    <Select
      id={field.id}
      value={field.value || undefined}
      onChange={field.onChange}
      placeholder={field.placeholder || 'Select...'}
      options={field.extra}
      status={field.error ? 'error' : undefined}
      allowClear
    />
    {field.error && <p className="form-error-text">{field.error}</p>}
  </div>
));
