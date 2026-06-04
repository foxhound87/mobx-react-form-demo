import React from 'react';
import { observer } from 'mobx-react';
import NestedHobbyFieldset from '../fieldsets/NestedHobbyFieldset';
import FieldControl from '../controls/FieldControls';
import SimpleInput from '../inputs/SimpleInput';

export default observer(({ member }) => (
  <div className="card mb-4">
    <div className="card-body">
      <SimpleInput field={member.$('firstname')} />
      <SimpleInput field={member.$('lastname')} />

      <div className="flex items-center gap-1 mt-2 mb-3">
        <FieldControl
          field={member}
          controls={{
            onDel: true,
            onClear: true,
            onReset: true,
          }}
        />
      </div>

      {member.has('hobbies') &&
        <NestedHobbyFieldset
          hobbies={member.$('hobbies')}
        />}

      <div className="mt-3">
        <FieldControl
          field={member}
          controls={{ onSubmit: true }}
        />
      </div>
    </div>
  </div>
));
