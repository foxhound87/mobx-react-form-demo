import React from 'react';
import { observer } from 'mobx-react';

import FieldControl from '../controls/FieldControls';
import NestedHobbyInput from '../inputs/NestedHobbyInput';

export default observer(({ hobbies }) => (
  <fieldset>

    <div className="clearfix">
      <div className="left">{hobbies.label}</div>
      <div className="right">
        <FieldControl
          field={hobbies}
          labels={false}
          controls={{
            onAdd: true,
          }}
        />
      </div>
    </div>
    <hr />

    {hobbies.map(hobby =>
      <NestedHobbyInput
        field={hobby}
        key={hobby.key}
      />)}

  </fieldset>
));
