import { CypressWpTestUtilsEnv } from '../types';

const DEFAULT_CONFIG: CypressWpTestUtilsEnv = {
  username: 'admin',
  password: 'password',
  wpVersion: 5.8,
};

export const config: CypressWpTestUtilsEnv = {
  ...DEFAULT_CONFIG,
  ...Cypress.env('cypress-wp-test-utils'),
};

export default config;
