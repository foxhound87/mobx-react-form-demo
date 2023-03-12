/*
  Form: File Upload
  Unified Fields Props Definition
*/
export default {
  fields: {
    myFileUpload: {
      type: 'file',
      hooks: {
        onDrop: field => console.log('onDrop', field.files),
        // onSubmit: field => console.log('onSubmit', field.files),
      },
    },
    myDropZone: {
      type: 'file',
      hooks: {
        onDrop: field => console.log('onDrop', field.files),
        // onSubmit: field => console.log('onSubmit', field.files),
      },
    },
  },
};
