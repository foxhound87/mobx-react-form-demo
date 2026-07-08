var e=`import React from 'react';
import { observer } from 'mobx-react';
import ClubFieldset from '../fieldsets/ClubFieldset';
import NestedAllMembersFieldset from '../fieldsets/NestedAllMembersFieldset';
import FormControls from '../controls/FormControls';

interface ErrorEntry {
  path: string;
  message: string;
}

export default observer(({ form }) => {
  const items: { path: string; msg: string }[] = [];
  const walk = (fields: any, prefix = '') => {
    if (!fields || !fields.forEach) return;
    fields.forEach((field: any, key: any) => {
      const path = prefix ? \`\${prefix}.\${key}\` : key;
      if (field.error) items.push({ path, msg: field.error });
      if (field.fields && field.fields.size > 0) walk(field.fields, path);
    });
  };
  walk(form.fields);
  const hasErrors = items.length > 0;

  return (
    <form>
      <div className="card">
        <div className="card-header">
          <h2 className="text-lg font-medium text-surface-900">Bubble Up Error Messages</h2>
          <p className="text-sm text-surface-500 mt-0.5">
            Nested field errors bubble up to the form level via{' '}
            <code className="text-xs bg-surface-100 px-1 py-0.5 rounded">bubbleUpErrorMessages: true</code>
          </p>
        </div>

        <div className="card-body">
          {hasErrors && (
            <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <h3 className="text-sm font-semibold text-red-800">
                  Bubbled-up Errors ({items.length})
                </h3>
              </div>
              <p className="text-xs text-red-600 mb-2">
                form.error: <span className="font-mono">{form.error || 'null'}</span>
              </p>
              <ul className="space-y-1">
                {items.map((entry) => (
                  <li key={entry.path} className="text-xs text-red-700 font-mono">
                    <span className="text-red-400">{entry.path}:</span> {entry.msg}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <ClubFieldset club={form.$('club')} />
          {form.has('members') && (
            <NestedAllMembersFieldset members={form.$('members')} />
          )}
        </div>

        <div className="card-footer">
          <FormControls
            form={form}
            controls={{
              onSubmit: true,
              onReset: true,
              onClear: true,
            }}
          />
        </div>
      </div>
    </form>
  );
});
`;export{e as default};