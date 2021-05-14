import config from '../shared/config';

/**
 * Performs a login with specified username and password.
 *
 * @param {?string} username Username which should be used.
 * @param {?string} password Password which should be used.
 */
export const loginUser = (
  username = config.username,
  password = config.password
) => {
  cy.visit('wp-login.php');

  // somehow we need to wait for some time before entering the credentials
  // eslint-disable-next-line cypress/no-unnecessary-waiting
  cy.wait(500);

  cy.get('#user_login').clear().type(username);

  cy.get('#user_pass').clear().type(password);

  cy.get('#wp-submit').click({ force: true });
};
