import React from 'react';
import { observer } from 'mobx-react';
import ReactTooltip from 'react-tooltip';
import _ from 'lodash';

const DataTip = observer(({ text, label, icon }) => (
  <i
    className={`fa fa-${icon}`}
    data-tip={!_.isInteger(_.parseInt(label))
      ? `${text} ${label}`
      : text}
  />
));

export default observer(({ field, labels = true, controls = {} }) => (
  <span>
    <ReactTooltip />

    {(!controls || controls.onAdd) &&
      <button type="button" onClick={field.onAdd}>
        <DataTip
          label={field.label}
          text={'Add'}
          icon="plus-circle"
        /> {labels && 'Add'}
      </button>}

    {(!controls || controls.onDel) &&
      <button type="button" onClick={field.onDel}>
        <DataTip
          label={field.label}
          text={'Remove'}
          icon="times-circle"
        /> {labels && 'Remove'}
      </button>}

    {(!controls || controls.onClear) &&
      <button type="button" onClick={field.onClear}>
        <DataTip
          label={field.label}
          text={'Clear'}
          icon="eraser"
        />
        {labels && 'Clear'}
      </button>}

    {(!controls || controls.onReset) &&
      <button type="button" onClick={field.onReset}>
        <DataTip
          label={field.label}
          text={'Reset'}
          icon="refresh"
        />
        {labels && 'Reset'}
      </button>}

    <br />

    {(!controls || controls.onSubmit) &&
      <div className="ctrl">
        <button
          type="submit"
          onClick={field.onSubmit}
          disabled={field.submitting}
        >
          {(field.submitting || field.validating)
            ? <b><i className="fa fa-spinner fa-spin" /></b>
            : <b><i className="fa fa-dot-circle-o" /> Submit</b>}
        </button>
      </div>}
  </span>
));
