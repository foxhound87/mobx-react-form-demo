import React from 'react';
import { observer } from 'mobx-react';

import Input from '../inputs/SimpleInput';
import Radio from '../inputs/SimpleRadio';
import Select from '../inputs/SimpleSelect';
import MultiSelect from '../inputs/ReactMultiSelect';
import FormControls from '../controls/FormControls';

export default observer(({ form }) => (
  <form>
    <h2 className="light-red">Form Company</h2>

    <Input field={form.$('name')} />
    <Input field={form.$('revenue')} />
    <Input field={form.$('assets')} />
    <Select field={form.$('products')} />
    <MultiSelect field={form.$('productsMultiselect')} />
    <h5>Product Status:</h5>
    <Radio field={form.$('productsStatus')} id="productsStatus-New" value="New" />
    <Radio field={form.$('productsStatus')} id="productsStatus-Used" value="Used" />
    <Radio field={form.$('productsStatus')} id="productsStatus-Refurbished" value="Refurbished" />
    <FormControls form={form} />
  </form>
));
