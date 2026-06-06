import React from 'react';
import { observer } from 'mobx-react';
import Dropzone from 'react-dropzone';
import { action } from 'mobx';
import { Upload, Database, X } from 'lucide-react';

const openDropZone = (dropzone) => (e) => {
  e.preventDefault();
  if (dropzone) dropzone.open();
};

const getFiles = field => (e) => {
  e.preventDefault();
  console.log(field.name, '>> getFiles', field.files);
};

const destroyPreview = (file, field) => (e) => {
  e.preventDefault();
  window.URL.revokeObjectURL(file.preview);
  const index = field.files[0].indexOf(file);
  action(() => field.files[0].splice(index, 1))();
};

export default observer(({ field }) => {
  let dropzoneRef = null;

  return (
    <div className="mb-4">
      <Dropzone
        // @ts-ignore
        children={({ isDragActive }: { isDragActive: boolean }) => (
          <div className="flex flex-col items-center gap-2">
            <Upload
              size={40}
              className={isDragActive ? 'text-brand-500' : 'text-surface-400'}
            />
            <p className={`text-sm ${isDragActive ? 'text-brand-600' : 'text-surface-500'}`}>
              {isDragActive
                ? 'Drop files here...'
                : 'Drag & drop files here, or click to select'}
            </p>
          </div>
        )}
        onDrop={field.onDrop}
        ref={(node) => {
          dropzoneRef = node;
          field.state.extra({ dropzone: node });
        }}
        activeStyle={{
          borderColor: '#fca5a5',
          backgroundColor: '#fef2f2',
        }}
        style={{
          border: '2px dashed #d6d3d1',
          borderRadius: '0.75rem',
          padding: '2rem',
          textAlign: 'center',
          cursor: 'pointer',
          transition: 'all 0.15s ease-in-out',
          backgroundColor: '#fafaf9',
        }}
      />

      <div className="flex items-center gap-3 mt-3">
        <button
          type="button"
          onClick={openDropZone(dropzoneRef)}
          className="btn-ghost"
        >
          <Database size={16} />
          Open Dropzone
        </button>
        <button onClick={getFiles(field)} className="btn-ghost">
          <Database size={16} />
          Get Files
        </button>
      </div>

      {field.error && (
        <p className="form-error-text mt-2">{field.error}</p>
      )}

      {(field.files && field.files[0] && field.files[0].length) ? (
        <div className="mt-4">
          <p className="text-sm font-medium text-surface-700 mb-3">
            Uploading {field.files[0].length} files...
          </p>
          <div className="flex flex-wrap gap-3">
            {field.files[0].map((file, i) => (
              <button
                key={i}
                onClick={destroyPreview(file, field)}
                className="relative group rounded-lg overflow-hidden shadow-card hover:shadow-elevated transition-shadow"
              >
                <img
                  className="w-20 h-20 object-cover"
                  src={file.preview}
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
  );
});
