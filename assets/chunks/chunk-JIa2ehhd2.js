var e=`import React from 'react';
import { observer } from 'mobx-react';
import { BookOpen, GitBranch } from 'lucide-react';
import Input from '../inputs/SimpleInput';
import FormControls from '../controls/FormControls';

const ComposerInfo = () => (
  <div className="bg-brand-50 rounded-lg border border-brand-200 p-4">
    <div className="flex items-start gap-3">
      <div className="w-8 h-8 rounded-lg bg-brand-100 flex items-center justify-center flex-shrink-0 mt-0.5">
        <BookOpen size={16} className="text-brand-600" />
      </div>
      <div>
        <p className="text-sm font-medium text-brand-800 mb-1">What is the Composer?</p>
        <p className="text-sm text-brand-700 leading-relaxed">
          The <code className="text-xs bg-brand-100 px-1 py-0.5 rounded">composer()</code> utility lets you combine
          multiple forms — each with its own fields, rules, and validation — into a single submission workflow.
          Perfect for multi-step checkout flows, wizards, or complex dashboards.
        </p>
        <pre className="mt-2 text-[11px] bg-brand-100/70 rounded p-2 overflow-x-auto text-brand-800">
          <code>{\`import { composer } from 'mobx-react-form';\\n\\nconst checkout = composer({\\n  billing,\\n  shipping,\\n});\\n\\ncheckout.validate()\\n  .then(({ valid, errors, values }) => {\\n    if (valid) submitAll(values);\\n  });\`}</code>
        </pre>
      </div>
    </div>
  </div>
);

export default observer(({ form }) => (
  <form>
    <div className="card">
      <div className="card-header">
        <h2 className="text-lg font-medium text-surface-900">Composer</h2>
        <p className="text-sm text-surface-500 mt-0.5">
          Demo of composing billing + shipping fields in a single form
        </p>
      </div>
      <div className="card-body">
        <ComposerInfo />

        <div className="divider !my-6" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-surface-50 rounded-xl border border-surface-200 p-5">
            <h3 className="text-sm font-semibold text-surface-700 mb-4 flex items-center gap-2">
              <span className="w-5 h-5 rounded bg-brand-500 text-white text-[10px] font-bold flex items-center justify-center">1</span>
              Billing Details
            </h3>
            <Input field={form.$('billingCard')} />
            <div className="grid grid-cols-2 gap-3">
              <Input field={form.$('billingExpiry')} />
              <Input field={form.$('billingCvv')} />
            </div>
          </div>

          <div className="bg-surface-50 rounded-xl border border-surface-200 p-5">
            <h3 className="text-sm font-semibold text-surface-700 mb-4 flex items-center gap-2">
              <span className="w-5 h-5 rounded bg-brand-500 text-white text-[10px] font-bold flex items-center justify-center">2</span>
              Shipping Details
            </h3>
            <Input field={form.$('shippingAddress')} />
            <Input field={form.$('shippingCity')} />
            <Input field={form.$('shippingZip')} />
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