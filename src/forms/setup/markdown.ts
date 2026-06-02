import type { FieldDefinition } from '../../../modules/mobx-react-form/src';
import * as markdownData from '../data/example.md';

/*
  Form: Markdown
  Unified Fields Props Definition
*/
const fields: Record<string, FieldDefinition> = {
  content: {
    label: 'Markdown Text',
    value: markdownData.default,
  },
};

export default { fields };

