var e=`import React, { Fragment } from 'react';
import { observer } from 'mobx-react';
import { Listbox, Transition } from '@headlessui/react';
import { Check, ChevronDown } from 'lucide-react';

export default observer(({ field }) => (
  <div className="mb-4">
    <label className="form-label">{field.label}</label>
    <Listbox
      value={field.value}
      onChange={field.onChange}
    >
      <div className="relative">
        <Listbox.Button className="relative w-full rounded-lg border border-surface-200 bg-white py-2.5 pl-3.5 pr-10 text-left text-sm text-surface-900 shadow-soft cursor-pointer focus:border-brand-400 focus:ring-1 focus:ring-brand-400 transition-colors">
          <span className={field.value ? 'block truncate' : 'block truncate text-surface-400'}>
            {field.value
              ? (field.extra.find(o => (o.value || o) === field.value)?.label || field.value)
              : 'Select an option...'}
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronDown size={16} className="text-surface-400" />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-lg bg-white py-1 shadow-elevated ring-1 ring-black/5 focus:outline-none">
            {field.extra.map((opt) => {
              const val = opt.value || opt;
              const label = opt.label || opt;
              return (
                <Listbox.Option
                  key={val}
                  value={val}
                  className={({ active }) =>
                    \`relative cursor-pointer select-none py-2 pl-10 pr-4 text-sm \${
                      active ? 'bg-brand-50 text-brand-700' : 'text-surface-700'
                    }\`
                  }
                >
                  {({ selected }) => (
                    <>
                      <span className={\`block truncate \${selected ? 'font-medium' : 'font-normal'}\`}>
                        {label}
                      </span>
                      {selected && (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-brand-500">
                          <Check size={16} />
                        </span>
                      )}
                    </>
                  )}
                </Listbox.Option>
              );
            })}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
    {field.error && <p className="form-error-text">{field.error}</p>}
  </div>
));
`;export{e as default};