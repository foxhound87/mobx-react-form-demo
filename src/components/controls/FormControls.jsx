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
        <button
          type="submit"
          onClick={form.onSubmit}
          disabled={form.submitting}
        >
          {(form.submitting || form.validating)
            ? <b><i className="fa fa-spinner fa-spin" /></b>
            : <b><i className="fa fa-dot-circle-o" /> Submit</b>}
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
