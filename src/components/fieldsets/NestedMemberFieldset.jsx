import React from 'react';
import { observer } from 'mobx-react';

import NestedHobbyFieldset from '../fieldsets/NestedHobbyFieldset';
import FieldControl from '../controls/FieldControls';
import Input from '../inputs/SimpleInput';

export default observer(({ field }) => (
  <fieldset className="center">

    <Input field={field.$('firstname')} />
    <Input field={field.$('lastname')} />

    <br />
    <span>
      <FieldControl
        field={field}
        labels={false}
        options={{
          onDel: true,
          onClear: true,
          onReset: true,
        }}
      />
    </span>

    <br />
    <br />

    <NestedHobbyFieldset hobbies={field.$('hobbies')} />

  </fieldset>
));
