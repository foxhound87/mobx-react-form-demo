import React, { useEffect, useState, useRef } from 'react';
import { observer } from 'mobx-react';
import { action } from 'mobx';
import _ from 'lodash';
import {
  LogIn,
  UserPlus,
  ShieldCheck,
  ListChecks,
  Clock,
  Layers,
  List,
  Grid3x3,
  ShieldAlert,
  Eye,
  GitBranch,
  Package,
  GitBranch as GitBranchIcon,
  Menu,
  X,
  FileText,
  Upload,
  Code,
  Variable,
  GripVertical,
  ArrowRightCircle,
} from 'lucide-react';
import GithubStars from './GithubStars';

const switchTo = (menu, select) => (value) => {
  select(value);
  action(() => _.map(menu, ($val, $key) => _.set(menu, $key, false)))();
  action(() => _.set(menu, value, true))();
  const params = new URLSearchParams(window.location.search);
  params.set('section', value);
  window.history.pushState({}, '', `${window.location.pathname}?${params.toString()}`);
};

const navGroups = [
  {
    label: 'Basics',
    items: [
      { value: 'login', label: 'Login Form', icon: LogIn },
      { value: 'registerSimple', label: 'Registration Form', icon: UserPlus },
    ],
  },
  {
    label: 'Validation',
    items: [
      { value: 'validationDvr', label: 'DVR', icon: ShieldCheck },
      { value: 'validationVjf', label: 'VJF', icon: ListChecks },
      { value: 'validationZod', label: 'ZOD', icon: ShieldCheck },
      { value: 'validationAsync', label: 'Async', icon: Clock },
    ],
  },
  {
    label: 'Dynamic Data',
    items: [
      { value: 'arrays', label: 'Arrays', icon: Layers },
      { value: 'nestedFields', label: 'Nested', icon: Grid3x3 },
      { value: 'bubbleErrors', label: 'Bubble Errors', icon: Grid3x3 },
      { value: 'dynamicFieldsSelect', label: 'Dynamic Fields', icon: List },
    ],
  },
  {
    label: 'Advanced',
    items: [
      { value: 'interceptors', label: 'Interceptors', icon: ShieldAlert },
      { value: 'observers', label: 'Observers', icon: Eye },
      { value: 'composer', label: 'Composer', icon: GitBranch },
      { value: 'reactiveComputed', label: 'Reactive Computed', icon: Variable },
      { value: 'crossValidation', label: 'Cross Validation', icon: GitBranch },
      { value: 'nestedComposition', label: 'Nested Composition', icon: Layers },
      { value: 'wizard', label: 'Wizard', icon: ArrowRightCircle },
      { value: 'bindingsDemo', label: 'Bindings', icon: Code },
      { value: 'markdown', label: 'Markdown', icon: FileText },
      { value: 'fileUpload', label: 'File Upload', icon: Upload },
      { value: 'sortableList', label: 'Sortable List', icon: GripVertical },
    ],
  },
  {
    label: 'UI Libraries',
    items: [
      { value: 'registerMaterial', label: 'Material UI', icon: FileText },
      { value: 'materialAdvanced', label: 'Material Adv.', icon: FileText },
      { value: 'companySimple', label: 'Vanilla', icon: FileText },
      { value: 'companyWidgets', label: 'Widgets', icon: FileText },
      { value: 'headlessUI', label: 'Headless UI', icon: FileText },
      { value: 'antd', label: 'Ant Design', icon: FileText },
      { value: 'aria', label: 'React Aria', icon: FileText },
      { value: 'reactSelect', label: 'React-Select', icon: ListChecks },
      { value: 'reactMultiSelect', label: 'React-Multi', icon: ListChecks },
    ],
  },
];

