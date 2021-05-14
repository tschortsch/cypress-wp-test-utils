const WP_ADMIN_USER = {
  username: 'admin',
  password: 'password',
};

const WP_USERNAME =
  Cypress.env('cypress-wp-test-utils').username || WP_ADMIN_USER.username;
const WP_PASSWORD =
  Cypress.env('cypress-wp-test-utils').password || WP_ADMIN_USER.password;

export { WP_USERNAME, WP_PASSWORD };
