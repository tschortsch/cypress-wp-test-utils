/// <reference types="Cypress" />

context('setTextControlValueByLabel Command', () => {
  beforeEach(() => {
    cy.loginUser();
    cy.createNewPost();
  });

  it('should set text control value by label', () => {
    cy.insertBlock('Paragraph');
    cy.ensureSidebarOpened();
    cy.openSidebarPanelWithTitle('Advanced');
    cy.setTextControlValueByLabel('Additional CSS class(es)', 'my rel');
    cy.getEditedPostContent().snapshot();
  });
});
