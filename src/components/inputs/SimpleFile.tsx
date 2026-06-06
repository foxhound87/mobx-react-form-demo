import React from 'react';
import { observer } from 'mobx-react';
import { action } from 'mobx';
import _ from 'lodash';
import { Upload, Database, X } from 'lucide-react';

const getFiles = field => (e) => {
  e.preventDefault();
  console.log(field.name, '>> getFiles', _.map(field.files));
};

const createPreview = (file) => {
  file.preview = window.URL.createObjectURL(file);
  return file.preview;
};

const destroyPreview = (file, field) => (e) => {
  e.preventDefault();
  window.URL.revokeObjectURL(file.preview);
  const index = field.files.indexOf(file);
  action(() => field.files.splice(index, 1))();
};

export default observer(({
  field, multiple = false,
}) => (
  <div className="mb-4">
    <div className="flex items-center gap-3">
      <label
        htmlFor="files-input"
        className="btn-primary cursor-pointer"
      >
        <Upload size={16} />
        Select File...
      </label>
      <input
        {...field.bind({ id: 'files-input' })}
        multiple={multiple}
        className="hidden"
      />
      <button
        onClick={getFiles(field)}
        className="btn-ghost"
      >
        <Database size={16} />
        Get Files
      </button>
    </div>
    {field.error && (
      <p className="form-error-text mt-2">{field.error}</p>
    )}
    {(field.files && field.files.length) ? (
      <div className="mt-4">
        <p className="text-sm font-medium text-surface-700 mb-3">
          Uploading {field.files.length} files...
        </p>
        <div className="flex flex-wrap gap-3">
          {field.files.map(file => (
            <button
              key={file.name}
              onClick={destroyPreview(file, field)}
              className="relative group rounded-lg overflow-hidden shadow-card hover:shadow-elevated transition-shadow duration-150"
            >
              <img
                className="w-20 h-20 object-cover"
                src={createPreview(file)}
                alt={file.name}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <X size={24} className="text-white" />
              </div>
            </button>
          ))}
        </div>
      </div>
    ) : null}
  </div>
));
