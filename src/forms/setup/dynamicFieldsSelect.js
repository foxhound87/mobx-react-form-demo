import _ from 'lodash';

/*
  Form: Dynamic Fields Select
  Separated Fields Props Definition
*/

export default {

  fields: [
    'fieldFactory',
    'dynamicFields',
    'dynamicFields[]',
  ],

  labels: {
    dynamicFields: 'Dynamic Fields',
  },

  extra: {
    fieldFactory: [
      { value: 'foo', label: 'foo' },
      { value: 'bar', label: 'bar' },
      { value: 'baz', label: 'baz' },
    ],
  },

  handlers: {
    fieldFactory: {
      onChange: fieldFactory => (values) => {
        const dynamicFields = fieldFactory.state.form.$('dynamicFields');

        const $values = _.chain(values)
          .mapValues('value')
          .values()
          .value();

        // use "extra" field prop to maintain current values
        const current = dynamicFields.get('extra') || [];
        const diff = _.difference($values, current);
        dynamicFields.set('extra', $values);

        // add dynamic fields
        diff.map((item) => {
          dynamicFields.add('', { key: item });
          dynamicFields.$(item).set('placeholder', item);
          dynamicFields.$(item).set('bindings', 'MaterialTextField');
          return null;
        });

        // remove unwanted items
        const allDynamicFields = dynamicFields.map(field => field.name);
        const fieldsToDelete = _.remove(allDynamicFields, item => !_.includes($values, item));
        fieldsToDelete.map(field => dynamicFields.del(field));
        fieldFactory.set('value', values);
      },
    },
  },

};
