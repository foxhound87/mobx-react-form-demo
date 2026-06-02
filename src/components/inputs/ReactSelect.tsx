import React from 'react';
import { observer } from 'mobx-react';
import Select from 'react-select';

export default observer(({ field }) => {
  const options = (field.extra || []).map((opt) =>
    typeof opt === 'string' ? { value: opt, label: opt } : opt
  );
  return (
    <div className="mb-4">
      <label htmlFor={field.id} className="form-label">{field.label}</label>
      <Select
        {...field.bind()}
        options={options}
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
  );
});
