import React from 'react';
import { observer } from 'mobx-react';

export default observer(({ form }) => (
  <div>

    <br />
    <br />

    <div className="ctrl">
      <button type="submit" onClick={form.onSubmit}>
        <i className="fa fa-dot-circle-o" /> Submit
      </button>
      <button type="button" onClick={form.onClear}>
        <i className="fa fa-eraser" /> Clear
      </button>
      <button type="button" onClick={form.onReset}>
        <i className="fa fa-refresh" /> Reset
      </button>
    </div>

    <p><i>{form.error}</i></p>

  </div>
));
