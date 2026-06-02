import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { action } from 'mobx';
import _ from 'lodash';

const switchTo = (menu, select) => (value) => {
  select(value);
  action(() => _.map(menu, ($val, $key) => _.set(menu, $key, false)))();
  action(() => _.set(menu, value, true))();
  const params = new URLSearchParams(window.location.search);
  params.set("section", value);
  window.history.pushState({}, "", `${window.location.pathname}?${params.toString()}`);
};

const sections = [
  { value: 'registerMaterial', label: 'Register (MUI)' },
  { value: 'registerSimple', label: 'Register (Simple)' },
  { value: 'companyWidgets', label: 'Company (Widgets)' },
  { value: 'companySimple', label: 'Company (Simple)' },
  { value: 'nestedFields', label: 'Nested Fields' },
  { value: 'sortableList', label: 'Sortable List' },
  { value: 'fileUpload', label: 'File Upload' },
  { value: 'markdown', label: 'Markdown' },
  { value: 'dynamicFieldsSelect', label: 'Dynamic Fields' },
];

export default observer(({ menu, select, selected }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const section = params.get("section");
    if (section && menu[section] !== undefined) {
      select(section);
      action(() => _.map(menu, ($val, $key) => _.set(menu, $key, false)))();
      action(() => _.set(menu, section, true))();
    }
  }, [menu, select]);

  const handleSelect = (value) => {
    switchTo(menu, select)(value);
    setMobileOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-surface-200 shadow-nav">
      <div className="px-4 sm:px-6">
        <div className="flex items-center h-14 gap-2">
          {/* Logo / Title */}
          <div className="flex items-center gap-3 min-w-0 flex-shrink-0">
            <div className="w-7 h-7 rounded-lg bg-brand-500 flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-sm font-semibold text-surface-900 leading-tight">MobX React Form</h1>
              <p className="text-[10px] text-surface-400 leading-tight">Demo</p>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1 overflow-x-auto ml-2">
            {sections.map(s => (
              <button
                key={s.value}
                onClick={() => handleSelect(s.value)}
                className={`nav-link whitespace-nowrap text-xs ${
                  selected === s.value ? 'nav-link-active' : ''
                }`}
              >
                {s.label}
              </button>
            ))}
          </nav>

          {/* Desktop right links */}
          <div className="hidden md:flex items-center gap-1 ml-auto">
            <a
              href="https://www.npmjs.com/package/mobx-react-form"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link text-xs"
              title="NPM"
            >
              <i className="fa fa-archive text-sm" />
              <span className="hidden lg:inline">NPM</span>
            </a>
            <a
              href="https://github.com/foxhound87/mobx-react-form"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link text-xs"
              title="GitHub"
            >
              <i className="fa fa-github text-sm" />
              <span className="hidden lg:inline">GitHub</span>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden btn-ghost !px-2 !py-2 ml-auto"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-surface-200 bg-white max-h-[60vh] overflow-y-auto">
          <div className="px-3 py-2 space-y-0.5">
            {sections.map(s => (
              <button
                key={s.value}
                onClick={() => handleSelect(s.value)}
                className={`w-full text-left nav-link text-sm ${
                  selected === s.value ? 'nav-link-active' : ''
                }`}
              >
                {s.label}
              </button>
            ))}
            <div className="divider !my-2" />
            <div className="flex items-center gap-2 px-3 py-2">
              <a href="https://www.npmjs.com/package/mobx-react-form" target="_blank" rel="noopener noreferrer" className="nav-link text-sm">
                <i className="fa fa-archive" /> NPM
              </a>
              <a href="https://github.com/foxhound87/mobx-react-form" target="_blank" rel="noopener noreferrer" className="nav-link text-sm">
                <i className="fa fa-github" /> GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
});
