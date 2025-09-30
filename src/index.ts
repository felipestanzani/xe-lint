import type { Linter } from 'eslint';

export type PresetName =
  | 'javascript'
  | 'typescript'
  | 'react'
  | 'cssModules'
  | 'tailwind'
  | 'jest'
  | 'cypress'
  | 'vitest';

/**
 * Loads the relevant ESLint configuration files.
 *
 * This enables to avoid loading plugins that may have
 * peer dependencies that are not installed.
 *
 * @param names - The names of configurations to load
 * @returns Promise of flattened ESLint configuration array
 */
export async function getPresets(
  ...names: PresetName[]
): Promise<Linter.Config[]> {
  const config = await Promise.all(
    names.map((name) => import(`./${name}.js`).then((mod) => mod.default))
  );
  return config.flat();
}
