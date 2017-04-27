import React from 'react';
import { observer } from 'mobx-react';

import FieldControl from '../controls/FieldControls';
import NestedHobbyInput from '../inputs/NestedHobbyInput';

export default observer(({ hobbies }) => (
  <fieldset>

    <div className="cf">
      <h5 className="fl mv0 ml2">
        {[
          hobbies.container().$('firstname').value,
          hobbies.container().$('lastname').value,
          hobbies.label,
        ].join(' ')}
      </h5>
      <div className="fr">
        <FieldControl
          field={hobbies}
          labels={false}
          controls={{
            onAdd: true,
          }}
        />
      </div>
    </div>

    {hobbies.map(hobby =>
      <NestedHobbyInput
        field={hobby}
        key={hobby.key}
      />)}

  </fieldset>
));
