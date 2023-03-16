/// <reference types="Cypress" />

context('getSelectByLabel Command', () => {
  beforeEach(() => {
    cy.loginUser();
    cy.createNewPost();
  });

  it('should return select element by label', () => {
    if (Cypress.env('wp_version') && Cypress.env('wp_version') < 6.0) {
      cy.insertBlock('Buttons');
      cy.ensureSidebarOpened();
      cy.getSelectByLabel('Default Style').should('have.value', '');
    } else {
      cy.insertBlock('Archives');
      cy.ensureSidebarOpened();
      cy.getSelectByLabel('Group by').should('have.value', 'monthly');
    }
  });
});
