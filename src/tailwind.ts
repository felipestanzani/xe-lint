import type { Linter } from 'eslint';
import type { ESLint } from 'eslint';
import tailwindcssPlugin from 'eslint-plugin-tailwindcss';
import { ERROR } from './config.js';

export default [
  {
    plugins: {
      tailwindcss: tailwindcssPlugin as ESLint.Plugin,
    },
    rules: {
      'tailwindcss/classnames-order': ERROR,
      'tailwindcss/enforces-negative-arbitrary-values': ERROR,
      'tailwindcss/enforces-shorthand': ERROR,
      'tailwindcss/no-contradicting-classname': ERROR,
    },
  },
] as Linter.Config[];
