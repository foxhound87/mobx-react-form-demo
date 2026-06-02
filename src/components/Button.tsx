import React, { MouseEventHandler } from 'react';
import { observer } from 'mobx-react';
import _ from 'lodash';
import { Tooltip } from '@mui/material';

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
}: {
  onlyIcon?: boolean
  disabled?: boolean,
  content?: JSX.Element,
  type?: "button" | "submit" | "reset",
  className?: string,
  onClick?: MouseEventHandler<HTMLButtonElement>,
  text?: string,
  label?: string,
  icon?: string,
}) => (
  <Tooltip title={checkLabel(text, label)} placement="top">
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={className || 'btn-primary'}
    >
      {content || (
        <span className="inline-flex items-center gap-1.5">
          {icon && <i className={`fa fa-${icon}`} />}
          {!onlyIcon && <span>{checkLabel(text, label)}</span>}
        </span>
      )}
    </button>
  </Tooltip>
));
