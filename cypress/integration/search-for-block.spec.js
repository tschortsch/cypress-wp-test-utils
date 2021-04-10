/// <reference types="Cypress" />

context('searchForBlock Command', () => {
  beforeEach(() => {
    cy.loginUser();
    cy.createNewPost();
  });

  it('should search for block', () => {
    cy.searchForBlock('Paragraph');
    cy.get('.block-editor-block-types-list__item-title').contains('Paragraph');
  });
});
