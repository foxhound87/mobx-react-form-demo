import React from 'react';
import { observer } from 'mobx-react';
import FieldControl from '../controls/FieldControls';
import NestedHobbyInput from '../inputs/NestedHobbyInput';

export default observer(({ hobbies }) => (
  <div className="mb-3 pl-4 border-l-2 border-brand-200">
    <div className="flex items-center justify-between mb-2">
      <h4 className="text-sm font-medium text-surface-700">
        {[
          hobbies.container().$('firstname').value,
          hobbies.container().$('lastname').value,
          hobbies.label,
        ].filter(Boolean).join(' ')}
      </h4>
      <FieldControl
        field={hobbies}
        controls={{
          onAdd: true,
        }}
      />
    </div>

    {hobbies.map(hobby => (
      <NestedHobbyInput
        field={hobby}
        key={hobby.key}
      />
    ))}
  </div>
));
