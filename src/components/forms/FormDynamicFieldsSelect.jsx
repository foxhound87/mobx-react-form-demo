import React from 'react';
import { observer } from 'mobx-react';
import { Creatable } from 'react-select';

import FormControls from '../controls/FormControls';
import MaterialTextField from '../inputs/MaterialTextField';

export default observer(({ form }) => (
  <form>
    <h2 className="light-red">Dynamic Fields Select</h2>
    <h5>Select or type new options (then press enter) to add new fields:</h5>

    <Creatable
      multi
      allowCreate
      resetValue={[]}
      options={form.$('fieldFactory').extra}
      openOnFocus={false}
      placeholder="Type to add fields"
      noResultsText="Type to add fields"
      {...form.$('fieldFactory').bind()}
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
));
