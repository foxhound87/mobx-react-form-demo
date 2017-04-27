import React from 'react';
import { observer } from 'mobx-react';

import MaterialTextField from '../inputs/MaterialTextField';
import MaterialToggle from '../inputs/MaterialToggle';
import FormControls from '../controls/FormControls';

export default observer(({ form }) => (
  <form>
    <h2 className="light-red">Form Register</h2>
    <h4>Material UI</h4>

    <MaterialTextField field={form.$('username')} />
    <MaterialTextField field={form.$('email')} />
    <MaterialTextField field={form.$('emailConfirm')} />
    <MaterialTextField field={form.$('password')} type="password" />
    <MaterialTextField field={form.$('devSkills')} />
    <MaterialToggle field={form.$('terms')} />
    <FormControls form={form} />
  </form>
));
