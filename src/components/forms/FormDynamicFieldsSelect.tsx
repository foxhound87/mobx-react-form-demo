import React from 'react';
import { observer } from 'mobx-react';
import Creatable from 'react-select/creatable';
import FormControls from '../controls/FormControls';
import MaterialTextField from '../inputs/MaterialTextField';

export default observer(({ form }) => (
  <form>
    <div className="card">
      <div className="card-header">
        <h2 className="text-lg font-medium text-surface-900">Dynamic Fields</h2>
        <p className="text-sm text-surface-500 mt-0.5">Create new fields on the fly</p>
      </div>
      <div className="card-body">
        <div className="mb-4">
          <label className="form-label">Add Fields</label>
          <p className="text-xs text-surface-400 mb-2">Select or type new options (then press enter) to add fields</p>
          <Creatable
            isMulti
            allowCreate
            resetValue={[]}
            options={form.$('fieldFactory').extra}
            openOnFocus={false}
            placeholder="Type to add fields..."
            noResultsText="Press enter to create"
            className="text-sm"
            classNamePrefix="react-select"
            styles={{
              control: (base) => ({
                ...base,
                borderRadius: '0.5rem',
                borderColor: '#e7e5e4',
                boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                minHeight: '40px',
                '&:hover': { borderColor: '#d6d3d1' },
              }),
              multiValue: (base) => ({
                ...base,
                borderRadius: '6px',
                background: '#fef2f2',
              }),
              multiValueLabel: (base) => ({
                ...base,
                color: '#b91c1c',
              }),
              multiValueRemove: (base) => ({
                ...base,
                color: '#b91c1c',
                '&:hover': { background: '#fecaca', color: '#991b1b' },
              }),
            }}
            {...form.$('fieldFactory').bind()}
          />
        </div>

        <div className="divider" />

        <h4 className="text-sm font-medium text-surface-700 mb-3">
          {form.$('dynamicFields').label || 'Dynamic Fields'}
        </h4>

        {form.$('dynamicFields').size > 0 ? (
          <div className="space-y-1">
            {form.$('dynamicFields').map(field => (
              <div key={field.name} className="bg-surface-50 rounded-lg px-3 py-1 border border-surface-100">
                <MaterialTextField field={field} />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-surface-400 italic py-4 text-center">
            Add fields above to see them appear here
          </p>
        )}
      </div>
      <div className="card-footer">
        <FormControls form={form} />
      </div>
    </div>
  </form>
));
