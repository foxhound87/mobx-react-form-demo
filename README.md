### [Repo](https://github.com/foxhound87/mobx-react-form) &bull; [Documentation](https://foxhound87.github.io/mobx-react-form) &bull; [Live Demo](https://foxhound87.github.io/mobx-react-form-demo) &bull; [Demo Code](https://github.com/foxhound87/mobx-react-form-demo) &bull; [NPM](https://www.npmjs.com/package/mobx-react-form) &bull; [Skills](https://github.com/foxhound87/skills) &bull; [Tutorial](https://medium.com/@foxhound87/automagically-manage-react-forms-state-with-mobx-and-automatic-validation-2b00a32b9769) &bull; [Join Discord Channel](https://discord.gg/CVV8w4zat4)

# MobX React Form — Demo

### Interactive demo app for [mobx-react-form](https://github.com/foxhound87/mobx-react-form)

[![NPM](https://nodei.co/npm/mobx-react-form.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/mobx-react-form)
[![NPM Version](https://img.shields.io/npm/v/mobx-react-form?label=npm&logo=npm&style=for-the-badge)](https://www.npmjs.com/package/mobx-react-form)

---

## Live Demo

**[https://foxhound87.github.io/mobx-react-form-demo](https://foxhound87.github.io/mobx-react-form-demo)**

Browse interactive examples covering flat & nested fields, validation plugins (DVR, VJF, ZOD), async validation, Material UI, Ant Design, React Aria, Headless UI, React Select, React Widgets, sortable lists, file upload, wizards, computed fields, and more.

---

## Features Demonstrated

- **Validation Plugins** — DVR (validatorjs), VJF (vanilla functions), ZOD schemas, async validation
- **Flat & Nested Fields** — unified mode, separated mode, mixed mode, deep nesting
- **Event Hooks** — onInit, onChange, onFocus, onBlur, onSubmit, onSuccess, onError
- **Observers & Interceptors** — reactive field observation, mutation interception
- **Computed Fields** — reactive derived values, autorun-based calculations
- **Multi-step Wizard** — nested groups, per-step validation, review screen
- **Sortable Lists** — drag-and-drop reordering with @dnd-kit
- **File Upload** — drag-and-drop zones, FileList access, validation
- **Dynamic Fields** — arrays, nested composition, conditional fields
- **UI Integrations** — Material UI, Ant Design, React Aria, Headless UI, React Select, React Widgets, Vanilla HTML
- **Forms Composer** — orchestrate multiple forms, batch validate/submit/clear/reset

---

## Quick Start

### Prerequisites

- Node.js >= 18
- Git (with SSH keys configured for GitHub)

### Setup

```bash
# Add submodules (mobx-react-form, devtools, docs)
npm run submodules:add

# Fetch submodules
npm run submodules:fetch

# Install submodule dependencies
npm run submodules:install

# Install project dependencies
npm install --legacy-peer-deps

# Start development server
npm run dev
```

Then open `http://localhost:5173` (or the port shown in the terminal).

> **Note:** Submodules are optional if you're only running the demo. Set `REACT_DEV=1` or use `MRF_SOURCE=node_modules` to use the published npm packages directly.

---

## AI Agent Skills

> **🤖 [AI Agent Skills](https://github.com/foxhound87/skills)** — Reusable instructions for AI coding assistants (Cursor, Windsurf, Claude Code, Codebuff, Copilot, etc.) to generate correct mobx-react-form code.

```bash
# Install all skills
npx skills add https://github.com/foxhound87/skills --all

# Or install individual skills
npx skills add https://github.com/foxhound87/skills --skill mobx-react-form-api
npx skills add https://github.com/foxhound87/skills --skill mobx-react-form-validation
npx skills add https://github.com/foxhound87/skills --skill mobx-react-form-bindings
```

---

## Project Structure

```
mobx-react-form-demo/
├── pages/             # Vike page routes
├── src/
│   ├── components/    # React components (Nav, Welcome, forms, etc.)
│   ├── forms/         # Form definitions and configurations
│   ├── menu.ts        # Demo navigation menu
│   └── style.css      # Global styles
├── modules/           # Git submodules (lib, devtools, docs)
├── scripts/           # Build and utility scripts
└── patches/           # Dependency patches
```

---

## Deployment

The demo is built with Vite + Vike and deployed to GitHub Pages:

```bash
npm run deploy
```

This prerenders all 30+ demo pages as static HTML and pushes to the `gh-pages` branch.

---

## Contributing

1. Fork the repository
2. Make your changes
3. Ensure the demo runs: `npm run dev`
4. Commit and open a pull request

When adding new demo forms, follow the existing pattern in `src/forms/` and register the demo in `src/menu.ts`.

### License

MIT
