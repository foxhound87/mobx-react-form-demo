import React from 'react';
import { observer } from 'mobx-react';
import AriaTextField from '../inputs/AriaTextField';
import AriaSelect from '../inputs/AriaSelect';
import AriaComboBox from '../inputs/AriaComboBox';
import AriaSlider from '../inputs/AriaSlider';
import AriaSwitch from '../inputs/AriaSwitch';
import FormControls from '../controls/FormControls';

export default observer(({ form }) => (
  <form>
    <div className="card">
      <div className="card-header">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-medium text-surface-900">React Aria</h2>
            <p className="text-sm text-surface-500 mt-0.5">
              Select, ComboBox, Slider, Switch &amp; TextField
            </p>
          </div>
          <span className="badge bg-purple-50 text-purple-600 border border-purple-200">
            react-aria-components
          </span>
        </div>
      </div>
      <div className="card-body">
        <AriaTextField field={form.$('displayName')} />
        <div className="divider !my-4" />
        <AriaSelect field={form.$('role')} />
        <div className="divider !my-4" />
        <AriaComboBox field={form.$('editor')} />
        <div className="divider !my-4" />
        <AriaSlider field={form.$('experience')} min={0} max={20} step={1} />
        <div className="divider !my-4" />
        <AriaSwitch field={form.$('darkMode')} />
      </div>
      <div className="card-footer">
        <FormControls form={form} />
      </div>
    </div>
  </form>
));
