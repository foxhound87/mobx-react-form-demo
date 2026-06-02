import React from 'react';
import { observer } from 'mobx-react';
import _ from 'lodash';

import MobxReactFormDevTools from '../../modules/mobx-react-form-devtools/src'; // load from source

import Nav from './Nav';
import Switch from './Switch';

import forms from '../forms/_.forms';
import menu from '../menu';

const selected = $menu => _.keys(_.pickBy($menu, _.identity))[0];
const select = val => MobxReactFormDevTools.select(val);

MobxReactFormDevTools.register(forms);
MobxReactFormDevTools.select(selected(menu));
MobxReactFormDevTools.open(true);

export default observer(() => (
  <div className="min-h-screen bg-surface-50">
    <MobxReactFormDevTools.UI />
    <Nav menu={menu} select={select} selected={selected(menu)} />

    <main className="pt-14">
      <div className="max-w-form mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <Switch menu={menu} forms={forms} />
      </div>

      <footer className="text-center py-6 text-xs text-surface-400 border-t border-surface-200 mt-12">
        Powered by{' '}
        <a
          href="https://github.com/foxhound87/mobx-react-form"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-500 hover:text-brand-600 underline underline-offset-2"
        >
          mobx-react-form
        </a>
      </footer>
    </main>
  </div>
));
