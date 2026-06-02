import React from 'react';
import { loadComponentSource, loadConfigSource } from '../forms/sources';

const langs = {
  tsx: 'tsx',
  ts: 'ts',
};

export default ({ formKey, children }) => {
  const [tab, setTab] = React.useState(null);
  const [code, setCode] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (!tab) return;
    setLoading(true);
    const load = tab === 'component' ? loadComponentSource : loadConfigSource;
    load(formKey).then((src) => {
      setCode(src);
      setLoading(false);
    });
  }, [tab, formKey]);

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
      </div>

      {tab && (
        <div className="mb-6 rounded-xl border border-surface-200 bg-surface-50 overflow-hidden">
          <pre className="p-4 overflow-x-auto text-xs leading-relaxed text-surface-700 font-mono">
            {loading ? (
              <span className="text-surface-400">Loading...</span>
            ) : code ? (
              code
            ) : (
              <span className="text-surface-400 italic">No source available</span>
            )}
          </pre>
        </div>
      )}

      {children}
    </div>
  );
};
