import React from 'react';
import { observer } from 'mobx-react';

import Input from '../inputs/SimpleInput';
import Checkbox from '../inputs/SimpleCheckbox';
import FormControls from '../controls/FormControls';

export default observer(({ form }) => (
  <form>
    <h2 className="light-red">Form Register</h2>

    <Input field={form.$('username')} />
    <Input field={form.$('email')} />
    <Input field={form.$('emailConfirm')} />
    <Input field={form.$('password')} type="password" />
    <Input field={form.$('devSkills')} />
    <Checkbox field={form.$('terms')} />
    <FormControls form={form} />
  </form>
));
