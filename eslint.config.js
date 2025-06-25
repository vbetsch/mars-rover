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
        'prettier/prettier': ['error', { semi: true }],
        semi: ['error', 'always'],
        '@typescript-eslint/explicit-member-accessibility': [
          'error',
          { accessibility: 'explicit' },
        ],
        'no-var': 'error',
        'prefer-const': ['error', { destructuring: 'all' }],
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
    // Nécessaire pour activer le parsing avec type info
    files: ['**/*.ts'],
    languageOptions: {
      parser: tseslint.parser,
    },
  }
);
