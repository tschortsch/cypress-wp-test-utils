import { CypressWpTestUtilsEnv } from '../types';

const DEFAULT_CONFIG: CypressWpTestUtilsEnv = {
  username: 'admin',
  password: 'password',
  wpVersion: 5.8,
};

export default {
  ...DEFAULT_CONFIG,
  ...Cypress.env('cypress-wp-test-utils'),
};
