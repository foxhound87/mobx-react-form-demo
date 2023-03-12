import React from 'react';
import { observer } from 'mobx-react';

import NestedMemberFieldset from './NestedMemberFieldset';
import FieldControl from '../controls/FieldControls';

export default observer(({ members }) => (
  <fieldset className="pa3">

    <div className="cf">
      <h5 className="fl mv0">
        {members.label}
      </h5>

      <div className="fr">
        <FieldControl
          field={members}
          // labels={false}
          controls={{
            onAdd: true,
            onClear: true,
            onReset: true,
          }}
        />
      </div>
    </div>

    {members.map(member =>
      <NestedMemberFieldset
        key={member.key}
        member={member}
      />)}

  </fieldset>
));
