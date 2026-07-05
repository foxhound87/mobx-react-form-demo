import React from "react";
import { observer } from "mobx-react";
import {
  ShieldCheck,
  Zap,
  Layers,
  GitBranch,
  ExternalLink,
  Terminal,
  BookOpen,
  MessageCircle,
  Brain,
} from "lucide-react";
import GithubStars from "./GithubStars";

const frameworks = [
  "Material UI",
  "Ant Design",
  "React Widgets",
  "React Select",
  "React Aria",
  "Headless UI",
  "Vanilla HTML",
];

export default observer(({ onNavigate }) => (
  <div>
    <section className="relative bg-white border-b border-surface-200">
      <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="flex gap-6 sm:gap-10">
          <div className="w-1 flex-shrink-0 bg-brand-500 rounded-full" />
          <div className="max-w-3xl min-w-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-surface-900 leading-[1.08]">
              MobX React Form
            </h1>
            <p className="text-lg sm:text-xl text-surface-500 mt-5 leading-relaxed max-w-2xl">
              Declarative, validated forms for React and MobX. Define fields,
              rules, and UI once — works across Material UI, Ant Design, React
              Widgets, React Select, React Aria, and plain HTML.
            </p>
            <div className="flex flex-wrap gap-3 mt-10">
              <button
                onClick={onNavigate}
                className="inline-flex items-center gap-2 rounded-lg bg-brand-500 text-white px-5 py-2.5 text-sm font-medium hover:bg-brand-600 transition-colors"
              >
                Browse Demos
                <ExternalLink size={14} />
              </button>
              <a
                href="https://github.com/foxhound87/mobx-react-form"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-surface-200 text-surface-600 px-5 py-2.5 text-sm font-medium hover:bg-surface-50 hover:text-surface-900 transition-colors"
              >
                <GitBranch size={16} />
                GitHub
              </a>
              <a
                href="https://foxhound87.github.io/mobx-react-form/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-surface-200 text-surface-600 px-5 py-2.5 text-sm font-medium hover:bg-surface-50 hover:text-surface-900 transition-colors"
              >
                <BookOpen size={16} />
                Docs
              </a>
              <a
                href="https://discord.com/invite/CVV8w4zat4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-surface-200 text-surface-600 px-5 py-2.5 text-sm font-medium hover:bg-surface-50 hover:text-surface-900 transition-colors"
              >
                <MessageCircle size={16} />
                Discord
              </a>
              <a
                href="https://github.com/foxhound87/skills"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-surface-200 text-surface-600 px-5 py-2.5 text-sm font-medium hover:bg-surface-50 hover:text-surface-900 transition-colors"
              >
                <Brain size={16} />
                Skills
              </a>
              <GithubStars />
            </div>
            <div className="flex flex-wrap items-center gap-2 mt-10 pt-8 border-t border-surface-100">
              <span className="text-xs font-medium text-surface-400 uppercase tracking-wider mr-1">
                Integrates with
              </span>
              {frameworks.map((name) => (
                <span
                  key={name}
                  className="inline-flex items-center px-2.5 py-1 rounded-md bg-surface-100 text-xs font-medium text-surface-600"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 sm:py-20 pb-20 sm:pb-28">
      <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-6 sm:gap-10 mb-10">
          <div className="w-1 flex-shrink-0 bg-brand-500/30 rounded-full" />
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-surface-900">
              Built for real forms
            </h2>
            <p className="text-surface-500 mt-1.5">
              From simple contact forms to complex multi-step wizards.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2 bg-white rounded-xl border border-surface-200 p-6 sm:p-8">
            <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center mb-4">
              <ShieldCheck size={20} className="text-brand-500" />
            </div>
            <h3 className="text-lg font-semibold text-surface-900">
              Declarative Validation
            </h3>
            <p className="text-surface-500 mt-2 leading-relaxed">
              Define validation rules inline with your field definitions using
              validatorjs or custom functions. Sync and async, with per-field
              error messages that update reactively.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-surface-200 p-6 sm:p-8">
            <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center mb-4">
              <Zap size={20} className="text-brand-500" />
            </div>
            <h3 className="text-lg font-semibold text-surface-900">
              MobX Reactive
            </h3>
            <p className="text-surface-500 mt-2 leading-relaxed">
              Every field state, error, and touch event is observable. Your UI
              reactively updates with zero extra code.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-surface-200 p-6 sm:p-8">
            <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center mb-4">
              <Layers size={20} className="text-brand-500" />
            </div>
            <h3 className="text-lg font-semibold text-surface-900">
              Any UI Library
            </h3>
            <p className="text-surface-500 mt-2 leading-relaxed">
              Bring your own UI. Material UI, Ant Design, React Widgets, React
              Select, React Aria, or plain HTML — same form definition, any
              render.
            </p>
          </div>

          <div className="md:col-span-2 bg-white rounded-xl border border-surface-200 p-6 sm:p-8">
            <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center mb-4">
              <GitBranch size={20} className="text-brand-500" />
            </div>
            <h3 className="text-lg font-semibold text-surface-900">
              Dynamic &amp; Nested Fields
            </h3>
            <p className="text-surface-500 mt-2 leading-relaxed">
              Deeply nested field structures, dynamic field arrays with
              add/remove, sortable lists, and conditional logic. Handles complex
              data hierarchies with MobX-powered reactivity.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="pb-20 sm:pb-28">
      <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-6 sm:gap-10 mb-10">
          <div className="w-1 flex-shrink-0 bg-brand-500/30 rounded-full" />
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-surface-900">
              Get started
            </h2>
            <p className="text-surface-500 mt-1.5">
              Install from npm and start building.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-xl border border-surface-200 p-6 sm:p-8">
            <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center mb-4">
              <Terminal size={20} className="text-brand-500" />
            </div>
            <h3 className="text-lg font-semibold text-surface-900 mb-3">
              mobx-react-form
            </h3>
            <p className="text-surface-500 text-sm mb-4 leading-relaxed">
              Install the library to define your forms, fields, and validation
            </p>
            <pre className="bg-surface-50 rounded-lg border border-surface-200 p-4 overflow-x-auto text-sm">
              <code className="text-surface-700">
                npm i --save mobx-react-form
              </code>
            </pre>
          </div>

          <div className="bg-white rounded-xl border border-surface-200 p-6 sm:p-8">
            <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center mb-4">
              <Terminal size={20} className="text-brand-500" />
            </div>
            <h3 className="text-lg font-semibold text-surface-900 mb-3">
              mobx-react-form-devtools
            </h3>
            <p className="text-surface-500 text-sm mb-4 leading-relaxed">
              Inspect form state, fields, and validation in real time.
            </p>
            <pre className="bg-surface-50 rounded-lg border border-surface-200 p-4 overflow-x-auto text-sm">
              <code className="text-surface-700">
                npm i --save mobx-react-form-devtools
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  </div>
));
