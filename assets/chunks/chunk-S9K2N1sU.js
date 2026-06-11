var e=`import type { FieldDefinition } from 'mobx-react-form';
import markdownData from '../data/example.md?raw';

/*
  Form: Markdown
  Unified Fields Props Definition
*/
const fields: Record<string, FieldDefinition> = {
  content: {
    label: 'Markdown Text',
    value: markdownData,
  },
};

export default { fields };

`;export{e as default};