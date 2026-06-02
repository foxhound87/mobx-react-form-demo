import React from 'react';
import { observer } from 'mobx-react';
import Input from '../inputs/SimpleInput';
import WidgetDatePicker from '../inputs/WidgetDatePicker';
import WidgetDropdownList from '../inputs/WidgetDropdownList';
import WidgetMultiselect from '../inputs/WidgetMultiselect';
import FormControls from '../controls/FormControls';

export default observer(({ form }) => (
  <form>
    <div className="card">
      <div className="card-header">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-medium text-surface-900">Company Info</h2>
            <p className="text-sm text-surface-500 mt-0.5">React Widgets components</p>
          </div>
          <span className="badge bg-surface-100 text-surface-600 border border-surface-200">React Widgets</span>
        </div>
      </div>
      <div className="card-body">
        <Input field={form.$('name')} />
        <Input field={form.$('revenue')} />
        <Input field={form.$('assets')} />
        <WidgetDatePicker field={form.$('founded')} />
        <WidgetDropdownList field={form.$('productsDropdown')} />
        <WidgetMultiselect field={form.$('productsMultiselect')} />
      </div>
      <div className="card-footer">
        <FormControls form={form} />
      </div>
    </div>
  </form>
));
