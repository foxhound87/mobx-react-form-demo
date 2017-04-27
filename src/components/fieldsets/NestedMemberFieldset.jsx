import React from 'react';
import { observer } from 'mobx-react';

import NestedHobbyFieldset from '../fieldsets/NestedHobbyFieldset';
import FieldControl from '../controls/FieldControls';
import MaterialTextField from '../inputs/MaterialTextField';

export default observer(({ member }) => (
  <fieldset className="tc">

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

    {member.has('hobbies') &&
      <NestedHobbyFieldset
        hobbies={member.$('hobbies')}
      />}

    <FieldControl
      field={member}
      controls={{ onSubmit: true }}
    />

  </fieldset>
));
