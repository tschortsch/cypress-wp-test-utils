const DEFAULT_CONFIG = {
    username: 'admin',
    password: 'password',
};
export const config = {
    ...DEFAULT_CONFIG,
    ...Cypress.env('cypress-wp-test-utils'),
};
export default config;
