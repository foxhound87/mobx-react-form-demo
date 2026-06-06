import React, { MouseEventHandler } from 'react';
import { observer } from 'mobx-react';
import _ from 'lodash';
import { Tooltip } from '@mui/material';
import { Eraser, RefreshCw, PlusCircle, XCircle, CheckCircle } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  eraser: Eraser,
  refresh: RefreshCw,
  'plus-circle': PlusCircle,
  'times-circle': XCircle,
  'check-circle': CheckCircle,
};

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
}) => {
  const IconComponent = icon ? iconMap[icon] : null;
  return (
    <Tooltip title={checkLabel(text, label)} placement="top">
      <button
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={className || 'btn-primary'}
      >
        {content || (
          <span className="inline-flex items-center gap-1.5">
            {IconComponent && <IconComponent size={14} />}
            {!onlyIcon && <span>{checkLabel(text, label)}</span>}
          </span>
        )}
      </button>
    </Tooltip>
  );
});
