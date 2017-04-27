import React from 'react';
import { observer } from 'mobx-react';
import Button from '../Button';
import $ from '../../styles';

export default observer(({ field, controls = null }) => (
  <span>

    {(!controls || controls.onSubmit) &&
      <Button
        type="submit"
        className={$.ctrl}
        onClick={field.onSubmit}
        disabled={field.submitting}
        content={(field.submitting || field.validating)
          ? <b><i className="fa fa-spinner fa-spin" /></b>
          : <b><i className="fa fa-dot-circle-o" /> Submit</b>}
      />}

    {(!controls || controls.onAdd) &&
      <Button
        onlyIcon
        text={'Add'}
        type="button"
        icon="plus-circle"
        label={field.label}
        onClick={field.onAdd}
        className={$.fctrl}
      />}

    {(!controls || controls.onDel) &&
      <Button
        onlyIcon
        text={'Delete'}
        type="button"
        icon="times-circle"
        label={field.label}
        onClick={field.onDel}
        className={$.fctrl}
      />}


    {(!controls || controls.onClear) &&
      <Button
        onlyIcon
        text={'Clear'}
        type="button"
        icon="eraser"
        label={field.label}
        onClick={field.onClear}
        className={$.fctrl}
      />}


    {(!controls || controls.onReset) &&
      <Button
        onlyIcon
        text={'Reset'}
        type="button"
        icon="refresh"
        label={field.label}
        onClick={field.onReset}
        className={$.fctrl}
      />}

  </span>
));
