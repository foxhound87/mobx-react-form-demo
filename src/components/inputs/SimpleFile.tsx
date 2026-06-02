import React from 'react';
import { observer } from 'mobx-react';
import { action } from 'mobx';
import _ from 'lodash';

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
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
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
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
        </svg>
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
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>
    ) : null}
  </div>
));
