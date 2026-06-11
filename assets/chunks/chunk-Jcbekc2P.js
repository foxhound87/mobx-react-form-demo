var e=`import React from 'react';
import { observer } from 'mobx-react';
import { Switch } from 'antd';

export default observer(({ field }) => (
  <div className="mb-4">
    <div className="flex items-center gap-3">
      <Switch
        id={field.id}
        checked={!!field.value}
        onChange={field.onChange}
      />
      <label htmlFor={field.id} className="text-sm text-surface-700 cursor-pointer select-none">
        {field.label}
      </label>
    </div>
    {field.error && <p className="form-error-text mt-1">{field.error}</p>}
  </div>
));
`;export{e as default};