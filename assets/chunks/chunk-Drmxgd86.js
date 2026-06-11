var e=`import React from 'react';
import { observer } from 'mobx-react';
import MultiSelect from '../inputs/ReactMultiSelect';
import FormControls from '../controls/FormControls';

export default observer(({ form }) => (
  <form>
    <div className="card">
      <div className="card-header">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-medium text-surface-900">Multiselect</h2>
            <p className="text-sm text-surface-500 mt-0.5">React-Select with multi option</p>
          </div>
          <span className="badge bg-amber-50 text-amber-700 border border-amber-200">react-select</span>
        </div>
      </div>
      <div className="card-body">
        <MultiSelect field={form.$('products')} />
      </div>
      <div className="card-footer">
        <FormControls form={form} />
      </div>
    </div>
  </form>
));
`;export{e as default};