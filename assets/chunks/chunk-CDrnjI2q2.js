var e=`import React from 'react';
import { observer } from 'mobx-react';
import Input from '../inputs/SimpleInput';
import Radio from '../inputs/SimpleRadio';
import FormControls from '../controls/FormControls';

export default observer(({ form }) => (
  <form>
    <div className="card">
      <div className="card-header">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-medium text-surface-900">Company Info</h2>
            <p className="text-sm text-surface-500 mt-0.5">Simple inputs &amp; radio buttons</p>
          </div>
          <span className="badge bg-surface-100 text-surface-600 border border-surface-200">Vanilla</span>
        </div>
      </div>
      <div className="card-body">
        <Input field={form.$('name')} />
        <Input field={form.$('revenue')} />
        <Input field={form.$('assets')} />
        <div className="divider !my-4" />
        <div className="mb-2">
          <p className="form-label">Product Status:</p>
          <div className="space-y-1">
            <Radio field={form.$('productsStatus')} id="productsStatus-New" value="New" />
            <Radio field={form.$('productsStatus')} id="productsStatus-Used" value="Used" />
            <Radio field={form.$('productsStatus')} id="productsStatus-Refurbished" value="Refurbished" />
          </div>
        </div>
      </div>
      <div className="card-footer">
        <FormControls form={form} />
      </div>
    </div>
  </form>
));
`;export{e as default};