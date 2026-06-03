import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { autorun } from 'mobx';
import { Calculator, Variable, Plus, Trash2, Equal, Database } from 'lucide-react';
import Input from '../inputs/SimpleInput';
import FormControls from '../controls/FormControls';

const ProductRow = observer(({ field, onDelete }) => (
  <div className="relative bg-surface-50 rounded-lg border border-surface-200 p-3 pr-10">
    <button
      type="button"
      onClick={onDelete}
      className="absolute top-2 right-2 p-1 rounded-md text-surface-400 hover:text-red-500 hover:bg-red-50 transition-colors"
      title="Remove product"
    >
      <Trash2 size={14} />
    </button>
    <div className="grid grid-cols-12 gap-2 items-start">
      <div className="col-span-4">
        <Input field={field.$('name')} />
      </div>
      <div className="col-span-2">
        <Input field={field.$('qty')} />
      </div>
      <div className="col-span-3">
        <Input field={field.$('amount')} />
      </div>
      <div className="col-span-3">
        <div className="mb-4">
          <label className="form-label">Total (€)</label>
          <div className="form-input bg-indigo-50 text-indigo-700 font-semibold border-indigo-200 flex items-center h-[38px]">
            € {field.$('total')?.value ?? 0}
          </div>
        </div>
      </div>
    </div>
  </div>
));

export default observer(({ form }) => {
  const products = form.$('products');

  // Reactive autorun: computes row totals and grand total whenever inputs change
  useEffect(() => {
    const disposer = autorun(() => {
      const orderTotalField = form.$('orderTotal');
      let grandTotal = 0;

      products.map((item) => {
        const qty = Number(item.$('qty')?.value) || 0;
        const amount = Number(item.$('amount')?.value) || 0;
        const rowTotal = Number((qty * amount).toFixed(2));
        item.$('total')?.set(rowTotal);
        grandTotal += rowTotal;
      });

      orderTotalField.set(Number(grandTotal.toFixed(2)));
    });

    return () => disposer();
  }, [form, products]);

  return (
    <form>
      <div className="card">
        <div className="card-header">
          <div className="flex items-center gap-2">
            <Calculator size={18} className="text-brand-500" />
            <div>
              <h2 className="text-lg font-medium text-surface-900">Reactive Computed Fields</h2>
              <p className="text-sm text-surface-500 mt-0.5">
                <code className="text-xs bg-surface-100 px-1 py-0.5 rounded font-mono">autorun()</code> computes totals reactively as you type
              </p>
            </div>
          </div>
        </div>
        <div className="card-body">
          {/* Explanation */}
          <div className="bg-indigo-50 rounded-lg border border-indigo-200 p-4 mb-6">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Variable size={16} className="text-indigo-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-indigo-800 mb-1">How it works</p>
                <p className="text-sm text-indigo-700 leading-relaxed">
                  A single <code className="text-xs bg-indigo-100 px-1 py-0.5 rounded font-mono">autorun()</code> observes all product qty &amp; amount fields.
                  On every change it recalculates row totals via <code className="text-xs bg-indigo-100 px-1 py-0.5 rounded font-mono">field.set()</code> and
                  updates the grand total — keeping the UI in sync with MobX reactivity.
                </p>
                <pre className="mt-2 text-[11px] bg-indigo-100/70 rounded p-2 overflow-x-auto text-indigo-800 font-mono">
                  <code>{`// autorun observes all product fields reactively\nautorun(() => {\n  let total = 0;\n  products.map((item) => {\n    const row = item.$('qty').value * item.$('amount').value;\n    item.$('total').set(row);\n    total += row;\n  });\n  form.$('orderTotal').set(total);\n});`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* Products header */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Database size={14} className="text-surface-400" />
              <span className="text-sm font-medium text-surface-700">Products</span>
              <span className="text-[11px] text-surface-400 font-mono bg-surface-100 px-1.5 py-0.5 rounded">
                {products.fields.size} item{products.fields.size !== 1 ? 's' : ''}
              </span>
            </div>
            <button
              type="button"
              onClick={() => products.add()}
              className="inline-flex items-center gap-1.5 rounded-lg bg-brand-500 text-white px-3 py-1.5 text-xs font-medium hover:bg-brand-600 transition-colors"
            >
              <Plus size={14} />
              Add Product
            </button>
          </div>

          {/* Column headers */}
          <div className="grid grid-cols-12 gap-2 mb-2 px-1">
            <div className="col-span-4 text-[11px] font-medium text-surface-400 uppercase tracking-wider">Product</div>
            <div className="col-span-2 text-[11px] font-medium text-surface-400 uppercase tracking-wider">Qty</div>
            <div className="col-span-3 text-[11px] font-medium text-surface-400 uppercase tracking-wider">Unit Price</div>
            <div className="col-span-3 text-[11px] font-medium text-surface-400 uppercase tracking-wider">Total</div>
          </div>

          {/* Product rows */}
          <div className="space-y-3 mb-6">
            {products.map((field) => (
              <ProductRow
                key={field.key}
                field={field}
                onDelete={() => products.del(field.key)}
              />
            ))}
            {products.fields.size === 0 && (
              <div className="text-center py-8 text-surface-400 text-sm">
                No products. Click "Add Product" to create one.
              </div>
            )}
          </div>

          {/* Grand total */}
          <div className="divider !my-4" />
          <div className="flex items-center justify-end gap-3 px-1">
            <div className="flex items-center gap-2 text-sm text-surface-500">
              <Equal size={14} />
              Order Total
            </div>
            <div className="text-xl font-bold font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-4 py-2">
              € {form.$('orderTotal').value}
            </div>
          </div>
        </div>
        <div className="card-footer">
          <FormControls form={form} />
        </div>
      </div>
    </form>
  );
});
