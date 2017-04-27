import React from 'react';
import { observer } from 'mobx-react';
import Button from '../Button';
import $ from '../../styles';

export default observer(({ form, controls = null }) => (
  <div className="tc tl-ns mt2">

    {(!controls || controls.onSubmit) &&
      <Button
        type="submit"
        className={$.ctrl}
        onClick={form.onSubmit}
        disabled={form.submitting}
        content={(form.submitting || form.validating)
          ? <b><i className="fa fa-spinner fa-spin" /></b>
          : <b><i className="fa fa-dot-circle-o" /> Submit</b>}
      />}

    {(!controls || controls.onClear) &&
      <Button
        text={'Clear'}
        icon="eraser"
        className={$.ctrl}
        onClick={form.onClear}
      />}

    {(!controls || controls.onReset) &&
      <Button
        text={'Reset'}
        icon="refresh"
        className={$.ctrl}
        onClick={form.onReset}
      />}

    <p><i>{form.error}</i></p>

  </div>
));
