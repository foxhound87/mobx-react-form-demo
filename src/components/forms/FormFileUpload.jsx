import React from 'react';
import { observer } from 'mobx-react';

import SimpleFile from '../inputs/SimpleFile';
import DropZone from '../inputs/DropZone';
import FormControls from '../controls/FormControls';

export default observer(({ form }) => (
  <form>
    <h2 className="light-red">Form File Upload</h2>

    <SimpleFile field={form.$('myFileUpload')} multiple />
    <br /><hr />
    <h2 className="light-red">Dropzone</h2>
    <DropZone field={form.$('myDropZone')} />
    <br /><hr /><br />
    <FormControls form={form} />
  </form>
));