export default observer(({ menu, select, selected }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const drawerRef = useRef(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const section = params.get('section');
    if (section && menu[section] !== undefined) {
      action(() => _.map(menu, ($val, $key) => _.set(menu, $key, false)))();
      action(() => _.set(menu, section, true))();
    }
  }, [menu]);

  useEffect(() => {
    if (!mobileOpen) return;
    const handler = (e) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [mobileOpen]);

  const handleSelect = (value) => {
    switchTo(menu, select)(value);
    setMobileOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-surface-200 shadow-nav">
        <div className="px-4 sm:px-6">
          <div className="flex items-center h-14 gap-2">
            <button onClick={() => handleSelect('welcome')} className="flex items-center gap-3 min-w-0 flex-shrink-0">
              <div className="w-7 h-7 rounded-lg bg-brand-500 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="text-left">
                <h1 className="text-sm font-semibold text-surface-900 leading-tight">MobX React Form</h1>
                <p className="text-[10px] text-surface-400 leading-tight">Demo</p>
              </div>
              {process.env.NODE_ENV === 'development' && (
                <div className="ml-1 self-center">
                  <span
                    className={`inline-flex items-center rounded-full px-1.5 py-0.5 text-[9px] font-mono font-medium leading-tight ${
                      MRF_SOURCE.includes('modules')
                        ? 'bg-amber-100 text-amber-700'
                        : 'bg-blue-100 text-blue-700'
                    }`}
                    title={MRF_SOURCE}
                  >
                    {MRF_SOURCE.includes('modules') ? 'modules' : 'node_modules'}
                  </span>
                </div>
              )}
            </button>

            <div className="hidden md:flex items-center gap-1 ml-auto">
              <a
                href="https://www.npmjs.com/package/mobx-react-form"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link text-xs"
                title="NPM"
              >
                <Package size={14} />
                <span className="hidden lg:inline">NPM</span>
              </a>
              <a
                href="https://foxhound87.github.io/mobx-react-form"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link text-xs"
                title="Docs"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span className="hidden lg:inline">Docs</span>
              </a>
              <a
                href="https://github.com/foxhound87/mobx-react-form"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link text-xs"
                title="GitHub"
              >
                <GitBranchIcon size={14} />
                <span className="hidden lg:inline">GitHub</span>
              </a>
              <GithubStars />
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden btn-ghost !px-2 !py-2 ml-auto"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <aside className="hidden md:flex fixed top-14 left-0 bottom-0 z-30 w-56 flex-col bg-white border-r border-surface-200">
        <div className="flex-1 overflow-y-auto py-4 px-2">
          {navGroups.map((group) => (
            <div key={group.label} className="mb-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-surface-400 px-3 mb-1.5">
                {group.label}
              </p>
              <div className="space-y-0.5">
                {group.items.map((s) => {
                  const Icon = s.icon;
                  return (
                    <button
                      key={s.value}
                      onClick={() => handleSelect(s.value)}
                      className={`w-full flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-150 ${
                        selected === s.value
                          ? 'bg-brand-50 text-brand-600'
                          : 'text-surface-600 hover:text-surface-900 hover:bg-surface-100'
                      }`}
                    >
                      <Icon size={16} className={selected === s.value ? 'text-brand-500' : 'text-surface-400'} />
                      {s.label}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </aside>

      <div
        className={`fixed inset-0 top-14 z-40 bg-surface-900/30 transition-all duration-300 ease-out md:hidden ${
          mobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileOpen(false)}
      />

      <div
        ref={drawerRef}
        className={`fixed top-14 left-0 bottom-0 z-50 w-72 bg-white border-r border-surface-200 shadow-elevated transition-all duration-300 ease-out md:hidden flex flex-col ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex-1 overflow-y-auto py-3">
          {navGroups.map((group) => (
            <div key={group.label} className="px-3 pt-4 first:pt-0">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-surface-400 px-3 mb-1">
                {group.label}
              </p>
              <div className="space-y-0.5">
                {group.items.map((s) => {
                  const Icon = s.icon;
                  return (
                    <button
                      key={s.value}
                      onClick={() => handleSelect(s.value)}
                      className={`w-full flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-150 ${
                        selected === s.value
                          ? 'bg-brand-50 text-brand-600'
                          : 'text-surface-600 hover:text-surface-900 hover:bg-surface-100'
                      }`}
                    >
                      <Icon size={16} className={selected === s.value ? 'text-brand-500' : 'text-surface-400'} />
                      {s.label}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-surface-200 px-3 py-3 flex items-center gap-2">
          <a
            href="https://foxhound87.github.io/mobx-react-form"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-surface-600 hover:text-surface-900 hover:bg-surface-100 transition-all duration-150"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg> Docs
          </a>
          <a
            href="https://www.npmjs.com/package/mobx-react-form"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-surface-600 hover:text-surface-900 hover:bg-surface-100 transition-all duration-150"
          >
            <Package size={16} /> NPM
          </a>
          <a
            href="https://github.com/foxhound87/mobx-react-form"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-surface-600 hover:text-surface-900 hover:bg-surface-100 transition-all duration-150"
          >
            <GitBranchIcon size={16} /> GitHub
          </a>
        </div>
      </div>
    </>
  );
});
