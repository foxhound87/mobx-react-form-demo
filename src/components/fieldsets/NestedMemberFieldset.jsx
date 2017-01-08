import React from 'react';
import { observer } from 'mobx-react';

import NestedHobbyFieldset from '../fieldsets/NestedHobbyFieldset';
import FieldControl from '../controls/FieldControls';
import MaterialTextField from '../inputs/MaterialTextField';
// import Input from '../inputs/SimpleInput';

export default observer(({ member }) => (
  <fieldset className="center">

    <MaterialTextField field={member.$('firstname')} />
    <MaterialTextField field={member.$('lastname')} />

    <br />
    <span>
      <FieldControl
        field={member}
        labels={false}
        controls={{
          onDel: true,
          onClear: true,
          onReset: true,
        }}
      />
    </span>

    <br />
    <br />

    <NestedHobbyFieldset hobbies={member.$('hobbies')} />

  </fieldset>
));
