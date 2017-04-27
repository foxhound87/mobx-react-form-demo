import React from 'react';
import { observer } from 'mobx-react';

import FieldControl from '../controls/FieldControls';
import MaterialTextField from '../inputs/MaterialTextField';

export default observer(({ club }) => (
  <fieldset className="tc">

    <div className="cf">
      <h5 className="fl mv0 ml2">
        {club.label}
      </h5>

      <div className="fr">
        <FieldControl
          field={club}
          labels={false}
          controls={{
            onClear: true,
            onReset: true,
          }}
        />
      </div>
    </div>

    <MaterialTextField field={club.$('name')} />
    <MaterialTextField field={club.$('city')} />

    <div>
      <FieldControl
        field={club}
        labels={false}
        controls={{
          onSubmit: true,
        }}
      />
    </div>

  </fieldset>
));
