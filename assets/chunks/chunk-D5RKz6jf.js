var e=`import React from 'react';
import { observer } from 'mobx-react';
import Input from '../inputs/SimpleInput';
import Textarea from '../inputs/SimpleTextarea';
import FormControls from '../controls/FormControls';

export default observer(({ form }) => (
  <form>
    <div className="card">
      <div className="card-header">
        <h2 className="text-lg font-medium text-surface-900">Async Validation</h2>
        <p className="text-sm text-surface-500 mt-0.5">
          Username availability is checked asynchronously (simulated 1.5s delay)
        </p>
      </div>
      <div className="card-body">
        <Input field={form.$('username')} />
        <Input field={form.$('email')} />
        <Textarea field={form.$('message')} />
      </div>
      <div className="card-footer">
        <FormControls form={form} />
      </div>
    </div>
  </form>
));
`;export{e as default};