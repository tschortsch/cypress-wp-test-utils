/// <reference types="Cypress" />

context('getSelectByLabel Command', () => {
  beforeEach(() => {
    cy.loginUser();
    cy.createNewPost();
  });

  it('should return select element by label', () => {
    cy.insertBlock('Archives');
    cy.ensureSidebarOpened();
    cy.getSelectByLabel('Group by').should('have.value', 'monthly');
  });
});
