/// <reference types="Cypress" />

context('selectBlockByName Command', () => {
  beforeEach(() => {
    cy.loginUser();
    cy.createNewPost();
  });

  it('should select block by given title', () => {
    cy.insertBlock('Heading');
    cy.insertBlock('Heading');

    // Select first heading block
    cy.selectBlockByName('core/heading', 0);
    cy.get('[data-type="core/heading"]')
      .eq(0)
      .should('have.class', 'is-selected');

    // Select second heading block
    cy.selectBlockByName('core/heading', 1);
    cy.get('[data-type="core/heading"]')
      .eq(1)
      .should('have.class', 'is-selected');
  });
});
