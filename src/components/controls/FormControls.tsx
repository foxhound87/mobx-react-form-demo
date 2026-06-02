import React from 'react';
import { observer } from 'mobx-react';
import Button from '../Button';

export default observer(({ form, controls = null }) => (
  <div className="flex flex-wrap items-center gap-3 mt-6 pt-4 border-t border-surface-200">
    {(!controls || controls.onSubmit) &&
      <Button
        type="submit"
        className="btn-primary"
        onClick={form.onSubmit}
        content={(form.submitting || form.validating)
          ? <b><i className="fa fa-spinner fa-spin" /></b>
          : <span className="inline-flex items-center gap-2"><i className="fa fa-dot-circle-o" /> Submit</span>}
      />}

    {(!controls || controls.onClear) &&
      <Button
        text="Clear"
        icon="eraser"
        className="btn-ghost"
        onClick={form.onClear}
      />}

    {(!controls || controls.onReset) &&
      <Button
        text="Reset"
        icon="refresh"
        className="btn-ghost"
        onClick={form.onReset}
      />}

    {form.error && (
      <p className="text-xs text-red-500 mt-2 w-full">{form.error}</p>
    )}
  </div>
));
