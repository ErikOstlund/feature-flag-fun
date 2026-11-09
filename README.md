# feature-flag-fun

A personal side project for learning new frontend features on a modern, up-to-date stack. The first topic is **feature flags**.

## Requirements

- Node 22
- Yarn classic (v1)

## Scripts

| Command             | What it does                                            |
| ------------------- | ------------------------------------------------------- |
| `yarn start`        | Vite dev server with HMR                                |
| `yarn build`        | Type-check (`tsc -b`), then build the production bundle |
| `yarn preview`      | Serve the built `dist/`                                 |
| `yarn lint`         | ESLint (type-aware) over the whole repo                 |
| `yarn lintfix`      | ESLint with `--fix`                                     |
| `yarn pretty`       | Format everything with Prettier                         |
| `yarn pretty:check` | Check formatting without writing (useful for CI)        |

## Stack

- React 19, TypeScript 6 (strict), Vite 8 with `@vitejs/plugin-react` (Oxc)
- ESLint 10 flat config, composed from each tool's own presets:
  - `typescript-eslint` `strictTypeChecked` + `stylisticTypeChecked`
  - `@eslint-react/eslint-plugin` (`recommended-type-checked`)
  - `eslint-plugin-react-hooks` and `eslint-plugin-react-refresh`
  - `eslint-plugin-jsx-a11y-x` (accessibility)
  - `eslint-plugin-import-x` with the TypeScript resolver
  - `eslint-config-prettier` last, so ESLint never fights Prettier
- Prettier 3 owns formatting (see `.prettierrc`)

The React Compiler is not enabled. To add it, see the [React Compiler installation docs](https://react.dev/learn/react-compiler/installation).

## Project structure

```
src/
├── assets/       # static files (images, fonts)
├── components/   # reusable components
├── features/     # feature modules
├── routes/       # routing
├── styles/       # shared styles
├── theme/        # UI library theme/provider config
├── types/        # shared types
└── utils/        # constants/, helpers/, hooks/
```

Each `src/` root folder has a bare import alias, e.g. `import { X } from "utils/helpers/..."`. Aliases are defined in both `tsconfig.app.json` (`paths`) and `vite.config.ts` (`resolve.alias`); keep the two in sync.
