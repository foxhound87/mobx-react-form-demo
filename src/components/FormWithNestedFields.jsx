import React from 'react';
import { observer } from 'mobx-react';

import Input from './inputs/SimpleInput';
import NestedMembersFieldset from './fieldsets/NestedMembersFieldset';
import FormControls from './controls/FormControls';
import FieldControl from './controls/FieldControls';

export default observer(({ form }) => (
  <div className="container normal">
    <form>
      <h2>Nested Fields</h2>

      <div className="clearfix">
        <div className="left">
          <b>{form.$('club').label}</b>
        </div>

        <div className="right">
          <FieldControl
            field={form.$('club')}
            labels={false}
            options={{
              onClear: true,
              onReset: true,
            }}
          />
        </div>
      </div>
      <hr />

      <fieldset className="center">
        <Input field={form.$('club.name')} />
        <Input field={form.$('club.city')} />
        <br />
        <br />
        <div>

          <FieldControl
            field={form.$('club')}
            labels={false}
            options={{
              onSubmit: false,
              onClear: true,
              onReset: true,
            }}
          />

        </div>
      </fieldset>

      <br />
      <br />

      {<NestedMembersFieldset field={form.$('members')} />}

      <FormControls
        form={form}
        options={{
          onSubmit: true,
          onReset: true,
          onClear: true,
        }}
      />

    </form>
  </div>
));
