/// <reference types="Cypress" />

context('selectOptionIsAvailable Command', () => {
  beforeEach(() => {
    cy.loginUser();
    cy.createNewPost();
  });

  it('should check if select option is available', () => {
    if (Cypress.env('wp_version') && Cypress.env('wp_version') >= 6.0) {
      cy.insertBlock('Archives');
      cy.ensureSidebarOpened();
      cy.selectOptionIsAvailable('Group by', 'weekly');
    } else {
      cy.insertBlock('Buttons');
      cy.ensureSidebarOpened();
      cy.selectOptionIsAvailable('Default Style', 'fill');
    }
  });
});
