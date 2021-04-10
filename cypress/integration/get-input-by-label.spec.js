/// <reference types="Cypress" />

context('getInputByLabel Command', () => {
  beforeEach(() => {
    cy.loginUser();
    cy.createNewPost();
  });

  it('should return input field by label', () => {
    cy.insertBlock('Paragraph');
    cy.ensureSidebarOpened();
    cy.getInputByLabel('Custom').should('exist');
  });
});
