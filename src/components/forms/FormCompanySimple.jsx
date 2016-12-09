import React from 'react';
import { observer } from 'mobx-react';

import Input from '../inputs/SimpleInput';
import Select from '../inputs/SimpleSelect';
import MultiSelect from '../inputs/ReactMultiSelect';
import FormControls from '../controls/FormControls';

const simpleProductsOptions = [
  'iPhone', 'Watch', 'iMac', 'Mac Pro', 'MacBook Air', 'MacBook Pro',
];

const multiProductsOptions = [
  { value: 'iphone', label: 'iPhone' },
  { value: 'watch', label: 'Watch' },
  { value: 'imac', label: 'iMac' },
  { value: 'macpro', label: 'Mac Pro' },
  { value: 'macbookair', label: 'MacBook Air' },
  { value: 'macbookpro', label: 'MacBook Pro' },
];

export default observer(({ form }) => (
  <div className="container normal">
    <form>
      <h2>Form Company</h2>

      <Input field={form.$('name')} />
      <Input field={form.$('revenue')} />
      <Input field={form.$('assets')} />

      <Select
        field={form.$('products')}
        options={simpleProductsOptions}
      />

      <MultiSelect
        field={form.$('productsMultiselect')}
        options={multiProductsOptions}
      />

      <FormControls form={form} />

    </form>
  </div>
));
