var e=`import React from 'react';
import { observer } from 'mobx-react';
import { BookOpen, Terminal, DollarSign, ArrowUp, AlignLeft } from 'lucide-react';
import Input from '../inputs/SimpleInput';
import FormControls from '../controls/FormControls';

const desc = {
  DefaultInput: {
    icon: AlignLeft,
    label: 'DefaultInput',
    desc: (
      <>
        Standard prop mapping — passes <code className="text-xs bg-surface-100 px-0.5 rounded">name</code>,{' '}
        <code className="text-xs bg-surface-100 px-0.5 rounded">value</code>, <code className="text-xs bg-surface-100 px-0.5 rounded">onChange</code>,
        and <code className="text-xs bg-surface-100 px-0.5 rounded">placeholder</code> directly to the input.
      </>
    ),
    color: 'bg-blue-100 text-blue-700 border-blue-200',
  },
  UppercaseInput: {
    icon: ArrowUp,
    label: 'UppercaseInput',
    desc: (
      <>
        Custom <code className="text-xs bg-surface-100 px-0.5 rounded">onChange</code> handler transforms input
        to uppercase before updating the field value.
      </>
    ),
    color: 'bg-amber-100 text-amber-700 border-amber-200',
  },
  CurrencyInput: {
    icon: DollarSign,
    label: 'CurrencyInput',
    desc: (
      <>
        Custom <code className="text-xs bg-surface-100 px-0.5 rounded">onChange</code> strips non-numeric
        characters and preserves cursor position.
      </>
    ),
    color: 'bg-emerald-100 text-emerald-700 border-emerald-200',
  },
  DebugInput: {
    icon: Terminal,
    label: 'DebugInput',
    desc: (
      <>
        Overrides <code className="text-xs bg-surface-100 px-0.5 rounded">onChange</code>,{' '}
        <code className="text-xs bg-surface-100 px-0.5 rounded">onBlur</code>,{' '}
        <code className="text-xs bg-surface-100 px-0.5 rounded">onFocus</code>, and{' '}
        <code className="text-xs bg-surface-100 px-0.5 rounded">onKeyDown</code> to log every event
        to the browser console.
      </>
    ),
    color: 'bg-purple-100 text-purple-700 border-purple-200',
  },
};

const bindingInfo = desc;

const FieldCard = observer(({ field, bindingKey }) => {
  const info = bindingInfo[bindingKey];
  const Icon = info?.icon || Code;

  return (
    <div className="bg-surface-50 rounded-xl border border-surface-200 p-5">
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-2">
          <div className={\`w-6 h-6 rounded-lg flex items-center justify-center \${info?.color || 'bg-surface-200 text-surface-600'}\`}>
            <Icon size={13} />
          </div>
          <code className="text-xs font-mono font-semibold text-surface-700">{info?.label || bindingKey}</code>
        </div>
        <span className="text-[10px] font-mono text-surface-400 bg-surface-100 px-2 py-0.5 rounded">
          field.bind()
        </span>
      </div>
      <p className="text-xs text-surface-500 mb-4 leading-relaxed">{info?.desc || null}</p>
      <Input field={field} />
    </div>
  );
});

export default observer(({ form }) => {
  const fields = ['username', 'productCode', 'price', 'notes'];

  return (
    <form>
      <div className="card">
        <div className="card-header">
          <h2 className="text-lg font-medium text-surface-900">Bindings Demo</h2>
          <p className="text-sm text-surface-500 mt-0.5">
            How <code className="text-xs bg-surface-100 px-1 py-0.5 rounded">field.bind()</code> maps field properties to input props
          </p>
        </div>
        <div className="card-body">
          {/* Explanation */}
          <div className="bg-brand-50 rounded-lg border border-brand-200 p-4 mb-6">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-brand-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <BookOpen size={16} className="text-brand-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-brand-800 mb-1">What are Bindings?</p>
                <p className="text-sm text-brand-700 leading-relaxed">
                  A binding is a function that receives <code className="text-xs bg-brand-100 px-1 py-0.5 rounded">{'{ $try, field, props }'}</code>
                  {' '}and returns the props to spread onto an input element. Each field can use a different binding to
                  customize its behavior — like auto-uppercasing, numeric filtering, or debug logging.
                </p>
              </div>
            </div>
          </div>

          <div className="divider !my-8" />

          {/* Field cards */}
          <div className="space-y-4">
            {fields.map((name) => {
              const field = form.$(name);
              const bindingKey = field.bindings || 'DefaultInput';
              return <FieldCard key={name} field={field} bindingKey={bindingKey} />;
            })}
          </div>
        </div>
        <div className="card-footer">
          <FormControls form={form} />
        </div>
      </div>
    </form>
  );
});
`;export{e as default};