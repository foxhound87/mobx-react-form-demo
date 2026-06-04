import React from 'react';
import { observer } from 'mobx-react';
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
  Variable,
  ArrowRightCircle,
  Code,
  FileText,
  Upload,
  Package,
  BookOpen,
} from 'lucide-react';

const demoGroups = [
  {
    label: 'Basics',
    color: 'bg-blue-500',
    lightColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    iconColor: 'text-blue-600',
    items: [
      {
        key: 'login',
        label: 'Login Form',
        icon: LogIn,
        desc: 'Email and password authentication form with validation',
      },
      {
        key: 'registerSimple',
        label: 'Registration Form',
        icon: UserPlus,
        desc: 'User registration with name, email, and terms acceptance',
      },
    ],
  },
  {
    label: 'Validation',
    color: 'bg-emerald-500',
    lightColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    iconColor: 'text-emerald-600',
    items: [
      {
        key: 'validationDvr',
        label: 'DVR',
        icon: ShieldCheck,
        desc: 'Declarative validation rules with validatorjs',
      },
      {
        key: 'validationVjf',
        label: 'VJF',
        icon: ListChecks,
        desc: 'VJF-based validation plugin integration',
      },
      {
        key: 'validationZod',
        label: 'ZOD',
        icon: ShieldCheck,
        desc: 'Zod schema validation for type-safe forms',
      },
      {
        key: 'validationAsync',
        label: 'Async',
        icon: Clock,
        desc: 'Async validation with server-side checks',
      },
    ],
  },
  {
    label: 'Dynamic Data',
    color: 'bg-purple-500',
    lightColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    iconColor: 'text-purple-600',
    items: [
      {
        key: 'arrays',
        label: 'Arrays',
        icon: Layers,
        desc: 'Dynamic form arrays with add/remove operations',
      },
      {
        key: 'nestedFields',
        label: 'Nested',
        icon: Grid3x3,
        desc: 'Deeply nested field structures with club and members',
      },
      {
        key: 'bubbleErrors',
        label: 'Bubble Errors',
        icon: Grid3x3,
        desc: 'Nested field errors bubbling up with bubbleUpErrorMessages',
      },
      {
        key: 'dynamicFieldsSelect',
        label: 'Dynamic Fields',
        icon: List,
        desc: 'Create and remove fields on the fly with React-Select',
      },
    ],
  },
  {
    label: 'Advanced',
    color: 'bg-amber-500',
    lightColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    iconColor: 'text-amber-600',
    items: [
      {
        key: 'interceptors',
        label: 'Interceptors',
        icon: ShieldAlert,
        desc: 'MobX interceptors for field value observation',
      },
      {
        key: 'observers',
        label: 'Observers',
        icon: Eye,
        desc: 'MobX observers and autorun reactive patterns',
      },
      {
        key: 'composer',
        label: 'Composer',
        icon: GitBranch,
        desc: 'Compose multiple forms together with shared validation',
      },
      {
        key: 'reactiveComputed',
        label: 'Reactive Computed',
        icon: Variable,
        desc: 'Live computed totals with autorun reactivity',
      },
      {
        key: 'crossValidation',
        label: 'Cross Validation',
        icon: GitBranch,
        desc: 'Cross-field validation between nested form groups',
      },
      {
        key: 'nestedComposition',
        label: 'Nested Composition',
        icon: Layers,
        desc: 'Independent sub-form instances orchestrated together',
      },
      {
        key: 'wizard',
        label: 'Wizard',
        icon: ArrowRightCircle,
        desc: 'Multi-step registration wizard with per-step validation',
      },
      {
        key: 'bindingsDemo',
        label: 'Bindings',
        icon: Code,
        desc: 'Custom field bindings with transformation and formatting',
      },
      {
        key: 'markdown',
        label: 'Markdown',
        icon: FileText,
        desc: 'Markdown editor with live preview',
      },
      {
        key: 'fileUpload',
        label: 'File Upload',
        icon: Upload,
        desc: 'File upload with drag-and-drop support',
      },
    ],
  },
  {
    label: 'UI Libraries',
    color: 'bg-rose-500',
    lightColor: 'bg-rose-50',
    borderColor: 'border-rose-200',
    iconColor: 'text-rose-600',
    items: [
      {
        key: 'registerMaterial',
        label: 'Material UI',
        icon: Package,
        desc: 'Material Design components with custom hooks',
      },
      {
        key: 'materialAdvanced',
        label: 'Material Adv.',
        icon: Package,
        desc: 'Advanced Material UI selects, autocomplete, rating, slider',
      },
      {
        key: 'companySimple',
        label: 'Vanilla',
        icon: FileText,
        desc: 'Custom company form with plain HTML inputs',
      },
      {
        key: 'companyWidgets',
        label: 'Widgets',
        icon: FileText,
        desc: 'Company form using React Widgets components',
      },
      {
        key: 'headlessUI',
        label: 'Headless UI',
        icon: FileText,
        desc: 'Tailwind Headless UI listbox, combobox, switch, radio',
      },
      {
        key: 'antd',
        label: 'Ant Design',
        icon: FileText,
        desc: 'Ant Design inputs, selects, date pickers, rate, switch',
      },
      {
        key: 'aria',
        label: 'React Aria',
        icon: FileText,
        desc: 'React Aria accessible text field, select, combo, slider',
      },
      {
        key: 'reactSelect',
        label: 'React-Select',
        icon: ListChecks,
        desc: 'React-Select single and multi with custom styling',
      },
      {
        key: 'reactMultiSelect',
        label: 'React-Multi',
        icon: ListChecks,
        desc: 'React-Select multi-value with async options',
      },
    ],
  },
];

export default observer(({ onNavigate }) => (
  <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
    {/* Header */}
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center flex-shrink-0">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-surface-900">Browse Demos</h1>
          <p className="text-sm text-surface-500 mt-0.5">
            Explore all available demo forms organized by category
          </p>
        </div>
      </div>
    </div>

    {/* Demo Groups */}
    <div className="space-y-10">
      {demoGroups.map((group) => (
        <section key={group.label}>
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-1 h-6 rounded-full ${group.color}`} />
            <h2 className="text-lg font-semibold text-surface-900">{group.label}</h2>
            <span className="text-xs font-medium text-surface-400 bg-surface-100 px-2 py-0.5 rounded-full">
              {group.items.length} demo{group.items.length > 1 ? 's' : ''}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {group.items.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.key}
                  onClick={() => onNavigate(item.key)}
                  className="flex items-start gap-3 p-4 rounded-xl border border-surface-200 bg-white hover:border-brand-200 hover:shadow-sm hover:bg-brand-50/30 transition-all duration-150 text-left group"
                >
                  <div className={`w-9 h-9 rounded-lg ${group.lightColor} flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-105 transition-transform duration-150`}>
                    <Icon size={16} className={group.iconColor} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-surface-900 group-hover:text-brand-600 transition-colors">
                      {item.label}
                    </h3>
                    <p className="text-xs text-surface-400 mt-0.5 leading-relaxed line-clamp-2">
                      {item.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </section>
      ))}
    </div>

    {/* Footer */}
    <div className="mt-12 pt-6 border-t border-surface-200 text-center">
      <p className="text-xs text-surface-400">
        Built with{' '}
        <a
          href="https://github.com/foxhound87/mobx-react-form"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-500 hover:text-brand-600 underline underline-offset-2"
        >
          mobx-react-form
        </a>
        {' '}— {demoGroups.reduce((sum, g) => sum + g.items.length, 0)} demos across {demoGroups.length} categories
      </p>
    </div>
  </div>
));
