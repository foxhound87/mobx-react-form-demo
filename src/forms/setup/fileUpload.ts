import type { FieldDefinition } from '../../../modules/mobx-react-form/src';

/*
  Form: File Upload
  Unified Fields Props Definition
*/
const fields: Record<string, FieldDefinition> = {
  myFileUpload: {
    type: 'file',
    hooks: {
      onDrop: field => console.log('onDrop', field.files),
    },
  },
  myDropZone: {
    type: 'file',
    hooks: {
      onDrop: field => console.log('onDrop', field.files),
    },
  },
};

export default { fields };

