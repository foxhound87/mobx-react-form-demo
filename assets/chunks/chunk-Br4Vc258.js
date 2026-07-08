var e=`import React from 'react';
import { observer } from 'mobx-react';
import ReactMarkdown from 'react-markdown';
import Textarea from '../inputs/SimpleTextarea';
import FormControls from '../controls/FormControls';

export default observer(({ form }) => (
  <form>
    <div className="card">
      <div className="card-header">
        <h2 className="text-lg font-medium text-surface-900">Markdown Editor</h2>
        <p className="text-sm text-surface-500 mt-0.5">Edit markdown with live preview</p>
      </div>
      <div className="card-body">
        <Textarea field={form.$('content')} />
        <div className="divider" />
        <div className="prose prose-sm max-w-none text-surface-700">
          <h4 className="text-sm font-medium text-surface-500 uppercase tracking-wider mb-3">Preview</h4>
          <ReactMarkdown children={form.$('content').value} />
        </div>
      </div>
      <div className="card-footer">
        <FormControls form={form} />
      </div>
    </div>
  </form>
));
`;export{e as default};