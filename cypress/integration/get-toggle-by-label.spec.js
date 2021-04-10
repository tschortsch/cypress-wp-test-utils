/// <reference types="Cypress" />

context('getToggleByLabel Command', () => {
  beforeEach(() => {
    cy.loginUser();
    cy.createNewPost();
  });

  it('should return toggle element by label', () => {
    cy.insertBlock('Buttons');
    cy.ensureSidebarOpened();
    cy.getToggleByLabel('Open in new tab')
      .should('exist')
      .and('not.be.checked');
  });
});
