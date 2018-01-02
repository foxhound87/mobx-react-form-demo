import React from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import _ from 'lodash';

// import MobxReactFormDevTools from 'mobx-react-form-devtools';
// import MobxReactFormDevTools from '../../devtools/lib'; // load from build
import MobxReactFormDevTools from '../../devtools/src'; // load from source

import Nav from './Nav';
import Switch from './Switch';

import forms from '../forms/_.forms';
import menu from '../menu';

// selected menu item
const selected = $menu => _.keys(_.pickBy($menu, _.identity))[0];
const select = val => MobxReactFormDevTools.select(val);

MobxReactFormDevTools.register(forms);
MobxReactFormDevTools.select(selected(menu));
MobxReactFormDevTools.open(true);

const Container = observer(({ content }) => (
  <div className="cf helvetica">
    <div className="fl w-100 w-50-ns measure center ph2 ph5-ns pv5">
      {content}
    </div>
    <div className="fl w-100 w-50-ns" />
  </div>
));

export default observer(() => (
  <div>
    <DevTools position={{ bottom: 0, left: '50px' }} />
    <MobxReactFormDevTools.UI />
    <Nav menu={menu} select={select} selected={selected(menu)} />
    <Container content={<Switch menu={menu} forms={forms} />} />
  </div>
));

