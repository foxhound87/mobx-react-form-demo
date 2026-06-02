import React from 'react';
import { observer } from 'mobx-react';
import { Slider, Label, SliderTrack, SliderThumb, SliderOutput } from 'react-aria-components';

export default observer(({ field, min = 0, max = 100, step = 1 }) => (
  <div className="mb-4">
    <Slider
      value={field.value != null ? Number(field.value) : min}
      onChange={field.onChange}
      minValue={min}
      maxValue={max}
      step={step}
      className="w-full"
    >
      <div className="flex items-center justify-between mb-1">
        <Label className="text-sm font-medium text-surface-700">{field.label}</Label>
        <SliderOutput className="text-sm text-surface-500" />
      </div>
      <SliderTrack className="relative w-full h-2 bg-surface-200 rounded-full cursor-pointer">
        <SliderThumb className="block w-4 h-4 bg-white border-2 border-brand-500 rounded-full shadow-soft top-1/2 -translate-y-1/2 focus:ring-2 focus:ring-brand-400 focus:ring-offset-2 transition-colors" />
      </SliderTrack>
    </Slider>
    {field.error && <p className="form-error-text mt-1">{field.error}</p>}
  </div>
));
