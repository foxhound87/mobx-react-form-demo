import React from 'react';
import { observer } from 'mobx-react';
import MaterialTextField from '../inputs/MaterialTextField';
import MaterialSwitch from '../inputs/MaterialSwitch';
import FormControls from '../controls/FormControls';

export default observer(({ form }) => (
  <form>
    <div className="card">
      <div className="card-header">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-medium text-surface-900">Register</h2>
            <p className="text-sm text-surface-500 mt-0.5">Material UI components</p>
          </div>
          <span className="badge bg-brand-50 text-brand-600 border border-brand-200">MUI</span>
        </div>
      </div>
      <div className="card-body">
        <MaterialTextField field={form.$('username')} />
        <MaterialTextField field={form.$('email')} />
        <MaterialTextField field={form.$('emailConfirm')} />
        <MaterialTextField field={form.$('password')} type="password" />
        <MaterialTextField field={form.$('devSkills')} />
        <div className="divider !my-4" />
        <MaterialSwitch field={form.$('terms')} />
      </div>
      <div className="card-footer">
        <FormControls form={form} />
      </div>
    </div>
  </form>
));
