import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { autorun } from 'mobx';
import { Eye } from 'lucide-react';
import Input from '../inputs/SimpleInput';
import FormControls from '../controls/FormControls';

export default observer(({ form }) => {
  const [observations, setObservations] = useState([]);
  const [computed, setComputed] = useState('');

  useEffect(() => {
    const firstName = form.$('firstName');
    const lastName = form.$('lastName');

    firstName.observe(({ change }) => {
      const entry = {
        field: 'firstName',
        value: change.newValue,
        time: new Date().toLocaleTimeString(),
      };
      setObservations((prev) => [entry, ...prev].slice(0, 15));
    });

    lastName.observe(({ change }) => {
      const entry = {
        field: 'lastName',
        value: change.newValue,
        time: new Date().toLocaleTimeString(),
      };
      setObservations((prev) => [entry, ...prev].slice(0, 15));
    });

    const autorunDisposer = autorun(() => {
      const full = `${firstName.value} ${lastName.value}`.trim();
      form.$('fullDisplay').set(full || '(empty)');
      setComputed(full || '(empty)');
    });

    return () => {
      form.dispose();
      autorunDisposer();
    };
  }, [form]);

  return (
    <form>
      <div className="card">
        <div className="card-header">
          <h2 className="text-lg font-medium text-surface-900">Observers</h2>
          <p className="text-sm text-surface-500 mt-0.5">
            <code className="text-xs bg-surface-100 px-1 py-0.5 rounded">observe()</code> + <code className="text-xs bg-surface-100 px-1 py-0.5 rounded">autorun()</code> react to changes
          </p>
        </div>
        <div className="card-body">
          <Input field={form.$('firstName')} />
          <Input field={form.$('lastName')} />

          <div className="bg-brand-50 rounded-lg border border-brand-200 p-4 mt-4">
            <p className="text-xs font-medium text-brand-600 uppercase tracking-wider mb-1">Computed Full Name</p>
            <p className="text-lg font-semibold text-brand-700">{computed || '(type something)'}</p>
          </div>
        </div>

        {observations.length > 0 && (
          <div className="border-t border-surface-200">
            <div className="px-6 py-3 bg-surface-50/50">
              <div className="flex items-center gap-2 text-xs font-medium text-surface-500 mb-2">
                <Eye size={12} />
                Observe Log
              </div>
              <div className="space-y-1 max-h-40 overflow-y-auto">
                {observations.map((obs, i) => (
                  <div key={i} className="text-[11px] font-mono text-surface-600 bg-surface-100/50 rounded px-2 py-1">
                    <span className="text-surface-400">{obs.time}</span>{' '}
                    <span className="text-brand-600 font-medium">{obs.field}</span>
                    : <span className="text-green-600">{String(obs.value)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="card-footer">
          <FormControls form={form} />
        </div>
      </div>
    </form>
  );
});
