import React from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import _ from 'lodash';

import MobxReactFormDevTools from 'mobx-react-form-devtools';
// import MobxReactFormDevTools from '../../devtools/lib'; // load from build
// import MobxReactFormDevTools from '../../devtools/src'; // load from source

import Menu from './Menu';
import Switch from './Switch';

import forms from '../forms/_.forms';
import menu from '../menu';

// selected menu item
const selected = _.keys(_.pickBy(menu, _.identity))[0];

MobxReactFormDevTools.register(forms);
MobxReactFormDevTools.select(selected);
MobxReactFormDevTools.open(true);

export default observer(() => (
  <div>
    <MobxReactFormDevTools.UI />
    <DevTools position={{ bottom: 0, left: '50px' }} />
    <Menu menu={menu} />
    <Switch menu={menu} forms={forms} />
  </div>
));

