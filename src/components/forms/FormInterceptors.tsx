import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { ShieldAlert } from 'lucide-react';
import Input from '../inputs/SimpleInput';
import FormControls from '../controls/FormControls';

export default observer(({ form }) => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    form.each((field) => {
      field.intercept(({ change }) => {
        const entry = {
          field: field.path,
          from: change.oldValue,
          to: change.newValue,
          time: new Date().toLocaleTimeString(),
        };
        setLogs((prev) => [entry, ...prev].slice(0, 20));
        return change;
      });
    });
    return () => form.dispose();
  }, [form]);

  return (
    <form>
      <div className="card">
        <div className="card-header">
          <h2 className="text-lg font-medium text-surface-900">Interceptors</h2>
          <p className="text-sm text-surface-500 mt-0.5">
            <code className="text-xs bg-surface-100 px-1 py-0.5 rounded">intercept()</code> watches every field change
          </p>
        </div>
        <div className="card-body">
          <Input field={form.$('fullName')} />
          <Input field={form.$('email')} />
          <Input field={form.$('role')} />
        </div>

        {logs.length > 0 && (
          <div className="border-t border-surface-200">
            <div className="px-6 py-3 bg-surface-50/50">
              <div className="flex items-center gap-2 text-xs font-medium text-surface-500 mb-2">
                <ShieldAlert size={12} />
                Intercept Log
              </div>
              <div className="space-y-1 max-h-40 overflow-y-auto">
                {logs.map((log, i) => (
                  <div key={i} className="text-[11px] font-mono text-surface-600 bg-surface-100/50 rounded px-2 py-1">
                    <span className="text-surface-400">{log.time}</span>{' '}
                    <span className="text-brand-600 font-medium">{log.field}</span>
                    : <span className="text-surface-400 line-through">{String(log.from)}</span>
                    {' → '}
                    <span className="text-green-600">{String(log.to)}</span>
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
