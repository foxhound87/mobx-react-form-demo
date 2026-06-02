import React from 'react';
import { observer } from 'mobx-react';
import { RadioGroup } from '@headlessui/react';
import { CheckCircle } from 'lucide-react';

export default observer(({ field }) => (
  <div className="mb-4">
    <label className="form-label">{field.label}</label>
    <RadioGroup
      value={field.value}
      onChange={field.onChange}
      onBlur={field.onBlur}
      onFocus={field.onFocus}
      className="space-y-1"
    >
      {field.extra.map((opt) => {
        const val = opt.value || opt;
        const label = opt.label || opt;
        return (
          <RadioGroup.Option
            key={val}
            value={val}
            className={({ active, checked }) =>
              `flex items-center gap-3 cursor-pointer rounded-lg border px-3.5 py-2.5 transition-colors ${
                checked
                  ? 'border-brand-300 bg-brand-50'
                  : 'border-surface-200 bg-white hover:bg-surface-50'
              } ${active ? 'ring-2 ring-brand-400 ring-offset-1' : ''}`
            }
          >
            {({ checked }) => (
              <>
                <CheckCircle
                  size={18}
                  className={checked ? 'text-brand-500' : 'text-surface-300'}
                />
                <span className={`text-sm ${checked ? 'font-medium text-brand-700' : 'text-surface-700'}`}>
                  {label}
                </span>
              </>
            )}
          </RadioGroup.Option>
        );
      })}
    </RadioGroup>
    {field.error && <p className="form-error-text">{field.error}</p>}
  </div>
));
