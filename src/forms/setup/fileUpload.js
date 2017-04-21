export default {
  fields: {
    myFileUpload: {
      type: 'file',
      onDrop: field => console.log('onDrop', field.files),
    },
    myDropZone: {
      type: 'file',
      onDrop: field => console.log('onDrop', field.files),
    },
  },
};
