import { getPresets } from './src/index.js';

export default await getPresets(
  'typescript', // (contains javascript)
  'react',
  'cssModules',
  'tailwind',
  'jest',
  'cypress',
  'vitest'
);
