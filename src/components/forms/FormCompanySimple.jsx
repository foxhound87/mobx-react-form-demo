import React from 'react';
import { observer } from 'mobx-react';

import Input from '../inputs/SimpleInput';
import Select from '../inputs/SimpleSelect';
import MultiSelect from '../inputs/ReactMultiSelect';
import FormControls from '../controls/FormControls';

export default observer(({ form }) => (
  <div className="container normal">
    <form>
      <h2>Form Company</h2>

      <Input field={form.$('name')} />
      <Input field={form.$('revenue')} />
      <Input field={form.$('assets')} />
      <Select field={form.$('products')} />
      <MultiSelect field={form.$('productsMultiselect')} />
      <FormControls form={form} />
    </form>
  </div>
));
