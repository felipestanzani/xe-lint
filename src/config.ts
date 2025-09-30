export const ERROR = 'error' as const;

export const OFF = 'off' as const;

export const testFiles: string[] = [
  '**/__testUtils__/**/*.{js,jsx,ts,tsx}',
  '**/__tests__/**/*.{js,jsx,ts,tsx}',
  '**/*.{spec,test,e2e,cy}.{js,jsx,ts,tsx}',
];

export const typescriptFiles: string[] = [
  '**/*.ts',
  '**/*.tsx',
  '**/*.mts',
  '**/*.mtsx',
  '**/*.cts',
  '**/*.ctsx',
];
