import React from 'react';
import { observer } from 'mobx-react';

import ReactMarkdown from 'react-markdown';
import Textarea from '../inputs/SimpleTextarea';
import FormControls from '../controls/FormControls';

export default observer(({ form }) => (
  <form>
    <h2 className="light-red">Form Markdown</h2>

    <Textarea field={form.$('content')} />
    <ReactMarkdown source={form.$('content').value} />
    <FormControls form={form} />
  </form>
));
