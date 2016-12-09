import React from 'react';
import { observer } from 'mobx-react';

import Input from './SimpleInput';
import NestedHobbyFieldset from '../fieldsets/NestedHobbyFieldset';
import FieldControl from '../controls/FieldControls';

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
