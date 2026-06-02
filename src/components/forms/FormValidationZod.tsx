import React from 'react';
import { observer } from 'mobx-react';
import { ShieldCheck } from 'lucide-react';
import Input from '../inputs/SimpleInput';
import Checkbox from '../inputs/SimpleCheckbox';
import FormControls from '../controls/FormControls';

export default observer(({ form }) => (
  <form>
    <div className="card">
      <div className="card-header">
        <h2 className="text-lg font-medium text-surface-900">ZOD Validation</h2>
        <p className="text-sm text-surface-500 mt-0.5">
          Schema-based validation using{' '}
          <code className="text-xs bg-surface-100 px-1 py-0.5 rounded">zod</code>
        </p>
      </div>
      <div className="card-body">
        <div className="bg-brand-50 rounded-lg border border-brand-200 p-4 mb-5">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-brand-100 flex items-center justify-center flex-shrink-0 mt-0.5">
              <ShieldCheck size={16} className="text-brand-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-brand-800 mb-1">Zod Schema Validation</p>
              <p className="text-sm text-brand-700 leading-relaxed">
                The form is validated against a Zod schema that defines types, constraints,
                and custom error messages. Try submitting with invalid data to see Zod errors.
              </p>
            </div>
          </div>
        </div>

        <Input field={form.$('username')} />
        <Input field={form.$('email')} />
        <Input field={form.$('age')} />
        <Input field={form.$('website')} />
        <div className="divider !my-4" />
        <Checkbox field={form.$('acceptTerms')} />
      </div>
      <div className="card-footer">
        <FormControls form={form} />
      </div>
    </div>
  </form>
));
