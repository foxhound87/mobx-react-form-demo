import React, { useState } from 'react';
import { observer } from 'mobx-react';
import Form from '../../forms/_.extend';
import { Layers, User, MapPin, CheckCircle, XCircle } from 'lucide-react';
import Input from '../inputs/SimpleInput';
import FormControls from '../controls/FormControls';
import { contactFields, addressFields } from '../../forms/setup/nestedComposition';

class ContactForm extends Form {
  bindings() {
    return { ...super.bindings() };
  }
}

class AddressForm extends Form {
  bindings() {
    return { ...super.bindings() };
  }
}

const contactForm = new ContactForm(
  { fields: contactFields },
  { name: 'ContactInfo', plugins: {}, bindings: {}, options: {} }
);

const addressForm = new AddressForm(
  { fields: addressFields },
  { name: 'AddressInfo', plugins: {}, bindings: {}, options: {} }
);

const FormCard = observer(({ title, icon: Icon, color, fields }) => (
  <div className={`rounded-xl border p-5 ${color}`}>
    <h3 className="text-sm font-semibold text-surface-700 mb-4 flex items-center gap-2">
      <Icon size={14} />
      {title}
    </h3>
    {fields.map(([label, field]) => (
      <div key={label} className="mb-2 text-xs text-surface-500">
        <Input field={field} />
      </div>
    ))}
  </div>
));

export default observer(({ form: parentForm }) => {
  const [result, setResult] = useState(null);

  const handleValidateAll = async () => {
    await Promise.all([
      contactForm.validate({ showErrors: true }),
      addressForm.validate({ showErrors: true }),
    ]);
    setResult({
      valid: contactForm.isValid && addressForm.isValid,
      errors: { contact: contactForm.errors(), address: addressForm.errors() },
      values: { contact: contactForm.values(), address: addressForm.values() },
    });
  };

  const handleSubmitAll = async () => {
    await Promise.all([
      contactForm.submit({}, { execOnSubmitHook: false, execValidationHooks: false, validate: true }),
      addressForm.submit({}, { execOnSubmitHook: false, execValidationHooks: false, validate: true }),
    ]);
    setResult({
      valid: contactForm.isValid && addressForm.isValid,
      errors: { contact: contactForm.errors(), address: addressForm.errors() },
      values: { contact: contactForm.values(), address: addressForm.values() },
    });
  };

  return (
    <div>
      <div className="card">
        <div className="card-header">
          <div className="flex items-center gap-2">
            <Layers size={18} className="text-brand-500" />
            <div>
              <h2 className="text-lg font-medium text-surface-900">Nested Form Composition</h2>
              <p className="text-sm text-surface-500 mt-0.5">
                Compose fully independent form instances — each with its own fields, validation, and state
              </p>
            </div>
          </div>
        </div>
        <div className="card-body">
          {/* Explanation */}
          <div className="bg-cyan-50 rounded-lg border border-cyan-200 p-4 mb-6">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Layers size={16} className="text-cyan-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-cyan-800 mb-1">How it works</p>
                <p className="text-sm text-cyan-700 leading-relaxed">
                  Each sub-form is a fully independent <code className="text-xs bg-cyan-100 px-1 py-0.5 rounded font-mono">Form</code> instance with its own fields, validation, and state.
                  The parent component orchestrates them together — validating all, submitting all, and
                  returning combined results using direct MRF API calls.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormCard
              title="Contact Information"
              icon={User}
              color="bg-blue-50 border-blue-200"
              fields={[
                ['fullName', contactForm.$('fullName')],
                ['email', contactForm.$('email')],
                ['phone', contactForm.$('phone')],
              ]}
            />
            <FormCard
              title="Address Details"
              icon={MapPin}
              color="bg-emerald-50 border-emerald-200"
              fields={[
                ['street', addressForm.$('street')],
                ['city', addressForm.$('city')],
                ['zipCode', addressForm.$('zipCode')],
                ['country', addressForm.$('country')],
              ]}
            />
          </div>

          {/* Per-form controls */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <p className="text-xs font-medium text-surface-400 mb-2 uppercase tracking-wider">Contact controls</p>
              <FormControls form={contactForm} controls={{ onSubmit: true, onReset: true, onClear: true }} />
            </div>
            <div>
              <p className="text-xs font-medium text-surface-400 mb-2 uppercase tracking-wider">Address controls</p>
              <FormControls form={addressForm} controls={{ onSubmit: true, onReset: true, onClear: true }} />
            </div>
          </div>

          {/* Cross-form orchestration */}
          <div className="divider !my-6" />
          <p className="text-xs font-medium text-surface-400 uppercase tracking-wider mb-3">Cross-form orchestration</p>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <button
              type="button"
              onClick={handleValidateAll}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-brand-500 text-white hover:bg-brand-600 transition-colors"
            >
              <CheckCircle size={14} />
              Validate All
            </button>
            <button
              type="button"
              onClick={handleSubmitAll}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-surface-800 text-white hover:bg-surface-900 transition-colors"
            >
              <Layers size={14} />
              Submit All
            </button>
          </div>

          {/* Combined result */}
          {result && (
            <div className={`rounded-xl border overflow-hidden ${
              result.valid ? 'border-emerald-200 bg-emerald-50' : 'border-red-200 bg-red-50'
            }`}>
              <div className="flex items-center gap-2 px-4 py-3 border-b border-inherit bg-inherit/50">
                {result.valid
                  ? <CheckCircle size={16} className="text-emerald-600" />
                  : <XCircle size={16} className="text-red-600" />
                }
                <span className={`text-sm font-medium ${result.valid ? 'text-emerald-800' : 'text-red-800'}`}>
                  Combined Result
                </span>
              </div>
              <div className="p-4">
                <pre className="text-xs font-mono text-surface-600 bg-white/70 rounded p-2 overflow-x-auto">
                  {JSON.stringify({
                    valid: result.valid,
                    errors: result.errors,
                    values: result.values,
                  }, null, 2)}
                </pre>
              </div>
            </div>
          )}
        </div>
        <div className="card-footer">
          <div className="text-xs text-surface-400">
            Each sub-form is a standalone <code className="text-xs bg-surface-100 px-1 py-0.5 rounded font-mono">Form</code> instance with its own lifecycle.
          </div>
        </div>
      </div>
    </div>
  );
});
