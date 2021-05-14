const WP_ADMIN_USER = {
  username: 'admin',
  password: 'password',
};

const WP_USERNAME = Cypress.env('WP_USERNAME') || WP_ADMIN_USER.username;
const WP_PASSWORD = Cypress.env('WP_PASSWORD') || WP_ADMIN_USER.password;

export { WP_USERNAME, WP_PASSWORD };
