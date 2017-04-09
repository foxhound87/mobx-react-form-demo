import React from 'react';
import { observer } from 'mobx-react';

import NestedMemberFieldset from './NestedMemberFieldset';
import FieldControl from '../controls/FieldControls';

export default observer(({ members }) => (
  <fieldset>

    <div className="clearfix">
      <div className="left">
        <b>{members.label}</b>
      </div>

      <div className="right">
        <FieldControl
          field={members}
          labels={false}
          controls={{
            onAdd: true,
            onClear: true,
            onReset: true,
          }}
        />
      </div>
    </div>

    <hr />

    {members.map(member =>
      <NestedMemberFieldset
        key={member.key}
        member={member}
      />)}

  </fieldset>
));
