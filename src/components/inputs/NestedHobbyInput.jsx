import React from 'react';
import { observer } from 'mobx-react';

import FieldControl from '../controls/FieldControls';
import MaterialTextField from '../inputs/MaterialTextField';

export default observer(({ field }) => (
  <div>

    <span>
      <MaterialTextField
        field={field}
        placeholder="Insert Hobby"
      />
    </span>

    <span>
      <FieldControl
        field={field}
        labels={false}
        controls={{
          onDel: true,
          onClear: true,
          onReset: true,
        }}
      />
    </span>

  </div>
));
