import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { loadComponentSource, loadConfigSource, loadInputSource, loadValidatorSource, loadBindingsSource, getInputComponents, validatorForms, bindingsForms } from '../forms/sources';

export default ({ formKey, children }) => {
  const [tab, setTab] = React.useState(null);
  const [code, setCode] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [activeInput, setActiveInput] = React.useState(null);

  const inputs = React.useMemo(() => getInputComponents(formKey), [formKey]);

  React.useEffect(() => {
    if (!tab || tab === 'input') return;
    setLoading(true);
    setActiveInput(null);
    const loaders = {
      component: loadComponentSource,
      config: loadConfigSource,
      validator: loadValidatorSource,
      bindings: loadBindingsSource,
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
      <div className="flex gap-1 mb-4">
        <button
          onClick={() => setTab(tab === 'component' ? null : 'component')}
          className={`text-xs font-medium px-3 py-1.5 rounded-md border transition-colors ${
            tab === 'component'
              ? 'bg-brand-500 text-white border-brand-500'
              : 'bg-white text-surface-500 border-surface-200 hover:text-surface-700 hover:border-surface-300'
          }`}
        >
          Component
        </button>
        <button
          onClick={() => setTab(tab === 'config' ? null : 'config')}
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
            onClick={() => setTab(tab === 'validator' ? null : 'validator')}
            className={`text-xs font-medium px-3 py-1.5 rounded-md border transition-colors ${
              tab === 'validator'
                ? 'bg-brand-500 text-white border-brand-500'
                : 'bg-white text-surface-500 border-surface-200 hover:text-surface-700 hover:border-surface-300'
            }`}
          >
            Validator
          </button>
        )}
        {bindingsForms.includes(formKey) && (
          <button
            onClick={() => setTab(tab === 'bindings' ? null : 'bindings')}
            className={`text-xs font-medium px-3 py-1.5 rounded-md border transition-colors ${
              tab === 'bindings'
                ? 'bg-brand-500 text-white border-brand-500'
                : 'bg-white text-surface-500 border-surface-200 hover:text-surface-700 hover:border-surface-300'
            }`}
          >
            Bindings
          </button>
        )}
      </div>

      {/* Input Components Used */}
      {inputs.length > 0 && (
        <div className="mb-6">
          <p className="text-xs font-medium text-surface-400 mb-2 uppercase tracking-wider">
            Input Components
          </p>
          <div className="flex flex-wrap gap-1.5">
            {inputs.map((name) => (
              <button
                key={name}
                onClick={() => handleInputClick(name)}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono font-medium border transition-all duration-150 cursor-pointer ${
                  activeInput === name
                    ? 'bg-brand-500 text-white border-brand-500 shadow-sm'
                    : 'bg-brand-50 text-brand-600 border-brand-200 hover:bg-brand-100 hover:border-brand-300'
                }`}
              >
                <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                {name}
              </button>
            ))}
          </div>
        </div>
      )}

      {tab && (
        <div className={`mb-6 rounded-xl border overflow-hidden ${tab === 'input' || tab === 'component' ? 'border-surface-700' : 'border-surface-200 bg-surface-50'}`}>
          <div className={`flex items-center gap-2 px-4 py-2 border-b ${tab === 'input' || tab === 'component' ? 'border-surface-700 bg-surface-800' : 'border-surface-200 bg-surface-100/50'}`}>
            <span className={`text-xs font-medium ${tab === 'input' || tab === 'component' ? 'text-surface-400' : 'text-surface-500'}`}>
              {tab === 'input' ? 'Input Component' : tab === 'component' ? 'Form Component' : tab === 'validator' ? 'Validator' : tab === 'bindings' ? 'Bindings' : 'Form Config'}
            </span>
            <span className={`text-xs font-mono font-medium ${tab === 'input' || tab === 'component' ? 'text-blue-400' : 'text-brand-600'}`}>
              {tab === 'input' ? activeInput : tab === 'bindings' ? '_.bindings.ts' : formKey}
            </span>
          </div>
          <div className="text-xs leading-relaxed">
            {loading ? (
              <div className="p-4"><span className="text-surface-400">Loading...</span></div>
            ) : code ? (
              <SyntaxHighlighter
                language={tab === 'config' || tab === 'validator' || tab === 'bindings' ? 'typescript' : 'tsx'}
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
