var e=`import React from 'react';
import { observer } from 'mobx-react';
import Creatable from 'react-select/creatable';
import { Plus, X, Hash, Type, Link, DollarSign, AtSign, Phone, Calendar } from 'lucide-react';
import FormControls from '../controls/FormControls';

const fieldIcons = {
  foo: Hash,
  bar: AtSign,
  baz: DollarSign,
  name: Type,
  email: AtSign,
  phone: Phone,
  url: Link,
  price: DollarSign,
  date: Calendar,
};

const DynamicFieldInput = observer(({ field, onRemove }) => {
  const Icon = fieldIcons[field.name] || Type;
  return (
    <div className="group relative flex items-start gap-3 p-3 rounded-xl border border-surface-200 bg-white hover:border-surface-300 hover:shadow-sm transition-all duration-150">
      <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-50 text-brand-500 flex-shrink-0 mt-0.5">
        <Icon size={15} />
      </div>
      <div className="flex-1 min-w-0">
        <label className="block text-[11px] font-semibold uppercase tracking-wider text-surface-400 mb-1">
          {field.label || field.name}
        </label>
        <input
          className={\`w-full text-sm px-3 py-2 rounded-lg border transition-all duration-150 outline-none \${
            field.error
              ? 'border-red-300 bg-red-50 text-red-900 focus:border-red-400 focus:ring-2 focus:ring-red-100'
              : 'border-surface-200 bg-surface-50 text-surface-900 focus:border-brand-300 focus:ring-2 focus:ring-brand-100 focus:bg-white'
          }\`}
          placeholder={field.placeholder || field.name}
          {...field.bind()}
        />
        {field.error && (
          <p className="text-[11px] text-red-500 mt-1">{field.error}</p>
        )}
      </div>
      <button
        type="button"
        onClick={() => onRemove(field.name)}
        className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-surface-200 text-surface-400 hover:bg-red-100 hover:text-red-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-150"
        title={\`Remove \${field.name}\`}
      >
        <X size={10} />
      </button>
    </div>
  );
});

export default observer(({ form }) => {
  const fieldFactory = form.$('fieldFactory');
  const dynamicFields = form.$('dynamicFields');

  const handleRemove = (name) => {
    dynamicFields.del(name);
    // Also remove from the factory multi-select
    const currentValues = fieldFactory.value || [];
    const newValues = currentValues.filter(v => v.value !== name);
    fieldFactory.set('value', newValues);
    fieldFactory.set('extra', newValues.map(v => v.value));
  };

  return (
    <form>
      <div className="card">
        <div className="card-header">
          <div className="flex items-center gap-2">
            <Hash size={18} className="text-brand-500" />
            <div>
              <h2 className="text-lg font-medium text-surface-900">Dynamic Fields</h2>
              <p className="text-sm text-surface-500 mt-0.5">Create and manage fields on the fly</p>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="bg-gradient-to-br from-brand-50 to-white rounded-xl border border-brand-100 p-5 mb-6">
            <label className="block text-xs font-semibold text-brand-700 mb-1">
              Add Fields
            </label>
            <p className="text-xs text-brand-500 mb-3">
              Type a field name and press <kbd className="px-1 py-0.5 rounded bg-brand-100 text-brand-600 text-[10px] font-mono">Enter</kbd> to add it
            </p>
            <Creatable
              isMulti
              allowCreate
              resetValue={[]}
              options={fieldFactory.extra}
              openOnFocus={false}
              placeholder="e.g. name, email, price..."
              noResultsText="Press enter to create"
              className="text-sm"
              classNamePrefix="dynamic-select"
              styles={{
                control: (base) => ({
                  ...base,
                  borderRadius: '0.625rem',
                  borderColor: '#e7e5e4',
                  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                  minHeight: '42px',
                  padding: '1px 2px',
                  '&:hover': { borderColor: '#f59e0b' },
                }),
                multiValue: (base) => ({
                  ...base,
                  borderRadius: '6px',
                  background: '#fffbeb',
                  border: '1px solid #fde68a',
                }),
                multiValueLabel: (base) => ({
                  ...base,
                  color: '#b45309',
                  fontWeight: 500,
                  fontSize: '0.8125rem',
                }),
                multiValueRemove: (base) => ({
                  ...base,
                  color: '#b45309',
                  borderRadius: '0 6px 6px 0',
                  '&:hover': { background: '#fef3c7', color: '#92400e' },
                }),
                menu: (base) => ({
                  ...base,
                  borderRadius: '0.625rem',
                  border: '1px solid #e7e5e4',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                }),
                option: (base, { isFocused }) => ({
                  ...base,
                  fontSize: '0.8125rem',
                  background: isFocused ? '#fffbeb' : 'white',
                  color: '#292524',
                }),
              }}
              {...fieldFactory.bind()}
            />
          </div>

          <div className="flex items-center gap-2 mb-4">
            <h4 className="text-sm font-semibold text-surface-700">
              Created Fields
            </h4>
            {dynamicFields.size > 0 && (
              <span className="text-[11px] font-medium text-surface-400 bg-surface-100 px-2 py-0.5 rounded-full">
                {dynamicFields.size}
              </span>
            )}
          </div>

          {dynamicFields.size > 0 ? (
            <div className="space-y-2">
              {dynamicFields.map(field => (
                <DynamicFieldInput
                  key={field.name}
                  field={field}
                  onRemove={handleRemove}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-10 px-4 border-2 border-dashed border-surface-200 rounded-xl bg-surface-50/50">
              <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center mb-3">
                <Plus size={18} className="text-brand-500" />
              </div>
              <p className="text-sm font-medium text-surface-500 mb-1">No dynamic fields yet</p>
              <p className="text-xs text-surface-400 text-center max-w-xs">
                Type a field name in the box above and press <kbd className="px-1 py-0.5 rounded bg-surface-200 text-surface-500 text-[10px] font-mono">Enter</kbd> to create one
              </p>
            </div>
          )}
        </div>
        <div className="card-footer">
          <FormControls form={form} />
        </div>
      </div>
    </form>
  );
});
`;export{e as default};