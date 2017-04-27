import React from 'react';
import { observer } from 'mobx-react';
import ReactTooltip from 'react-tooltip';
import _ from 'lodash';

const checkLabel = (text, label) =>
  _.isInteger(_.parseInt(label)) || _.isNil(label)
    ? text : `${text} ${label}`;

export default observer(({
  onlyIcon = false,
  disabled = false,
  content = null,
  type = 'button',
  className,
  onClick,
  text,
  label,
  icon,
}) => (
  <button
    type={type}
    disabled={disabled}
    onClick={onClick}
    className={className}
    data-tip={checkLabel(text, label)}
  >
    <ReactTooltip />
    {content ||
      <span>
        <i className={`fa fa-${icon}`} />
        {!onlyIcon && <b className="dn di-ns"> {checkLabel(text, label)}</b>}
      </span>}
  </button>
));
