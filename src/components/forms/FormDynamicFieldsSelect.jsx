import React from 'react';
import { observer } from 'mobx-react';
import { Creatable } from 'react-select';
import _ from 'lodash';

import FormControls from '../controls/FormControls';
import MaterialTextField from '../inputs/MaterialTextField';

const onChange = (fieldFactory, dynamicFields) => (values) => {
  const $values = _.chain(values)
    .mapValues('value')
    .values()
    .value();

  // use "extra" field prop to maintain current values
  const current = fieldFactory.get('extra') || [];
  const diff = _.difference($values, current);
  fieldFactory.set('extra', $values);

  // add dynamic fields
  diff.map((item) => {
    dynamicFields.add('', { key: item });
    dynamicFields.$(item).set('placeholder', item);
    return null;
  });

  // remove unwanted items
  const allDynamicFields = dynamicFields.map(field => field.name);
  const fieldsToDelete = _.remove(allDynamicFields, item => !_.includes($values, item));
  fieldsToDelete.map(field => dynamicFields.del(field));
  fieldFactory.set('value', values);
};

const options = [
  { value: 'foo', label: 'foo' },
  { value: 'bar', label: 'bar' },
  { value: 'baz', label: 'baz' },
];


export default observer(({ form }) => (
  <div className="container normal">
    <form>
      <h2>Dynamic Fields Select</h2>
      <h5>Select or type new options (then press enter) to add new fields:</h5>

      <Creatable
        multi
        allowCreate
        resetValue={[]}
        options={options}
        openOnFocus={false}
        placeholder="Type to add fields"
        noResultsText="Type to add fields"
        {...form.$('fieldFactory').bind({
          onChange: onChange(
            form.$('fieldFactory'),
            form.$('dynamicFields'),
          ),
        })}
      />

      <br /><br /><h4>{form.$('dynamicFields').label}</h4><hr />

      {form.$('dynamicFields').map(field =>
        <MaterialTextField
          key={field.name}
          field={field}
        />,
      )}

      <FormControls form={form} />
    </form>
  </div>
));
