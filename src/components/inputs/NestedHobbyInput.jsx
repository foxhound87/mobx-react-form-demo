import React from 'react';
import { observer } from 'mobx-react';

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
      <button type="button" onClick={field.onDel}>
        <i className="fa fa-times-circle" data-tip="Remove" />
      </button>
      <button type="button" onClick={field.onClear}>
        <i className="fa fa-eraser" data-tip="Clear" />
      </button>
      <button type="button" onClick={field.onReset}>
        <i className="fa fa-refresh" data-tip="Reset" />
      </button>
    </span>

  </div>
));
