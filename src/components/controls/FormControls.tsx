import React from 'react';
import { observer } from 'mobx-react';
import { LoaderCircle, CircleDot } from 'lucide-react';
import Button from '../Button';

export default observer(({ form, controls = null }) => (
  <div className="flex flex-wrap items-center gap-3 mt-6 pt-4 border-t border-surface-200">
    {(!controls || controls.onSubmit) &&
      <Button
        type="submit"
        className="btn-primary"
        onClick={form.onSubmit}
        content={(form.submitting || form.validating)
          ? <b><LoaderCircle size={14} className="animate-spin" /></b>
          : <span className="inline-flex items-center gap-2"><CircleDot size={14} /> Submit</span>}
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
