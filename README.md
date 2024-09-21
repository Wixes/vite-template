# Vite template for quick start in React-based application development!

## [Based on default vite application](https://vitejs.dev/guide/)

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

### Basic features includes:

- Prepared [FSD](https://feature-sliced.design/docs) architecture for development
- Configured [MSW v2+](https://mswjs.io/docs/getting-started) library for creating mocks as if you are working with the network
- [MUI v6]() for speed up development process
- [react-router-dom v6](https://reactrouter.com/en/main/start/overview) for client side routing
- [valtio v2](https://github.com/pmndrs/valtio) for state management with configured [eslint-plugin-valtio](https://github.com/pmndrs/eslint-plugin-valtio)
- Default eslint rules with sorting import configuration (based on [sort-imports](https://eslint.org/docs/latest/rules/sort-imports) and [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import))
- Prepared _absolute_ imports resolved by [vite-tsconfig-paths](https://github.com/aleclarson/vite-tsconfig-paths) for making life easier

## Feel free to expand it to fit your needs

# Getting started:

1. Clone this repository to your local folder:

```
git clone https://github.com/Wixes/vite-template .
```

2. **Install** packages:

```
npm install
OR
yarn
```

3. Start development server:

```
npm run dev
```

### Now you are ready to code!

### P.S.:

- _eslint-plugin-import_ is easily to break! Make sure to read limitations of _--fix_ if you have any trouble! [docs](https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/order.md)
- I'm strongly recommend to setup your IDE with "format on save", "sort imports" and all this stuff to comfortably work with imports! Example config for **VSCode**:

```
{
  "editor.formatOnSave": true,
  "eslint.validate": ["typescript"],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "explicit",
    "source.sortImports": "explicit"
  }
}
```
