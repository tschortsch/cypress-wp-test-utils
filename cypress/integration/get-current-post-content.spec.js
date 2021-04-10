/// <reference types="Cypress" />

context('getCurrentPostContent Command', () => {
  beforeEach(() => {
    cy.loginUser();
    cy.createNewPost();
  });

  it('should return current post content', () => {
    cy.insertBlock('Heading');
    cy.getCurrentPostContent().snapshot();
  });
});
