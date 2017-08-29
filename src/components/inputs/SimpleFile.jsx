import React from 'react';
import { observer } from 'mobx-react';
import { action } from 'mobx';
import $ from '../../styles';

const getFiles = field => (e) => {
  e.preventDefault();
  // eslint-disable-next-line
  alert('see console');
  // eslint-disable-next-line
  console.log(field.name, '>> getFiles', field.files);
};

const createPreview = (file) => {
  // eslint-disable-next-line
  file.preview = window.URL.createObjectURL(file);
  return file.preview;
};

const destroyPreview = (file, field) => (e) => {
  e.preventDefault();
  // eslint-disable-next-line
  window.URL.revokeObjectURL(file.preview);
  // eslint-disable-next-line
  console.log('file.preview', file.preview);
  // remove file from array
  const index = field.files.indexOf(file);
  action(() => field.files.splice(index, 1))();
};

export default observer(({
  field, multiple = false,
}) => (
  <div>
    <input
      {...field.bind()}
      multiple={multiple}
      className={$.ctrl}
    />
    <button
      onClick={getFiles(field)}
      className={$.ctrl}
    >
      Get Files
    </button>
    {(field.files && field.files.length) ? <div>
      <h2>Uploading {field.files.length} files...</h2>
      <div>{field.files.map(file =>
        <button
          key={file.name}
          onClick={destroyPreview(file, field)}
          className={$.ctrl}
        >
          <img
            className="w-10 h-10"
            src={createPreview(file)}
            alt={file.name}
          />
        </button>)}
      </div>
    </div> : null}
  </div>
));
