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
      autoParseNumbers: true,
    };
  }

  bindings() {
    return bindings;
  }

  onSuccess(form) {
    alert('Form is valid! Send the request here.'); // eslint-disable-line
    // get all fields values...
    console.log('Form Values!', form.values()); // eslint-disable-line
  }

  onError(form) {
    // get all form errors...
    console.log('All form errors', form.errors());  // eslint-disable-line
    // invalidate the form with a custom error message
    form.invalidate('This is a generic error message!');
  }
}
