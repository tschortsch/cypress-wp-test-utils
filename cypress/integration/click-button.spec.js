/// <reference types="Cypress" />

context('clickButton Command', () => {
  beforeEach(() => {
    cy.loginUser();
    cy.createNewPost();
  });

  it('should click on button by content', () => {
    cy.insertBlock('Heading');
    cy.selectBlockByName('core/heading');
    cy.clickBlockToolbarButton('Options');
    cy.clickButton('Copy', 'content');
    cy.getEditedPostContent().snapshot();
  });

  it('should click on button by aria-label', () => {
    cy.insertBlock('Paragraph');
    cy.clickButton('Details', 'ariaLabel');
    cy.get('[aria-label="Document Statistics"]').should('exist');
  });
});
