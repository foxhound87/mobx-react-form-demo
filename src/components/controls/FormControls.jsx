import React from 'react';
import { observer } from 'mobx-react';

export default observer(({ form, options = {} }) => (
  <div>

    <br />
    <br />

    <div className="ctrl">
      {!options || options.onSubmit &&
        <button type="submit" onClick={form.onSubmit}>
          <i className="fa fa-dot-circle-o" /> Submit
        </button>}
      {!options || options.onClear &&
        <button type="button" onClick={form.onClear}>
          <i className="fa fa-eraser" /> Clear
        </button>}
      {!options || options.onReset &&
        <button type="button" onClick={form.onReset}>
          <i className="fa fa-refresh" /> Reset
        </button>}
    </div>

    <p><i>{form.error}</i></p>

  </div>
));
