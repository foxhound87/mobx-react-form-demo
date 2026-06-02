import React from 'react';
import { observer } from 'mobx-react';
import { Input } from 'antd';

export default observer(({ field, type = 'text' }) => (
  <div className="mb-4">
    <label className="form-label">{field.label}</label>
    <Input
      id={field.id}
      value={field.value || ''}
      onChange={field.onChange}
      type={type}
      placeholder={field.placeholder}
      status={field.error ? 'error' : undefined}
    />
    {field.error && <p className="form-error-text">{field.error}</p>}
  </div>
));
