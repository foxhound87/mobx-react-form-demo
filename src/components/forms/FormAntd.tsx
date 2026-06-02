import React from 'react';
import { observer } from 'mobx-react';
import AntdInput from '../inputs/AntdInput';
import AntdSelect from '../inputs/AntdSelect';
import AntdDatePicker from '../inputs/AntdDatePicker';
import AntdRate from '../inputs/AntdRate';
import AntdSlider from '../inputs/AntdSlider';
import AntdSwitch from '../inputs/AntdSwitch';
import AntdInputNumber from '../inputs/AntdInputNumber';
import FormControls from '../controls/FormControls';
import { Type, List, Calendar, Star, Sliders, ToggleLeft, Hash } from 'lucide-react';

export default observer(({ form }) => (
  <form>
    <div className="card">
      <div className="card-header">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-medium text-surface-900">Ant Design</h2>
            <p className="text-sm text-surface-500 mt-0.5">
              Select, DatePicker, Rate, Slider, Switch &amp; InputNumber
            </p>
          </div>
          <span className="badge bg-blue-50 text-blue-600 border border-blue-200">
            antd
          </span>
        </div>
      </div>
      <div className="card-body space-y-1">
        <div className="form-section">
          <div className="flex items-center gap-2 mb-3">
            <Type size={16} className="text-blue-500" />
            <h3 className="text-sm font-semibold text-surface-700">Input &amp; Select</h3>
          </div>
          <AntdInput field={form.$('fullName')} />
          <AntdSelect field={form.$('projectStatus')} />
          <AntdSelect field={form.$('favoriteFramework')} />
        </div>

        <div className="form-section">
          <div className="flex items-center gap-2 mb-3">
            <Calendar size={16} className="text-blue-500" />
            <h3 className="text-sm font-semibold text-surface-700">Date</h3>
          </div>
          <AntdDatePicker field={form.$('startDate')} />
        </div>

        <div className="form-section">
          <div className="flex items-center gap-2 mb-3">
            <ToggleLeft size={16} className="text-blue-500" />
            <h3 className="text-sm font-semibold text-surface-700">Switch</h3>
          </div>
          <AntdSwitch field={form.$('activeSubscription')} />
        </div>

        <div className="form-section">
          <div className="flex items-center gap-2 mb-3">
            <Star size={16} className="text-blue-500" />
            <h3 className="text-sm font-semibold text-surface-700">Rate</h3>
          </div>
          <AntdRate field={form.$('satisfaction')} />
        </div>

        <div className="form-section">
          <div className="flex items-center gap-2 mb-3">
            <Sliders size={16} className="text-blue-500" />
            <h3 className="text-sm font-semibold text-surface-700">Slider &amp; Number</h3>
          </div>
          <AntdSlider field={form.$('yearsExp')} min={0} max={60} step={1} />
          <AntdInputNumber field={form.$('teamSize')} min={1} max={100} />
        </div>
      </div>
      <div className="card-footer">
        <FormControls form={form} />
      </div>
    </div>
  </form>
));
