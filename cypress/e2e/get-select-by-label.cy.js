/// <reference types="Cypress" />

context('getSelectByLabel Command', () => {
  beforeEach(() => {
    cy.loginUser();
    cy.createNewPost();
  });

  it('should return select element by label', () => {
    // TODO didn't find any select control in WP >= 6
    if (Cypress.env('wp_version') && Number(Cypress.env('wp_version')) <= 6.0) {
      cy.insertBlock('Buttons');
      cy.ensureSidebarOpened();
      cy.getSelectByLabel('Default Style').should('have.value', '');
    }
  });
});
