var e=`import React from 'react';
import { observer } from 'mobx-react';
import Input from '../inputs/SimpleInput';
import FormControls from '../controls/FormControls';

export default observer(({ form }) => (
  <form>
    <div className="card">
      <div className="card-header">
        <h2 className="text-lg font-medium text-surface-900">DVR Validation</h2>
        <p className="text-sm text-surface-500 mt-0.5">
          Uses validatorjs with a custom <code className="text-xs bg-surface-100 px-1 py-0.5 rounded">telephone</code> rule
        </p>
      </div>
      <div className="card-body">
        <Input field={form.$('fullName')} />
        <Input field={form.$('email')} />
        <Input field={form.$('phone')} />
        <Input field={form.$('age')} />
      </div>
      <div className="card-footer">
        <FormControls form={form} />
      </div>
    </div>
  </form>
));
`;export{e as default};