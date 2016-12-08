import React from 'react';
import { observer } from 'mobx-react';

import NestedHobbyInput from '../inputs/NestedHobbyInput';

export default observer(({ hobbies }) => (
  <fieldset>

    <div className="clearfix">
      <div className="left">{hobbies.label}</div>
      <div className="right">
        <button type="button" onClick={hobbies.onAdd}>
          <i className="fa fa-plus-circle" data-tip="Add Hobby" />
        </button>
      </div>
    </div>
    <hr />

    {hobbies.map(hobby => hobby &&
      <NestedHobbyInput field={hobby} key={hobby.key} />)}

  </fieldset>
));
