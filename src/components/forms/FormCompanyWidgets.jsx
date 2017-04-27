import React from 'react';
import { observer } from 'mobx-react';

import Input from '../inputs/SimpleInput';
import WidgetDatePicker from '../inputs/WidgetDatePicker';
import WidgetDropdownList from '../inputs/WidgetDropdownList';
import WidgetMultiselect from '../inputs/WidgetMultiselect';
import FormControls from '../controls/FormControls';

export default observer(({ form }) => (
  <form>
    <h2 className="light-red">Form Company</h2>
    <h4>React Widgets</h4>

    <Input field={form.$('name')} />
    <Input field={form.$('revenue')} />
    <Input field={form.$('assets')} />
    <WidgetDatePicker field={form.$('founded')} />
    <WidgetDropdownList field={form.$('productsDropdown')} />
    <WidgetMultiselect field={form.$('productsMultiselect')} />
    <FormControls form={form} />
  </form>
));
