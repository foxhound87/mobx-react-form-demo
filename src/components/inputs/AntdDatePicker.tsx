import React from 'react';
import { observer } from 'mobx-react';
import { DatePicker } from 'antd';
import moment from 'moment';

export default observer(({ field }) => {
  const val = field.value ? (moment.isMoment(field.value) ? field.value : moment(field.value)) : null;
  return (
    <div className="mb-4">
      <label className="form-label">{field.label}</label>
      <DatePicker
        id={field.id}
        value={val}
        onChange={field.onChange}
        status={field.error ? 'error' : undefined}
        allowClear
      />
      {field.error && <p className="form-error-text">{field.error}</p>}
    </div>
  );
});
