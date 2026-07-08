var e=`import React from 'react';
import { observer } from 'mobx-react';
import ClubFieldset from '../fieldsets/ClubFieldset';
import NestedAllMembersFieldset from '../fieldsets/NestedAllMembersFieldset';
import FormControls from '../controls/FormControls';

export default observer(({ form }) => (
  <form>
    <div className="card">
      <div className="card-header">
        <h2 className="text-lg font-medium text-surface-900">Nested Fields</h2>
        <p className="text-sm text-surface-500 mt-0.5">Complex nested field structures</p>
      </div>
      <div className="card-body">
        <ClubFieldset club={form.$('club')} />
        {form.has('members') && (
          <NestedAllMembersFieldset members={form.$('members')} />
        )}
      </div>
      <div className="card-footer">
        <FormControls
          form={form}
          controls={{
            onSubmit: true,
            onReset: true,
            onClear: true,
          }}
        />
      </div>
    </div>
  </form>
));
`;export{e as default};