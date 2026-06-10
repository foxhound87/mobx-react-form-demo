import React, { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { observer } from 'mobx-react';
import { configure, action } from 'mobx';

import "react-widgets/styles.css";
import "antd/dist/antd.css";
import '../src/style.css';

import Nav from '../src/components/Nav';
import Welcome from '../src/components/Welcome';
import BrowseDemos from '../src/components/BrowseDemos';
import FormCodeViewer from '../src/components/FormCodeViewer';
import forms from '../src/forms/_.forms';

import { SSRProvider } from 'react-aria-components';

import MobxReactFormDevTools, { store as devtoolsStore } from 'mobx-react-form-devtools';

configure({ enforceActions: 'always' });

MobxReactFormDevTools.register(forms);

const FormLogin = lazy(() => import('../src/components/forms/FormLogin'));
const FormRegisterSimple = lazy(() => import('../src/components/forms/FormRegisterSimple'));
const FormValidationZod = lazy(() => import('../src/components/forms/FormValidationZod'));
const FormValidationDvr = lazy(() => import('../src/components/forms/FormValidationDvr'));
const FormValidationVjf = lazy(() => import('../src/components/forms/FormValidationVjf'));
const FormValidationAsync = lazy(() => import('../src/components/forms/FormValidationAsync'));
const FormArrays = lazy(() => import('../src/components/forms/FormArrays'));
const FormWithNestedFields = lazy(() => import('../src/components/forms/FormWithNestedFields'));
const FormDynamicFieldsSelect = lazy(() => import('../src/components/forms/FormDynamicFieldsSelect'));
const FormInterceptors = lazy(() => import('../src/components/forms/FormInterceptors'));
const FormObservers = lazy(() => import('../src/components/forms/FormObservers'));
const FormComposer = lazy(() => import('../src/components/forms/FormComposer'));
const FormBindingsDemo = lazy(() => import('../src/components/forms/FormBindingsDemo'));
const FormReactiveComputed = lazy(() => import('../src/components/forms/FormReactiveComputed'));
const FormCrossValidation = lazy(() => import('../src/components/forms/FormCrossValidation'));
const FormNestedComposition = lazy(() => import('../src/components/forms/FormNestedComposition'));
const FormWizard = lazy(() => import('../src/components/forms/FormWizard'));
const FormReactSelect = lazy(() => import('../src/components/forms/FormReactSelect'));
const FormReactMultiselect = lazy(() => import('../src/components/forms/FormReactMultiselect'));
const FormRegisterMaterial = lazy(() => import('../src/components/forms/FormRegisterMaterial'));
const FormMaterialAdvanced = lazy(() => import('../src/components/forms/FormMaterialAdvanced'));
const FormCompanySimple = lazy(() => import('../src/components/forms/FormCompanySimple'));
const FormCompanyWidgets = lazy(() => import('../src/components/forms/FormCompanyWidgets'));
const FormHeadlessUI = lazy(() => import('../src/components/forms/FormHeadlessUI'));
const FormAntd = lazy(() => import('../src/components/forms/FormAntd'));
const FormAria = lazy(() => import('../src/components/forms/FormAria'));
const FormMarkdown = lazy(() => import('../src/components/forms/FormMarkdown'));
const FormFileUpload = lazy(() => import('../src/components/forms/FormFileUpload'));
const FormSortableList = lazy(() => import('../src/components/forms/FormSortableList'));
const FormBubbleErrors = lazy(() => import('../src/components/forms/FormBubbleErrors'));

const formComponents = {
  login: FormLogin,
  registerSimple: FormRegisterSimple,
  validationDvr: FormValidationDvr,
  validationVjf: FormValidationVjf,
  validationZod: FormValidationZod,
  validationAsync: FormValidationAsync,
  arrays: FormArrays,
  nestedFields: FormWithNestedFields,
  dynamicFieldsSelect: FormDynamicFieldsSelect,
  interceptors: FormInterceptors,
  observers: FormObservers,
  composer: FormComposer,
  bindingsDemo: FormBindingsDemo,
  reactiveComputed: FormReactiveComputed,
  crossValidation: FormCrossValidation,
  nestedComposition: FormNestedComposition,
  wizard: FormWizard,
  reactSelect: FormReactSelect,
  reactMultiSelect: FormReactMultiselect,
  registerMaterial: FormRegisterMaterial,
  materialAdvanced: FormMaterialAdvanced,
  companySimple: FormCompanySimple,
  companyWidgets: FormCompanyWidgets,
  headlessUI: FormHeadlessUI,
  antd: FormAntd,
  aria: FormAria,
  markdown: FormMarkdown,
  fileUpload: FormFileUpload,
  sortableList: FormSortableList,
  bubbleErrors: FormBubbleErrors,
};

function DevToolsAuto({ section }) {
  const formKeys = Object.keys(forms);

  React.useEffect(() => {
    if (section && formKeys.includes(section)) {
      MobxReactFormDevTools.select(section);
      MobxReactFormDevTools.open(true);
    } else {
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
    }
  }, [section]);

  return null;
}

const Fallback = () => (
  <div className="flex items-center justify-center py-20">
    <div className="w-6 h-6 border-2 border-brand-500 border-t-transparent rounded-full animate-spin" />
  </div>
);

// The site is deployed at a subpath (e.g. /mobx-react-form-demo/) on GitHub
// Pages. The custom router below is base-path aware so the URL it stores in
// state and matches against (e.g. '/', '/form/login') is relative to the
// app root, not the origin. `navigate()` re-prepends the base when pushing
// history state.
const BASE_PATH = ((import.meta.env.BASE_URL as string | undefined) || '/').replace(/\/+$/, '') || '';
const stripBase = (path: string): string => {
  if (BASE_PATH && path.startsWith(BASE_PATH)) {
    path = path.slice(BASE_PATH.length);
  }
  return path.replace(/\/+$/, '') || '/';
};
const withBase = (url: string): string => {
  if (!BASE_PATH) return url;
  if (url.startsWith(BASE_PATH + '/') || url === BASE_PATH) return url;
  return url.startsWith('/') ? BASE_PATH + url : BASE_PATH + '/' + url;
};

function navigate(url) {
  window.history.pushState({}, '', withBase(url));
  window.dispatchEvent(new CustomEvent('app-navigate'));
}

const AppShell = observer(() => {
  const [pathname, setPathname] = React.useState(
    typeof window !== 'undefined'
      ? stripBase(window.location.pathname)
      : '/'
  );

  React.useEffect(() => {
    const handler = () => setPathname(stripBase(window.location.pathname));
    window.addEventListener('popstate', handler);
    window.addEventListener('app-navigate', handler);
    return () => {
      window.removeEventListener('popstate', handler);
      window.removeEventListener('app-navigate', handler);
    };
  }, []);

  const [isMd, setIsMd] = React.useState(
    typeof window !== 'undefined' ? window.innerWidth >= 768 : false
  );
  const dockOffset =
    isMd && !devtoolsStore.windowIsOpen && devtoolsStore.open
      ? devtoolsStore.dock.size
      : 0;

  const section = pathname.match(/^\/form\/(.+)/)?.[1] || null;

  function renderContent() {
    if (pathname === '/' || pathname === '') {
      return <Welcome onNavigate={() => navigate('/browse-demos')} />;
    }

    if (pathname === '/browse-demos') {
      return <BrowseDemos onNavigate={(key) => navigate('/form/' + key)} />;
    }

    const match = pathname.match(/^\/form\/(.+)/);
    if (match) {
      const s = match[1];
      const Component = formComponents[s];
      if (Component) {
        return (
          <div className="max-w-form mx-auto px-4 sm:px-6 py-8 sm:py-12">
            <FormCodeViewer formKey={s}>
              <Suspense fallback={<Fallback />}>
                <Component form={forms[s]} />
              </Suspense>
            </FormCodeViewer>
          </div>
        );
      }
    }

    return (
      <div className="flex items-center justify-center py-20 text-surface-400">
        Page not found: {pathname}
      </div>
    );
  }

  return (
    <SSRProvider>
      <div id="app-shell">
        {typeof window !== "undefined" && <MobxReactFormDevTools.UI />}
        <DevToolsAuto section={section} />
        <Nav menu={null} select={null} selected={null} />
        <main className="pt-14 md:pl-56" style={{ marginRight: dockOffset }}>
          <div id="page-content" data-section={section || ''}>
            {renderContent()}
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
    </SSRProvider>
  );
});

export default function onRenderClient(pageContext) {
  const root = createRoot(document.querySelector('#app'));
  root.render(<AppShell />);
}
