import React from 'react';
import { observer } from 'mobx-react';
import _ from 'lodash';

const DataTip = observer(({ text, field, icon }) => (
  <i
    className={`fa fa-${icon}`}
    data-tip={!_.isInteger(_.parseInt(field.label))
      ? `${text} ${field.label}`
      : text}
  />
));

export default observer(({ field, labels = true, options = {} }) => (
  <span>
    {!options || options.onAdd &&
      <button type="button" onClick={field.onAdd}>
        <DataTip
          field={field}
          text={'Add'}
          icon="plus-circle"
        /> {labels && 'Add'}
      </button>}
    {!options || options.onDel &&
      <button type="button" onClick={field.onDel}>
        <DataTip
          field={field}
          text={'Remove'}
          icon="times-circle"
        /> {labels && 'Remove'}
      </button>}
    {!options || options.onSubmit &&
      <button type="button" onClick={field.onSubmit}>
        <DataTip
          field={field}
          text={'Submit'}
          icon="times-circle"
        /> {labels && 'Submit'}
      </button>}
    {!options || options.onClear &&
      <button type="button" onClick={field.onClear}>
        <DataTip
          field={field}
          text={'Clear'}
          icon="eraser" />
        {labels && 'Clear'}
      </button>}
    {!options || options.onReset &&
      <button type="button" onClick={field.onReset}>
        <DataTip
          field={field}
          text={'Reset'}
          icon="refresh" />
        {labels && 'Reset'}
      </button>}
  </span>
));
