import typescriptEslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';

export default [
  ...typescriptEslint.configs.recommended,
  {
    files: ['src/**/*.ts'],
    plugins: {
      import: importPlugin,
    },
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      'import/no-unresolved': 'off', // TypeScript handles this
    },
  },
];
