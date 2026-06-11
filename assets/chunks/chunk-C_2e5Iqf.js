var e=`import React from 'react';
import { observer } from 'mobx-react';
import { Switch } from '@headlessui/react';

export default observer(({ field }) => (
  <div className="mb-4">
    <div className="flex items-center gap-3">
      <Switch
        checked={!!field.value}
        onChange={field.onChange}
        onBlur={field.onBlur}
        onFocus={field.onFocus}
        className={\`\${
          !!field.value ? 'bg-brand-500' : 'bg-surface-300'
        } relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2 cursor-pointer\`}
      >
        <span
          className={\`\${
            !!field.value ? 'translate-x-5' : 'translate-x-0.5'
          } inline-block h-4 w-4 transform rounded-full bg-white transition-transform shadow-soft\`}
        />
      </Switch>
      <label className="text-sm text-surface-700 cursor-pointer select-none">
        {field.label}
      </label>
    </div>
    {field.error && <p className="form-error-text mt-1">{field.error}</p>}
  </div>
));
`;export{e as default};