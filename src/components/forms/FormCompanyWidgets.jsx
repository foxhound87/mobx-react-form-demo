import React from 'react';
import { observer } from 'mobx-react';

import Input from '../inputs/SimpleInput';
import WidgetDatePicker from '../inputs/WidgetDatePicker';
import WidgetDropdownList from '../inputs/WidgetDropdownList';
import WidgetMultiselect from '../inputs/WidgetMultiselect';
import FormControls from '../controls/FormControls';

const widgetProductsOptions = [
  'iPhone', 'Watch', 'iMac', 'Mac Pro', 'MacBook Air', 'MacBook Pro',
];

export default observer(({ form }) => (
  <div className="container normal">
    <form>
      <h2>Form Company</h2>
      <h4>React Widgets</h4>

      <Input field={form.$('name')} />
      <Input field={form.$('revenue')} />
      <Input field={form.$('assets')} />

      <WidgetDatePicker field={form.$('founded')} />

      <WidgetDropdownList
        field={form.$('productsDropdown')}
        options={widgetProductsOptions}
      />

      <WidgetMultiselect
        field={form.$('productsMultiselect')}
        options={widgetProductsOptions}
      />

      <FormControls form={form} />

    </form>
  </div>
));
