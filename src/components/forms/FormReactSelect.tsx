import React from 'react';
import { observer } from 'mobx-react';
import Select from 'react-select';
import FormControls from '../controls/FormControls';

export default observer(({ form }) => {
  const field = form.$('products');
  return (
    <form>
      <div className="card">
        <div className="card-header">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-medium text-surface-900">Single Select</h2>
              <p className="text-sm text-surface-500 mt-0.5">React-Select single option picker</p>
            </div>
            <span className="badge bg-amber-50 text-amber-700 border border-amber-200">react-select</span>
          </div>
        </div>
        <div className="card-body">
          <div className="mb-4">
            <label htmlFor={field.id} className="form-label">{field.label}</label>
            <Select
              {...field.bind()}
              options={field.extra}
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
              }}
            />
            {field.error && <p className="form-error-text">{field.error}</p>}
          </div>
        </div>
        <div className="card-footer">
          <FormControls form={form} />
        </div>
      </div>
    </form>
  );
});
