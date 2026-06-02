import React from 'react';
import { observer } from 'mobx-react';
import { Switch, Label } from 'react-aria-components';

export default observer(({ field }) => (
  <div className="mb-4">
    <Switch
      isSelected={!!field.value}
      onChange={field.onChange}
      className="group flex items-center gap-3 cursor-pointer"
    >
      <div className="relative inline-flex h-5 w-9 items-center rounded-full transition-colors bg-surface-300 group-data-[selected]:bg-brand-500">
        <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-0.5 group-data-[selected]:translate-x-5 shadow-soft" />
      </div>
      <Label className="text-sm text-surface-700 cursor-pointer select-none">
        {field.label}
      </Label>
    </Switch>
    {field.error && <p className="form-error-text mt-1">{field.error}</p>}
  </div>
));
