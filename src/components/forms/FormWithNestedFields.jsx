import React from 'react';
import { observer } from 'mobx-react';

import ClubFieldset from '../fieldsets/ClubFieldset';
import NestedAllMembersFieldset from '../fieldsets/NestedAllMembersFieldset';
import FormControls from '../controls/FormControls';
import FieldControl from '../controls/FieldControls';

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

      <ClubFieldset club={form.$('club')} />

      <br />
      <br />

      {<NestedAllMembersFieldset members={form.$('members')} />}

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
