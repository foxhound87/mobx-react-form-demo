import React from 'react';
import { observer } from 'mobx-react';
import FieldControl from '../controls/FieldControls';
import MaterialTextField from '../inputs/MaterialTextField';

export default observer(({ club }) => (
  <div className="card mb-6">
    <div className="card-header flex items-center justify-between">
      <h3 className="text-base font-medium text-surface-900">{club.label}</h3>
      <FieldControl
        field={club}
        controls={{
          onClear: true,
          onReset: true,
        }}
      />
    </div>
    <div className="card-body">
      <MaterialTextField field={club.$('name')} />
      <MaterialTextField field={club.$('city')} />
    </div>
    <div className="card-footer flex justify-end">
      <FieldControl
        field={club}
        controls={{
          onSubmit: true,
        }}
      />
    </div>
  </div>
));
