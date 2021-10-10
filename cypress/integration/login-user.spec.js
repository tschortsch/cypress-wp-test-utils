/// <reference types="Cypress" />

context('loginUser Command', () => {
  it('should login user', () => {
    cy.loginUser();
    cy.url().should('include', '/wp-admin');
    cy.url().should('not.include', '/wp-login.php');
  });

  it('should login user with different username and password', () => {
    const username = 'otheruser';
    const password = 'otherpass';
    cy.loginUser(username, password);
    cy.get('#login_error').should('exist');
  });
});
