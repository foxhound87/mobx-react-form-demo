import React from 'react';
import { observer } from 'mobx-react';
import FieldControl from '../controls/FieldControls';
import SimpleInput from '../inputs/SimpleInput';

export default observer(({ field }) => (
  <div className="flex items-start gap-2 mb-3 p-3 bg-surface-50 rounded-lg border border-surface-100">
    <div className="flex-1">
      <SimpleInput field={field} />
    </div>
    <div className="flex-shrink-0 pt-1">
      <FieldControl
        field={field}
        controls={{
          onDel: true,
          onClear: true,
          onReset: true,
        }}
      />
    </div>
  </div>
));
