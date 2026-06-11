var e=`import React from 'react';
import { observer } from 'mobx-react';
import { Rate } from 'antd';

export default observer(({ field }) => (
  <div className="mb-4">
    <label className="form-label block mb-2">{field.label}</label>
    <div className="flex items-center gap-3">
      <Rate value={field.value} onChange={field.onChange} />
      {field.value ? (
        <span className="text-sm text-surface-500 font-medium">{field.value} / 5</span>
      ) : null}
    </div>
    {field.error && <p className="form-error-text">{field.error}</p>}
  </div>
));
`;export{e as default};