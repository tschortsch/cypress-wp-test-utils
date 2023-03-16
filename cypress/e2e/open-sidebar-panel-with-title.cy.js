/// <reference types="Cypress" />

context('openSidebarPanelWithTitle Command', () => {
  beforeEach(() => {
    cy.loginUser();
    cy.createNewPost();
  });

  it('should open sidebar panel with given title', () => {
    if (Cypress.env('wp_version') && Cypress.env('wp_version') < 6.1) {
      cy.openSidebarPanelWithTitle('Permalink');
      cy.get('h3.edit-post-post-link__preview-label').contains('View Post');
    } else {
      cy.openSidebarPanelWithTitle('Categories');
      cy.get('label.components-checkbox-control__label').contains('Uncategorized');
    }
  });
});
