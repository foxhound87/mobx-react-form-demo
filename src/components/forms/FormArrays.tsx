import React from 'react';
import { observer } from 'mobx-react';
import { Plus, Trash2 } from 'lucide-react';
import Input from '../inputs/SimpleInput';
import FormControls from '../controls/FormControls';

export default observer(({ form }) => {
  const members = form.$('members');

  return (
    <form>
      <div className="card">
        <div className="card-header">
          <h2 className="text-lg font-medium text-surface-900">Array Fields</h2>
          <p className="text-sm text-surface-500 mt-0.5">
            Dynamic array of team members with add/remove
          </p>
        </div>
        <div className="card-body">
          <Input field={form.$('teamName')} />

          <div className="divider !my-4" />
          <div className="flex items-center justify-between mb-3">
            <label className="text-sm font-medium text-surface-700">Team Members</label>
            <button
              type="button"
              onClick={() => members.add()}
              className="inline-flex items-center gap-1.5 rounded-lg bg-brand-500 text-white px-3 py-1.5 text-xs font-medium hover:bg-brand-600 transition-colors"
            >
              <Plus size={14} />
              Add Member
            </button>
          </div>

          <div className="space-y-3">
            {members.map((field) => (
              <div key={field.key} className="relative bg-surface-50 rounded-lg border border-surface-200 p-3">
                <button
                  type="button"
                  onClick={() => members.del(field.key)}
                  className="absolute top-2 right-2 p-1 rounded-md text-surface-400 hover:text-red-500 hover:bg-red-50 transition-colors"
                >
                  <Trash2 size={14} />
                </button>
                <div className="grid grid-cols-2 gap-3 pr-8">
                  <Input field={field.$('name')} />
                  <Input field={field.$('role')} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="card-footer">
          <FormControls form={form} />
        </div>
      </div>
    </form>
  );
});
