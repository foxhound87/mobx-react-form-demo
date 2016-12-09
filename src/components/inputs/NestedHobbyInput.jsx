import React from 'react';
import { observer } from 'mobx-react';

import FieldControl from '../controls/FieldControls';

export default observer(({ field }) => (
  <div>

    <span>
      <div>
        <i>{field.error}</i>
      </div>
      <input
        type="text"
        placeholder="hobby"
        name={field.name}
        value={field.value}
        onChange={field.sync}
      />
    </span>

    <span>
      <FieldControl
        field={field}
        labels={false}
        options={{
          onSubmit: true,
          onClear: true,
          onReset: true,
        }}
      />
    </span>

  </div>
));
