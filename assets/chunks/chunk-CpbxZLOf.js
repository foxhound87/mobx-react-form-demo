var e=`import React from 'react';
import { observer } from 'mobx-react';
import MuiSelect from '../inputs/MuiSelect';
import MuiAutocomplete from '../inputs/MuiAutocomplete';
import MuiRating from '../inputs/MuiRating';
import MuiSlider from '../inputs/MuiSlider';
import FormControls from '../controls/FormControls';
import { Palette, Sliders, Star, List, Search } from 'lucide-react';

export default observer(({ form }) => (
  <form>
    <div className="card">
      <div className="card-header">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-medium text-surface-900">Advanced MUI Inputs</h2>
            <p className="text-sm text-surface-500 mt-0.5">
              MUI Select, Autocomplete, Rating &amp; Slider
            </p>
          </div>
          <span className="badge bg-brand-50 text-brand-600 border border-brand-200">MUI</span>
        </div>
      </div>
      <div className="card-body space-y-1">
        <div className="form-section">
          <div className="flex items-center gap-2 mb-3">
            <List size={16} className="text-brand-500" />
            <h3 className="text-sm font-semibold text-surface-700">Selects</h3>
          </div>
          <MuiSelect field={form.$('favoriteFramework')} />
          <MuiSelect field={form.$('color')} />
        </div>

        <div className="form-section">
          <div className="flex items-center gap-2 mb-3">
            <Search size={16} className="text-brand-500" />
            <h3 className="text-sm font-semibold text-surface-700">Autocomplete</h3>
          </div>
          <MuiAutocomplete field={form.$('frameworkAutocomplete')} />
        </div>

        <div className="form-section">
          <div className="flex items-center gap-2 mb-3">
            <Star size={16} className="text-brand-500" />
            <h3 className="text-sm font-semibold text-surface-700">Rating</h3>
          </div>
          <MuiRating field={form.$('skillLevel')} />
          <MuiRating field={form.$('satisfaction')} />
        </div>

        <div className="form-section">
          <div className="flex items-center gap-2 mb-3">
            <Sliders size={16} className="text-brand-500" />
            <h3 className="text-sm font-semibold text-surface-700">Slider</h3>
          </div>
          <MuiSlider field={form.$('experience')} min={0} max={100} step={1} />
        </div>
      </div>
      <div className="card-footer">
        <FormControls form={form} />
      </div>
    </div>
  </form>
));
`;export{e as default};