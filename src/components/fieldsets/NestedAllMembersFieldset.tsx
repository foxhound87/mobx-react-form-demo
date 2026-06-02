import React from 'react';
import { observer } from 'mobx-react';
import NestedMemberFieldset from './NestedMemberFieldset';
import FieldControl from '../controls/FieldControls';

export default observer(({ members }) => (
  <div className="mb-6">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-base font-medium text-surface-900">
        {members.label}
      </h3>
      <FieldControl
        field={members}
        controls={{
          onAdd: true,
          onClear: true,
          onReset: true,
        }}
      />
    </div>

    {members.map(member => (
      <NestedMemberFieldset
        key={member.key}
        member={member}
      />
    ))}
  </div>
));
