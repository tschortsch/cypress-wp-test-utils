/// <reference types="Cypress" />

context('openSidebarPanelWithTitle Command', () => {
  beforeEach(() => {
    cy.loginUser();
    cy.createNewPost();
  });

  it('should open sidebar panel with given title', () => {
    cy.openSidebarPanelWithTitle('Permalink');
    cy.get('h3.edit-post-post-link__preview-label').contains('View Post');
  });
});
