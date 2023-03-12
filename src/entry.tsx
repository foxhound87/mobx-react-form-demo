import React from 'react';
// import { createRoot } from 'react-dom/client';
import { render } from 'react-dom';
// import moment from 'moment';
// import injectTapEventPlugin from 'react-tap-event-plugin';
// import momentLocalizer from 'react-widgets-moment';
import { configure } from 'mobx';

import "react-widgets/styles.css";
import './style.css';

import Main from './components/Main';

configure({
  enforceActions: 'always',
});

// moment.locale('en');
// momentLocalizer();
// injectTapEventPlugin();

// const root = createRoot(document.querySelector('#app'))
// root.render(<Main />);

render(
  <Main />,
  document.querySelector('#app') // eslint-disable-line
);
