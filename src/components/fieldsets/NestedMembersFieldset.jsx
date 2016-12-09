import React from 'react';
import { observer } from 'mobx-react';

import NestedMemberInput from '../inputs/NestedMemberInput';
import FieldControl from '../controls/FieldControls';

export default observer(({ field }) => (
  <div>

    <div className="clearfix">
      <div className="left">
        <b>{field.label}</b>
      </div>

      <div className="right">
        <FieldControl
          field={field}
          labels={false}
          options={{
            onAdd: true,
            onClear: true,
            onReset: true,
          }}
        />
      </div>
    </div>
    <hr />

    {field.map(member => member &&
      <NestedMemberInput key={member.key} field={member} />)}

  </div>
));
