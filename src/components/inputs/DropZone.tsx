import React from 'react';
import { observer } from 'mobx-react';
import Dropzone from 'react-dropzone';
import { action } from 'mobx';
import $ from '../../styles';

const openDropZone = field => (e) => {
  e.preventDefault();
  field.state.extra('dropzone').open();
  // eslint-disable-next-line
  alert('see console');
  // eslint-disable-next-line
  console.log(field.name, '>> extra(\'dropzone\') >> open()');
};

const getFiles = field => (e) => {
  e.preventDefault();
  // eslint-disable-next-line
  console.log(field.name, '>> getFiles', field.files);
};

const destroyPreview = (file, field) => (e) => {
  e.preventDefault();
  // eslint-disable-next-line
  window.URL.revokeObjectURL(file.preview);
  // eslint-disable-next-line
  console.log('file.preview', file.preview);
  // remove file from array
  const index = field.files[0].indexOf(file);
  action(() => field.files[0].splice(index, 1))();
};

export default observer(({ field }) => (
  <div>
    <Dropzone onDrop={field.onDrop} ref={dropzone => field.state.extra({ dropzone })}>
      <div>Try dropping some files here, or click to select files to upload.</div>
    </Dropzone>
    <button
      type="button"
      onClick={openDropZone(field)}
      className={$.ctrl}
    >
      Open Dropzone
    </button>
    <button
      onClick={getFiles(field)}
      className={$.ctrl}
    >
      Get Files
    </button>
    {(field.files && field.files[0].length) ? <div>
      <h2>Uploading {field.files[0].length} files...</h2>
      <div>{field.files[0].map(file =>
        <button
          key={file.name}
          onClick={destroyPreview(file, field)}
          className={$.ctrl}
        >
          <img
            className="w-10 h-10"
            src={file.preview}
            alt={file.name}
          />
        </button>)}
      </div>
    </div> : null}
  </div>
));
