import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default tseslint.config(
  [
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
      ignores: ['node_modules', 'dist', 'jest.config.cjs'],
    },
    {
      files: ['**/*.ts'],
      languageOptions: {
        parserOptions: {
          project: './tsconfig.json',
        },
      },
      plugins: {
        prettier: eslintPluginPrettier,
      },
      rules: {
        'max-params': ['warn', 1],
        'prettier/prettier': ['error', { semi: true }],
        semi: ['error', 'always'],
        '@typescript-eslint/explicit-member-accessibility': [
          'error',
          { accessibility: 'explicit' },
        ],
        'no-var': 'error',
        'prefer-const': ['error', { destructuring: 'all' }],
        'require-object-destructuring': 'off',
        'no-restricted-syntax': [
          'error',
          {
            selector: 'TSAsExpression > TSAnyKeyword',
            message: 'Do not use `as any`, types must be explicit and safe.',
          },
        ],
        '@typescript-eslint/no-unsafe-member-access': 'warn',
        '@typescript-eslint/no-magic-numbers': ['warn', { ignoreEnums: true, ignore: [0, 1], enforceConst: true }],
        '@typescript-eslint/prefer-reduce-type-parameter': 'warn',
        '@typescript-eslint/prefer-function-type': 'warn',
        '@typescript-eslint/explicit-function-return-type': [
          'error',
          { allowExpressions: false },
        ],
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/prefer-readonly': 'warn',
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'classProperty',
            modifiers: ['private'],
            format: ['camelCase'],
            leadingUnderscore: 'require',
          },
        ],
        'no-undefined': 'warn',
        '@typescript-eslint/adjacent-overload-signatures': 'warn',
      },
    },
  ],
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tseslint.parser,
    },
  }
);
