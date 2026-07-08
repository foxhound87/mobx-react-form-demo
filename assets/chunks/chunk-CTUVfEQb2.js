var e=`import React, { useState, useMemo, useCallback } from 'react';
import { observer } from 'mobx-react';
import { GitBranch, CheckCircle, XCircle, RefreshCw, User, FileText, Send } from 'lucide-react';
import Input from '../inputs/SimpleInput';

export default observer(({ form }) => {
  const [result, setResult] = useState(null);

  const getBilling = () => form.$('billing');
  const getShipping = () => form.$('shipping');

  const handleValidateAll = async () => {
    const billing = getBilling();
    const shipping = getShipping();
    const [billingRes, shippingRes] = await Promise.all([
      billing.validate({ showErrors: true }),
      shipping.validate({ showErrors: true }),
    ]);
    setResult({
      valid: billing.isValid && shipping.isValid,
      errors: { billing: billing.errors(), shipping: shipping.errors() },
      values: { billing: billing.values(), shipping: shipping.values() },
    });
  };

  const handleSubmitAll = async () => {
    const billing = getBilling();
    const shipping = getShipping();
    await Promise.all([
      billing.submit({}, { execOnSubmitHook: false, execValidationHooks: false, validate: true }),
      shipping.submit({}, { execOnSubmitHook: false, execValidationHooks: false, validate: true }),
    ]);
    setResult({
      valid: billing.isValid && shipping.isValid,
      errors: { billing: billing.errors(), shipping: shipping.errors() },
      values: { billing: billing.values(), shipping: shipping.values() },
    });
  };

  return (
    <form>
      <div className="card">
        <div className="card-header">
          <div className="flex items-center gap-2">
            <GitBranch size={18} className="text-brand-500" />
            <div>
              <h2 className="text-lg font-medium text-surface-900">Cross-Form Validation</h2>
              <p className="text-sm text-surface-500 mt-0.5">
                Compose independent forms with <code className="text-xs bg-surface-100 px-1 py-0.5 rounded font-mono">composer()</code> and validate them together
              </p>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="bg-purple-50 rounded-lg border border-purple-200 p-4 mb-6">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <GitBranch size={16} className="text-purple-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-purple-800 mb-1">How it works</p>
                <p className="text-sm text-purple-700 leading-relaxed">
                  The <code className="text-xs bg-purple-100 px-1 py-0.5 rounded font-mono">composer()</code> utility combines multiple
                  form instances into a single validation workflow. Call <code className="text-xs bg-purple-100 px-1 py-0.5 rounded font-mono">composer.validate()</code> to validate
                  all forms at once, then check the combined result.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface-50 rounded-xl border border-surface-200 p-5">
              <h3 className="text-sm font-semibold text-surface-700 mb-4 flex items-center gap-2">
                <User size={14} className="text-blue-500" />
                Registration
              </h3>
              <Input field={form.$('billing.username')} />
              <Input field={form.$('billing.email')} />
              <Input field={form.$('billing.password')} />
            </div>

            <div className="bg-surface-50 rounded-xl border border-surface-200 p-5">
              <h3 className="text-sm font-semibold text-surface-700 mb-4 flex items-center gap-2">
                <FileText size={14} className="text-emerald-500" />
                Profile
              </h3>
              <Input field={form.$('shipping.fullName')} />
              <Input field={form.$('shipping.emailConfirm')} />
              <Input field={form.$('shipping.bio')} />
            </div>
          </div>

          {result && (
            <div className={\`mt-6 rounded-xl border overflow-hidden \${
              result.valid ? 'border-emerald-200 bg-emerald-50' : 'border-red-200 bg-red-50'
            }\`}>
              <div className="flex items-center gap-2 px-4 py-3 border-b border-inherit bg-inherit/50">
                {result.valid
                  ? <CheckCircle size={16} className="text-emerald-600" />
                  : <XCircle size={16} className="text-red-600" />
                }
                <span className={\`text-sm font-medium \${result.valid ? 'text-emerald-800' : 'text-red-800'}\`}>
                  Composer Result
                </span>
              </div>
              <div className="p-4 space-y-2">
                <div className="text-xs font-mono text-surface-600 bg-white/70 rounded p-2">
                  <div>valid: <span className={result.valid ? 'text-emerald-600' : 'text-red-600'}>{String(result.valid)}</span></div>
                  <div>error: <span className={result.error ? 'text-red-600' : 'text-emerald-600'}>{String(result.error)}</span></div>
                  <div className="mt-1 text-surface-400">values:</div>
                  <pre className="text-[11px] mt-1 text-surface-500">{JSON.stringify(result.values, null, 2)}</pre>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="card-footer">
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-surface-200">
            <button
              type="button"
              onClick={handleValidateAll}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-brand-500 text-white hover:bg-brand-600 transition-colors"
            >
              <RefreshCw size={14} />
              Validate Both
            </button>
            <button
              type="button"
              onClick={handleSubmitAll}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-surface-800 text-white hover:bg-surface-900 transition-colors"
            >
              <Send size={14} />
              Submit Both
            </button>
          </div>
        </div>
      </div>
    </form>
  );
});
`;export{e as default};