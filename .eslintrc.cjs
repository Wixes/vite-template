module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:valtio/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'node_modules'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'simple-import-sort'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^react'], // Start with react
          ['^@?\\w'], // Absolute imports w/o child
          ['@(/.*|$)'], // Absolute imports with child
          ['^\\u0000'], // Side effect imports
          ['^\\.\\.(?!/?$)'], // Relative paths (../{file}) to files
          ['^\\.\\./?$'], // Relatives paths (../) to index
          ['^\\./(?=.*/)(?!/?$)'], // Current dir w/ child
          ['^\\./?$'], // Current dir
          ['^\\.(?!/?$)'], // config files (.{name})
          ['^.+\\.?(scss)$'], // scss files
          ['^.+\\.?(css)$'], // css files
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
  },
};
