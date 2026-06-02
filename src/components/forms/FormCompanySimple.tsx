import React from 'react';
import { observer } from 'mobx-react';
import Input from '../inputs/SimpleInput';
import Radio from '../inputs/SimpleRadio';
import Select from '../inputs/SimpleSelect';
import MultiSelect from '../inputs/ReactMultiSelect';
import FormControls from '../controls/FormControls';

export default observer(({ form }) => (
  <form>
    <div className="card">
      <div className="card-header">
        <h2 className="text-lg font-medium text-surface-900">Company Info</h2>
        <p className="text-sm text-surface-500 mt-0.5">Simple inputs, selects &amp; radio buttons</p>
      </div>
      <div className="card-body">
        <Input field={form.$('name')} />
        <Input field={form.$('revenue')} />
        <Input field={form.$('assets')} />
        <Select field={form.$('products')} />
        <MultiSelect field={form.$('productsMultiselect')} />
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
