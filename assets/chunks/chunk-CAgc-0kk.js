var e=`import React from 'react';
import { observer } from 'mobx-react';
import { Calculator, Variable, Percent, Euro, Sigma, ArrowRight } from 'lucide-react';
import Input from '../inputs/SimpleInput';
import FormControls from '../controls/FormControls';

const ReadonlyField = observer(({ field }) => (
  <div className="mb-4">
    <label className="form-label">{field.label}</label>
    <div className="form-input bg-indigo-50 text-indigo-700 font-semibold border-indigo-200 flex items-center h-[38px]">
      € {field.value}
    </div>
  </div>
));

const sourceCode = \`{
  unitPrice: { value: 100, label: 'Unit Price (€)', type: 'number' },
  quantity:  { value: 3,   label: 'Quantity',            type: 'number' },
  discountPercent: { value: 10, label: 'Discount (%)',   type: 'number' },

  subtotal: {
    computed: ({ form }) =>
      Number(form.$('unitPrice').value) * Number(form.$('quantity').value),
    label: 'Subtotal (€)',
  },
  discount: {
    computed: ({ form }) => {
      const sub = Number(form.$('unitPrice').value) * Number(form.$('quantity').value);
      const pct = Number(form.$('discountPercent').value) || 0;
      return Number((sub * (pct / 100)).toFixed(2));
    },
    label: 'Discount (€)',
  },
  total: {
    computed: ({ form }) => {
      const sub = Number(form.$('unitPrice').value) * Number(form.$('quantity').value);
      const pct = Number(form.$('discountPercent').value) || 0;
      return Number((sub - sub * (pct / 100)).toFixed(2));
    },
    label: 'Total (€)',
  },
}\`;

export default observer(({ form }) => (
  <form>
    <div className="card">
      <div className="card-header">
        <div className="flex items-center gap-2">
          <Calculator size={18} className="text-brand-500" />
          <div>
            <h2 className="text-lg font-medium text-surface-900">Reactive Computed Fields</h2>
            <p className="text-sm text-surface-500 mt-0.5">
              MRF <code className="text-xs bg-surface-100 px-1 py-0.5 rounded font-mono">computed</code> prop: native MobX computed values in field definitions
            </p>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="bg-indigo-50 rounded-lg border border-indigo-200 p-4 mb-6">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Variable size={16} className="text-indigo-600" />
            </div>
            <div className="min-w-0 space-y-3">
              <div>
                <p className="text-sm font-medium text-indigo-800 mb-1">1. Via the <code className="text-xs bg-indigo-100 px-1 py-0.5 rounded font-mono">computed</code> prop in field definitions (constructor)</p>
                <p className="text-sm text-indigo-700 leading-relaxed">
                  The <code className="text-xs bg-indigo-100 px-1 py-0.5 rounded font-mono">computed</code> prop accepts a function
                  <code className="text-xs bg-indigo-100 px-1 py-0.5 rounded font-mono"> ({\`{ field, form }\`}) =&gt; ...</code>.
                  MRF wraps it internally as a MobX <code className="text-xs bg-indigo-100 px-1 py-0.5 rounded font-mono">computed</code>:
                  the value re-evaluates automatically whenever its dependencies change.
                </p>
                <pre className="mt-2 text-[11px] bg-indigo-100/70 rounded p-2 overflow-x-auto max-w-full text-indigo-800 font-mono">
                  <code>{sourceCode}</code>
                </pre>
              </div>
              <div>
                <p className="text-sm font-medium text-indigo-800 mb-1">2. Alternative with <code className="text-xs bg-indigo-100 px-1 py-0.5 rounded font-mono">autorun()</code></p>
                <p className="text-sm text-indigo-700 leading-relaxed">
                  Inside a <code className="text-xs bg-indigo-100 px-1 py-0.5 rounded font-mono">useEffect</code> you can use MobX <code className="text-xs bg-indigo-100 px-1 py-0.5 rounded font-mono">autorun()</code>
                  to observe fields and write the result to another field via <code className="text-xs bg-indigo-100 px-1 py-0.5 rounded font-mono">.set()</code>.
                  It works but is more verbose and requires manual disposer management.
                </p>
                <pre className="mt-2 text-[11px] bg-indigo-100/70 rounded p-2 overflow-x-auto max-w-full text-indigo-800 font-mono">
                  <code>{\`useEffect(() => {
  const disposer = autorun(() => {
    const sub = Number(form.$('unitPrice').value) * Number(form.$('quantity').value);
    form.$('total').set(sub);
  });
  return () => disposer();
}, []);\`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-surface-400 mb-3 flex items-center gap-1.5">
              <Sigma size={12} />
              Inputs
            </h3>
            <Input field={form.$('unitPrice')} />
            <Input field={form.$('quantity')} />
            <div className="flex items-center gap-3">
              <div className="flex-1">
                <Input field={form.$('discountPercent')} />
              </div>
              <span className="text-xs text-surface-400 mt-6">
                <Percent size={12} className="inline" /> off
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-surface-400 mb-3 flex items-center gap-1.5">
              <Euro size={12} />
              Computed Values
            </h3>
            <ReadonlyField field={form.$('subtotal')} />
            <ReadonlyField field={form.$('discount')} />
            <div className="divider !my-2" />
            <div className="flex items-center gap-2">
              <ArrowRight size={14} className="text-surface-400 flex-shrink-0" />
              <div className="flex-1">
                <div className="mb-4">
                  <label className="form-label">Total (€)</label>
                  <div className="form-input bg-emerald-50 text-emerald-700 font-bold border-emerald-200 flex items-center h-[38px] text-base">
                    € {form.$('total').value}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <FormControls form={form} />
      </div>
    </div>
  </form>
));
`;export{e as default};