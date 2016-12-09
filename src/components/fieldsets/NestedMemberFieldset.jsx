import React from 'react';
import { observer } from 'mobx-react';

import NestedHobbyFieldset from '../fieldsets/NestedHobbyFieldset';
import FieldControl from '../controls/FieldControls';
import Input from '../inputs/SimpleInput';

export default observer(({ member }) => (
  <fieldset className="center">

    <Input field={member.$('firstname')} />
    <Input field={member.$('lastname')} />

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
