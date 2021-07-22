/// <reference types="Cypress" />

context('getToggleByLabel Command', () => {
  beforeEach(() => {
    cy.loginUser();
    cy.createNewPost();
  });

  it('should return toggle element by label', () => {
    cy.insertBlock('Post Date');
    cy.ensureSidebarOpened();
    cy.getToggleByLabel('Link to post').should('exist').and('not.be.checked');
  });
});
