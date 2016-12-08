import React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import MobxReactFormDevTools from 'mobx-react-form-devtools';
// import MobxReactFormDevTools from '../../devtools/lib'; // load from build
// import MobxReactFormDevTools from '../../devtools/src'; // load from source

import Menu from './Menu';
import Switch from './Switch';

import forms from '../forms/_.forms';
import menu from '../menu';

MobxReactFormDevTools.register(forms);
MobxReactFormDevTools.select('registerMaterial');
MobxReactFormDevTools.open(true);

export default observer(() => (
  <div>
    <MobxReactFormDevTools.UI />
    <DevTools position={{ bottom: 0, left: '50px' }} />
    <Menu data={observable(menu)} />
    <Switch menu={menu} forms={forms} />
  </div>
));

