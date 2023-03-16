/// <reference types="Cypress" />

context('closeWelcomeGuide Command', () => {
  beforeEach(() => {
    cy.loginUser();
    cy.createNewPost({ showWelcomeGuide: true });
  });

  it('should close welcome guide', () => {
    if (Cypress.env('wp_version') && Cypress.env('wp_version') < 6.1) {
      cy.get('.edit-post-welcome-guide').should('exist');
      cy.closeWelcomeGuide();
      cy.get('.edit-post-welcome-guide').should('not.exist');
    }
  });
});
