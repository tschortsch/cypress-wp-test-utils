const DEFAULT_CONFIG = {
    username: 'admin',
    password: 'password',
};
export default {
    ...DEFAULT_CONFIG,
    ...Cypress.env('cypress-wp-test-utils'),
};
