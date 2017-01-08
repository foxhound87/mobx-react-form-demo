import React from 'react';
import { observer } from 'mobx-react';

import ChipInput from 'material-ui-chip-input'
import FormControls from '../controls/FormControls';

const onAdd = (form, chip) => {
  const value = form.$('categories').value;
  console.log('values', [...value, chip]);
  form.$('categories').sync([...value, chip]);
};

export default observer(({ form }) => (
  <div className="container normal">
    <form>
      <h2>Array Of Objects</h2>
      <ChipInput
        newChipKeyCodes={[32]}
        value={form.$('categories').value}
        onRequestAdd={(chip) => onAdd(form, chip)}
        onRequestDelete={(chip) => onDel(form, chip)}
      />
      <FormControls form={form} />
    </form>
  </div>
));
