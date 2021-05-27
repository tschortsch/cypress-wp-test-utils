import { CypressWpTestUtilsEnv } from '../types';

const DEFAULT_CONFIG: CypressWpTestUtilsEnv = {
  username: 'admin',
  password: 'password',
};

export default {
  ...DEFAULT_CONFIG,
  ...Cypress.env('cypress-wp-test-utils'),
};
