import React, { useEffect, useState, useRef } from 'react';
import { observer } from 'mobx-react';
import { action } from 'mobx';
import _ from 'lodash';
import { store as devtoolsStore } from 'mobx-react-form-devtools';
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
  BookOpen,
} from 'lucide-react';
import GithubStars from './GithubStars';

// Base path awareness for GitHub Pages subpath deployment
// (vite.config.ts sets `base: '/mobx-react-form-demo/'` for production builds).
const BASE_PATH = ((import.meta.env.BASE_URL as string | undefined) || '/').replace(/\/+$/, '') || '';
const stripBase = (path: string): string => {
  if (BASE_PATH && path.startsWith(BASE_PATH)) {
    path = path.slice(BASE_PATH.length);
  }
  return path.replace(/\/+$/, '') || '/';
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

function switchTo(menu, select, value) {
  if (select) select(value);
  if (menu) {
    action(() => _.map(menu, ($val, $key) => _.set(menu, $key, false)))();
    action(() => _.set(menu, value, true))();
  }
  const params = new URLSearchParams(window.location.search);
  params.set('section', value);
  window.history.pushState({}, '', `${window.location.pathname}?${params.toString()}`);
}

function getSelectedFromPath(rawPathname) {
  const pathname = stripBase(rawPathname);
  if (pathname === '/' || pathname === '') return 'welcome';
  if (pathname === '/browse-demos') return 'browseDemos';
  const match = pathname.match(/^\/form\/(.+)/);
  return match ? match[1] : null;
}

function getNavHref(value) {
  const path =
    value === 'welcome'
      ? '/'
      : value === 'browseDemos'
      ? '/browse-demos'
      : '/form/' + value;
  return BASE_PATH + path;
}

export default observer(({ menu, select, selected }) => {
  const active = selected !== null ? selected : (typeof window !== 'undefined' ? getSelectedFromPath(window.location.pathname) : null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const drawerRef = useRef(null);

  useEffect(() => {
    if (!menu) return;
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

  function navigateTo(value) {
    if (menu) {
      switchTo(menu, select, value);
    } else {
      const url = getNavHref(value);
      window.history.pushState({}, '', url);
      window.dispatchEvent(new CustomEvent('app-navigate'));
    }
  }

  const handleNavClick = (e, value) => {
    e.preventDefault();
    navigateTo(value);
    setMobileOpen(false);
  };

  const isBrowser = typeof window !== 'undefined';
  const dockOffset = isBrowser && window.innerWidth >= 768 && !devtoolsStore.windowIsOpen && devtoolsStore.open
    ? devtoolsStore.dock.size
    : 0;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-surface-200 shadow-nav">
        <div className="px-4 sm:px-6">
          <div className="flex items-center h-14 gap-2">
            <a href={BASE_PATH + '/'} data-vike="false" onClick={(e) => handleNavClick(e, 'welcome')} className="flex items-center gap-3 min-w-0 flex-shrink-0">
              <div className="w-7 h-7 rounded-lg bg-brand-500 flex items-center justify-center flex-shrink-0">
                <FileText size={14} className="text-white" />
              </div>
              <div className="text-left">
                <h1 className="text-sm font-semibold text-surface-900 leading-tight">MobX React Form</h1>
                <p className="text-[10px] text-surface-400 leading-tight">Demo</p>
              </div>
              {process.env.NODE_ENV === 'development' && typeof MRF_SOURCE !== 'undefined' && (
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
            </a>

            <div className="hidden md:flex items-center gap-1 ml-auto" style={{ marginRight: dockOffset }}>
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
                <BookOpen size={14} />
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
                    <a
                      key={s.value}
                      href={getNavHref(s.value)}
                      data-vike="false"
                      onClick={(e) => handleNavClick(e, s.value)}
                      className={`w-full flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-150 ${
                        active === s.value
                          ? 'bg-brand-50 text-brand-600'
                          : 'text-surface-600 hover:text-surface-900 hover:bg-surface-100'
                      }`}
                    >
                      <Icon size={16} className={active === s.value ? 'text-brand-500' : 'text-surface-400'} />
                      {s.label}
                    </a>
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
                    <a
                      key={s.value}
                      href={getNavHref(s.value)}
                      data-vike="false"
                      onClick={(e) => handleNavClick(e, s.value)}
                      className={`w-full flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-150 ${
                        active === s.value
                          ? 'bg-brand-50 text-brand-600'
                          : 'text-surface-600 hover:text-surface-900 hover:bg-surface-100'
                      }`}
                    >
                      <Icon size={16} className={active === s.value ? 'text-brand-500' : 'text-surface-400'} />
                      {s.label}
                    </a>
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
            <BookOpen size={16} /> Docs
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
