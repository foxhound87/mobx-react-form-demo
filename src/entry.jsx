import React from 'react';
import { render } from 'react-dom';
import moment from 'moment';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import momentLocalizer from 'react-widgets-moment';
import { useStrict } from 'mobx';

import 'react-widgets/lib/less/react-widgets.less';
import 'react-select/dist/react-select.css';

import './style.css';

import Main from './components/Main';

/**
  Enables MobX strict mode globally.
  In strict mode, it is not allowed to
  change any state outside of an action
 */
useStrict(true);

moment.locale('en');
momentLocalizer();
injectTapEventPlugin();

render(

  <MuiThemeProvider>
    <Main />
  </MuiThemeProvider>,

  document.querySelector('#app') // eslint-disable-line
);
