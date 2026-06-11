// Single source of truth for SEO metadata for the home page, the
// browse-demos page, and every form demo. Keeping this here means the
// prerendered HTML, the sitemap, and the visible intro text on each form
// page can all stay in sync from one place.

export const SITE_NAME = 'MobX React Form Demo';
export const SITE_SHORT_NAME = 'mobx-react-form-demo';
export const SITE_DESCRIPTION =
  'Declarative, validated forms for React and MobX. Live demos of validation, nested fields, dynamic arrays, multi-step wizards, and integrations with Material UI, Ant Design, React Aria, React Select and more.';
export const SITE_KEYWORDS =
  'mobx-react-form, react forms, mobx, form validation, react, material ui, ant design, react aria, react select, javascript, typescript, wizard, nested fields';
export const SITE_AUTHOR = 'Claudio Savino';

// Absolute origin of the deployed site. Used for canonical URLs, Open Graph,
// the sitemap, and JSON-LD. The base path is `/mobx-react-form-demo/`
// (matching `base` in vite.config.ts for production builds).
export const SITE_ORIGIN = 'https://foxhound87.github.io';
export const SITE_BASE = '/mobx-react-form-demo';
export const SITE_URL = `${SITE_ORIGIN}${SITE_BASE}`;

// Default social share image (absolute URL). Drop a 1200x630 PNG at this
// path inside the build output if you want a richer preview.
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

// Twitter / GitHub handle used in JSON-LD and meta tags.
export const TWITTER_HANDLE = '@mobx_react_form';

export type SeoMeta = {
  title: string;
  description: string;
  keywords: string;
  category: string;
  // Optional H1 + lead paragraph shown on the demo page. Falls back to the
  // form name and description when omitted.
  h1?: string;
  lead?: string;
};

export const HOME_SEO: SeoMeta = {
  title: `${SITE_NAME} - React & MobX forms`,
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  category: 'Home',
  h1: 'MobX React Form',
  lead: 'Declarative, validated forms for React and MobX. Define fields, rules, and UI once and render them with Material UI, Ant Design, React Aria, React Select, React Widgets, Headless UI, or plain HTML.',
};

export const BROWSE_DEMOS_SEO: SeoMeta = {
  title: `Browse Demos - ${SITE_NAME}`,
  description: `Explore all ${30} MobX React Form demos organized by category: basics, validation, dynamic data, advanced features, and UI library integrations.`,
  keywords: `${SITE_KEYWORDS}, form demos, react form examples, mobx form examples`,
  category: 'Browse Demos',
  h1: 'Browse Demos',
  lead: 'Explore all available demo forms organized by category. Each demo links to the live form, the source component, the field configuration, and the relevant section of the official documentation.',
};

// All form demos in the order they are prerendered. Kept in sync with
// `pages/form/@section/+onBeforePrerenderStart.ts`.
export const ALL_FORM_KEYS: string[] = [
  'login',
  'registerSimple',
  'validationDvr',
  'validationVjf',
  'validationAsync',
  'validationZod',
  'arrays',
  'nestedFields',
  'dynamicFieldsSelect',
  'interceptors',
  'observers',
  'composer',
  'bindingsDemo',
  'reactiveComputed',
  'crossValidation',
  'nestedComposition',
  'wizard',
  'reactSelect',
  'reactMultiSelect',
  'registerMaterial',
  'materialAdvanced',
  'companySimple',
  'companyWidgets',
  'headlessUI',
  'antd',
  'aria',
  'markdown',
  'fileUpload',
  'sortableList',
  'bubbleErrors',
];

const KEYWORDS_BASE = 'mobx-react-form, react forms, mobx, form validation';

