import vjf from 'mobx-react-form/src/validators/VJF';
import dvr from 'mobx-react-form/src/validators/DVR';
import validatorjs from 'validatorjs';

import MobxReactForm from 'mobx-react-form/src'; // load from source (MASTER)
// import MobxReactForm from 'mobx-react-form/lib'; // load from build (FALLBACK)

import formHooks from './_.hooks.form';
import bindings from './_.bindings';
import dvrExtend from './extension/dvr';
// import svkExtend from './extension/svk';

export default class Form<F extends Record<string, any> = Record<string, any>> extends MobxReactForm<F> {

  bindings() {
    return bindings;
  }

  hooks() {
    return formHooks;
  }

  plugins() {
    return {
      vjf: vjf(),
      dvr: dvr({
        package: validatorjs,
        extend: dvrExtend,
      }),
    };
  }

  options() {
    return {
      defaultGenericError: 'Invalid Data',
      autoParseNumbers: true,
    };
  }
}
