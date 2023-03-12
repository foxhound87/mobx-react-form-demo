import React from 'react';
import { observer } from 'mobx-react';

import ClubFieldset from '../fieldsets/ClubFieldset';
import NestedAllMembersFieldset from '../fieldsets/NestedAllMembersFieldset';
import FormControls from '../controls/FormControls';

export default observer(({ form }) => (
  <form>
    <h2 className="light-red">Nested Fields</h2>

    <ClubFieldset
      club={form.$('club')}
    />

    <br />

    {form.has('members') &&
      <NestedAllMembersFieldset
        members={form.$('members')}
      />}

    <FormControls
      form={form}
      controls={{
        onSubmit: true,
        onReset: true,
        onClear: true,
      }}
    />

  </form>
));
