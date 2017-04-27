import validatorjs from 'validatorjs';

import MobxReactForm from 'mobx-react-form'; // eslint-disable-line
// import MobxReactForm from '../../master/lib'; // load from build (MASTER)
// import MobxReactForm from '../../next/lib'; // load from build (NEXT)
// import MobxReactForm from '../../master/src'; // load from source (MASTER)
// import MobxReactForm from '../../next/src'; // load from source (NEXT)

import bindings from './_.bindings';
import dvrExtend from './extension/dvr';
// import svkExtend from './extension/svk';

export default class Form extends MobxReactForm {

  plugins() {
    return {
      dvr: {
        package: validatorjs,
        extend: dvrExtend,
      },
    };
  }

  options() {
    return {
      defaultGenericError: 'Invalid Data',
      autoParseNumbers: true,
    };
  }

  bindings() {
    return bindings;
  }

  onInit() {
    // override default bindings for all text inputs
    // eslint-disable-next-line
    (this.name === 'Register Material') &&
      this.each(field => field.type === 'text' &&
        field.set('bindings', 'MaterialTextField'));
  }

  onSuccess(form) {
    // eslint-disable-next-line
    alert('see console');
    // eslint-disable-next-line
    console.log('Form Values', form.values());
  }

  onError(form) {
    // eslint-disable-next-line
    alert('see console');
    // eslint-disable-next-line
    console.log('Form Errors', form.errors());
  }
}
