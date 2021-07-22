/// <reference types="Cypress" />

context('getTextControlByLabel Command', () => {
  beforeEach(() => {
    cy.loginUser();
    cy.createNewPost();
  });

  it('should return text control element by label', () => {
    cy.insertBlock('Buttons');
    cy.ensureSidebarOpened();
    cy.openSidebarPanelWithTitle('Advanced');
    cy.getTextControlByLabel('Link rel').should('have.value', '');
  });
});