export const SEO_META: Record<string, SeoMeta> = {
  // Basics
  login: {
    title: 'Login Form Demo',
    description:
      'A minimal email-and-password login form built with mobx-react-form. Demonstrates required, email, and string validation rules, plus a remember-me checkbox bound to the form state.',
    keywords: `${KEYWORDS_BASE}, login form, authentication form, react login`,
    category: 'Basics',
    lead: 'A minimal login form with email and password fields. This demo shows the most common mobx-react-form setup: declarative field definitions, validation rules, and a checkbox bound to form state.',
  },
  registerSimple: {
    title: 'Registration Form Demo',
    description:
      'A simple user registration form with name, email, password, and terms-acceptance checkbox. Built with mobx-react-form using plain HTML inputs and validatorjs rules.',
    keywords: `${KEYWORDS_BASE}, registration form, signup form, react signup`,
    category: 'Basics',
    lead: 'A simple registration form that demonstrates required-field validation, email format checks, password length, and a terms-acceptance checkbox. The same form definition renders into plain HTML inputs.',
  },

  // Validation
  validationDvr: {
    title: 'DVR Validation Demo (validatorjs)',
    description:
      'Declarative validation with the DVR (Declarative Validation Rules) plugin for mobx-react-form. Uses validatorjs syntax to define field rules and custom error messages inline with the field definition.',
    keywords: `${KEYWORDS_BASE}, validatorjs, dvr, declarative validation, react form rules`,
    category: 'Validation',
    lead: 'Declarative validation with the DVR (Declarative Validation Rules) plugin. Rules are defined inline with each field using validatorjs syntax, and the form stays fully reactive to per-field error messages.',
  },
  validationVjf: {
    title: 'VJF Validation Demo',
    description:
      'Validation with the VJF (Validation JSON Form) plugin for mobx-react-form. Define validation rules as structured JSON and integrate them into the form state.',
    keywords: `${KEYWORDS_BASE}, vjf, validation json form, mobx-react-form plugins`,
    category: 'Validation',
    lead: 'Validation with the VJF (Validation JSON Form) plugin. Validation rules are defined as structured JSON and consumed by mobx-react-form to drive the field error state.',
  },
  validationAsync: {
    title: 'Async Validation Demo',
    description:
      'Async validation with mobx-react-form. Demonstrates server-side checks (such as username availability and email uniqueness) with debounced promises and per-field pending states.',
    keywords: `${KEYWORDS_BASE}, async validation, debounced validation, server-side form validation`,
    category: 'Validation',
    lead: 'Async validation with server-side checks. This demo shows how to wire debounced async validators into mobx-react-form so users see real-time feedback as they type, without blocking the UI.',
  },
  validationZod: {
    title: 'Zod Validation Demo',
    description:
      'Type-safe form validation with Zod schemas in mobx-react-form. Reuse a single Zod schema to power both runtime validation and TypeScript types across your form.',
    keywords: `${KEYWORDS_BASE}, zod, typescript schema, type-safe forms, zod validation`,
    category: 'Validation',
    lead: 'Type-safe validation with Zod schemas. The same Zod schema used for runtime validation can also drive TypeScript types across the form, keeping the field configuration and the validator in lockstep.',
  },

  // Dynamic Data
  arrays: {
    title: 'Dynamic Form Arrays Demo',
    description:
      'Dynamic form arrays in mobx-react-form. Add, remove, and reorder list items at runtime, with validation, observers, and MobX reactivity across the array.',
    keywords: `${KEYWORDS_BASE}, dynamic form arrays, field arrays, add remove fields, react list form`,
    category: 'Dynamic Data',
    lead: 'Dynamic form arrays with add, remove, and per-item validation. The underlying field list lives in MobX observable state, so the form reactively re-renders as items are added or removed.',
  },
  nestedFields: {
    title: 'Nested Fields Demo',
    description:
      'Deeply nested field structures with mobx-react-form. Models a club with members and hobbies, with validation, default values, and observability at every nesting level.',
    keywords: `${KEYWORDS_BASE}, nested fields, deep form, club members, complex form structure`,
    category: 'Dynamic Data',
    lead: 'Deeply nested field structures: a club with members, and each member with hobbies. The form walks every nesting level reactively and shows how to model complex data hierarchies with mobx-react-form.',
  },
  dynamicFieldsSelect: {
    title: 'Dynamic Fields with React-Select Demo',
    description:
      'Create and remove form fields on the fly driven by a React-Select control. Demonstrates conditional field generation and dynamic default values in mobx-react-form.',
    keywords: `${KEYWORDS_BASE}, dynamic fields, react-select, conditional fields`,
    category: 'Dynamic Data',
    lead: 'Create and remove form fields on the fly, driven by a React-Select control. The demo shows how to wire conditional field generation and dynamic default values into mobx-react-form.',
  },

  // Advanced
  interceptors: {
    title: 'Interceptors Demo (MobX intercept)',
    description:
      'Use MobX interceptors to observe and react to field value changes in mobx-react-form. Demonstrates debugging, logging, and side-effects tied to field updates.',
    keywords: `${KEYWORDS_BASE}, mobx interceptors, intercept, field value observer`,
    category: 'Advanced',
    lead: 'Use MobX interceptors to observe and react to field value changes. This demo shows how interceptors hook into the MobX layer to log, transform, or trigger side effects whenever a field updates.',
  },
  observers: {
    title: 'Observers Demo (MobX autorun)',
    description:
      'Use MobX observers and autorun with mobx-react-form. Build live computed summaries, debug panels, and reactive UI that depend on multiple form values at once.',
    keywords: `${KEYWORDS_BASE}, mobx observers, autorun, reactive form state`,
    category: 'Advanced',
    lead: 'Use MobX observers and autorun to build reactive UI that depends on multiple form values. The demo shows how to react to form-wide state changes without manually wiring subscriptions.',
  },
  composer: {
    title: 'Form Composer Demo',
    description:
      'Compose multiple forms together with mobx-react-form. Share validation, sync values across forms, and orchestrate complex multi-form workflows from a single registry.',
    keywords: `${KEYWORDS_BASE}, form composer, multiple forms, share validation, form orchestration`,
    category: 'Advanced',
    lead: 'Compose multiple forms together and share validation across them. This demo shows how the form composer lets you orchestrate complex multi-form workflows from a single registry.',
  },
  reactiveComputed: {
    title: 'Reactive Computed Values Demo',
    description:
      'Live computed totals and aggregates using autorun and mobx-react-form. Build reactive form summaries that update in real time as the user changes inputs.',
    keywords: `${KEYWORDS_BASE}, computed, autorun, live totals, reactive computed`,
    category: 'Advanced',
    lead: 'Live computed totals and aggregates that update in real time. The demo uses autorun over MobX-observable field values to keep a reactive summary in sync with the underlying form.',
  },
  crossValidation: {
    title: 'Cross-Field Validation Demo',
    description:
      'Cross-field validation between nested form groups in mobx-react-form. Validate that two related fields agree (e.g. billing and shipping addresses) without duplicating rules.',
    keywords: `${KEYWORDS_BASE}, cross-field validation, nested validation, form group validation`,
    category: 'Advanced',
    lead: 'Cross-field validation between nested form groups. The demo shows how to validate that two related fields (for example, billing and shipping addresses) agree without duplicating rules across forms.',
  },
  nestedComposition: {
    title: 'Nested Form Composition Demo',
    description:
      'Compose independent sub-form instances inside a parent form. mobx-react-form supports orchestrating several stateful forms into a single coherent workflow.',
    keywords: `${KEYWORDS_BASE}, nested composition, sub-forms, multi-form workflow`,
    category: 'Advanced',
    lead: 'Compose independent sub-form instances inside a parent form. The demo shows how to orchestrate several stateful forms into a single coherent workflow with mobx-react-form.',
  },
  wizard: {
    title: 'Multi-Step Wizard Demo',
    description:
      'Multi-step registration wizard with per-step validation, navigation guards, and aggregated submission in mobx-react-form.',
    keywords: `${KEYWORDS_BASE}, multi-step form, wizard, stepper form, per-step validation`,
    category: 'Advanced',
    lead: 'Multi-step registration wizard with per-step validation, navigation guards, and a single aggregated submission. The demo shows how to model a stepper form on top of mobx-react-form.',
  },
  bindingsDemo: {
    title: 'Custom Field Bindings Demo',
    description:
      'Custom field bindings with transformation, formatting, and currency-style coercion. mobx-react-form bindings sit between the DOM and the form state and can rewrite values in either direction.',
    keywords: `${KEYWORDS_BASE}, field bindings, value transformation, custom binding, currency input`,
    category: 'Advanced',
    lead: 'Custom field bindings with transformation, formatting, and currency-style coercion. Bindings sit between the DOM and the form state and can rewrite values in either direction.',
  },
  markdown: {
    title: 'Markdown Editor Demo',
    description:
      'A markdown editor field with live preview built on mobx-react-form. Demonstrates textarea bindings, live transformation, and a custom preview component.',
    keywords: `${KEYWORDS_BASE}, markdown editor, textarea binding, live preview`,
    category: 'Advanced',
    lead: 'A markdown editor field with live preview. The demo shows how to bind a textarea to mobx-react-form and render a transformed preview side-by-side with the editor.',
  },
  fileUpload: {
    title: 'File Upload Demo (with drag-and-drop)',
    description:
      'File upload field in mobx-react-form, with a drag-and-drop dropzone. Demonstrates file binding, multiple files, and how the form exposes uploaded files to submit handlers.',
    keywords: `${KEYWORDS_BASE}, file upload, dropzone, drag and drop, react file input`,
    category: 'Advanced',
    lead: 'File upload with a drag-and-drop dropzone. The demo shows how to bind a file input in mobx-react-form, support multiple files, and expose the uploaded files to submit handlers.',
  },
  sortableList: {
    title: 'Sortable List Demo (dnd-kit)',
    description:
      'Sortable list of form items with @dnd-kit. The form reorders MobX-observable field values in real time as the user drags items up or down.',
    keywords: `${KEYWORDS_BASE}, sortable list, dnd-kit, drag and drop list, react form reorder`,
    category: 'Advanced',
    lead: 'Sortable list of form items powered by @dnd-kit. MobX-observable field values reorder in real time as the user drags items up or down, keeping validation and observers fully consistent.',
  },

  // UI Libraries
  registerMaterial: {
    title: 'Material UI Registration Demo',
    description:
      'Registration form rendered with Material UI components in mobx-react-form. Uses TextField, Switch, and custom field hooks for a polished Material Design look.',
    keywords: `${KEYWORDS_BASE}, material ui, mui, react material form, design system form`,
    category: 'UI Libraries',
    lead: 'Registration form rendered with Material UI. The demo shows how to wire TextField, Switch, and custom field hooks to mobx-react-form for a Material Design look.',
  },
  materialAdvanced: {
    title: 'Material UI Advanced Inputs Demo',
    description:
      'Advanced Material UI inputs: select, autocomplete, rating, slider, all bound to mobx-react-form. Demonstrates how to integrate complex MUI components with the form state.',
    keywords: `${KEYWORDS_BASE}, material ui advanced, mui autocomplete, mui rating, mui slider`,
    category: 'UI Libraries',
    lead: 'Advanced Material UI inputs: Select, Autocomplete, Rating, and Slider, all bound to mobx-react-form. The demo shows how to integrate complex MUI components with the form state.',
  },
  companySimple: {
    title: 'Vanilla HTML Form Demo',
    description:
      'Custom company form built with plain HTML inputs and mobx-react-form. Demonstrates the simplest possible UI integration: no UI library, just semantic HTML and the form state.',
    keywords: `${KEYWORDS_BASE}, plain html form, vanilla form, no ui library, semantic html`,
    category: 'UI Libraries',
    lead: 'A company form built with plain HTML inputs. The demo shows the simplest possible UI integration with mobx-react-form: no UI library, just semantic HTML and the form state.',
  },
  companyWidgets: {
    title: 'React Widgets Demo',
    description:
      'Company form using react-widgets components (DropdownList, Multiselect, DatePicker). All controls are bound to mobx-react-form with the same declarative field definitions.',
    keywords: `${KEYWORDS_BASE}, react-widgets, dropdown list, date picker, multiselect`,
    category: 'UI Libraries',
    lead: 'Company form using react-widgets components: DropdownList, Multiselect, and DatePicker. All controls are bound to mobx-react-form with the same declarative field definitions.',
  },
  headlessUI: {
    title: 'Headless UI Demo (Tailwind)',
    description:
      'Tailwind Headless UI components (Listbox, Combobox, Switch, RadioGroup) bound to mobx-react-form. Style-less, accessible primitives paired with a Tailwind design system.',
    keywords: `${KEYWORDS_BASE}, headless ui, tailwind, listbox, combobox, accessible form`,
    category: 'UI Libraries',
    lead: 'Tailwind Headless UI components (Listbox, Combobox, Switch, RadioGroup) bound to mobx-react-form. Style-less, accessible primitives paired with a Tailwind design system.',
  },
  antd: {
    title: 'Ant Design Demo',
    description:
      'Ant Design components (Input, Select, DatePicker, Rate, Slider, Switch, InputNumber) bound to mobx-react-form. Demonstrates integration with the Ant Design system.',
    keywords: `${KEYWORDS_BASE}, ant design, antd, react antd form, chinese design system`,
    category: 'UI Libraries',
    lead: 'Ant Design components (Input, Select, DatePicker, Rate, Slider, Switch, InputNumber) bound to mobx-react-form. The demo shows how to integrate the Ant Design system with mobx-react-form.',
  },
  aria: {
    title: 'React Aria Demo',
    description:
      'Accessible React Aria components (TextField, Select, ComboBox, Slider, Switch) bound to mobx-react-form. Built on Adobe React Aria primitives for full keyboard and screen-reader support.',
    keywords: `${KEYWORDS_BASE}, react aria, accessible forms, adobe react aria, a11y form`,
    category: 'UI Libraries',
    lead: 'Accessible React Aria components (TextField, Select, ComboBox, Slider, Switch) bound to mobx-react-form. Built on Adobe React Aria primitives for full keyboard and screen-reader support.',
  },
  reactSelect: {
    title: 'React-Select Demo',
    description:
      'React-Select single and multi-value select bound to mobx-react-form. Demonstrates custom styling, async option loading, and value coercion in both directions.',
    keywords: `${KEYWORDS_BASE}, react-select, async select, custom select styles`,
    category: 'UI Libraries',
    lead: 'React-Select single and multi-value select bound to mobx-react-form. The demo shows custom styling, async option loading, and value coercion in both directions.',
  },
  reactMultiSelect: {
    title: 'React-Select Multi-Value Demo',
    description:
      'React-Select multi-value select with async options, bound to mobx-react-form. Demonstrates async option loading, custom labels, and tag-style rendering.',
    keywords: `${KEYWORDS_BASE}, react-select, multi-select, async multi select, tags input`,
    category: 'UI Libraries',
    lead: 'React-Select multi-value select with async options, bound to mobx-react-form. The demo shows async option loading, custom labels, and tag-style rendering.',
  },
  bubbleErrors: {
    title: 'Nested Field Errors Bubbling Up Demo',
    description:
      'Nested field errors that bubble up to the parent form via bubbleUpErrorMessages in mobx-react-form. Useful for surfacing deep validation errors in a single place.',
    keywords: `${KEYWORDS_BASE}, nested errors, bubble up errors, parent form errors`,
    category: 'Dynamic Data',
    lead: 'Nested field errors that bubble up to the parent form. The demo shows how to use bubbleUpErrorMessages to surface deep validation errors in a single place at the top of the form.',
  },
};

// Human-readable category labels used for grouping in the UI.
export const CATEGORY_LABELS: Record<string, string> = {
  Basics: 'Basics',
  Validation: 'Validation',
  'Dynamic Data': 'Dynamic Data',
  Advanced: 'Advanced',
  'UI Libraries': 'UI Libraries',
};

// Number of demos per category. Computed once at module load and reused
// for the home page and the browse-demos description.
export function getDemoCount(): number {
  return ALL_FORM_KEYS.length;
}

export function getCategoryCounts(): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const key of ALL_FORM_KEYS) {
    const cat = SEO_META[key]?.category;
    if (!cat) continue;
    counts[cat] = (counts[cat] || 0) + 1;
  }
  return counts;
}

export function getSeoForRoute(section: string | null | undefined): SeoMeta {
  if (!section) return HOME_SEO;
  if (section === 'browse-demos') return BROWSE_DEMOS_SEO;
  return SEO_META[section] || HOME_SEO;
}

export function getCanonicalUrl(section: string | null | undefined): string {
  if (!section || section === '/') return `${SITE_URL}/`;
  if (section === 'browse-demos') return `${SITE_URL}/browse-demos/`;
  return `${SITE_URL}/form/${section}/`;
}
