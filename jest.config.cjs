const { createDefaultPreset } = require('ts-jest');

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import('jest').Config} **/
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/src/tests/**/*.test.ts'],
  transform: {
    ...tsJestTransformCfg,
  },
  moduleNameMapper: {
    '^@app/(.*)$': '<rootDir>/src/app/$1',
    '^@tests/(.*)$': '<rootDir>/src/tests/$1',
  },
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
