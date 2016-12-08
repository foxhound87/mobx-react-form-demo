import React from 'react';
import { observer } from 'mobx-react';
import ReactTooltip from 'react-tooltip';

import Input from './inputs/SimpleInput';
import NestedMembersFieldset from './fieldsets/NestedMembersFieldset';
import FormControls from './controls/FormControls';

export default observer(({ form }) => (
  <div className="container normal">
    <ReactTooltip />
    <form>
      <h2>Nested Fields</h2>

      <div className="clearfix">
        <div className="left">
          <b>{form.$('club').label}</b>
        </div>
        <div className="right">
          <button type="button" onClick={form.$('club').onClear}>
            <i className="fa fa-eraser" data-tip="Clear Club" />
          </button>
          <button type="button" onClick={form.$('club').onReset}>
            <i className="fa fa-refresh" data-tip="Reset Club" />
          </button>
        </div>
      </div>
      <hr />

      <fieldset className="center">
        <Input field={form.$('club.name')} />
        <Input field={form.$('club.city')} />
        <br />
        <br />
        <div>
          <button type="button" onClick={form.$('club').onClear}>
            <i className="fa fa-eraser" data-tip="Clear Club" />
          </button>
          <button type="button" onClick={form.$('club').onReset}>
            <i className="fa fa-refresh" data-tip="Reset Club" />
          </button>
        </div>
      </fieldset>

      <br />
      <br />

      {<NestedMembersFieldset field={form.$('members')} />}

      <FormControls form={form} />

    </form>
  </div>
));
