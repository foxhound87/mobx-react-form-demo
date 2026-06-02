import React, { useState, Fragment } from 'react';
import { observer } from 'mobx-react';
import { Combobox, Transition } from '@headlessui/react';
import { Check, ChevronDown } from 'lucide-react';

export default observer(({ field }) => {
  const [query, setQuery] = useState('');

  const options = field.extra || [];
  const filtered = query === ''
    ? options
    : options.filter((opt) => {
        const label = opt.label || opt;
        return label.toLowerCase().includes(query.toLowerCase());
      });

  return (
    <div className="mb-4">
      <label className="form-label">{field.label}</label>
      <Combobox
        value={field.value}
        onChange={field.onChange}
      >
        <div className="relative">
          <div className="relative w-full cursor-default overflow-hidden rounded-lg border border-surface-200 bg-white shadow-soft focus-within:border-brand-400 focus-within:ring-1 focus-within:ring-brand-400 transition-colors">
            <Combobox.Input
              className="w-full border-none py-2.5 pl-3.5 pr-10 text-sm text-surface-900 bg-transparent focus:outline-none"
              displayValue={(val) => {
                if (!val) return '';
                const match = options.find(o => (o.value || o) === val);
                return match ? (match.label || match) : val;
              }}
              placeholder={field.placeholder || 'Type to search...'}
              onChange={(e) => setQuery(e.target.value)}
              onBlur={field.onBlur}
              onFocus={field.onFocus}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronDown size={16} className="text-surface-400" />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-lg bg-white py-1 shadow-elevated ring-1 ring-black/5 focus:outline-none">
              {filtered.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none px-4 py-2 text-sm text-surface-500">
                  Nothing found.
                </div>
              ) : (
                filtered.map((opt) => {
                  const val = opt.value || opt;
                  const label = opt.label || opt;
                  return (
                    <Combobox.Option
                      key={val}
                      value={val}
                      className={({ active }) =>
                        `relative cursor-pointer select-none py-2 pl-10 pr-4 text-sm ${
                          active ? 'bg-brand-50 text-brand-700' : 'text-surface-700'
                        }`
                      }
                    >
                      {({ selected }) => (
                        <>
                          <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                            {label}
                          </span>
                          {selected && (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-brand-500">
                              <Check size={16} />
                            </span>
                          )}
                        </>
                      )}
                    </Combobox.Option>
                  );
                })
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
      {field.error && <p className="form-error-text">{field.error}</p>}
    </div>
  );
});
