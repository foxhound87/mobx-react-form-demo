import React from 'react';
import { observer } from 'mobx-react';

import NestedMemberInput from '../inputs/NestedMemberInput';

export default observer(({ field }) => (
  <div>

    <div className="clearfix">
      <div className="left">
        <b>{field.label}</b>
      </div>
      <div className="right">
        <button type="button" onClick={field.onClear}>
          <i className="fa fa-eraser" data-tip="Clear All Members" />
        </button>
        <button type="button" onClick={field.onReset}>
          <i className="fa fa-refresh" data-tip="Reset All Members" />
        </button>
        <button type="button" onClick={field.onAdd}>
          <i className="fa fa-plus-circle" data-tip="Add New Member" />
        </button>
      </div>
    </div>
    <hr />

    {field.map(member => member &&
      <NestedMemberInput key={member.key} field={member} />)}

  </div>
));
