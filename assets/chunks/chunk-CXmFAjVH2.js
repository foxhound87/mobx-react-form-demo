var e=`import React from 'react';
import { observer } from 'mobx-react';
import SimpleFile from '../inputs/SimpleFile';
import DropZone from '../inputs/DropZone';
import FormControls from '../controls/FormControls';

export default observer(({ form }) => (
  <form>
    <div className="card">
      <div className="card-header">
        <h2 className="text-lg font-medium text-surface-900">File Upload</h2>
        <p className="text-sm text-surface-500 mt-0.5">File input &amp; drag-and-drop zone</p>
      </div>
      <div className="card-body space-y-6">
        <div className="form-section">
          <h3 className="text-sm font-medium text-surface-700 mb-3">File Input</h3>
          <SimpleFile field={form.$('myFileUpload')} multiple />
        </div>
        <div className="form-section">
          <h3 className="text-sm font-medium text-surface-700 mb-3">Dropzone</h3>
          <DropZone field={form.$('myDropZone')} />
        </div>
      </div>
      <div className="card-footer">
        <FormControls form={form} />
      </div>
    </div>
  </form>
));
`;export{e as default};