var e=`import React from 'react';
import { observer } from 'mobx-react';
import Input from '../inputs/SimpleInput';
import Checkbox from '../inputs/SimpleCheckbox';
import FormControls from '../controls/FormControls';

export default observer(({ form }) => (
  <form>
    <div className="card">
      <div className="card-header">
        <h2 className="text-lg font-medium text-surface-900">Login</h2>
        <p className="text-sm text-surface-500 mt-0.5">Sign in to your account</p>
      </div>
      <div className="card-body">
        <Input field={form.$('email')} />
        <Input field={form.$('password')} />
        <div className="divider !my-4" />
        <Checkbox field={form.$('remember')} />
      </div>
      <div className="card-footer">
        <FormControls form={form} />
      </div>
    </div>
  </form>
));
`;export{e as default};