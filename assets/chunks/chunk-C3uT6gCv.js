var e=`import React from 'react';
import { observer } from 'mobx-react';
import HeadlessListbox from '../inputs/HeadlessListbox';
import HeadlessCombobox from '../inputs/HeadlessCombobox';
import HeadlessSwitch from '../inputs/HeadlessSwitch';
import HeadlessRadioGroup from '../inputs/HeadlessRadioGroup';
import FormControls from '../controls/FormControls';

export default observer(({ form }) => (
  <form>
    <div className="card">
      <div className="card-header">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-medium text-surface-900">Headless UI</h2>
            <p className="text-sm text-surface-500 mt-0.5">
              Listbox, Combobox, Switch &amp; Radio Group
            </p>
          </div>
          <span className="badge bg-surface-100 text-surface-600 border border-surface-200">
            @headlessui/react
          </span>
        </div>
      </div>
      <div className="card-body">
        <HeadlessListbox field={form.$('framework')} />
        <HeadlessCombobox field={form.$('language')} />
        <div className="divider !my-4" />
        <HeadlessSwitch field={form.$('notifications')} />
        <div className="divider !my-4" />
        <HeadlessRadioGroup field={form.$('preferredNotif')} />
      </div>
      <div className="card-footer">
        <FormControls form={form} />
      </div>
    </div>
  </form>
));
`;export{e as default};