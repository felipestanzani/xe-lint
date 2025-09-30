import type { Linter } from 'eslint';
import { ERROR, testFiles } from './config';

export default [
  {
    files: testFiles,
    rules: {
      'no-restricted-properties': [
        ERROR,
        ...['it', 'describe', 'test'].map((name) => ({
          object: name,
          property: 'only',
          message:
            'This should only be used for debugging and removed afterwards.',
        })),
      ],
    },
  },
] as Linter.Config[];
