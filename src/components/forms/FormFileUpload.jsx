import React from 'react';
import { observer } from 'mobx-react';

import SimpleFile from '../inputs/SimpleFile';
import DropZone from '../inputs/DropZone';
import FormControls from '../controls/FormControls';

export default observer(({ form }) => (
  <div className="container material">
    <form>
      <h2>Form File Upload</h2>

      <SimpleFile field={form.$('myFileUpload')} multiple />
      <br /><hr /><br />
      <DropZone field={form.$('myDropZone')} />
      <br /><hr /><br />
      <FormControls form={form} />
    </form>
  </div>
));
