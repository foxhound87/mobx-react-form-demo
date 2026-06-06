import React from 'react';
import { observer } from 'mobx-react';
import { LoaderCircle, CircleDot } from 'lucide-react';
import Button from '../Button';

export default observer(({ field, controls = null }) => (
  <span className="inline-flex items-center gap-1">
    {(!controls || controls.onSubmit) &&
      <Button
        type="submit"
        className="btn-primary !px-3 !py-1.5 !text-xs"
        onClick={field.onSubmit}
        disabled={field.submitting}
        content={(field.submitting || field.validating)
          ? <b><LoaderCircle size={14} className="animate-spin" /></b>
          : <span className="inline-flex items-center gap-1"><CircleDot size={14} /> Submit</span>}
      />}

    {(!controls || controls.onAdd) &&
      <Button
        onlyIcon
        text="Add"
        type="button"
        icon="plus-circle"
        label={field.label}
        onClick={field.onAdd}
        className="btn-ghost !px-2 !py-1.5 !text-xs"
      />}

    {(!controls || controls.onDel) &&
      <Button
        onlyIcon
        text="Delete"
        type="button"
        icon="times-circle"
        label={field.label}
        onClick={field.onDel}
        className="btn-ghost !px-2 !py-1.5 !text-xs text-red-500 hover:text-red-600"
      />}

    {(!controls || controls.onClear) &&
      <Button
        onlyIcon
        text="Clear"
        type="button"
        icon="eraser"
        label={field.label}
        onClick={field.onClear}
        className="btn-ghost !px-2 !py-1.5 !text-xs"
      />}

    {(!controls || controls.onReset) &&
      <Button
        onlyIcon
        text="Reset"
        type="button"
        icon="refresh"
        label={field.label}
        onClick={field.onReset}
        className="btn-ghost !px-2 !py-1.5 !text-xs"
      />}
  </span>
));
