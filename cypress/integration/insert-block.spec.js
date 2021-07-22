/// <reference types="Cypress" />

context('insertBlock Command', () => {
  beforeEach(() => {
    cy.loginUser();
    cy.createNewPost();
  });

  it('should insert block', () => {
    cy.insertBlock('Paragraph');
    cy.get('.edit-post-visual-editor [data-type="core/paragraph"]').should(
      'have.length',
      1
    );
  });

  it('should insert correct block when multiple blocks where found', () => {
    cy.insertBlock('Cloud', 'Tag Cloud');
    cy.get('.edit-post-visual-editor [data-type="core/tag-cloud"]').should(
      'have.length',
      1
    );
  });

  it('should insert multiple blocks', () => {
    cy.insertBlock('Heading');
    cy.insertBlock('Heading');
    cy.get('.edit-post-visual-editor [data-type="core/heading"]').should(
      'have.length',
      2
    );
  });
});
