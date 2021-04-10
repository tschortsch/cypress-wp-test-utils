/// <reference types="Cypress" />

context('activatePlugin Command', () => {
  beforeEach(() => {
    cy.loginUser();
  });

  afterEach(() => {
    cy.deactivatePlugin('hello-dolly');
  });

  it('should activate plugin', () => {
    cy.activatePlugin('hello-dolly');
    cy.get('[data-slug="hello-dolly"].active').should('exist');
  });

  it('should be possible to run command multiple times', () => {
    cy.activatePlugin('hello-dolly');
    cy.activatePlugin('hello-dolly');
    cy.get('[data-slug="hello-dolly"].active').should('exist');
  });
});
