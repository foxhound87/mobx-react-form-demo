import React from 'react';
import { observer } from 'mobx-react';

import Input from './SimpleInput';
import NestedHobbyFieldset from '../fieldsets/NestedHobbyFieldset';

export default observer(({ field }) => (
  <fieldset className="center">

    <Input field={field.$('firstname')} />
    <Input field={field.$('lastname')} />

    <br />
    <span>
      <button type="button" onClick={field.onDel}>
        <i className="fa fa-times-circle" data-tip="Remove Member" />
      </button>
      <button type="button" onClick={field.onClear}>
        <i className="fa fa-eraser" data-tip="Clear Member" />
      </button>
      <button type="button" onClick={field.onReset}>
        <i className="fa fa-refresh" data-tip="Reset Member" />
      </button>
    </span>

    <br />
    <br />

    <NestedHobbyFieldset hobbies={field.$('hobbies')} />

  </fieldset>
));
