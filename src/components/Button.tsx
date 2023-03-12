import React, { Component, MouseEventHandler } from 'react';
import { observer } from 'mobx-react';
// import ReactTooltip from 'react-tooltip';
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
      className={className}
    >

      {content ||
        <span>
          <i className={`fa fa-${icon}`} />
          {!onlyIcon && <b className="dn di-ns"> {checkLabel(text, label)}</b>}
        </span>}
    </button>
  </Tooltip>
));
