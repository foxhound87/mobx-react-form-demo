import React, { useRef, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Code, BookOpen } from 'lucide-react';
import { loadComponentSource, loadConfigSource, loadInputSource, loadValidatorSource, loadBindingsSource, loadHooksSource, getInputComponents, getDocsUrl, validatorForms, bindingsForms, hooksForms } from '../forms/sources';

export default ({ formKey, children }) => {
  const [tab, setTab] = React.useState(null);
  const [code, setCode] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [activeInput, setActiveInput] = React.useState(null);
  const codeRef = useRef(null);

  const inputs = React.useMemo(() => getInputComponents(formKey), [formKey]);
  const docsUrl = React.useMemo(() => getDocsUrl(formKey), [formKey]);

  const handleTabClick = (nextTab) => {
    setTab(tab === nextTab ? null : nextTab);
  };

  useEffect(() => {
    if (!tab || loading || !codeRef.current) return;
    const offset = 120;
    const top = codeRef.current.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }, [tab, loading]);

  useEffect(() => {
    if (!tab || tab === 'input') return;
    setLoading(true);
    setActiveInput(null);
    const loaders = {
      component: loadComponentSource,
      config: loadConfigSource,
      validator: loadValidatorSource,
      bindings: loadBindingsSource,
      hooks: loadHooksSource,
    };
    const load = loaders[tab] || loadConfigSource;
    load(formKey).then((src) => {
      setCode(src);
      setLoading(false);
    });
  }, [tab, formKey]);

  const handleInputClick = (name) => {
    if (activeInput === name) {
      setActiveInput(null);
      setTab(null);
      setCode('');
      return;
    }
    setActiveInput(name);
    setTab('input');
    setLoading(true);
    loadInputSource(name).then((src) => {
      setCode(src);
      setLoading(false);
    });
  };

  return (
    <div>
      <div className="sticky top-14 z-10 bg-white pb-3">
        <div className="flex flex-wrap items-center gap-1.5">
          <button
            onClick={() => handleTabClick('component')}
            className={`text-xs font-medium px-3 py-1.5 rounded-md border transition-colors ${
              tab === 'component'
                ? 'bg-brand-500 text-white border-brand-500'
                : 'bg-white text-surface-500 border-surface-200 hover:text-surface-700 hover:border-surface-300'
            }`}
          >
            Component
          </button>
          <button
            onClick={() => handleTabClick('config')}
            className={`text-xs font-medium px-3 py-1.5 rounded-md border transition-colors ${
              tab === 'config'
                ? 'bg-brand-500 text-white border-brand-500'
                : 'bg-white text-surface-500 border-surface-200 hover:text-surface-700 hover:border-surface-300'
            }`}
          >
            Config
          </button>
          {validatorForms.includes(formKey) && (
            <button
              onClick={() => handleTabClick('validator')}
              className={`text-xs font-medium px-3 py-1.5 rounded-md border transition-colors ${
                tab === 'validator'
                  ? 'bg-brand-500 text-white border-brand-500'
                  : 'bg-white text-surface-500 border-surface-200 hover:text-surface-700 hover:border-surface-300'
              }`}
            >
              Validator
            </button>
          )}
          {hooksForms.includes(formKey) && (
            <button
              onClick={() => handleTabClick('hooks')}
              className={`text-xs font-medium px-3 py-1.5 rounded-md border transition-colors ${
                tab === 'hooks'
                  ? 'bg-brand-500 text-white border-brand-500'
                  : 'bg-white text-surface-500 border-surface-200 hover:text-surface-700 hover:border-surface-300'
              }`}
            >
              Hooks
            </button>
          )}
          {bindingsForms.includes(formKey) && (
            <button
              onClick={() => handleTabClick('bindings')}
              className={`text-xs font-medium px-3 py-1.5 rounded-md border transition-colors ${
                tab === 'bindings'
                  ? 'bg-brand-500 text-white border-brand-500'
                  : 'bg-white text-surface-500 border-surface-200 hover:text-surface-700 hover:border-surface-300'
              }`}
            >
              Bindings
            </button>
          )}

          <span className="w-px h-5 bg-surface-200 mx-1" />

          {inputs.length > 0 && inputs.map((name) => (
            <button
              key={name}
              onClick={() => handleInputClick(name)}
              className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-mono font-medium border transition-all duration-150 cursor-pointer ${
                activeInput === name
                  ? 'bg-brand-500 text-white border-brand-500 shadow-sm'
                  : 'bg-brand-50 text-brand-600 border-brand-200 hover:bg-brand-100 hover:border-brand-300'
              }`}
            >
              <Code size={12} className="flex-shrink-0" />
              {name}
            </button>
          ))}

          {docsUrl && (
            <a
              href={docsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 ml-auto px-2.5 py-1 rounded-md text-xs font-medium border border-surface-200 text-surface-500 hover:text-surface-900 hover:border-surface-300 transition-colors"
              title="Open official documentation"
            >
              <BookOpen size={12} />
              Docs
            </a>
          )}
        </div>
      </div>

      {tab && (
        <div ref={codeRef} className={`mb-6 rounded-xl border overflow-hidden ${tab === 'input' || tab === 'component' ? 'border-surface-700' : 'border-surface-200 bg-surface-50'}`}>
          <div className={`flex items-center gap-2 px-4 py-2 border-b ${tab === 'input' || tab === 'component' ? 'border-surface-700 bg-surface-800' : 'border-surface-200 bg-surface-100/50'}`}>
            <span className={`text-xs font-medium ${tab === 'input' || tab === 'component' ? 'text-surface-400' : 'text-surface-500'}`}>
              {tab === 'input' ? 'Input Component' : tab === 'component' ? 'Form Component' : tab === 'validator' ? 'Validator' : tab === 'bindings' ? 'Bindings' : tab === 'hooks' ? 'Hooks' : 'Form Config'}
            </span>
            <span className={`text-xs font-mono font-medium ${tab === 'input' || tab === 'component' ? 'text-blue-400' : 'text-brand-600'}`}>
              {tab === 'input' ? activeInput : tab === 'bindings' ? '_.bindings.ts' : tab === 'hooks' ? (formKey === 'registerMaterial' ? '_.hooks.fields.ts' : formKey + '.ts') : formKey}
            </span>
          </div>
          <div className="text-xs leading-relaxed">
            {loading ? (
              <div className="p-4"><span className="text-surface-400">Loading...</span></div>
            ) : code ? (
              <SyntaxHighlighter
                language={tab === 'config' || tab === 'validator' || tab === 'bindings' || tab === 'hooks' ? 'typescript' : 'tsx'}
                style={vscDarkPlus}
                customStyle={{
                  margin: 0,
                  borderRadius: 0,
                  padding: '1rem',
                  fontSize: '0.75rem',
                  lineHeight: '1.5',
                }}
                showLineNumbers={false}
              >
                {code}
              </SyntaxHighlighter>
            ) : (
              <div className="p-4"><span className="text-surface-400 italic">No source available</span></div>
            )}
          </div>
        </div>
      )}

      {children}
    </div>
  );
};
