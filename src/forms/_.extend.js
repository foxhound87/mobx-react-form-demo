import validatorjs from 'validatorjs';

// import MobxReactForm from 'mobx-react-form'; // eslint-disable-line
import MobxReactForm from '../../modules/form/src'; // load from source (MASTER)
// import MobxReactForm from '../../modules/form/lib'; // load from build (MASTER)

import hooks from './_.hooks';
import bindings from './_.bindings';
import dvrExtend from './extension/dvr';
// import svkExtend from './extension/svk';

export default class Form extends MobxReactForm {

  bindings() {
    return bindings;
  }

  hooks() {
    return hooks;
  }

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
}
