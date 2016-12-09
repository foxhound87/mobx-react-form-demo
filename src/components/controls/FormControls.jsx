import React from 'react';
import { observer } from 'mobx-react';
import ReactTooltip from 'react-tooltip';

export default observer(({ form, controls = null }) => (
  <div>
    <ReactTooltip />

    <br />
    <br />

    <div className="ctrl">

      {(!controls || controls.onSubmit) &&
        <button type="submit" onClick={form.onSubmit}>
          <i className="fa fa-dot-circle-o" /> Submit
        </button>}

      {(!controls || controls.onClear) &&
        <button type="button" onClick={form.onClear}>
          <i className="fa fa-eraser" /> Clear
        </button>}

      {(!controls || controls.onReset) &&
        <button type="button" onClick={form.onReset}>
          <i className="fa fa-refresh" /> Reset
        </button>}

    </div>

    <p><i>{form.error}</i></p>

  </div>
));
