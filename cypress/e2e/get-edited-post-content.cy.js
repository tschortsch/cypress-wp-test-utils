/// <reference types="Cypress" />

context('getEditedPostContent Command', () => {
  beforeEach(() => {
    cy.loginUser();
    cy.createNewPost();
  });

  it('should return edited post content', () => {
    cy.insertBlock('Heading');
    cy.getEditedPostContent().snapshot();
  });
});
