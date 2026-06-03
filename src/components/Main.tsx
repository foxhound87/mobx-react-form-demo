import React from 'react';
import { observer } from 'mobx-react';
import { action } from 'mobx';
import _ from 'lodash';

import MobxReactFormDevTools from 'mobx-react-form-devtools';
import devtoolsStore from 'mobx-react-form-devtools/store';

import Nav from './Nav';
import Switch from './Switch';

import forms from '../forms/_.forms';
import menu from '../menu';

const selected = $menu => _.keys(_.pickBy($menu, _.identity))[0];
const formKeys = _.keys(forms);

const selectDevtools = action((val) => {
  if (!val || !formKeys.includes(val)) {
    devtoolsStore.selected.key = null;
    devtoolsStore.selected.form = null;
    return;
  }
  MobxReactFormDevTools.open(true);
  MobxReactFormDevTools.select(val);
});

const navigateTo = (key) => {
  selectDevtools(key);
  action(() => _.map(menu, ($val, $k) => _.set(menu, $k, false)))();
  action(() => _.set(menu, key, true))();
  const params = new URLSearchParams(window.location.search);
  params.set('section', key);
  window.history.pushState({}, '', `${window.location.pathname}?${params.toString()}`);
};

MobxReactFormDevTools.register(forms);

export default observer(() => {
  const active = selected(menu);
  const isWelcome = !active || !formKeys.includes(active);
  const [isMd, setIsMd] = React.useState(window.innerWidth >= 768);

  React.useEffect(() => {
    const handler = () => setIsMd(window.innerWidth >= 768);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  React.useEffect(() => {
    if (isWelcome) {
      action(() => {
        devtoolsStore.selected.key = null;
        devtoolsStore.selected.form = null;
      })();
      try {
        if (localStorage.getItem('mrf-open') === null) {
          MobxReactFormDevTools.open(true);
        }
      } catch {
        MobxReactFormDevTools.open(true);
      }
    } else {
      MobxReactFormDevTools.select(active);
    }
  }, [active]);

  const dockOffset = isMd && !devtoolsStore.windowIsOpen && devtoolsStore.open
    ? devtoolsStore.dock.size
    : 0;

  return (
    <div className="min-h-screen bg-surface-50">
      <MobxReactFormDevTools.UI />
      <Nav menu={menu} select={selectDevtools} selected={active} />

      <main className="pt-14 md:pl-56" style={{ marginRight: dockOffset }}>
        {isWelcome ? (
          <Switch menu={menu} forms={forms} navigateTo={navigateTo} />
        ) : (
          <div className="max-w-form mx-auto px-4 sm:px-6 py-8 sm:py-12">
            <Switch menu={menu} forms={forms} navigateTo={navigateTo} />
          </div>
        )}

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
  );
});
